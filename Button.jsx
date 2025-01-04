import React from 'react';

// Reusable Button Component
const Button = ({ label, color,onclick }) => {
  return (
    <button
      style={{ backgroundColor: color, padding: '10px 20px', borderRadius: '5px' }}
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default Button;
