import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import "@/styles/journey.css";

export function JourneyTimelineRow({ item , position }) {
    if (!item || !position) return null;

    // ensure the bar has a minimum width for visibility
    const width = Math.max(position.endPercent - position.startPercent, 2)

    return (
        <div className="journey-row">
            <div className="journey-row-trak">
                <motion.div
                    className="journey-row-bar"
                    style={{
                        left: `${position.startPercent}%`,
                        width: `${width}%`,
                    }}
                    whileTap={{ scale : 1.03 }}
                    transition={{ duration : 0.2 }}
                >

                    <div className="journey-row-tooltip">
                        <ExperienceCard item={item} />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}