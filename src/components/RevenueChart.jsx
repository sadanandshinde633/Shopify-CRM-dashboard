import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", revenue: 400 },
  { name: "Tue", revenue: 700 },
  { name: "Wed", revenue: 500 },
  { name: "Thu", revenue: 900 },
  { name: "Fri", revenue: 1200 },
  { name: "Sat", revenue: 1000 },
  { name: "Sun", revenue: 1400 },
];

function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-8 p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Weekly Revenue Analytics
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

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