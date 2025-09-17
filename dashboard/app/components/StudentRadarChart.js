// dashboard/app/components/StudentRadarChart.js
'use client'; // This component needs state and interaction

import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

export default function StudentRadarChart({ data }) {
  // Use state to keep track of the selected student's ID
  const [selectedStudentId, setSelectedStudentId] = useState(data[0]?.student_id || null);

  // Find the full data for the selected student
  const selectedStudent = data.find(s => s.student_id === selectedStudentId);

  // Transform the student's data into the format recharts needs for the radar chart
  const chartData = selectedStudent ? [
    { subject: 'Comprehension', value: selectedStudent.comprehension, fullMark: 10 },
    { subject: 'Attention', value: selectedStudent.attention, fullMark: 10 },
    { subject: 'Focus', value: selectedStudent.focus, fullMark: 10 },
    { subject: 'Retention', value: selectedStudent.retention, fullMark: 10 },
  ] : [];

  const handleStudentChange = (event) => {
    setSelectedStudentId(Number(event.target.value));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Individual Student Profile</h2>

      {/* Dropdown to select a student */}
      <select 
        onChange={handleStudentChange} 
        value={selectedStudentId || ''}
        className="w-full p-2 border rounded-md mb-4 bg-gray-50"
      >
        {data.map(student => (
          <option key={student.student_id} value={student.student_id}>
            {student.name}
          </option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          <Radar name={selectedStudent?.name || 'Student'} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}