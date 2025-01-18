
import React from 'react';

type Variant = "primary" | "secondary" | "danger" | "whiteBtn";
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

    // Define base styles
    const baseStyles = "font-medium rounded focus;ring transition duration-300";

    // Define variant styles
    const variantStyles: Record<Variant, string> = {
        primary: "bg-orange50 text-absoluteWhite hover-orange90",
        secondary: "bg-absoluteWhite text-orange50 focus:ring-orange50",
        danger: "bg-red-500 text-absoluteWhite hover:bg-red-600 focus:ring-red-300",
        whiteBtn: "bg-absoluteWhite text-absoluteBlack text-[14px] font-medium inline-block py-[12px] px-[20px]"
    }

    // Define size styles
    const sizeStyles: Record<Size, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
    }

    // combine styles
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button onClick={onClick} className={styles}> {text} </button>
  )
}

export default Button