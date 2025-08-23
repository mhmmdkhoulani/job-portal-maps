import React from "react";

function Button({ filled, text, url, className }) {
  return (
    <a
      href={url}
      className={`font-semibold rounded flex justify-center items-center px-3 text-sm 
        ${className}
        ${
          filled
            ? "bg-primary-500 text-white "
            : "bg-white text-primary-500 border-2 border-primary-50 rounded "
        }`}
    >
      {text}
    </a>
  );
}

export default Button;
