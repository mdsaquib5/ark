"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiGlobe, BiLayer } from "react-icons/bi";
import { HiOutlineCpuChip, HiOutlineShieldCheck, HiOutlineBolt, HiOutlineDevicePhoneMobile, HiOutlineCircleStack } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Website Development", icon: BiGlobe, desc: "Bespoke digital experiences built for impact." },
    { title: "Web Application", icon: HiOutlineCpuChip, desc: "Scalable, high-performance software systems." },
    { title: "UI/UX Architecture", icon: BiLayer, desc: "Designing intuitive lunar-path journeys." },
    { title: "Cyber Shield", icon: HiOutlineShieldCheck, desc: "Fortifying your brand against void-threats." },
    { title: "Performance Tuning", icon: HiOutlineBolt, desc: "Hyper-speed optimization for zero-lag." },
    { title: "Strategic Launch", icon: IoRocketOutline, desc: "Propelling your startup into orbit." },
    { title: "Mobile Ecosystems", icon: HiOutlineDevicePhoneMobile, desc: "Seamless apps for the multi-device voyager." },
    { title: "Neural Databases", icon: HiOutlineCircleStack, desc: "Data structures that evolve with your mission." },
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
        <section ref={containerRef} style={styles.section}>
            <h2 style={styles.heading}>Core Modules</h2>
            <div style={styles.grid}>
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
        padding: "100px 10%",
        backgroundColor: "transparent",
    },
    heading: {
        fontSize: "3rem",
        fontWeight: 900,
        marginBottom: "4rem",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
    },
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
