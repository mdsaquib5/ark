"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiGlobe, BiBriefcase, BiTrendingUp, BiPalette } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile, HiOutlineCpuChip, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Website Development", icon: BiGlobe, desc: "Bespoke digital experiences built for maximum impact." },
    { title: "App Development", icon: HiOutlineDevicePhoneMobile, desc: "High-performance mobile applications for iOS and Android." },
    { title: "Portfolio Websites", icon: BiBriefcase, desc: "Showcase your work with stunning, professional portfolios." },
    { title: "Landing Page", icon: IoRocketOutline, desc: "Conversion-optimized landing pages that drive results." },
    { title: "SEO Ranking", icon: BiTrendingUp, desc: "Boost your visibility and dominate search engine results." },
    { title: "AI Chatbot", icon: HiOutlineChatBubbleLeftEllipsis, desc: "Intelligent AI solutions to automate your customer engagement." },
    { title: "Graphic Design", icon: BiPalette, desc: "Creative visual identities that define your brand." },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="section-padding" style={styles.section}>
            <h2 style={styles.heading}>Core Modules</h2>
            <div className="services-grid" style={styles.grid}>
                {services.map((service, i) => (
                    <div key={i} className="service-card glass" style={styles.card}>
                        <div style={styles.iconContainer}>
                            <service.icon size={32} color="var(--cyber-gold)" />
                        </div>
                        <h3 style={styles.cardTitle}>{service.title}</h3>
                        <p style={styles.cardDesc}>{service.desc}</p>
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
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    },
    grid: {},
    card: {
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transition: "transform 0.3s ease, border-color 0.3s ease",
        cursor: "pointer",
    },
    iconContainer: {
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.03)",
        borderRadius: "12px",
    },
    cardTitle: {
        fontSize: "1.25rem",
        fontWeight: 700,
        color: "#fff",
    },
    cardDesc: {
        fontSize: "0.95rem",
        color: "#666",
        lineHeight: "1.6",
    },
};
