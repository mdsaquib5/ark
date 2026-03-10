"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsMouse } from "react-icons/bs";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5,
            });

            gsap.from(paraRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 1,
            });

            // Infinite bounce for scroll indicator
            gsap.to(".scroll-indicator", {
                y: 20,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: "sine.inOut",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="hero-container section-padding" style={styles.section}>
            <header style={styles.header}>
                <div style={styles.logo}>
                    <span style={styles.logoArk}>nooh</span>
                    <span style={styles.logoArkAccent}>Ark</span>
                </div>
            </header>

            <div style={styles.content}>
                <h1 ref={titleRef} style={styles.title}>
                    Architecting the Future of the <br />
                    <span style={styles.gradientText}>Digital Universe</span>
                </h1>
                <p ref={paraRef} style={styles.paragraph}>
                    Beyond the code. Beyond the cloud. We build the ark <br />
                    for your brand's digital journey into the unknown.
                </p>

                <div className="scroll-indicator" style={styles.scrollIndicator}>
                    <BsMouse size={32} color="var(--cyber-gold)" />
                    <span style={styles.scrollText}>Scroll to Traverse</span>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
    },
    header: {
        position: "absolute",
        top: "40px",
        zIndex: 100,
    },
    logo: {
        fontSize: "2rem",
        fontWeight: 800,
        letterSpacing: "-1px",
    },
    logoArk: {
        color: "#ffffff",
    },
    logoArkAccent: {
        color: "var(--cyber-gold)",
        textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
    },
    content: {
        maxWidth: "1200px",
        width: "100%",
    },
    title: {
        fontSize: "clamp(2.5rem, 8vw, 6rem)",
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: "2rem",
    },
    gradientText: {
        background: "linear-gradient(90deg, #ffffff, var(--nebula-purple), var(--pulsar-blue))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    paragraph: {
        fontSize: "clamp(1rem, 2vw, 1.25rem)",
        color: "#888888",
        maxWidth: "600px",
        lineHeight: 1.6,
    },
    scrollIndicator: {
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
        gap: "10px",
    },
    scrollText: {
        fontSize: "0.8rem",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "var(--cyber-gold)",
    },
};
