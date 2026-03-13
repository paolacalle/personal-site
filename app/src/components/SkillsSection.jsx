import { useState } from "react"


const skills = [
    // Front End
    { name: "JavaScript", level: 65, category: "Front End" },
    { name: "React", level: 45, category: "Front End" },
    { name: "HTML/CSS", level: 65, category: "Front End" },
    { name: "Tailwind CSS", level: 55, category: "Front End" },

    // Back End
    { name: "Python", level: 80, category: "Back End" },
    { name: "SQL", level: 70, category: "Back End" },
    { name: "PostgreSQL", level: 60, category: "Back End" },
    { name: "MySQL", level: 60, category: "Back End" },
    { name: "Java", level: 60, category: "Back End" },
    { name: "Node.js", level: 35, category: "Back End" },
    { name: "MongoDB", level: 50, category: "Back End" },


    // Data & ML
    { name: "Pandas", level: 85, category: "Data & ML" },
    { name: "NumPy", level: 80, category: "Data & ML" },
    { name: "scikit-learn", level: 70, category: "Data & ML" },
    { name: "TensorFlow", level: 40, category: "Data & ML" },
    { name: "PyTorch", level: 40, category: "Data & ML" },
    { name: "Matplotlib", level: 75, category: "Data & ML" },
    { name: "Seaborn", level: 70, category: "Data & ML" },

    // DevOps (Foundational)
    { name: "CI/CD", level: 50, category: "DevOps" },
    { name: "AWS", level: 25, category: "DevOps" },
    { name: "Linux", level:70, category: "DevOps" },

    // Tools 
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
    { name: "Figma", level: 70, category: "Tools" },
    { name: "Docker", level: 30, category: "Tools" },

]

export const SkillsSection = () => {
    // we use use state to manage the active category filter
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section 
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div 
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>

                            <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                                <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                                >
                                </div>
                            </div>

                            <div className="text-right mt-1 text-sm text-muted-foreground">
                                <span>
                                    {skill.level}%
                                </span>
                            </div>
                            
                        </div>
                    ))}

                </div>
            </div>
            
        </section>
    )
}