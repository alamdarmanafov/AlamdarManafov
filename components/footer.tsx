"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/img/Logo_Blue.png";
import Image from "next/image";
import Script from "next/script"; // 👈 MilliNet üçün əlavə
import { useLanguage } from "@/contexts/LanguageContext";
import { staticData } from "@/data/static";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={82}
                height={82}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 mt-2">
              &copy; {new Date().getFullYear()} Alamdar Manafov.{" "}
              {staticData[language].footer.rights}
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* --- Sosial ikonlar hissəsi dəyişməz --- */}
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/alamdarmanafov/"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0808c1",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/alamdarmanafov/"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0808c1",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </motion.a>
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/alamdarmanafov/"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0808c1",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>
            {/* YouTube */}
            <motion.a
              href="https://www.youtube.com/@alamdarmanafov"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0808c1",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </motion.a>
          </motion.div>
        </div>

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

      {/* MilliNet banner script */}
      <Script
        src="https://millinet.az/banner.js?id=338"
        strategy="afterInteractive"
      />
    </footer>
  );
}