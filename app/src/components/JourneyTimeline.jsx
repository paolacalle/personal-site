import { formatDate } from "@/utils/journey";
import { JourneyTimelineRow } from "./JourneyTimelineRow";
import "@/styles/journey.css";

export function JourneyTimeline({ items, itemPositions, startDate, endDate }) {
    return (
        <div className="journey-timeline">

            <div className="journey-timeline-labels">
                <span>{formatDate(startDate)}</span>
                <span>{formatDate(endDate)}</span>
            </div>

            <div className="journey-timeline-rows">
                {
                    items.map((item) => {
                        return (
                            <JourneyTimelineRow
                                key={item.id}
                                item={item}
                                position={itemPositions[item.id]}
                            />
                        );
                    })
                }
            </div>

            {/* <div className="journey-timeline-labels">
                <span>{formatDate(startDate)}</span>
                <span>{formatDate(endDate)}</span>
            </div> */}
        </div>
    )
}