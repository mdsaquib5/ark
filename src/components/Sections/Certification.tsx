"use client";

import { useState, useRef } from "react";

export default function Certification() {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

    const magnifierSize = 150;
    const zoomLevel = 2.5;

    const handleMouseMove = (e: React.MouseEvent) => {
        const elem = e.currentTarget;
        const { top, left, width, height } = elem.getBoundingClientRect();
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;
        setXY([x, y]);
        setSize([width, height]);
    };

    return (
        <section className="section-padding" style={styles.section}>
            <h2 style={styles.heading}>Authenticity Seal</h2>

            <div
                className="cert-wrapper"
                style={styles.certWrapper}
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={() => setShowMagnifier(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="glass cert-certificate" style={styles.certificate}>
                    <div style={styles.certContent}>
                        <h3 className="cert-title" style={styles.certTitle}>noohArk VENTURES</h3>
                        <p style={styles.certSub}>Orbital Registration #29402-ARK</p>
                        <div style={styles.seal}></div>
                        <div style={styles.lorem}>
                            CONFIDENTIAL DOCUMENT: Initializing digital infrastructure for decentralized orbital assets.
                            This brand is registered under the Galactic Innovation Treaty.
                        </div>
                        <div style={styles.signature}>Signature: Ark Command</div>
                    </div>
                </div>

                {showMagnifier && (
                    <div style={{
                        ...styles.magnifier,
                        left: `${x - magnifierSize / 2}px`,
                        top: `${y - magnifierSize / 2}px`,
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                        backgroundPosition: `${-x * zoomLevel + magnifierSize / 2}px ${-y * zoomLevel + magnifierSize / 2}px`,
                        // Visual simulation of magnifying the certificate
                        backgroundColor: 'var(--cyber-gold)',
                        opacity: 0.9
                    }}>
                        <div style={styles.magnifierLabel}>4K SCAN</div>
                    </div>
                )}
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heading: {
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 900,
        marginBottom: "4rem",
        textAlign: "center",
    },
    certWrapper: {
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        cursor: "none",
    },
    certificate: {
        width: "100%",
        aspectRatio: "1.414", // A4 ratio
        padding: "clamp(20px, 5vw, 60px)",
        border: "2px solid var(--cyber-gold)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.02)",
    },
    certContent: {
        textAlign: "center",
        border: "1px solid rgba(212, 175, 55, 0.2)",
        padding: "clamp(10px, 4vw, 40px)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
    },
    certTitle: {
        fontSize: "clamp(1.2rem, 4vw, 2.5rem)",
        letterSpacing: "0.2em",
        color: "var(--cyber-gold)",
    },
    certSub: {
        fontSize: "0.8rem",
        color: "#888",
        fontFamily: "monospace",
    },
    seal: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        border: "2px dashed var(--cyber-gold)",
        margin: "20px auto",
    },
    lorem: {
        fontSize: "0.9rem",
        lineHeight: "1.8",
        color: "#555",
        maxWidth: "500px",
        margin: "0 auto",
    },
    signature: {
        marginTop: "40px",
        fontFamily: "cursive",
        color: "#777",
    },
    magnifier: {
        position: "absolute",
        pointerEvents: "none",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "2px solid var(--cyber-gold)",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        zIndex: 100,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    magnifierLabel: {
        fontSize: "0.6rem",
        color: "#000",
        fontWeight: "bold",
        backgroundColor: "var(--cyber-gold)",
        padding: "2px 8px",
        borderRadius: "10px",
    }
};
