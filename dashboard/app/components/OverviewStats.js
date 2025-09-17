// dashboard/app/components/OverviewStats.js

// This is a server component by default, so calculations happen on the server.
export default function OverviewStats({ data }) {
  
  // --- Calculations ---
  const totalStudents = data.length;
  
  const averageScore = data.reduce((acc, student) => acc + student.assessment_score, 0) / totalStudents;
  
  const averageEngagement = data.reduce((acc, student) => acc + student.engagement_time, 0) / totalStudents;
  
  // Find the persona with the most students
  const personaCounts = data.reduce((acc, student) => {
    acc[student.persona_name] = (acc[student.persona_name] || 0) + 1;
    return acc;
  }, {});
  
  const mostCommonPersona = Object.keys(personaCounts).reduce((a, b) => personaCounts[a] > personaCounts[b] ? a : b, 'N/A');

  // --- JSX for Display ---
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Total Students" value={totalStudents} />
      <StatCard title="Average Score" value={`${averageScore.toFixed(1)}%`} />
      <StatCard title="Avg. Engagement" value={`${averageEngagement.toFixed(0)} min`} />
      <StatCard title="Dominant Persona" value={mostCommonPersona} />
    </div>
  );
}

// A small helper component to keep the code clean
function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}