import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    {name: 'Home', href: '#hero'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        // toggle the menu open/close state
        setIsMenuOpen(!isMenuOpen);
    }

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
                <a className="text-xl font-bold text-primary flex items-center" href="#hero"> 
                    <span className="relative z-10"> 
                        <span className="text-glow text-foreground"> Paola Calle </span> Portfolio
                    </span>
                </a>
        

                {/* desktop navigation items */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile navigation items 
                If the menu is open, show the close icon, else show the hamburger icon */}

                <button 
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen 
                    ? <X  size={24}/> 
                    : <Menu size={24}/>
                    }
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-bluer-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)} // close menu on item click
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
};
