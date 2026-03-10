import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailTemplate } from "@/utils/emailTemplate";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, service, brand } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"noohArk Terminal" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Project Inquiry: ${service} | ${brand}`,
            html: getEmailTemplate({ name, email, service, brand }),
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Transmission received." });
    } catch (error: any) {
        console.error("Email Error:", error);
        return NextResponse.json(
            { success: false, message: "Connection lost. Please try again." },
            { status: 500 }
        );
    }
}
