import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={` py-4 px-6 bg-blue-gradientfont-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      GetStarted
    </button>
  );
};

export default Button;
