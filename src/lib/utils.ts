import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const connectFormSchema = z.object({
  email: z.string().email({ message: "Please check, the email format looks incorrect." }),
  message: z.string().min(10, {
    message: "Please ensure the message has atleast 10 characters.",
  }),
});