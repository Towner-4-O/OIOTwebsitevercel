"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20"
      >
        <div className="p-8">
          <p className="text-black text-center mb-6 text-lg">
            Welcome to OIOT
          </p>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Layout;
