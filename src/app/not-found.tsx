import Link from "next/link";

export default function NotFound() {
    return (
        <main style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.errorCode}>404</h1>
                <div style={styles.divider}></div>
                <h2 style={styles.message}>Lost in the Shadows</h2>
                <p style={styles.description}>
                    The page you are looking for has drifted into the void or never existed.
                    Let's get you back to safety.
                </p>
                <Link href="/" style={styles.button}>
                    Return Home
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
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-montserrat), sans-serif",
    },
    content: {
        textAlign: "center",
        zIndex: 10,
        maxWidth: "600px",
    },
    errorCode: {
        fontSize: "clamp(8rem, 20vw, 12rem)",
        fontWeight: 900,
        margin: 0,
        lineHeight: 1,
        background: "linear-gradient(180deg, #ffffff 0%, #444444 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "-0.05em",
    },
    divider: {
        height: "1px",
        width: "60px",
        backgroundColor: "#d4af37", // Gold accent
        margin: "20px auto",
    },
    message: {
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: "1rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    },
    description: {
        color: "#888888",
        fontSize: "1.1rem",
        lineHeight: "1.6",
        marginBottom: "2.5rem",
    },
    button: {
        display: "inline-block",
        padding: "16px 40px",
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "1px solid #ffffff",
        borderRadius: "0",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
        cursor: "pointer",
    },
    glow1: {
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "40vw",
        height: "40vw",
        backgroundColor: "rgba(212, 175, 55, 0.05)", // Subtle gold glow
        filter: "blur(100px)",
        borderRadius: "50%",
        zIndex: 1,
    },
    glow2: {
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "30vw",
        height: "30vw",
        backgroundColor: "rgba(255, 255, 255, 0.03)", // Subtle white glow
        filter: "blur(80px)",
        borderRadius: "50%",
        zIndex: 1,
    },
};
