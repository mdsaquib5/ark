import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import TeamCard from "../shared/TeamCard";

const teamData = [
    {
        name: "Akram Hussain",
        role: "Managing Director & Founder",
        imageSrc: "/akram.webp",
        priority: true
    },
    {
        name: "Mohammed Farhan",
        role: "CEO & Finance Manager",
        imageSrc: "/farhan.webp",
        priority: true
    },
    {
        name: "Mohammed Saquib",
        role: "Development Manager",
        imageSrc: "/saquib.webp",
        priority: true
    },
    {
        name: "Siddharth Srivastava",
        role: "Data and AI Expert",
        imageSrc: "/sid.webp",
        priority: true
    },
    {
        name: "Md Asif",
        role: "Quality Manager",
        imageSrc: "/asif.webp",
        priority: true
    },
    {
        name: "Asad Ansari",
        role: "Product Manager",
        imageSrc: "/asad.webp",
        priority: true
    },
    {
        name: "Masooma Pathan",
        role: "Marketing Manager",
        imageSrc: "/masoom.webp",
        priority: true
    },
    {
        name: "Manisha Biswal",
        role: "Customer Service Manager",
        imageSrc: "/manisha.webp",
        priority: true
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