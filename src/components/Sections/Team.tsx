"use client";

import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

const team = [
    { name: "Astra Vance", role: "Orbital Architect", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Astra" },
    { name: "Nova Ray", role: "Nebula Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nova" },
    { name: "Cyrus Ark", role: "Mission Control", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cyrus" },
    { name: "Lyra Moon", role: "Interface Voyager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lyra" },
    { name: "Orion Sol", role: "Security Guardian", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Orion" },
    { name: "Vega Star", role: "Data Navigator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vega" },
];

export default function Team() {
    return (
        <section className="section-padding" style={styles.section}>
            <h2 style={styles.heading}>The Crew</h2>
            <div style={styles.grid}>
                {team.map((member, i) => (
                    <div key={i} className="glass" style={styles.card}>
                        <div style={styles.imgContainer}>
                            <img src={member.image} alt={member.name} style={styles.image} />
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
        width: "120px",
        height: "120px",
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
