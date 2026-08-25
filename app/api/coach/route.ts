import { ApiError, GoogleGenAI, ThinkingLevel } from "@google/genai"
import { NextResponse } from "next/server"
import { z } from "zod"

const requestSchema = z.object({
  mood: z.enum(["terrible", "bad", "okay", "good", "great"]),
  note: z.string().max(2000).optional().default(""),
  gratitude: z.string().max(2000).optional().default(""),
})

const MOOD_LABELS: Record<string, string> = {
  terrible: "çox pis",
  bad: "pis",
  okay: "normal",
  good: "yaxşı",
  great: "əla",
}

const SYSTEM_INSTRUCTION =
  'Sən "Be Positive" tətbiqinin mehriban, dəstəkləyici əhval-ruhiyyə koçusan. ' +
  "İstifadəçi əhvalını və qeydini paylaşır, sən Azərbaycan dilində 2-3 qısa " +
  "cümlədən ibarət, isti və konkret bir kiçik addım təklif edən mesaj yazırsan. " +
  'Tibbi diaqnoz qoyma, boş "hər şey yaxşı olacaq" kimi ifadələrdən qaçın, ' +
  "hissi qəbul et və real, kiçik, bu gün ediləcək bir addım təklif et."

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() })
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI service not configured" },
      { status: 503, headers: corsHeaders() }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400, headers: corsHeaders() })
  }

  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400, headers: corsHeaders() }
    )
  }

  const { mood, note, gratitude } = parsed.data

  const userMessage = [
    `Əhval: ${MOOD_LABELS[mood]}`,
    note && `Qeyd: ${note}`,
    gratitude && `Minnətdarlıq: ${gratitude}`,
  ]
    .filter(Boolean)
    .join("\n")

  const ai = new GoogleGenAI({ apiKey })

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 1024,
        temperature: 0.8,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
      },
    })

    const message = response.text?.trim() ?? ""

    if (!message) {
      return NextResponse.json(
        { error: "Empty response from AI" },
        { status: 502, headers: corsHeaders() }
      )
    }

    return NextResponse.json({ message }, { headers: corsHeaders() })
  } catch (error) {
    console.error("[/api/coach]", error)
    if (error instanceof ApiError) {
      if (error.status === 401 || error.status === 403) {
        return NextResponse.json(
          { error: "AI service misconfigured" },
          { status: 503, headers: corsHeaders() }
        )
      }
      if (error.status === 429) {
        return NextResponse.json({ error: "Rate limited" }, { status: 429, headers: corsHeaders() })
      }
      return NextResponse.json({ error: "AI service error" }, { status: 502, headers: corsHeaders() })
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500, headers: corsHeaders() })
  }
}
