import React from 'react';

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative bg-academy-black">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
