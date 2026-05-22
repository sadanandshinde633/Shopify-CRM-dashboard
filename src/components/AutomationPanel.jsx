import { automationData } from "../data/dashboardData";

function AutomationPanel() {
  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Automation Workflows
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {automationData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition"
          >

            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {item.description}
            </p>

            <span
              className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
                item.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AutomationPanel;