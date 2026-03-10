"use client";

import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

export default function LeadGen() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        service: "Website Development",
        brand: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", service: "Website Development", brand: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="section-padding" style={styles.section} >
            <div className="glass lead-container" style={styles.container}>
                <div style={styles.content}>
                    <h2 style={styles.heading}>Book Your Project</h2>
                    <p style={styles.para}>Let's build something extraordinary together.</p>

                    <form style={styles.form} onSubmit={handleSubmit}>
                        <div className="lead-form-row" style={styles.row}>
                            <input
                                type="text"
                                placeholder="FULL NAME"
                                style={styles.input}
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                style={styles.input}
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <div className="lead-form-row" style={styles.row}>
                            <select
                                style={styles.input}
                                value={form.service}
                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                            >
                                <option>Website Development</option>
                                <option>App Development</option>
                                <option>Portfolio Websites</option>
                                <option>Landing Page</option>
                                <option>SEO Ranking</option>
                                <option>AI Chatbot</option>
                                <option>Graphic Design</option>
                            </select>
                            <input
                                type="text"
                                placeholder="YOUR BRAND NAME"
                                style={styles.input}
                                required
                                value={form.brand}
                                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                            />
                        </div>

                        <button
                            disabled={status === "sending"}
                            style={{
                                ...styles.button,
                                opacity: status === "sending" ? 0.7 : 1,
                                backgroundColor: status === "success" ? "#4caf50" : (status === "error" ? "#f44336" : "var(--cyber-gold)"),
                                color: status === "success" || status === "error" ? "#fff" : "#000"
                            }}
                        >
                            {status === "idle" && <><RiSendPlaneFill size={18} /> Establish Connection</>}
                            {status === "sending" && "Initializing Transmission..."}
                            {status === "success" && "Transmission Received!"}
                            {status === "error" && "Link Error. Try Again."}
                        </button>
                    </form>
                </div>
            </div>
        </section >
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: "transparent",
    },
    container: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(20px, 6vw, 60px)",
        border: "1px solid rgba(255,255,255,0.05)",
    },
    content: {
        textAlign: "center" as const,
    },
    heading: {
        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontWeight: 900,
        marginBottom: "10px",
    },
    para: {
        color: "#666",
        marginBottom: "40px",
        fontSize: "0.9rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    row: {},
    input: {
        flex: 1,
        minWidth: "250px",
        backgroundColor: "rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "15px 20px",
        color: "#fff",
        fontSize: "0.85rem",
        letterSpacing: "0.05em",
        outline: "none",
        borderRadius: "4px",
    },
    button: {
        marginTop: "20px",
        padding: "18px 40px",
        backgroundColor: "var(--cyber-gold)",
        color: "#000",
        border: "none",
        fontWeight: 800,
        fontSize: "0.9rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }
};
