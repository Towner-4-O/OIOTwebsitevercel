import * as z from "zod";

export const riderLoginSchema = z.object({
  username: z
    .string()
    .min(1, "Email or phone number is required")
    .refine((value) => {
      // Strict email regex that ensures proper email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Phone regex that only accepts 10 digits
      const phoneRegex = /^[0-9]{10}$/;

      return emailRegex.test(value) || phoneRegex.test(value);
    }, "Please enter a valid email (example@domain.com) or 10-digit phone number"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type RiderLoginSchema = z.infer<typeof riderLoginSchema>;
