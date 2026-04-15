"use client";

import { useEffect, useRef, useState } from "react";
import { IoMusicalNotesOutline, IoVolumeMuteOutline } from "react-icons/io5";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Try to play as soon as possible (browser might block)
        const attemptPlay = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                })
                .catch(() => {
                    console.log("Autoplay blocked. Waiting for user interaction.");
                });
        };

        attemptPlay();

        // Standard browsers block autoplay until first user interaction
        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                attemptPlay();
                setHasInteracted(true);
                window.removeEventListener("mousedown", handleFirstInteraction);
                window.removeEventListener("touchstart", handleFirstInteraction);
                window.removeEventListener("keydown", handleFirstInteraction);
            }
        };

        window.addEventListener("mousedown", handleFirstInteraction);
        window.addEventListener("touchstart", handleFirstInteraction);
        window.addEventListener("keydown", handleFirstInteraction);

        return () => {
            window.removeEventListener("mousedown", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };
    }, [hasInteracted]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
            setHasInteracted(true);
        }
    };

    return (
        <div className="music-container" style={styles.container}>
            <audio ref={audioRef} src="/song-st.mpeg" loop />
            <button
                onClick={togglePlay}
                className="glass music-toggle"
                style={styles.button}
                title={isPlaying ? "Mute Music" : "Play Music"}
            >
                {isPlaying ? (
                    <div className="music-bars" style={styles.barsContainer}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                ) : (
                    <IoVolumeMuteOutline size={20} color="rgba(255,255,255,0.4)" />
                )}
            </button>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: "fixed",
        bottom: "30px",
        left: "30px",
        zIndex: 10000,
    },
    button: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: 0,
        outline: "none",
    },
    barsContainer: {
        display: "flex",
        alignItems: "flex-end",
        gap: "2px",
        height: "16px",
    }
};
