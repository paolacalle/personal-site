

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

                    <p>
                        I'm Paola, an NYU Data Science master's student who enjoys 
                        learning across the full stack—from APIs and front end to 
                        backend systems, databases, and analysis. I'm curious by nature and 
                        love turning data into insight through thoughtful engineering and ML.
                    </p>
                </div>
            </div>
        </section>
    )
}