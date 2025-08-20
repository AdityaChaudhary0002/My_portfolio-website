import React from "react";

const StaticStars = ({ count = 200 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white/80"
        style={{
          width: Math.random() * 2.5 + 1,
          height: Math.random() * 2.5 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.4,
        }}
      />
    ))}
  </div>
);

export default StaticStars;