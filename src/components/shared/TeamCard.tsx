import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
    item: {
        name: string;
        role: string;
        imageSrc: string;
        priority?: boolean;
        socials: {
            icon: any;
            link: string;
        }[];
    }
}

const TeamCard = ({ item }: TeamCardProps) => {
    return (
        <div className="team-card glass">
            <div className="team-image">
                <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={400}
                    height={400}
                    priority={item.priority}
                    loading={item.priority ? "eager" : undefined}
                />
            </div>
            <div className="profile-details">
                <div className="profile-name">{item.name}</div>
                <p>{item.role}</p>
                <div className="social-bar">
                    {item.socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <Link key={index} href={social.link} target="_blank">
                                <Icon size={22} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamCard;