// dashboard/app/components/SkillBarChart.js
'use client'; // This directive is essential for components with interactivity

import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SkillBarChart({ data }) {

  // We need to process the data to be suitable for the chart.
  // useMemo prevents this heavy calculation from running on every render.
  const chartData = useMemo(() => {
    const skillAverages = data.reduce((acc, student) => {
      // Group by comprehension score (1 to 10)
      const group = student.comprehension;
      if (!acc[group]) {
        acc[group] = { totalScore: 0, count: 0 };
      }
      acc[group].totalScore += student.assessment_score;
      acc[group].count += 1;
      return acc;
    }, {});

    // Convert the aggregated data into an array of objects for the chart
    return Object.keys(skillAverages).map(skillLevel => ({
      name: `Comp. ${skillLevel}`, // e.g., "Comp. 8"
      "Average Score": (skillAverages[skillLevel].totalScore / skillAverages[skillLevel].count),
    })).sort((a, b) => parseInt(a.name.split(' ')[1]) - parseInt(b.name.split(' ')[1]));
  }, [data]);

  return (
    // ResponsiveContainer makes the chart fill its parent container
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Average Score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}