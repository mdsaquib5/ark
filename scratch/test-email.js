const nodemailer = require('nodemailer');
require('dotenv').config();

async function testMail() {
    console.log("Testing with User:", process.env.EMAIL_USER);
    console.log("Testing with Pass:", process.env.EMAIL_PASS ? "PRESENT" : "MISSING");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS?.replace(/\s/g, ''), // Remove spaces
        },
    });

    try {
        await transporter.verify();
        console.log("✅ Connection successful!");
    } catch (error) {
        console.error("❌ Connection failed:", error);
    }
}

testMail();
