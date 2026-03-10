"use client";

export default function Footer() {
    return (
        <footer className="section-padding" style={styles.footer}>
            <div style={styles.content}>
                <h2 className="footer-title" style={styles.title}>NOOHARK</h2>
                <p style={styles.desc}>
                    Elevating your digital presence with cutting-edge solutions.
                    Let's collaborate on your next big idea.
                </p>

                <div style={styles.divider}></div>

                <div className="footer-bottom" style={styles.bottom}>
                    <div style={styles.brand}>© 2026 noohArk. All rights reserved.</div>
                    <div className="footer-links" style={styles.links}>
                        <span style={styles.link}>Privacy</span>
                        <span style={styles.link}>Terms</span>
                        <span style={styles.link}>Contact</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    footer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
    },
    content: {
        textAlign: "center" as const,
        maxWidth: "1200px",
        margin: "0 auto",
    },
    badge: {
        display: "inline-block",
        padding: "6px 12px",
        border: "1px solid var(--pulsar-blue)",
        borderRadius: "20px",
        color: "var(--pulsar-blue)",
        fontSize: "0.7rem",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        marginBottom: "20px",
    },
    title: {
        fontSize: "clamp(2rem, 10vw, 4rem)",
        fontWeight: 900,
        letterSpacing: "0.3em",
        color: "rgba(255,255,255,0.05)",
        marginBottom: "20px",
    },
    desc: {
        color: "#444",
        fontSize: "1rem",
        maxWidth: "500px",
        margin: "0 auto 60px",
    },
    divider: {
        height: "1px",
        backgroundColor: "rgba(255,255,255,0.05)",
        width: "100%",
        marginBottom: "40px",
    },
    bottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        fontSize: "0.8rem",
        color: "#333",
    },
    links: {
        display: "flex",
        gap: "30px",
    },
    link: {
        cursor: "pointer",
        transition: "color 0.3s ease",
    },
    brand: {
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    }
};
