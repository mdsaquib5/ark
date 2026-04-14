'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import WorkCard from "../shared/WorkCard";

const workData = [
    {
        title: "Luxury E-commerce",
        description: "A sophisticated e-commerce framework designed for high-end luxury brands, featuring real-time inventory and global distribution sync.",
        imageSrc: "/project-1.png",
        liveLink: "/"
    },
    {
        title: "Global Distribution",
        description: "A sophisticated e-commerce framework designed for high-end luxury brands, featuring real-time inventory and global distribution sync.",
        imageSrc: "/project-1.png",
        liveLink: "/"
    },
    {
        title: "Artisan Marketplace",
        description: "A sophisticated e-commerce framework designed for high-end luxury brands, featuring real-time inventory and global distribution sync.",
        imageSrc: "/project-1.png",
        liveLink: "/"
    },
    {
        title: "Fashion Portal",
        description: "A sophisticated e-commerce framework designed for high-end luxury brands, featuring real-time inventory and global distribution sync.",
        imageSrc: "/project-1.png",
        liveLink: "/"
    },
];

const Works = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/project-1.png');

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const handleView = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setOpen(true);
    };

    return (
        <>
            <div className="section works">
                <div className="container">
                    <div className="section-title">Recent work</div>
                    <div className="work-grid">
                        {workData.map((item, index) => (
                            <WorkCard
                                key={index}
                                item={item}
                                onView={() => handleView(item.imageSrc)}
                            />
                        ))}
                    </div>
                </div>
                <div className={`popup-modal ${open ? 'active' : ''}`}>
                    <button className="closeButton"
                        onClick={() => setOpen(false)}><IoCloseOutline size={32} color="var(--cyber-gold)" /></button>
                    <div className="popup-container">
                        <div className="image-container">
                            <Image src={selectedImage} alt="" width={1830} height={8353} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Works;