import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import "@/styles/journey.css";

export function JourneyTimelineRow({ item , position }) {
    if (!item || !position) return null;

    // ensure the bar has a minimum width for visibility
    const width = Math.max(position.endPercent - position.startPercent, 2)

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = useCallback(() => setTooltipOpen((prev) => !prev), []);
    const closeTooltip = useCallback(() => setTooltipOpen(false), []);

    return (
        <div className="journey-row">
            <div className="journey-row-track">

                {/* if the item is active (end-date is present) */}

                <motion.div
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.title} at ${item.place}`}
                    aria-expanded={tooltipOpen}
                    className={`journey-row-bar hover-glow ${item.endDate === "Present" ? "active" : "inactive"} ${tooltipOpen ? "tooltip-open" : ""}`}
                    style={{
                        left: `${position.startPercent}%`,
                        width: `${width}%`,
                    }}
                    whileHover={{ scale : 1.03 }}
                    transition={{ duration : 0.2 }}
                    onClick={toggleTooltip}
                    onBlur={(e) => {
                        // only close if focus moves outside the bar (not to child tooltip content)
                        if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                            closeTooltip();
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleTooltip();
                        } else if (e.key === "Escape") {
                            closeTooltip();
                        }
                    }}
                >

                    <div className="journey-row-tooltip">
                        <ExperienceCard item={item} />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}