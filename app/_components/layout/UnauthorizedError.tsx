'use client'

import { motion } from 'framer-motion'
import { ShieldX } from 'lucide-react'

const UnauthorizedError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <ShieldX className="h-24 w-24 text-[#5444FB]" />
        </motion.div>
        <h1 className="text-4xl font-bold text-[#5444FB] mb-4">Access Denied</h1>
        <p className="text-gray-600 text-lg mb-8">
          Sorry, you don't have the required driver permissions to access this page.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#5444FB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4535ea] transition-colors shadow-lg hover:shadow-[#5444FB]/20"
        >
          Return to Homepage
        </motion.a>
      </motion.div>
    </div>
  )
}

export default UnauthorizedError