import React from "react";

function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button 
      onClick={onClick} 
      type={type} 
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}>
      {text}
    </button>
  );
}

export default Button;
