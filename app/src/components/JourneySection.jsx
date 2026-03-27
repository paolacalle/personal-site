import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const journeyItems = [
{
    id: 1,
    title: "IT Support Assistant",
    place: "NYU Institute of Fine Arts",
    startDate: "September 2024",
    endDate: "Present",
    description:
        "Supported faculty and staff with technical troubleshooting, system setup, and operational IT workflows.",
    skills: ["Tech Support", "Troubleshooting", "Documentation"],
},
{
    id: 2,
    title: "Data Analyst Intern",
    place: "MTA",
    startDate: "January 2026",
    endDate: "Present",
    description:
        "Built dashboards, supported data workflows, and helped centralize operational reporting.",
    skills: ["SQL", "Power BI", "GIS", "Data Analysis"],
},
{
    id: 3,
    title: "Salesforce CRM Developer",
    place: "CPL",
    startDate: "December 2025",
    endDate: "Present",
    description:
        "Designed and implemented CRM workflows, schema, and automation for scholarship operations.",
    skills: ["Salesforce", "Automation", "Schema Design"],
},
];

export function formatDate(dateStr) {
    if (dateStr === "Present") return "Present";
    const date = new Date(dateStr);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
}  

export function DisplayExperienceCard({ title, place, startDate, endDate, description, skills }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{place}</p>
            <p className="text-gray-500 text-sm mb-4">
                {formatDate(startDate)} - {formatDate(endDate)}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-primary text-white px-2 py-1 rounded text-xs z-1000">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function HistoricalHorizontalLine({ start_date, end_date, itemPositions, sortedItems }) {

    const [dateArray, setDateArray] = useState([]);
    const formattedStart = new Date(start_date).toLocaleString("default", { month: "short", year: "numeric" });
    const formattedEnd = end_date === "Present" ? "Present" : new Date(end_date).toLocaleString("default", { month: "short", year: "numeric" });

    useEffect(() => {
        const dates = [];
        let current_date = new Date(start_date);
        const end = new Date(end_date === "Present" ? Date.now() : end_date);

        while (current_date <= end) {
            dates.push(new Date(current_date));
            current_date.setMonth(current_date.getMonth() + 1);
        }
        setDateArray(dates);

    }, [start_date, end_date]);


    return (
        // timeline container -- columns and each with gap of 6
        <div className="flex flex-col gap-6">
            {/* timeline line */}
            {sortedItems.map(item => {
                const position = itemPositions[item.id];

                if (!position) return null;
                
                return (
                    <div key={item.id} className="flex items-center w-full">

                        {/* timeline row */}
                        <div className="relative flex-1 mx-4 h-6">

                        {/* job bar */}
                        <motion.div
                            className="absolute top-1/2 h-4 bg-primary rounded -translate-y-1/2"
                            style={{
                            left: `${position.startPercent}%`,
                            width: `${position.endPercent - position.startPercent}%`,
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-white bg-primary px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                                <DisplayExperienceCard {...item} />
                            </div>
                        </motion.div>
                        </div>

                    </div>
                )
            }
            )}

            {/* timeline labels */}
            <div className="flex justify-between text-sm text-gray-500">
                <span>{formattedStart}</span>
                <span>{formattedEnd}</span>
            </div>
        </div>
    );
}



export function JourneySection() {
    const [selectedItem, setSelectedItem] = useState(null);

    // sorts the items 
    const sortedItems = useMemo(() => {
    return [...journeyItems].sort((a, b) => {
        // convert and get the time
        const aStart = new Date(a.startDate).getTime();
        const bStart = new Date(b.startDate).getTime();

        // return the difference
        if (aStart !== bStart) return bStart - aStart;

        // get current time
        const now = Date.now();
        

        // if the the end_date is present, then simply set end time to now
        const aEnd = a.endDate === "Present" ? now : new Date(a.endDate).getTime();
        const bEnd = b.endDate === "Present" ? now : new Date(b.endDate).getTime();

        // difference 
        return bEnd - aEnd;
    });
    }, []);


    const startDate = sortedItems.length > 0 ? sortedItems[sortedItems.length - 1].startDate : null;
    const endDate = sortedItems.length > 0 ? sortedItems[0].endDate : null;

    // determine the position of each item on the line based on its start and end date
    const itemPositions = useMemo(() => {
        if (!startDate || !endDate) return {};

        const start = new Date(startDate).getTime();
        const end = endDate === "Present" ? Date.now() : new Date(endDate).getTime();

        const positions = {};
        sortedItems.forEach(item => {
            const itemStart = new Date(item.startDate).getTime();
            const itemEnd = item.endDate === "Present" ? Date.now() : new Date(item.endDate).getTime();

            // calculate the position as a percentage of the total time range
            const diff = end - start || 1; // prevent division by zero
            const startPercent = ((itemStart - start) / diff) * 100;
            const endPercent = ((itemEnd - start) / diff) * 100;

            positions[item.id] = { startPercent, endPercent };
        });

        return positions;
    }, [sortedItems, startDate, endDate]);


    return (
        <section 
            id = "journey"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-12 text-center"> 
                    My <span className="text-primary">Journey</span>
                </h2>

                <div className="space-y-12">
                    <HistoricalHorizontalLine start_date={startDate} end_date={endDate} itemPositions={itemPositions} sortedItems={sortedItems} />
                </div>

            </div>
        
        </section>
    );
}   