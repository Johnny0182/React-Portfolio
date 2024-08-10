"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utilities";

const resend =new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('email');
    const message = formData.get('message');
// server side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'johnny.leyva182@gmail.com',
        subject: 'Portfolio Contact Form! !Important!',
        reply_to: senderEmail as string,
        text: message as string,
    });
};