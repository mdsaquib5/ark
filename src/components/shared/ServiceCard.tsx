interface ServiceCardProps {
    item: {
        title: string;
        description: string;
        icon: any;
    }
}

const ServiceCard = ({ item }: ServiceCardProps) => {
    const Icon = item.icon;
    return (
        <div className="service-card glass">
            <div className="card-icon">
                <Icon />
            </div>
            <div className="card-title">{item.title}</div>
            <p>{item.description}</p>
        </div>
    )
}

export default ServiceCard;