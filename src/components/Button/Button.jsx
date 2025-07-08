import React from 'react';
import './Button.scss';

function Button({
                    children,
                    title,
                    onClick,
                    variant,
                    size,
                    disabled
                }) {
    return (
        <button
            className={`button ${variant} ${size} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
      <span className="button__content">
        {title}
      </span>
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