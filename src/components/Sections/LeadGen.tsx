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

    return (
        <section style={styles.section}>
            <div className="glass" style={styles.container}>
                <div style={styles.content}>
                    <h2 style={styles.heading}>Initiate Transmission</h2>
                    <p style={styles.para}>Secure your spot in the next orbital cycle.</p>

                    <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div style={styles.row}>
                            <input
                                type="text"
                                placeholder="FULL NAME"
                                style={styles.input}
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="COMMAND EMAIL"
                                style={styles.input}
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <div style={styles.row}>
                            <select
                                style={styles.input}
                                value={form.service}
                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                            >
                                <option>Website Development</option>
                                <option>Web Application</option>
                                <option>UI/UX Architecture</option>
                                <option>Cyber Shield</option>
                            </select>
                            <input
                                type="text"
                                placeholder="YOUR BRAND NAME"
                                style={styles.input}
                                value={form.brand}
                                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                            />
                        </div>

                        <button style={styles.button}>
                            Establish Connection <RiSendPlaneFill size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        padding: "100px 10%",
        backgroundColor: "transparent",
    },
    container: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px",
        border: "1px solid rgba(255,255,255,0.05)",
    },
    content: {
        textAlign: "center" as const,
    },
    heading: {
        fontSize: "2.5rem",
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
    row: {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    },
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
