import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ResumeSection } from "../components/ResumeSection"
import { useEffect } from "react"
import { Toaster, toast } from "react-hot-toast"


export const Home = () => {
    useEffect(() => {
        // prevents the toast from showing multiple times if the user refreshes the page
        const seen = localStorage.getItem("underdevelopment-toast-seen")

        if (!seen) {
            toast("👋 Welcome! This portfolio is still under construction.", { 
                duration: 3000, 
            })

            localStorage.setItem("underdevelopment-toast-seen", "true")
        }
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            <Toaster position="top-right" />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <HeroSection />
                {/* About Section */}
                <AboutSection />
                {/* Skills Section */}
                <SkillsSection />
                {/* Resume Section */}
                <ResumeSection />
            </main>

            {/* Footer */}


        </div>
    )
}