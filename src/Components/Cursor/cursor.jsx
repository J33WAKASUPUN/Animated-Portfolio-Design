import React, { useState, useEffect } from 'react';
import "../Cursor/cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 25, y: 22 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div 
      className='cursor' 
      style={{
        top: `${position.y+20}px`,
        left: `${position.x+20}px`
      }}
    >
      
    </div>
  );
};

export default Cursor;