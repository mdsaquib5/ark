"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll position
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`back-to-top ${isVisible ? "active" : ""}`} onClick={scrollToTop}>
            <div className="scroll-progress-circle">
                <FiArrowUp size={24} />
            </div>
        </div>
    );
};

export default Scroll;