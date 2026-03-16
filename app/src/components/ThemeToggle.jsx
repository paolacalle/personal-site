import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Component for toggling between light and dark themes
// Uses localStorage to remember the user's preference

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // On component mount, check localStorage for theme preference
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    // Function to toggle theme and update localStorage
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
            {""}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-gray-700"/>
            )}
        </button>
    )
}