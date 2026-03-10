"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(".preloader-container", {
                    duration: 1.5,
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Slide up effect
                    ease: "power4.inOut",
                    onComplete: onComplete,
                });
            },
        });

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="preloader-container" style={styles.container}>
            <div style={styles.content}>
                <div style={styles.logo}>
                    <span style={styles.logoText}>nooh</span>
                    <span style={styles.logoAccent}>Ark</span>
                </div>
                <div style={styles.progressBarBg}>
                    <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
                </div>
                <p style={styles.status}>Initializing Orbital Systems... {progress}%</p>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: "fixed",
        inset: 0,
        backgroundColor: "#050505",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        textAlign: "center",
    },
    logo: {
        fontSize: "3rem",
        fontWeight: 900,
        marginBottom: "2rem",
        letterSpacing: "-2px",
    },
    logoText: { color: "#ffffff" },
    logoAccent: { color: "var(--cyber-gold)" },
    progressBarBg: {
        width: "300px",
        height: "2px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        margin: "0 auto",
        position: "relative",
    },
    progressBar: {
        height: "100%",
        backgroundColor: "var(--cyber-gold)",
        boxShadow: "0 0 10px var(--cyber-gold)",
        transition: "width 0.1s ease-out",
    },
    status: {
        marginTop: "1rem",
        fontSize: "0.8rem",
        color: "#666",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    },
};
