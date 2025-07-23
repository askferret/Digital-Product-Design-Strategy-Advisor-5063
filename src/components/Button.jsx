import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
    secondary: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-primary-500",
    outline: "bg-transparent border border-primary-600 hover:bg-primary-50 text-primary-600 focus:ring-primary-500",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2.5",
    lg: "text-lg px-6 py-3",
  };
  
  const disabledStyles = disabled ? 
    "opacity-50 cursor-not-allowed pointer-events-none" : 
    "";
  
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <SafeIcon icon={icon} className={`w-5 h-5 ${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <SafeIcon icon={icon} className={`w-5 h-5 ${children ? 'ml-2' : ''}`} />
      )}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={buttonStyles} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      className={buttonStyles} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;