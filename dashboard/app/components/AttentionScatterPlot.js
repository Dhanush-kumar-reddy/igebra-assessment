// dashboard/app/components/AttentionScatterPlot.js
'use client'; // This component has tooltips, so it must be a client component

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function AttentionScatterPlot({ data }) {
  // The data is already in a good format for a scatter plot (one dot per student)
  // We just need to tell the chart which keys to use for the x and y axes.
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: -10,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="attention" name="Attention Level" unit="" />
        <YAxis type="number" dataKey="assessment_score" name="Assessment Score" unit="%" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Students" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}