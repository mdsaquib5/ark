import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import TeamCard from "../shared/TeamCard";

const teamData = [
    {
        name: "Akram Hussain",
        role: "Managing Director & Founder",
        imageSrc: "/akram.webp",
        priority: true,
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
    {
        name: "Mohammed Farhan",
        role: "CEO & Finance Manager",
        imageSrc: "/farhan.webp",
        priority: true,
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" },
        ]
    },
    {
        name: "Mohammed Saquib",
        role: "Development Manager",
        imageSrc: "/saquib.webp",
        priority: true,
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
    {
        name: "Firoz Ahmed",
        role: "Finance Manager",
        imageSrc: "/firoz.webp",
        priority: true,
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
    {
        name: "Md Asif",
        role: "Quality Manager",
        imageSrc: "/asif.webp",
        priority: true,
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
    {
        name: "Asad Ansari",
        role: "Product Manager",
        imageSrc: "/asad.webp",
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
    {
        name: "Masooma Pathan",
        role: "Marketing Manager",
        imageSrc: "/masoom.webp",
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
    {
        name: "Manisha Biswal",
        role: "Customer Service Manager",
        imageSrc: "/manisha.webp",
        socials: [
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaTwitter, link: "https://twitter.com" }
        ]
    },
];

const Teams = () => {
    return (
        <>
            <div className="section teams">
                <div className="container">
                    <div className="section-title">Our Team</div>
                    <div className="teams-grid">
                        {teamData.map((item, index) => (
                            <TeamCard
                                key={index} item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams;