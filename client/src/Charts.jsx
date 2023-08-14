import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
];

const Charts = () => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold mb-2">Data Analytics</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="predictions" stroke="#8884d8" />
        <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Charts;
