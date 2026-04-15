import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

interface WorkCardProps {
    item: {
        title: string;
        description: string;
        imageSrc: string;
        liveLink: string;
    };
    onView: () => void;
}

const WorkCard = ({ item, onView }: WorkCardProps) => {
    return (
        <div className="work-card">
            <div className="work-image">
                <Image src={item.imageSrc} alt={item.title} width={430} height={270} />
                <div className="image-overlay" onClick={onView}>
                    <div className="overlay-icons">
                        <IoEyeOutline size={32} color="#000" />
                    </div>
                </div>
            </div>
            <div className="work-details">
                <div className="detail-title">{item.title}</div>
                <p>{item.description}</p>
                <Link href={item.liveLink} target="_blank">View website Live</Link>
            </div>
        </div>
    )
}

export default WorkCard;
