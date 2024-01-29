// src/BackgroundChanger.js
import React, { useState } from 'react';
import './index.css'; // Import Tailwind CSS

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-300');

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className={`h-screen flex items-center justify-center ${backgroundColor}`}>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={() => changeBackground('bg-blue-500')}>
          Blue
        </button>
        <button className="bg-green-500 text-white px-4 py-2" onClick={() => changeBackground('bg-green-500')}>
          Green
        </button>
        <button className="bg-red-500 text-white px-4 py-2" onClick={() => changeBackground('bg-red-500')}>
          Red
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2" onClick={() => changeBackground('bg-yellow-500')}>
          Yellow
        </button>
        <button className="bg-purple-500 text-white px-4 py-2" onClick={() => changeBackground('bg-purple-500')}>
          Purple
        </button>
        <button className="bg-orange-500 text-white px-4 py-2" onClick={() => changeBackground('bg-orange-500')}>
          Orange
        </button>
        <button className="bg-pink-500 text-white px-4 py-2" onClick={() => changeBackground('bg-pink-500')}>
          Pink
        </button>
        <button className="bg-indigo-500 text-white px-4 py-2" onClick={() => changeBackground('bg-indigo-500')}>
          Indigo
        </button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
