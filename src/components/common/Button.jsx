import React from "react";

const Button = ({ variant = "md", children, onClick }) => {
  const baseStyles =
    "text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeVariants = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-md",
    lg: "px-8 py-3 text-lg",
    full: "w-full py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${sizeVariants[variant]} bg-blue hover:bg-sky-500 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
