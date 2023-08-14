import React from 'react';

const Controls = ({ onStart, onStop, onConfigure }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Model Controls</h2>
      <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={onStart}>
        Start
      </button>
      <button className="bg-red-500 text-white px-4 py-2 mr-2" onClick={onStop}>
        Stop
      </button>
      <button className="bg-gray-500 text-white px-4 py-2" onClick={onConfigure}>
        Configure
      </button>
    </div>
  );
};

export default Controls;
