
"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BACKEND_BASE_URL } from "@/constant"
import toast from "react-hot-toast"
import { setCookie } from "cookies-next"

const LoginFormRider = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phoneNumber = searchParams?.get("phone") ?? ""

  // Debug log
  useEffect(() => {
    console.log("Phone from URL:", phoneNumber)
  }, [phoneNumber])
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (!phoneNumber) {
      toast.error("Phone number not found. Redirecting...")
      router.push("/rider-auth/verify")
      return
    }

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true)
          clearInterval(countdown)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [phoneNumber, router])

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleResendOTP = async () => {
    setIsResending(true)
    
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/rider-auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          purpose: "login",
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to resend OTP")
      }

      toast.success(data.message || "OTP resent successfully!")
      setTimer(60)
      setCanResend(false)
      setOtp(["", "", "", "", "", ""])
      inputRefs.current[0]?.focus()

    } catch (error: any) {
      toast.error(error.message || "Failed to resend OTP")
    } finally {
      setIsResending(false)
    }
  }

  const handleVerifyOTP = async () => {
    const otpString = otp.join("")
    
    if (otpString.length !== 6) {
      toast.error("Please enter complete OTP")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(`${BACKEND_BASE_URL}/rider-auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: phoneNumber,
          otp: otpString,
          fcm_id: "firebase_token_here",
          device_info: {
            device_type: "web",
            device_model: navigator.userAgent.split(" ").pop() || "Chrome",
            os_version: navigator.platform || "Unknown",
            app_version: "1.0.0",
          },
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed")
      }

      // Store tokens in cookies using document.cookie (more reliable)
      if (data.data?.tokens) {
        const expiresInDays = (data.data.tokens.expires_in || 86400) / (60 * 60 * 24)
        const expires = new Date()
        expires.setTime(expires.getTime() + expiresInDays * 24 * 60 * 60 * 1000)
        
        document.cookie = `access_token=${data.data.tokens.access_token}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`
        
        const refreshExpires = new Date()
        refreshExpires.setTime(refreshExpires.getTime() + 7 * 24 * 60 * 60 * 1000)
        document.cookie = `refresh_token=${data.data.tokens.refresh_token}; expires=${refreshExpires.toUTCString()}; path=/; SameSite=Strict`
        document.cookie = `trip_token=${data.data.tokens.trip_token}; expires=${refreshExpires.toUTCString()}; path=/; SameSite=Strict`
        
        console.log("Tokens stored successfully")
      }

      // Store rider info in localStorage
      if (data.data?.rider) {
        localStorage.setItem('rider_info', JSON.stringify(data.data.rider))
        const riderExpires = new Date()
        riderExpires.setTime(riderExpires.getTime() + 7 * 24 * 60 * 60 * 1000)
        document.cookie = `rider_id=${data.data.rider.id}; expires=${riderExpires.toUTCString()}; path=/; SameSite=Strict`
        console.log("Rider info stored:", data.data.rider)
      }

      toast.success(data.message || "Login successful!")
      
      // Wait a bit for cookies to be set, then redirect
      setTimeout(() => {
        console.log("Redirecting to profile...")
        router.push("/userspace/profile")
      }, 500)

    } catch (error: any) {
      toast.error(error.message || "Verification failed")
    } finally {
      setIsLoading(false)
    }
  }

  if (!phoneNumber) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-[#5444FB]" />
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <button
          onClick={() => router.push("/rider-auth/verify")}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#5444FB]">Verify OTP</h1>
          <p className="text-gray-500">
            Enter the 6-digit code sent to<br />
            <span className="font-medium text-[#5444FB]">******{phoneNumber.slice(-4)}</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-2 justify-center">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => { inputRefs.current[index] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold"
              />
            ))}
          </div>

          <div className="text-center">
            {!canResend ? (
              <p className="text-sm text-gray-500">
                Resend OTP in <span className="font-medium text-gray-900">{timer}s</span>
              </p>
            ) : (
              <button
                onClick={handleResendOTP}
                disabled={isResending}
                className="text-sm text-[#5444FB] font-medium hover:underline disabled:opacity-50"
              >
                {isResending ? "Sending..." : "Resend OTP"}
              </button>
            )}
          </div>

          <Button
            onClick={handleVerifyOTP}
            className="w-full bg-[#5444FB] text-white hover:bg-[#4335EA] transition-all duration-300"
            disabled={isLoading || otp.join("").length !== 6}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Verify & Login"
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginFormRider
