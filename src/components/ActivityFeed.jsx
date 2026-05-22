import { useEffect, useState } from "react";

function ActivityFeed() {

  const activities = [
    "New Shopify order received",
    "Customer synced successfully",
    "Webhook triggered successfully",
    "Automation workflow executed",
    "Refund request processed",
    "Inventory synced with CRM",
    "Payment received successfully",
    "New customer registered",
  ];

  const [feed, setFeed] = useState([
    "Dashboard initialized",
  ]);

  useEffect(() => {

    const interval = setInterval(() => {

      const randomActivity =
        activities[Math.floor(Math.random() * activities.length)];

      setFeed((prevFeed) => [
        randomActivity,
        ...prevFeed.slice(0, 5),
      ]);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-8 p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Live Activity Feed
      </h2>

      <div className="space-y-4">

        {feed.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:bg-gray-50 transition"
          >

            <div className="flex items-center justify-between">

              <p className="text-gray-700 font-medium">
                {item}
              </p>

              <span className="text-sm text-gray-400">
                Just now
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ActivityFeed;