import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function RevenueChart() {

  const weeklyData = [
    { name: "Mon", revenue: 400 },
    { name: "Tue", revenue: 700 },
    { name: "Wed", revenue: 500 },
    { name: "Thu", revenue: 900 },
    { name: "Fri", revenue: 1200 },
    { name: "Sat", revenue: 1000 },
    { name: "Sun", revenue: 1400 },
  ];

  const monthlyData = [
    { name: "Week 1", revenue: 2400 },
    { name: "Week 2", revenue: 3200 },
    { name: "Week 3", revenue: 2800 },
    { name: "Week 4", revenue: 4100 },
  ];

  const yearlyData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 5000 },
    { name: "Mar", revenue: 6500 },
    { name: "Apr", revenue: 7000 },
    { name: "May", revenue: 8200 },
    { name: "Jun", revenue: 9100 },
  ];

  const [chartData, setChartData] = useState(weeklyData);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-8 p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Revenue Analytics
        </h2>

        <div className="flex gap-3">

          <button
            onClick={() => setChartData(weeklyData)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl"
          >
            7 Days
          </button>

          <button
            onClick={() => setChartData(monthlyData)}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-xl"
          >
            30 Days
          </button>

          <button
            onClick={() => setChartData(yearlyData)}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl"
          >
            1 Year
          </button>

        </div>

      </div>

      <div style={{ width: "100%", height: 350 }}>

        <ResponsiveContainer>

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;