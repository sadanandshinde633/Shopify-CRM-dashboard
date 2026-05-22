import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import WebhookTable from "./components/WebhookTable";
import AutomationPanel from "./components/AutomationPanel";
import ErrorPanel from "./components/ErrorPanel";
import RevenueChart from "./components/RevenueChart";

import { statsData } from "./data/dashboardData";

function App() {

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Mobile Sidebar State
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fake Loading State
  const [loading, setLoading] = useState(true);

  // Fake API Loading Effect
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  // Loading Screen
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">

        <div className="text-center">

          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h2 className="mt-4 text-2xl font-bold text-gray-700">
            Loading Dashboard...
          </h2>

        </div>

      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-black"
      }`}
    >

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-50 top-0 left-0 h-full
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Top Controls */}
        <div className="flex items-center justify-between mb-4">

          {/* Mobile Menu */}
          <div className="md:hidden">

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-white border border-gray-200 p-2 rounded-lg"
            >
              <Menu size={24} />
            </button>

          </div>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </div>

        {/* Navbar */}
        <Navbar />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

          {statsData.map((card, index) => (
            <StatsCard
              key={index}
              title={card.title}
              value={card.value}
              color={card.color}
            />
          ))}

        </div>

        {/* Webhook Table */}
        <WebhookTable />

        {/* Automation Panel */}
        <AutomationPanel />

        {/* Error Panel */}
        <ErrorPanel />

        {/* Revenue Chart */}
        <RevenueChart />

      </div>

    </div>
  );
}

export default App;