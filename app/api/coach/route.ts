import Anthropic from "@anthropic-ai/sdk"
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

const SYSTEM_PROMPT =
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
  const apiKey = process.env.ANTHROPIC_API_KEY
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

  const client = new Anthropic({ apiKey })

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      output_config: { effort: "low" },
      messages: [{ role: "user", content: userMessage }],
    })

    const textBlock = response.content.find((block) => block.type === "text")
    const message = textBlock && "text" in textBlock ? textBlock.text.trim() : ""

    if (!message) {
      return NextResponse.json(
        { error: "Empty response from AI" },
        { status: 502, headers: corsHeaders() }
      )
    }

    return NextResponse.json({ message }, { headers: corsHeaders() })
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Rate limited" }, { status: 429, headers: corsHeaders() })
    }
    if (error instanceof Anthropic.AuthenticationError) {
      return NextResponse.json(
        { error: "AI service misconfigured" },
        { status: 503, headers: corsHeaders() }
      )
    }
    if (error instanceof Anthropic.APIError) {
      return NextResponse.json({ error: "AI service error" }, { status: 502, headers: corsHeaders() })
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500, headers: corsHeaders() })
  }
}
