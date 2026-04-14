import { 
    BiGlobe, 
    BiLogoAndroid, 
    BiLogoApple, 
    BiBot, 
    BiBriefcaseAlt, 
    BiTerminal, 
    BiEnvelope, 
    BiStats 
} from "react-icons/bi";
import ServiceCard from "../shared/ServiceCard";

const serviceData = [
    {
        title: "Website",
        description: "Modern, responsive websites built with the latest technologies to ensure performance, scalability, and a seamless user experience.",
        icon: BiGlobe
    },
    {
        title: "Android App",
        description: "High-performance Android applications designed for speed, usability, and engaging user experiences across all devices.",
        icon: BiLogoAndroid
    },
    {
        title: "IOS App",
        description: "Elegant and secure iOS applications crafted to deliver smooth performance and a premium user experience on Apple devices.",
        icon: BiLogoApple
    },
    {
        title: "AI & Chatbots",
        description: "Intelligent AI-powered chatbots and automation solutions to enhance customer engagement, support, and business efficiency.",
        icon: BiBot
    },
    {
        title: "Brand Portfolio",
        description: "Creative and impactful brand portfolios that showcase your identity, build trust, and leave a lasting impression on your audience.",
        icon: BiBriefcaseAlt
    },
    {
        title: "Custom Software",
        description: "Tailored software solutions built to match your unique business requirements, improving workflow, productivity, and scalability.",
        icon: BiTerminal
    },
    {
        title: "Email Marketing",
        description: "Strategic email marketing campaigns designed to increase engagement, nurture leads, and drive conversions effectively.",
        icon: BiEnvelope
    },
    {
        title: "SEO Optimization",
        description: "Advanced SEO strategies to improve search engine rankings, increase organic traffic, and grow your online visibility.",
        icon: BiStats
    },
];

const Service = () => {
    return (
        <>
            <div className="service">
                <div className="container">
                    <div className="section-title">Core Services</div>
                    <div className="service-grid">
                        {serviceData.map((item, index) => (
                            <ServiceCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;