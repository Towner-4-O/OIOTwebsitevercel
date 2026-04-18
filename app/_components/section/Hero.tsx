
"use client";

import Image from "next/image";
import { Lato } from "next/font/google";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaShieldAlt, FaEye } from "react-icons/fa";
import { MdModeOfTravel, MdVerified, MdTrendingUp } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import Link from "next/link";
import { useEffect } from "react";
import { media } from "@/constant";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function Hero() {
  return (
    <section className="relative min-h-screen py-15 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(84,69,249,0.2),transparent_70%)]" />


      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 blur-3xl bg-[#5445F9]/30 rounded-full -top-20 -left-20" />
        <div className="absolute w-96 h-96 blur-3xl bg-blue-600/30 rounded-full -bottom-20 -right-20" />
        <div className="absolute w-64 h-64 blur-2xl bg-purple-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 3%, transparent 0%)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 z-10 relative min-h-screen flex flex-col">
        <div className="text-center mt-5 relative">
          <h1
            className={`${lato.className} text-5xl md:text-6xl font-extrabold mb-6 max-w-6xl mx-auto leading-tight`}
          >
            Welcome to OIOT
            <br />

          </h1>

          <p
            className={`${lato.className} text-xl md:text-3xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed`}
          >
            One India One Taxi - Book Your Journey{" "}
            <span className="relative inline-block">
              Today
              <svg
                className="absolute w-full left-0 -bottom-2"
                viewBox="0 0 300 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 25C71.6307 -5 196.537 -5 297 25"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <Image
                src="/icons/arrow-curved.png"
                alt="arrow"
                width={80}
                height={80}
                className="hidden md:block absolute -right-14 lg:-right-16 xl:-right-30 top-0 w-[60px] lg:w-[60px]"
              />
            </span>
          </p>


          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative max-w-5xl mx-auto"
          >

            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(84,69,249,0.37)] overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/20 via-transparent to-blue-500/20 animate-pulse" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-2xl" />

              <div className="relative z-10">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center mb-6"
                >
                  <h2 className={`${lato.className} text-3xl md:text-4xl font-bold mb-2`}>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Fair Fare, Every Ride
                    </span>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="group relative backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 
                             hover:bg-white/15 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                             transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <FaEye className="text-blue-400 text-xl" />
                      </div>
                      <span className="font-bold text-sm md:text-base bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        TRANSPARENT PRICING
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="group relative backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 
                             hover:bg-white/15 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] 
                             transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        <FaShieldAlt className="text-purple-400 text-xl" />
                      </div>
                      <span className="font-bold text-sm md:text-base bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                        FLAT CHARGES
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="group relative backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 
                             hover:bg-white/15 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] 
                             transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                        <RiGovernmentLine className="text-green-400 text-xl" />
                      </div>
                      <span className="font-bold text-sm md:text-base bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                        GOVERNMENT RATES
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-gray-300 text-base md:text-lg leading-relaxed font-medium"
                >
                  Pay only what you see - down to the kilometer.
                  <span className="text-blue-300 font-semibold"> No surprises, no hidden fees, no surge pricing ever.</span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 px-4">
            <a
              href={media.OIOT_APPSTORE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 rounded-full transform hover:scale-105 transition-transform w-full sm:w-auto justify-center cursor-pointer z-30"
            >
              <FaApple className="text-2xl sm:text-3xl" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold">
                  App Store
                </span>
              </div>
            </a>

            <a
              href={media.OIOT_PLAYSTORE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-3 rounded-full transform hover:scale-105 transition-transform w-full sm:w-auto justify-center cursor-pointer z-30"
            >
              <FaGooglePlay className="text-2xl sm:text-3xl" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="#booking"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-purple-800 text-white px-6 sm:px-8 py-3 rounded-full 
              hover:shadow-[0_0_20px_rgba(88,80,236,0.5)] hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer w-full sm:w-auto justify-center z-30"
            >
              <MdModeOfTravel className="text-2xl sm:text-3xl animate-bounce" />
              <Link
                href={
                  typeof window !== "undefined" && localStorage.getItem("token")
                    ? "/userspace/trip"
                    : "/rider-auth/signup"
                }
              >
                <div className="flex flex-col cursor-pointer">
                  <span className="text-base sm:text-lg font-bold tracking-wide">
                    Book Now
                  </span>
                </div>
              </Link>
            </a>
          </div>
        </div>

        <div className="relative flex-grow flex items-end justify-center h-[280px] md:h-[410px]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/icons/mobile.png"
              alt="mobile"
              width={850}
              height={850}
              className="object-contain relative z-10 md:mb-[-150px] md:w-[850px] md:h-[850px]"
              priority
            />
          </motion.div>

          {/* Left Side Elements */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-[5%] top-[-6%] hidden md:block"
          >
            <Image
              src="/icons/noti.png"
              alt="notification"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-[8%] bottom-[40%] hidden md:block"
          >

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute left-[13%] top-[60%] hidden md:block"
          >
            <Image
              src="/icons/location.png"
              alt="location"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute right-[5%] top-[-6%] hidden md:block"
          >
            <Image
              src="/icons/chat.png"
              alt="chat"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute right-[8%] bottom-[40%] hidden md:block"
          >

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute right-[13%] top-[60%] hidden md:block"
          >

            <Image
              src="/icons/clock.png"
              alt="clock"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
