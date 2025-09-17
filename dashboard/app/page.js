// dashboard/app/page.js

// 1. Import all components, including the new Radar Chart
import { getStudentData } from '../lib/data';
import OverviewStats from './components/OverviewStats';
import SkillBarChart from './components/SkillBarChart';
import StudentTable from './components/StudentTable';
import Insights from './components/Insights';
import AttentionScatterPlot from './components/AttentionScatterPlot';
import StudentRadarChart from './components/StudentRadarChart';


// 2. Make the component async to fetch data on the server
export default async function HomePage() {
  const studentData = await getStudentData();

  // A check in case data fails to load
  if (!studentData || studentData.length === 0) {
    return <div>Loading data or data not available...</div>;
  }

  return (
    // 3. This is the main container for your dashboard
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-900">
            Cognitive Skills & Student Performance Dashboard
          </h1>
          <p className="text-sm text-gray-600">
            An analysis of synthetic student data.
          </p>
        </header>

        {/* Section 1: Overview Stats */}
        <OverviewStats data={studentData} />

        {/* Section 2: Charts and Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Assessment Score vs. Cognitive Skills</h2>
            <SkillBarChart data={studentData} />
          </div>
          <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Attention vs. Performance</h2>
            <AttentionScatterPlot data={studentData} />
          </div>
        </div>

        {/* Section 3: Student Table, Insights, and Radar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StudentTable data={studentData} />
          </div>
          
          {/* This div now holds both the Insights and Radar Chart components, stacked vertically */}
          <div className="space-y-6">
            <Insights />
            <StudentRadarChart data={studentData} />
          </div>
        </div>

      </div>
    </main>
  );
}