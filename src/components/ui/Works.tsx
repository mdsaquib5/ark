'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import WorkCard from "../shared/WorkCard";

const workData = [
    {
        title: "Depp Pariwaar",
        description: "Modern e-commerce platform Fast, secure checkout Responsive user experience",
        imageSrc: "/project-1.webp",
        liveLink: "https://pariwar-pi.vercel.app"
    },
    {
        title: "Maatikalaa",
        description: "Handcrafted products marketplace Elegant modern UI Dynamic product browsing",
        imageSrc: "/project-2.webp",
        liveLink: "https://maatikalaa-user.vercel.app"
    },
    {
        title: "PanchwatiX Hotel",
        description: "Hotel booking website Room listings & reservations Clean responsive design",
        imageSrc: "/project-3.webp",
        liveLink: "https://panchwatix-hotel.vercel.app"
    },
    {
        title: "Inertiapixel Fashions",
        description: "Fashion e-commerce store Interactive product catalog Smooth shopping experience",
        imageSrc: "/project-5.webp",
        liveLink: "http://fashion.inertiapixel.com"
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