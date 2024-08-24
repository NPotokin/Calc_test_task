import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    modifier?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, modifier }) => {
    const className = modifier 
        ? `${styles.button} ${styles[`button_${modifier}`]}`
        : styles.button;
        
    return (
        <button 
        className={className} 
        onClick={onClick}
        onMouseDown={(e) => e.preventDefault()}>
            {label}
        </button>
    );
};

export default Button;
