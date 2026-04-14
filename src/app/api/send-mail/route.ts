import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailTemplate } from "@/utils/emailTemplate";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service, brand, message } = body;

        console.log("Incoming Transmission:", { name, email, service, brand });

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("CRITICAL: Environment variables EMAIL_USER or EMAIL_PASS are missing.");
            return NextResponse.json(
                { success: false, message: "Server configuration missing." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS.replace(/\s/g, ""), // Sanitize password
            },
        });

        const mailOptions = {
            from: `"noohArk Terminal" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Sending to yourself
            replyTo: email,
            subject: `New Project Inquiry: ${service} | ${brand}`,
            html: getEmailTemplate({ name, email, phone, service, brand, message }),
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email Dispatched:", info.messageId);

        return NextResponse.json({ success: true, message: "Transmission received." });
    } catch (error: any) {
        console.error("VITAL ERROR in Email Service:", error.message, error.stack);
        return NextResponse.json(
            { success: false, message: "Connection lost. Details: " + (error.message || "Unknown error") },
            { status: 500 }
        );
    }
}
