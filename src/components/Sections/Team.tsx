"use client";

import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

const team = [
    { name: "Akram Hussain", role: "Managing Director & Founder", image: "/saquib.png" },
    { name: "Mohammed Saquib", role: "Development Manager", image: "/saquib.png" },
    { name: "Mohammed Farhan", role: "CEO + Finance Manager", image: "/saquib.png" },
];

export default function Team() {
    return (
        <section className="section-padding" style={styles.section}>
            <h2 style={styles.heading}>The Crew</h2>
            <div style={styles.grid}>
                {team.map((member, i) => (
                    <div key={i} className="glass" style={styles.card}>
                        <div style={styles.imgContainer}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={180}
                                height={180}
                                style={styles.image}
                            />
                        </div>
                        <h3 style={styles.name}>{member.name}</h3>
                        <p style={styles.role}>{member.role}</p>
                        <div style={styles.socials}>
                            <FaXTwitter size={18} style={styles.icon} />
                            <FaLinkedin size={18} style={styles.icon} />
                            <FaGithub size={18} style={styles.icon} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: "transparent",
    },
    heading: {
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 900,
        marginBottom: "4rem",
        textAlign: "center",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
    },
    card: {
        padding: "30px",
        textAlign: "center",
        transition: "transform 0.3s ease",
    },
    imgContainer: {
        width: "180px",
        height: "180px",
        margin: "0 auto 20px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid rgba(255,255,255,0.1)",
        backgroundColor: "rgba(255,255,255,0.05)",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    name: {
        fontSize: "1.25rem",
        fontWeight: 700,
        marginBottom: "5px",
    },
    role: {
        fontSize: "0.85rem",
        color: "var(--cyber-gold)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "20px",
    },
    socials: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
    },
    icon: {
        color: "#555",
        cursor: "pointer",
        transition: "color 0.3s ease",
    }
};
