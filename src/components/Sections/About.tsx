"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const codeRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Auto-scroll the project mockup
            gsap.to(".project-inside", {
                y: "-50%",
                duration: 20,
                repeat: -1,
                ease: "linear",
            });

            // Reveal animations for text
            gsap.from(".about-item", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
            });
        });
        return () => ctx.revert();
    }, []);

    const fakeCode = `
class NoohArkCore {
  constructor() {
    this.status = 'INITIALIZING';
    this.payload = 'DIGITAL_ECOSYSTEM';
  }

  async launch() {
    await this.scanNebula();
    this.deployArk();
    return 'MISSION_SUCCESS';
  }

  deployArk() {
    console.log('Gravity normalized...');
    console.log('Orbital shield active.');
  }
}

// Initiating mission...
const core = new NoohArkCore();
core.launch();
  `;

    return (
        <section className="about-section" style={styles.section}>
            <div style={styles.grid}>
                <div className="about-item" style={styles.textSide}>
                    <h2 style={styles.heading}>The Digital Forge</h2>
                    <p style={styles.para}>
                        Every line of code is a coordinate in our cosmic map. We don't just develop; we simulate futures.
                        Our forge is powered by precision and fueled by the unknown.
                    </p>

                    <div style={styles.codeTerminal} ref={codeRef}>
                        <div style={styles.terminalHeader}>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <span style={styles.terminalTitle}>core_engine.ts</span>
                        </div>
                        <pre style={styles.code}>
                            <code>{fakeCode}</code>
                        </pre>
                    </div>
                </div>

                <div style={styles.mockupSide}>
                    <div className="glass" style={styles.mockupContainer} ref={mockupRef}>
                        <div style={styles.projectHeader}>
                            <span style={styles.projectUrl}>https://ark-project-01.noohark.com</span>
                        </div>
                        <div style={styles.projectContent}>
                            <div style={styles.projectScrollWrapper}>
                                {/* Visualizing a scrolling project */}
                                <div className="project-inside" style={styles.projectInside}>
                                    <div style={{ ...styles.block, height: '400px', background: 'linear-gradient(45deg, #050505, #111)' }}></div>
                                    <div style={{ ...styles.block, height: '300px', background: 'var(--nebula-purple)' }}></div>
                                    <div style={{ ...styles.block, height: '500px', background: 'var(--pulsar-blue)' }}></div>
                                    <div style={{ ...styles.block, height: '200px', background: 'var(--cyber-gold)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.techStack}>
                        {['Next.js', 'Three.js', 'GSAP', 'WebGL', 'TypeScript'].map(tech => (
                            <span key={tech} className="glass" style={styles.techTag}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        minHeight: "100vh",
        padding: "100px 10%",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        width: "100%",
    },
    heading: {
        fontSize: "3.5rem",
        fontWeight: 800,
        marginBottom: "1.5rem",
        color: "#fff",
    },
    para: {
        color: "#aaa",
        fontSize: "1.1rem",
        lineHeight: "1.8",
        marginBottom: "3rem",
    },
    codeTerminal: {
        backgroundColor: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    },
    terminalHeader: {
        padding: "12px 20px",
        backgroundColor: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    dot: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#333",
    },
    terminalTitle: {
        marginLeft: "10px",
        fontSize: "0.75rem",
        color: "#666",
        fontFamily: "monospace",
    },
    code: {
        padding: "20px",
        color: "#3b82f6",
        fontSize: "0.9rem",
        fontFamily: "monospace",
        lineHeight: "1.5",
    },
    mockupSide: {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
    },
    mockupContainer: {
        width: "100%",
        height: "450px",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.1)",
    },
    projectHeader: {
        padding: "10px 20px",
        backgroundColor: "rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    projectUrl: {
        fontSize: "0.8rem",
        color: "#555",
    },
    projectContent: {
        height: "calc(100% - 40px)",
        overflow: "hidden",
    },
    projectScrollWrapper: {
        height: "100%",
        overflowY: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
    },
    projectInside: {
        display: "flex",
        flexDirection: "column",
    },
    block: {
        width: "100%",
    },
    techStack: {
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
    },
    techTag: {
        padding: "8px 16px",
        fontSize: "0.85rem",
        borderRadius: "20px",
        color: "#fff",
    },
};
