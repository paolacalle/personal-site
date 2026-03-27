import { formatDate } from '@/utils/journey';
import '@/styles/journey.css';

export function ExperienceCard({ item }) {
    return (
        <div className="experience-card">
            <h3 className="experience-card-title">{item.title}</h3>
            <p className="experience-card-place">{item.place}</p>
            <p className="experience-card-date"> 
                {formatDate(item.startDate)} - {formatDate(item.endDate)}
            </p>

            <p className="experience-card-description">{item.description}</p>

            <div className="experience-card-skills">
                {item.skills.map((skill, index) => (
                    <span key={index} className="experience-card-skill">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}