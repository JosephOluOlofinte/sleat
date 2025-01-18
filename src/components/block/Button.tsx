
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
    const baseStyles = "font-medium rounded-[5px] focus;ring transition duration-300";

    // Define variant styles
    const variantStyles: Record<Variant, string> = {
        primary: "bg-orange50 text-absoluteWhite hover:bg-orange70",
        secondary: "bg-absoluteWhite hover:border-[1px] hover:border-orange50 ease-in-out duration-500",
        danger: "bg-red-500 text-absoluteWhite hover:bg-red-600 focus:ring-red-300",
        whiteBtn: "bg-absoluteWhite text-absoluteBlack text-[15px] text-grey15 font-medium inline-block "
    }

    // Define size styles
    const sizeStyles: Record<Size, string> = {
        small: "py-[10px] px-[16px] text-sm font-semibold",
        medium: "py-[12px] px-[18px] text-base font-semibold",
        large: "py-[14px] px-[20px] font-semibold text-lg",
    }

    // combine styles
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button onClick={onClick} className={styles}> {text} </button>
  )
}

export default Button