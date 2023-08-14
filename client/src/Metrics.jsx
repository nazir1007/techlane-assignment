import React from 'react';

const Metrics = ({ accuracy, precision, recall }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Performance Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>Accuracy: {accuracy}</div>
        <div>Precision: {precision}</div>
        <div>Recall: {recall}</div>
      </div>
    </div>
  );
};

export default Metrics;
