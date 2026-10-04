//   Toggle Theme (Dark/Light) (15 min)
// Button dabao → background color badle
// Concept: Boolean state, conditional className, useState + useEffect (document body pe class lagana)
// Extra: localStorage me save karo — reload pe theme yaad rahe

import React from 'react';
import { useState, useEffect } from 'react'

export default function ToggleButton(){
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if(!isDarkMode) {
            setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)
        }
    }, [isDarkMode]);

    const handleClick = () => {
        setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)
    };

    return (
        <button onClick={handleClick} className={isDarkMode ? 'dark' : 'light'}>
            Change Color
        </button>
    )
}