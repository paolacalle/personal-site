import React, { useEffect, useState } from 'react';


// star will have : id, size, x, y, opacity, animationDuration



export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []); // empty dependency array to run only once on mount

    const generateStars = () => {
        // number of stars based on screen size
        const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i, // current index as id
                size: Math.random() * 3 + 1, // size between 1 and 4 px
                x: Math.random() * 100, // random x position
                y: Math.random() * 100, // random y position
                opacity: Math.random() * 0.5 + 0.5, // random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // duration between 2s and 6s
            });
        }

        setStars(newStars);
    }

    {/* loop through stars */}
    return( <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className='star animate-pulse-subtle' 
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        top: star.y + '%',
                        left: star.x + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }}
                /> 
            ))}
        </div>
    );
};