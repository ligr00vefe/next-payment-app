import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { IconType } from 'react-icons';

interface IButtonProps {
    type?: 'submit' | 'reset' | 'button' | undefined;
    secondary?: boolean;
    bgColor?: string;
    fgColor?: string;
    width?: string;
    className?: string;
    outline?: boolean;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType; 
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    [x: string]: any;
}

const Button = ({
    type = 'button',
    secondary = false,
    bgColor,
    fgColor,
    width,
    disabled,
    outline,
    small,
    icon: Icon,
    onClick,
    children,
    ...restProps
}: IButtonProps) => {
    const composeClasses = classNames(
        styles['button'],
        secondary ? styles['secondary'] : styles['primary'],
        outline && styles['outline'],
        small && styles['button-sm']
    );

    const style = {
        backgroundColor: bgColor || '',
        color: fgColor || '',
        width: width || '',
    };

    return (
        <button
            className={composeClasses}
            type={type}
            style={style}
            disabled={disabled}
            onClick={onClick}       
            {...restProps}
        >
            {Icon && (
                <Icon
                    size={24}
                    className='icon'
                />
            )}
            {children}
        </button>
    );
};

export default Button;
