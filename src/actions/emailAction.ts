"use server";

import { connectFormSchema } from "@/lib/utils";
import { z } from "zod";

export async function sendEmail(data: z.infer<typeof connectFormSchema>) {
  try {
    console.log("Sending email with data", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const validatedFields = connectFormSchema.safeParse(data);
    if (!validatedFields.success) {
      throw new Error("Server side fields validation has failed.");
    }

    const subject = `${data.email} wants to connect`;
    await fetch("https://postmail.invotes.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: process.env.POSTMAIL_ACCESS_TOKEN,
        subject,
        text: data.message,
      }),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "There was a problem with your request." };
  }
  return { success: true };
}
