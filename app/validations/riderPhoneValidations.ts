import * as z from "zod";

export const phoneValidationSchema = z.object({
  phone: z
    .string()
    .min(1, "Mobile number or email is required")
    .refine((value) => {
      // Email regex pattern
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Phone number pattern (10 digits, not starting with 0 or 1)
      const phonePattern = /^[2-9][0-9]{9}$/;

      return emailPattern.test(value) || phonePattern.test(value);
    }, "Please enter a valid 10-digit phone number"),
});

export type PhoneValidationSchema = z.infer<typeof phoneValidationSchema>;
