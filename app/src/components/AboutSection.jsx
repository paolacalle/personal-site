import { cn } from "@/lib/utils"
import { saveAs } from "file-saver"
import { Briefcase, Code, Users} from "lucide-react"

export const AboutSection = () => {

    return (

        <section
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-12 text-center"> 
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Passionate Software Developer</h3>


                        <p className="text-muted-foreground">
                            I'm a Computer Science and Statistical Data Science graduate from 
                            Smith College with a strong interest in building end-to-end systems. 
                            My experience spans software development, data analysis, and applying 
                            technical concepts to real-world problems through hands-on projects.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy learning across the stack—from building APIs and front-end 
                            interfaces to backend logic, database design, and analytical reporting. 
                            I primarily work with JavaScript, Python, and Java, and have experience 
                            with React and Node.js. I value clear communication, collaboration, 
                            and writing systems that are both practical and well-designed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a className={cn(
                                "px-6 rounded-full border border-primary text-primary",
                                "hover:bg-primary/10 transition-colors duration-300",
                                "py-3 text-center"
                            )}>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover hover-glow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Experience designing relational databases and data 
                                        models, building ETL pipelines, and supporting analytics 
                                        through well-structured data warehouses.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover hover-glow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Users className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        Work well with others, communicate clearly, and 
                                        enjoy collaborating to turn ideas into working systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover hover-glow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Planning, coordinating, and delivering projects 
                                        from idea to execution through agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}