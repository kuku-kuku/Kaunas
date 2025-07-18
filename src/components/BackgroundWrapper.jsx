import React from 'react';

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative overflow-hidden">
      {/* Fonas su bg-line.png – ne kartojamas, apimantis visą ekraną */}
      <div
        className="absolute inset-0 z-0 pointer-events-none animate-bgMove"
        style={{
          backgroundImage: "url('/bg-line.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4, // reguliuok tarp 0.2–0.5 kaip tau gražiau
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
