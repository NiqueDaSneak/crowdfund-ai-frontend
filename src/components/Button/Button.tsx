import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  style,
  disabled = false,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={`button ${className ? className : ''}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
