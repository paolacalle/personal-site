import { ArrowBigDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* Hero Section Content */}
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6"> 
                    <h1 
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Paola</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Calle</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm Paola, an NYU Data Science master's student who enjoys 
                        learning across the full stack—from APIs and front end to 
                        backend systems, databases, and analysis. I'm curious by nature and 
                        love turning data into insight through thoughtful engineering and ML.
                    </p>

                    <a 
                        href="#projects"
                        className="pt-4 cosmic-button opacity-0 animate-fade-in-delay-4"
                    >
                        View My Work
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span
                    className="text-sm text-muted-foreground mb-2"
                > Scroll
                </span>
                <ArrowBigDown
                    className="h-4 w-4 text-primary"
                />
            </div>
        </section>
    )
}