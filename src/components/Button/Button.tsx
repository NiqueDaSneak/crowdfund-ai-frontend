import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

interface ButtonProps {
  label?: string | React.ReactElement;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean; // Add loading state
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  style,
  disabled = false,
  className,
  isLoading = false, // Default to false
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={`button ${className ? className : ''} ${
        isLoading ? 'loading' : ''
      }`}
      onClick={onClick}
      style={style}
      disabled={disabled || isLoading} // Disable when loading
    >
      {isLoading ? (
        <AiOutlineLoading className="fetch-spinner" />
      ) : (
        <span className="button-label">{label}</span>
      )}
    </button>
  );
};

export default Button;
