// dashboard/app/components/Insights.js

export default function Insights() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Key Insights</h2>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="text-blue-500 font-bold mr-2">▶</span>
          <div>
            <strong className="font-semibold">Strongest Predictors:</strong> Comprehension and Retention skills show the highest positive correlation with assessment scores.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 font-bold mr-2">▶</span>
          <div>
            {/* The single quotes have been changed to double quotes to fix the build error */}
            <strong className="font-semibold">Student Personas:</strong> Students cluster into three distinct groups: "High Achievers", "Average Students", and those "Needing Attention", each with unique cognitive profiles.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 font-bold mr-2">▶</span>
          <div>
            <strong className="font-semibold">Engagement Matters:</strong> While not the strongest factor, consistent engagement time shows a notable positive impact on overall scores across all personas.
          </div>
        </li>
      </ul>
    </div>
  );
}