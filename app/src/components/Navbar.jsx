import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: 'Home', href: '#hero'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // the user scrolls the beyond 10px from top
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }; 

        // add event listener to detect scroll
        window.addEventListener('scroll', handleScroll);

        // cleanup -- in case component unmounts -- prevent memory leaks
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []); // empty dependency array to run only once on mount

    // JSX for the Navbar component
    // apply different styles based on isScrolled state
    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
            )}
        > 
            <div className="container flex items-center justify-between">
                {/* Navigation items */}
                <a className="text-xl font-bold text-primary flex items-center"> 
                    <span className="relative z-10"> 
                        <span className="text-glow text-foreground"> Paola Calle </span> Portfolio
                    </span>
                </a>
            </div>

        </nav>
    )
};
