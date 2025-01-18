import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="calc-button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
