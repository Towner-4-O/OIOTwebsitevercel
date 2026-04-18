"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Phone, Lock, Loader2, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { BACKEND_BASE_URL, config } from "@/constant"
import { motion, AnimatePresence } from "framer-motion"
import { phoneValidationSchema } from "@/app/validations/riderPhoneValidations"

const phoneSchema = z.object({
  phone: z.string().min(10, "Phone number must be 10 digits"),
})

const otpSchema = z.object({
  otp: z
    .string()
    .min(1, "OTP is required")
    .refine((value) => /^\d{4}$/.test(value), {
      message: "OTP must be exactly 4 digits (0-9)"
    })
});

const passwordSchema = z.object({
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

const ForgotPassword = () => {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [userPhone, setUserPhone] = useState("")

  const [showOTPMessage, setShowOTPMessage] = useState(true)

const [timer, setTimer] = useState(120);
const [isOTPExpired, setIsOTPExpired] = useState(false);
const [canResend, setCanResend] = useState(false);


  const phoneForm = useForm<z.infer<typeof phoneValidationSchema>>({
    resolver: zodResolver(phoneValidationSchema),
    defaultValues: { phone: "" },
  })

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  })

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { newPassword: "", confirmPassword: "" },
  })

  const onPhoneSubmit = async (values: z.infer<typeof phoneSchema>) => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_BASE_URL}${config.forgotPassword}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: values.phone,
          phcode: "+91"
        }),
      });

      const data = await response.json();

      if (data.success) {
        setUserPhone(values.phone);
        setStep(2);
        setShowOTPMessage(true);
        setTimer(120); // Set to 1 minute
        setTimeout(() => {
          setShowOTPMessage(false);
        }, 5000);
      } else {
        phoneForm.setError("phone", {
          type: "manual",
          message: data.message || "Please try again with a valid number.",
        });
      }
    } catch (error) {
      phoneForm.setError("phone", {
        type: "manual",
        message: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  const onOTPVerify = async (values: z.infer<typeof otpSchema>) => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_BASE_URL}${config.verifyOTP}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          otp: values.otp
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStep(3);
      } else {
        otpForm.setError("otp", {
          type: "manual",
          message: data.message || "Invalid OTP",
        });
      }
    } catch (error) {
      otpForm.setError("otp", {
        type: "manual",
        message: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  const onPasswordSubmit = async (values: z.infer<typeof passwordSchema>) => {
    setLoading(true)
    try {
      const response = await fetch(`${BACKEND_BASE_URL}${config.resetPassword}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: userPhone,
          newPwd: values.newPassword,
          conPwd: values.confirmPassword,
          // otp: serverOTP
        }),
      })

      const data = await response.json()

      if (data.success) {
        router.push("/rider-auth/login")
      } else {
        // Set error on newPassword field instead of root
        passwordForm.setError("newPassword", {
          type: "manual",
          message: data.message === "NEW_PASSWORD_SAME_AS_OLD" 
            ? "New password cannot be same as old password"
            : "Password reset failed",
        })
      }
    } catch (error) {
      // Set error on newPassword field instead of root
      passwordForm.setError("newPassword", {
        type: "manual",
        message: "Something went wrong",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timer > 0 && !isOTPExpired) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setIsOTPExpired(true);
            setCanResend(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer, isOTPExpired]);


  // Add a separate useEffect for step change
  useEffect(() => {
    if (step === 2) {
      setTimer(120);
      setIsOTPExpired(false);
      setCanResend(false);
    }
  }, [step]);

  const handleResendOTP = async () => {
    setLoading(true);
    setCanResend(false);
    setIsOTPExpired(false);
    setTimer(120);
    
    try {
      const response = await fetch(`${BACKEND_BASE_URL}${config.forgotPassword}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userPhone,
          phcode: "+91"
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setShowOTPMessage(true);
        setTimeout(() => {
          setShowOTPMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
{/* backarrow div */}

            <h1 className="text-2xl font-bold text-[#5444FB] text-center mb-6">
              {step === 1 ? "Forgot Password" : step === 2 ? "Verify OTP" : "Reset Password"}
            </h1>

            {step === 1 && (
              <Form {...phoneForm}>
                <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
                  <FormField
                    control={phoneForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter Phone Number"
                              className="pl-10 bg-white/50 h-11"
                            />
                          </FormControl>
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#5444FB] text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Send OTP"
                    )}
                  </Button>
                </form>
              </Form>
            )}

       

{step === 2 && (
  <Form {...otpForm}>
    {showOTPMessage && (
      <p className="text-green-600 text-sm text-center mb-4">
        OTP has been sent to your registered mobile number.
      </p>
    )}
 {!isOTPExpired && timer > 0 && (
      <p className="text-blue-600 text-sm text-center mb-4">
        OTP expires in {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
      </p>
    )}
    {isOTPExpired && (
      <p className="text-red-600 text-sm text-center mb-4">
        OTP expired. Please try again.
      </p>
    )}
    <form onSubmit={otpForm.handleSubmit(onOTPVerify)} className="space-y-4">
      <FormField
        control={otpForm.control}
        name="otp"
        render={({ field }) => (
          <FormItem>
            <div className="relative">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter OTP"
                  className="pl-10 bg-white/50 h-11 text-center"
                  disabled={isOTPExpired}
                />
              </FormControl>
              <KeyRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button 
        type="submit" 
        className="w-full bg-[#5444FB] text-white"
        disabled={isOTPExpired}
      >
        Verify OTP
      </Button>
      {canResend && (
        <Button
          type="button"
          onClick={handleResendOTP}
          className="w-full mt-2 bg-gray-100 text-[#5444FB] hover:bg-gray-200"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Resend OTP"
          )}
        </Button>
      )}
    </form>
  </Form>
)}

            {step === 3 && (
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="New Password"
                              className="pl-10 bg-white/50 h-11"
                            />
                          </FormControl>
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm Password"
                              className="pl-10 bg-white/50 h-11"
                            />
                          </FormControl>
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#5444FB] text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Reset Password"
                    )}
                  </Button>
                </form>
              </Form>
            )}
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ForgotPassword


