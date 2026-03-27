import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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



export function JourneySection() {
    const [selectedItem, setSelectedItem] = useState(null);

    const sortedItems = useMemo(() => {
    return [...journeyItems].sort((a, b) => {
        const aStart = new Date(a.startDate).getTime();
        const bStart = new Date(b.startDate).getTime();

        // Newest start date first
        if (aStart !== bStart) return bStart - aStart;

        const now = Date.now();
        const aEnd = a.endDate === "Present" ? now : new Date(a.endDate).getTime();
        const bEnd = b.endDate === "Present" ? now : new Date(b.endDate).getTime();

        // Newest end date first
        return bEnd - aEnd;
    });
    }, []);

    useEffect(() => {
        if (selectedItem) {
            const element = document.getElementById(`journey-item-${selectedItem.id}`);
            if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [selectedItem]);

    const selectedItemIndex = selectedItem
    ? sortedItems.findIndex((item) => item.id === selectedItem.id)
    : 0;

    return (
        <section 
            id = "journey"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-12 text-center"> 
                    My <span className="text-primary">Journey</span>
                </h2>
            </div>
        
        </section>
    );
    }