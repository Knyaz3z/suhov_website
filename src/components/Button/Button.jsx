import React from 'react';
import './Button.scss';

function Button({
                    children,
                    title,
                    onClick,
                    variant,
                    size,
                    disabled,
                    color,
                    className,
                    href,
                }) {
    return (
        <button
            className={`button ${className} ${color} ${variant} ${size} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            <a href={href} className="button__content" target={'_blank'}>
        {title}
            </a>
            <span className="button__sand-effect">
        {/* Песчаные частицы */}
                {[...Array(20)].map((_, i) => (
                    <span key={i} className="sand-particle"/>
                ))}
      </span>
        </button>
    );
};

export default Button;