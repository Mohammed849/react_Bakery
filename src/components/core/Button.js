import React from 'react';
const Button = ({ children, isSelected, onClick }) => {
  return (
    <button className='btn btn-primary mr-2' onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
