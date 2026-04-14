import { BiGlobe } from "react-icons/bi";
import ServiceCard from "../shared/ServiceCard";

const serviceData = [
    {
        title: "Website development",
        description: "Bespoke digital experiences built for maximum impact.",
        icon: BiGlobe
    },
    {
        title: "Website development",
        description: "Bespoke digital experiences built for maximum impact.",
        icon: BiGlobe
    },
    {
        title: "Website development",
        description: "Bespoke digital experiences built for maximum impact.",
        icon: BiGlobe
    },
    {
        title: "Website development",
        description: "Bespoke digital experiences built for maximum impact.",
        icon: BiGlobe
    },
];

const Service = () => {
    return (
        <>
            <div className="service">
                <div className="container">
                    <div className="section-title">Core modules</div>
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