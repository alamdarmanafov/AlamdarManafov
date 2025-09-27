"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/img/Logo_Blue.png";
import Image from "next/image";
import Script from "next/script"; // 👈 ƏLAVƏ
import { useLanguage } from "@/contexts/LanguageContext";
import { staticData } from "@/data/static";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ...sənin mövcud kontentin olduğu hissə dəyişməz qalır... */}

        <motion.div
          className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>
            {staticData[language].footer.social}{" "}
            <a href="https://ilkin.software" target="_blank">
              1lkin13
            </a>
          </p>
          <p className="mt-2">
            <span className="text-[#0808c1] font-bold"> #BePositive✌🏻</span>
          </p>
        </motion.div>
      </div>

      {/* 👇 MilliNet banner skripti */}
      <Script
        src="https://millinet.az/banner.js?id=338"
        strategy="afterInteractive"
      />
    </footer>
  );
}