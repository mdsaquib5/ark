import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailTemplate } from "@/utils/emailTemplate";

const user = process.env.EMAIL_USER?.trim();
const pass = process.env.EMAIL_PASS?.trim();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: pass,
    },
    // Keep connection alive to speed up subsequent sends
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, service, brand, phone, message } = body;
        console.log("Entering in api body", body);

        if (!user || !pass) {
            console.log(">>> Email API: Server configuration error.");
            return NextResponse.json({ success: false, message: "Server configuration error." }, { status: 500 });
        }

        const mailOptions = {
            from: `"${name}" <${user}>`,
            to: user,
            replyTo: email,
            subject: `NoohArk Technologies: ${service} | ${brand}`,
            html: getEmailTemplate({ name, email, service, brand, phone, message }),
        };

        // Send mail in background so user doesn't wait 
        transporter.sendMail(mailOptions)
            .catch(err => console.error(">>> Email API: Background Send Error:", err));

        return NextResponse.json({ success: true, message: "Transmission received." });
    } catch (error: any) {
        console.error(">>> Email API: Execution Error:", error);
        return NextResponse.json(
            { success: false, message: "Connection lost. Please try again.", details: error.message },
            { status: 500 }
        );
    }
}
