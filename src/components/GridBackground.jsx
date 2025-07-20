import React from 'react'

const GridBackground = () => {
  return (
    <section className="absolute inset-0 color-rgb(13,13,13)">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/grid.png)",
            backgroundPosition: "center",
            backgroundSize: "140%",
            opacity:"20%",
          }}
        />
        </div>
    </section>
  );
};

export default GridBackground;

