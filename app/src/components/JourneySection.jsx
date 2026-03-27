import { useMemo } from "react";
import {
    getTimelineBounds,
    getItemPositions,
    sortJourneyItems
} from "@/utils/journey";
import { JourneyTimeline } from "./JourneyTimeline";
import "@/styles/journey.css";
import { journeyItems } from "@/data/journeyItems";


export function JourneySection() {
    // sort the journey 
    // useMemo ensures we only sort once, since the journey items are static
    // prevents unnecessary re-sorting on every render, improving performance
    const sortedItems = useMemo(() => sortJourneyItems(journeyItems), []);

    // ensures we only calculate bounds once, since sortedItems is memoized
    const { startDate, endDate } = useMemo(
        () => getTimelineBounds(sortedItems),
        [sortedItems]
    )

    // calculate the position of each item on the timeline
    const itemPositions = useMemo(
        () => getItemPositions(sortedItems, startDate, endDate),
        [sortedItems, startDate, endDate] 
    )

    return (
        <section id="journey" className="journey-section">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Journey</span>
                </h2>

                <JourneyTimeline
                    items={sortedItems}
                    itemPositions={itemPositions}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        </section>
    )
} 