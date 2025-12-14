import React from 'react';
import './loader.css'; // Custom CSS for loader

const Loader = () => {
  return (
    <div className="loader-container">
      <svg
        className="loader-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon Path */}
        <path
          className="hexagon"
          d="M50 5 L91 25 L91 75 L50 95 L9 75 L9 25 Z"
          stroke="url(#gradientStroke)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="240"
          strokeDashoffset="240"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="240; 0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Gradient for stroke */}
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff99" />
            <stop offset="100%" stopColor="#0077ff" />
          </linearGradient>
        </defs>

        {/* "S" Letter */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="36"
          fill="currentColor"
          className="loader-text"
        >
          S
        </text>
      </svg>
    </div>
  );
};

export default Loader;
