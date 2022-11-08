import React from "react";
import './style.css'

export const KKPrimaryButton = ({children, size ="", isBlock, onClick, active = true, className}) => {
    switch(size) {
        case 'sm': size = 'btn-sm'; break;
        case 'md': size = 'btn-md'; break;
        default: size = ''; break;
    }
    
    return (
        <button 
            className={`btn btn-primary flex items-center justify-center gap-3 m-auto ${isBlock ? 'block w-full' : "" } ${size} ${!active ? 'bg-gray-400':''} ${className}`} 
            onClick={e => onClick(e)}
            role="button"
            >
                {children}
        </button>
    )
}

export const KKSecondaryButton = ({children, size ="", isBlock, onClick, active = true}) => {
    switch(size) {
        case 'sm': size = 'btn-sm'; break;
        case 'md': size = 'btn-md'; break;
        default: size = ''; break;
    }
    
    return (
        <button 
            className={`btn btn-secondary ${isBlock ? 'block w-full' : "" } ${size} ${!active ? 'bg-secondary':''}`} 
            onClick={e => onClick(e)}
            role="button"
            >
                {children}
        </button>
    )
}

