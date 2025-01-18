
import React from 'react';

type Variant = "primary" | "secondary" | "danger";
type Size = "small" | "medium" | "large";

interface ButtonProps {
    text: string;
    variant?: Variant;
    size?: Size;
    onClick?: () => void;
    className?: string; // for possible additional styling
}


const Button: React.FC<ButtonProps> = ({
    text,
    variant = "primary",
    size = "medium",
    onClick,
    className = "",
}) => {
  return (
    <div>Button</div>
  )
}

export default Button