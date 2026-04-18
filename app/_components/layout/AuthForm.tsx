"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import OTPModal from "./otpModal";
import { motion } from "framer-motion";
import { Mail, User, ArrowRight, Loader2 } from "lucide-react";

type FormType = "sign-in" | "sign-up";

const authSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullname:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState<string | null>(null);
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);

  // form schema.
  const formSchema = authSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  // on submit.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // setIsLoading(true);
    // setErrorMessage("");
    // try {
    //   const user =
    //     type === "sign-up"
    //       ? await createAccount({
    //           fullName: values.fullname || "",
    //           email: values.email || "",
    //         })
    //       : await signInUser({ email: values.email || "" });
    //   setAccountId(user.accountId);
    //   setIsOtpDialogOpen(true);
    // } catch (error: any) {
    //   setErrorMessage("Failed to create account");
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <>
      <Form {...form}>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <motion.h1
            className="text-3xl font-bold text-black text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Sign {type === "sign-in" ? "In" : "Up"}
          </motion.h1>

          {type === "sign-up" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Full Name"
                            className="pl-10 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                            {...field}
                          />
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-black/50" />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Email Address"
                          className="pl-10 bg-white/10 border-white/20 text-black placeholder:text-black/50"
                          {...field}
                        />
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-black/50" />
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              type="submit"
              className="w-full bg-[#A8FF01] text-black hover:bg-[#86cc01] transition-all duration-300 font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {type === "sign-in" ? "Sign In" : "Sign Up"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </motion.div>

          {errorMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center text-sm"
            >
              *{errorMessage}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-2 text-black/70"
          >
            <p className="text-sm">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="text-sm font-medium text-[#A8FF01] hover:text-[#86cc01] transition-colors"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </motion.div>
        </motion.form>
      </Form>

      {/* {accountId && (
        <OTPModal
          email={form.getValues("email")}
          accountId={accountId}
          open={isOtpDialogOpen}
          onClose={() => setIsOtpDialogOpen(false)}
        />
      )} */}
    </>
  );
};

export default AuthForm;
