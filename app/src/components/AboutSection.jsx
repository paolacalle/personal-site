import { cn } from "@/lib/utils"
import { saveAs } from "file-saver"

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
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"></div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"></div>
                        <div className="gradient-border p-6 card-hover"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}