"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoCloseOutline, IoEyeOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Nexus Digital Ecosystem",
        desc: "A sophisticated e-commerce framework designed for high-end luxury brands, featuring real-time inventory and global distribution sync.",
        image: "/project-1.png",
        liveUrl: "https://example.com",
    },
    {
        id: 2,
        title: "Aether Analytics Portal",
        desc: "Next-gen SaaS dashboard providing deep-dive insights into user behavior with AI-powered predictive modeling and interactive heatmaps.",
        image: "/project-1.png",
        liveUrl: "https://example.com",
    },
    {
        id: 3,
        title: "Lumina Creative Hub",
        desc: "A dynamic portfolio platform for visual artists, leveraging WebGL for immersive transitions and high-fidelity project showcasing.",
        image: "/project-1.png",
        liveUrl: "https://example.com",
    },
];

export default function RecentWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
                y: 100,
                opacity: 0,
                scale: 0.9,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const openPopup = (project: typeof projects[0]) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    return (
        <section ref={containerRef} className="section-padding" style={styles.section} id="work">
            <h2 style={styles.heading} className="glow-text">Recent Work</h2>

            <div className="projects-grid" style={styles.grid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card glass neon-border-hover"
                        style={styles.card}
                        onClick={() => openPopup(project)}
                    >
                        <div style={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)" }}
                                className="project-thumb"
                            />
                            <div className="project-overlay" style={styles.overlay}>
                                <div style={styles.overlayIconContainer}>
                                    <IoEyeOutline size={32} color="#000" />
                                </div>
                                <span style={styles.overlayText}>Explore Project</span>
                            </div>
                        </div>

                        <div style={styles.content}>
                            <h3 style={styles.cardTitle}>{project.title}</h3>
                            <p style={styles.cardDesc}>{project.desc}</p>

                            <div style={styles.actions}>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.liveButton}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <span>View Website Live</span>
                                    <HiOutlineExternalLink style={{ marginLeft: "8px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scrollable Popup Modal */}
            {selectedProject && (
                <div style={styles.modalOverlay} onClick={closePopup}>
                    <div className="glass neon-border" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button style={styles.closeButton} onClick={closePopup} aria-label="Close modal">
                            <IoCloseOutline size={32} color="var(--cyber-gold)" />
                        </button>

                        <div
                            style={styles.scrollContainer}
                            className="custom-scrollbar"
                            data-lenis-prevent
                        >
                            <div style={styles.modalHeader}>
                                <h3 style={styles.modalTitle}>{selectedProject.title}</h3>
                                <p style={styles.modalDesc}>{selectedProject.desc}</p>
                            </div>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                style={styles.fullImage}
                            />
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: "transparent",
        position: "relative",
        zIndex: 1,
    },
    heading: {
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        fontWeight: 900,
        marginBottom: "5rem",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: "var(--foreground)",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "40px",
    },
    card: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        height: "100%",
        transition: "all 0.3s ease",
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        aspectRatio: "16/10",
        overflow: "hidden",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)", // LIGHTER OVERLAY
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "all 0.4s ease",
        zIndex: 2,
        backdropFilter: "blur(4px)",
    },
    overlayIconContainer: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "var(--cyber-gold)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "15px",
        transform: "translateY(20px)",
        transition: "transform 0.4s ease",
    },
    overlayText: {
        color: "#fff",
        fontWeight: 600,
        fontSize: "0.9rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        transform: "translateY(20px)",
        transition: "transform 0.4s ease 0.1s",
    },
    content: {
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
    cardTitle: {
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "15px",
        color: "var(--foreground)",
    },
    cardDesc: {
        fontSize: "0.95rem",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "1.6",
        marginBottom: "25px",
        flexGrow: 1,
    },
    actions: {
        marginTop: "auto",
    },
    liveButton: {
        display: "inline-flex",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "transparent",
        border: "1px solid var(--cyber-gold)",
        borderRadius: "8px",
        color: "var(--cyber-gold)",
        fontSize: "0.9rem",
        fontWeight: 600,
        transition: "all 0.3s ease",
        textDecoration: "none",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
    },
    modalContent: {
        width: "100%",
        maxWidth: "1200px",
        height: "85vh",
        position: "relative",
        backgroundColor: "rgba(10,10,10,0.95)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    closeButton: {
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "rgba(255,255,255,0.1)",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 10,
        transition: "transform 0.3s ease",
    },
    scrollContainer: {
        flexGrow: 1,
        overflowY: "auto",
        padding: "40px",
        marginTop: "20px",
    },
    modalHeader: {
        marginBottom: "40px",
        maxWidth: "800px",
    },
    modalTitle: {
        fontSize: "2.5rem",
        fontWeight: 800,
        color: "var(--cyber-gold)",
        marginBottom: "10px",
    },
    modalDesc: {
        fontSize: "1.1rem",
        color: "rgba(255,255,255,0.7)",
        lineHeight: "1.6",
    },
    fullImage: {
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    }
};
