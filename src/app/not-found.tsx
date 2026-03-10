import Link from "next/link";

export default function NotFound() {
    return (
        <main style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.errorCode}>404</h1>
                <div style={styles.divider}></div>
                <h2 style={styles.message}>Transmission Lost</h2>
                <p style={styles.description}>
                    Your coordinates are outside the known digital universe.
                    The page you seek has drifted into the celestial void.
                </p>
                <Link href="/" style={styles.button}>
                    Re-establish Connection
                </Link>
            </div>

            <div style={styles.glow1}></div>
            <div style={styles.glow2}></div>
        </main>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "transparent",
        color: "#ffffff",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
    },
    content: {
        textAlign: "center",
        zIndex: 10,
        maxWidth: "600px",
    },
    errorCode: {
        fontSize: "clamp(6rem, 25vw, 15rem)",
        fontWeight: 900,
        margin: 0,
        lineHeight: 1,
        background: "linear-gradient(180deg, #ffffff 0%, var(--pulsar-blue) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "-0.05em",
        opacity: 0.8,
    },
    divider: {
        height: "2px",
        width: "80px",
        backgroundColor: "var(--cyber-gold)",
        margin: "20px auto",
        boxShadow: "0 0 15px var(--cyber-gold)",
    },
    message: {
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        fontWeight: 600,
        marginBottom: "1rem",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "var(--pulsar-blue)",
    },
    description: {
        color: "#888",
        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        lineHeight: "1.6",
        marginBottom: "2.5rem",
        maxWidth: "400px",
        margin: "0 auto 2.5rem",
    },
    button: {
        display: "inline-block",
        padding: "18px 45px",
        backgroundColor: "rgba(255,255,255,0.05)",
        color: "#ffffff",
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(10px)",
        textDecoration: "none",
        fontSize: "0.9rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
        cursor: "pointer",
    },
    glow1: {
        position: "absolute",
        top: "30%",
        left: "20%",
        width: "30vw",
        height: "30vw",
        backgroundColor: "rgba(109, 40, 217, 0.1)", // Nebula purple
        filter: "blur(120px)",
        borderRadius: "50%",
        zIndex: 1,
    },
    glow2: {
        position: "absolute",
        bottom: "20%",
        right: "20%",
        width: "25vw",
        height: "25vw",
        backgroundColor: "rgba(59, 130, 246, 0.08)", // Pulsar blue
        filter: "blur(100px)",
        borderRadius: "50%",
        zIndex: 1,
    },
};
