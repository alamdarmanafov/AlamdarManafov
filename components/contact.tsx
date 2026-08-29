"use client";

import { useRef } from "react";
import Script from "next/script";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      className="min-h-screen py-20 flex items-center relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ opacity }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0808c1] mb-4"
            style={{ y: y1 }}
          >
            {language === "en" ? "Contact" : "Əlaqə"}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-[#fff45c] mx-auto mb-8" />
          <motion.p className="max-w-2xl mx-auto text-lg text-gray-600">
            {language === "en"
              ? "Have a project in mind or just want to say hello? I'd love to hear from you!"
              : "Ağlınızda bir layihə var və ya sadəcə salam demək istəyirsiniz? Sizdən eşitməyi çox istəyirəm!"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0808c1]/5 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#fff45c]/5 rounded-full -ml-16 -mb-16" />

              <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">
                {language === "en"
                  ? "Contact Information"
                  : "Əlaqə Məlumatları"}
              </h3>

              <div className="space-y-6 relative z-10">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#0808c1]/10 flex items-center justify-center text-[#0808c1]">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600 break-all">alamdar.manafov@bepositive.az</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#0808c1]/10 flex items-center justify-center text-[#0808c1]">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-gray-800">
                      {language === "en" ? "Phone" : "Telefon"}
                    </h4>
                    <p className="text-gray-600">+994 10-531-01-29</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#0808c1]/10 flex items-center justify-center text-[#0808c1]">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-gray-800">
                      {language === "en" ? "Location" : "Ünvan"}
                    </h4>
                    <p className="text-gray-600" >
                        {language === "en" ? "Fuad Ibrahimbayov 13, Baku , Azerbaijan" : "Fuad Ibrahimbəyov 13, Bakı , Azərbaycan"}
                      
                      </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 relative z-10">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  {language === "en" ? "Connect with me" : "Mənimlə əlaqə"}
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/alamdarmanafov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#0808c1] flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "#0606a0" }}
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
                  <motion.a
                    href="https://www.facebook.com/alamdarmanafov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#0808c1] flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "#0606a0" }}
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

                  <motion.a
                    href="https://www.instagram.com/alamdarmanafov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-[#0808c1] flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "#0606a0" }}
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
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@alamdarmanafov"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-[#0808c1] flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "#0606a0" }}
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
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-5 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-1 px-2 pt-1">
                {language === "en" ? "Book a Call" : "Görüş Rezerv Et"}
              </h3>
              <p className="text-gray-600 mb-3 px-2">
                {language === "en"
                  ? "Pick a time that works for you and let's talk about your project."
                  : "Sizə uyğun vaxtı seçin, layihəniz haqqında danışaq."}
              </p>

              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden flex-1"
                data-url="https://calendly.com/alamdarmanafov/30min?hide_event_type_details=1&background_color=ffffff"
                style={{ minWidth: "280px", minHeight: "320px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
