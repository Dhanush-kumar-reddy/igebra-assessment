// dashboard/app/components/StudentTable.js
'use client'; // Essential for state and event handlers

import { useState, useMemo } from 'react';

export default function StudentTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'assessment_score', direction: 'descending' });

// dashboard/app/components/StudentTable.js

// ... (imports and useState hooks are the same)

  // Memoize the filtering and sorting logic for performance
  const sortedFilteredData = useMemo(() => {
    let filteredData = data;

    // Apply search filter
    if (searchTerm) {
      filteredData = data.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // --- THIS IS THE CORRECTED PART ---
    // Create a new array (a copy) before sorting
    const sortableData = [...filteredData];

    // Apply sorting to the copy
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData; 
  }, [data, searchTerm, sortConfig]);

  // Function to request a sort change when a header is clicked
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Student Details</h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="mb-4 p-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* Add onClick handlers to headers for sorting */}
              <th onClick={() => requestSort('name')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">Name</th>
              <th onClick={() => requestSort('class')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">Class</th>
              <th onClick={() => requestSort('assessment_score')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">Score</th>
              <th onClick={() => requestSort('persona_name')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">Persona</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedFilteredData.map((student) => (
              <tr key={student.student_id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.assessment_score}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.persona_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}