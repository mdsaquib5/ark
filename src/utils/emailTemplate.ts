export const getEmailTemplate = (data: {
    name: string,
    email: string,
    service: string,
    brand: string,
    phone?: string,
    message?: string
}) => {
    const { name, email, service, brand, phone, message } = data;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
            
            body {
                margin: 0;
                padding: 0;
                background-color: #050505;
                font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
                color: #ffffff;
            }

            .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #050505;
                padding-bottom: 40px;
            }

            .main {
                background-color: #050505;
                margin: 0 auto;
                width: 100%;
                max-width: 600px;
                border-spacing: 0;
                color: #ffffff;
            }

            .header {
                padding: 40px 0;
                text-align: center;
                background: linear-gradient(180deg, rgba(109, 40, 217, 0.1) 0%, rgba(5, 5, 5, 1) 100%);
            }

            .logo {
                font-size: 28px;
                font-weight: 900;
                letter-spacing: -1px;
                color: #ffffff;
                text-transform: uppercase;
            }

            .logo span {
                color: #d4af37;
                text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
            }

            .content-card {
                padding: 40px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                margin: 0 20px;
            }

            .heading {
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 30px;
                color: #3b82f6;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-align: center;
            }

            .data-grid {
                width: 100%;
                margin-bottom: 30px;
            }

            .label {
                font-size: 11px;
                color: #d4af37;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                font-weight: 700;
                margin-bottom: 4px;
            }

            .value {
                font-size: 16px;
                color: #e0e0e0;
                margin-bottom: 24px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                padding-bottom: 8px;
            }

            .message-box {
                background: rgba(0, 0, 0, 0.3);
                padding: 20px;
                border-radius: 8px;
                border-left: 3px solid #6d28d9;
                font-style: italic;
                color: #b0b0b0;
                line-height: 1.6;
            }

            .footer {
                text-align: center;
                padding: 40px 20px;
                font-size: 11px;
                color: #555555;
                letter-spacing: 1px;
            }

            .accent-line {
                height: 2px;
                width: 50px;
                background: #d4af37;
                margin: 20px auto;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <table class="main">
                <tr>
                    <td class="header">
                        <div class="logo">nooh<span>Ark</span></div>
                        <div class="accent-line"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="content-card">
                            <div class="heading">Incoming Transmission</div>
                            
                            <div class="label">Origin Voyager</div>
                            <div class="value">${name}</div>

                            <div class="label">Secure Route</div>
                            <div class="value">${email}</div>

                            <div class="label">Contact Signal</div>
                            <div class="value">${phone || "No signal provided"}</div>

                            <div class="label">Brand Identity</div>
                            <div class="value">${brand || "Personal Entity"}</div>

                            <div class="label">Target Module</div>
                            <div class="value" style="color: #3b82f6;">${service}</div>

                            <div class="label">Manifesto</div>
                            <div class="message-box">
                                ${message?.replace(/\n/g, "<br>") || "Standard greetings transmitted."}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="footer">
                        SYSTEM STATUS: SECURE<br>
                        GENERATED BY NOOHARK TECHNOLOGIES &copy; 2026<br>
                        <span style="color: #222;">LATENCY: OPTIMIZED</span>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    </html>
    `;
};
