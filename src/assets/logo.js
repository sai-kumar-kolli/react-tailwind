import React from 'react';

const LogoSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="50"
      height="50"
      className="text-blue-600 dark:text-[rgb(45,212,191)] transition-none"
    >
      {/* Hexagon Path */}
      <path
        d="M50 5 L91 25 L91 75 L50 95 L9 75 L9 25 Z"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
      />

      {/* "S" Letter */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="40"
        fill="currentColor"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        S
      </text>
    </svg>
  );
};

export default LogoSVG;
