import { errorData } from "../data/dashboardData";

function ErrorPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-8 p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Error Monitoring
        </h2>

        <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm">
          {errorData.length} Active Issues
        </span>

      </div>

      <div className="space-y-4">

        {errorData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 border ${
              item.type === "error"
                ? "border-red-200 bg-red-50"
                : "border-yellow-200 bg-yellow-50"
            }`}
          >

            <div className="flex justify-between items-center">

              <div>

                <h3
                  className={`font-semibold ${
                    item.type === "error"
                      ? "text-red-700"
                      : "text-yellow-700"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>

              </div>

              <span className="text-sm text-gray-500">
                {item.time}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ErrorPanel;