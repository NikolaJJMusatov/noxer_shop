import React from 'react';
import './Button.css';

interface ButtonProps {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  color?: string;
  textColor?: string;
  borderRadius?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  gap?: string;
  padding?: string;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  iconLeft,
  iconRight,
  color = 'rgba(198, 198, 198, 0.3)',
  textColor = 'var(--primary)',
  borderRadius = '20px',
  size = 'medium',
  onClick,
  gap,
  padding,
  width,
}) => {
  return (
    <button
      className={`custom-button ${size}`}
      style={{
        backgroundColor: color,
        color: textColor,
        borderRadius,
        gap,
        padding,
        width,
      }}
      onClick={onClick}
    >
      {iconLeft && <span className="button-icon">{iconLeft}</span>}
      {text && <span className="button-text">{text}</span>}
      {iconRight && <span className="button-icon">{iconRight}</span>}
    </button>
  );
};