import React from 'react';
const Button = ({ isSelected, onClick, children }) => {
  // console.log('cmp/core/Button#render isSelected', isSelected);

  const btnClasses = ['btn'];
  btnClasses.push(isSelected ? 'btn-primary' : 'btn-outline-primary');
  return (
    <button className={btnClasses.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
