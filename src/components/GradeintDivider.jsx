// components/Divider.jsx

import React from 'react';

const Divider = () => {
  return (
<div className="w-full flex justify-center my-16">
      <div 
        className="w-[80%] h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #64CCC5, #ffffff, #64CCC5, transparent)',
          boxShadow: '0 0 10px rgba(100, 204, 197, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)'
        }}
      ></div>
    </div>
  );
};

export default Divider;