import Image from "next/image";

interface TeamCardProps {
    item: {
        name: string;
        role: string;
        imageSrc: string;
        priority?: boolean;
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
            </div>
        </div>
    )
}

export default TeamCard;