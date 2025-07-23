import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = false, 
  onClick, 
  selected = false,
  ...props 
}) => {
  const baseStyles = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden";
  const hoverStyles = hoverEffect ? "hover:shadow-md transition-shadow cursor-pointer" : "";
  const selectedStyles = selected ? "ring-2 ring-primary-500 ring-offset-2" : "";
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${selectedStyles} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;