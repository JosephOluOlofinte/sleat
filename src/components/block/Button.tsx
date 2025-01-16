import React, { ReactNode } from 'react'


interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'whiteBG';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    size,
    disabled,
    onClick,
}) => {
    const className = [
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-md',
        'transition-duration-200',
        'transition-ease-in-out',
        'transition-opacity',
        disabled? 'opacity-50' : 'hover:opacity-75',
        
        {
            primary: 'bg-primary-500 text-white',
            secondary: 'bg-secondary-500 text-white',
            danger: 'bg-red-800 text-white',
            whiteBG: 'bg-absoluteWhite text-grey-15'
        }[variant],

        {
            small: 'px-4 py-2 text-sm',
            medium: 'px-6 py-3 text-md',
            large: 'px-8 py-4 text-lg'
        }[size],
        ].join('');
        
    
  return (
    <button type="button" className={className} disabled={disabled} onClick={onClick}>{children}</button>
  );
};


export const PrimaryButton = () => {
    <Button variant="primary" size="large">Nope</Button>
}

export default Button