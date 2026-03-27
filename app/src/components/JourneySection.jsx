import { useMemo } from "react";
import {
    getTimelineBounds,
    getItemPositions,
    sortJourneyItems
} from "@/utils/journey";
import { JourneyTimeline } from "./JourneyTimeline";
import "@/styles/journey.css";

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
    title: "Data AI Analyst Intern",
    place: "MTA PCC",
    startDate: "January 2026",
    endDate: "Present",
    description:
        "Built dashboards, supported data workflows, and helped centralize operational reporting.",
    skills: ["SQL", "Power BI", "GIS", "Data Analysis"],
},
{
    id: 3,
    title: "Salesforce CRM Application Developer",
    place: "CPL",
    startDate: "December 2025",
    endDate: "Present",
    description:
        "Designed and implemented CRM workflows, schema, and automation for scholarship operations.",
    skills: ["Salesforce", "Automation", "Schema Design"],
},
{
    id : 4, 
    title : "DAP 2 Interviewer",
    place : "The Posse Foundation",
    startDate : "September 2025",
    endDate : "October 2025",
    description : "Conducted behavioral interviews to assess candidate fit for Posse's scholarship program.",
    skills : ["Interviewing", "Candidate Assessment", "Communication"]
},
{
    id : 5,
    title : "Tech Developer Software Engineer Intern",
    place : "SEO Tech Developer",
    startDate : "June 2023",
    endDate : "August 2023",
    description : "Completed 300+ hours of intensive computer science and software engineering training with a focus on full-stack web development, data structures, and algorithms.",
    skills : ["Full-Stack Development", "Agile Methodologies", "Flask API", "HTML/CSS/JavaScript", "Python", "SQL", "Git", "Unit Testing"]
},
{
    id : 6, 
    title : "Machine Learning & Internet Censorship Detection Research Assistant",
    place : "Smith College",
    startDate : "June 2023",
    endDate : "August 2025",
    description : "Conducted research on machine learning techniques for detecting internet censorship, including data collection, model development, and analysis of results.",
    skills : ["Machine Learning", "Data Analysis", "Research Methodology", "Python", "TensorFlow", "Natural Language Processing", "Pipeline Development"]
},
{
    id : 7,
    title : "Computer Science & Statistical Data Science Teaching Assistant",
    place : "Smith College",
    startDate : "September 2023",
    endDate : "May 2024",
    description : "Tutored students in Computer Science subjects including programming languages, algorithms, data structures, probability, regression analysis, and machine learning.",
    skills : ["Teaching Assistance", "Student Support", "Grading", "Communication", "Python"]
},
{
    id : 8,
    title : "Student Office Assistant",
    place : "Smith College",
    startDate : "September 2023",
    endDate : "May 2024",
    description : "Assisted in administrative tasks, coordinated meetings, and provided support to the interdisciplinary admin group.",
    skills : ["Administrative Support", "Coordination", "Communication", "Organization"]
}, 
{
    id : 9, 
    title : "Data Science Intern",
    place : "Smith College",
    startDate : "September 2024",
    endDate : "December 2024",
    description : "Built python scripts to automate cleaning and analysis for report creation.",
    skills : ["Python", "Data Analysis", "Automation"]
}, 
{
    id : 10,
    title : "Application Developer Intern",
    place : "Elliott Investment Management L.P.",
    startDate : "January 2024",
    endDate : "December 2024",
    description : "Developed SQL schema to streamline schema expansion for existing databases.",
    skills : ["Application Development", "Software Engineering", "SQL", "Database Design", "Dependency Injection", "Unit Testing", "Kubernetes", "Agile Methodologies", "C#", ".NET", "Git", "CI/CD Pipelines"]
}
];

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