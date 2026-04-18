"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { QrCode, Apple, SmartphoneNfc } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
import { media } from "@/constant";

const DownloadApp = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
          >
            <span className="text-[#5445F9] font-semibold">Mobile App</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Download the <span className="text-[#5445F9]">OIOT</span> App
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Get started with OIOT today and enjoy seamless, safe, and affordable
            transportation throughout Karnataka.
          </motion.p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* iOS Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-3xl transform -rotate-1" />
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/icons/qr-oiot.png"
                    alt="iOS QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <FaApple className="w-8 h-8 text-[#5445F9]" />
                    <h3 className="text-2xl font-bold">iOS App</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Scan the QR code or click below to download the OIOT app for
                    your iPhone.
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        media.OIOT_APPSTORE,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <FaApple className="w-5 h-5" />
                    Download on App Store
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-3xl transform rotate-1" />
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/icons/qr-oiot.png"
                    alt="Android QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <TfiAndroid className="w-8 h-8 text-[#5445F9]" />
                    <h3 className="text-2xl font-bold">Android App</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Scan the QR code or click below to download the OIOT app for
                    your Android device.
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        media.OIOT_PLAYSTORE,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="px-6 py-3 bg-[#5445F9] text-white rounded-xl flex items-center gap-2 hover:bg-[#4334e8] transition-colors"
                  >
                    <TfiAndroid className="w-5 h-5" />
                    Get it on Play Store
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
