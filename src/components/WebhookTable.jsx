import { useState } from "react";
import { webhookData } from "../data/dashboardData";
import SectionCard from "./SectionCard";

function WebhookTable() {

  const [search, setSearch] = useState("");

  const filteredData = webhookData.filter((item) =>
    item.event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionCard title="Recent Webhook Activity">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search webhook events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-80 border border-gray-300 rounded-xl px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100 text-left">

              <th className="p-3">Webhook Event</th>
              <th className="p-3">Status</th>
              <th className="p-3">Time</th>

            </tr>
          </thead>

          <tbody>

            {filteredData.map((item, index) => (
              <tr key={index} className="border-b">

                <td className="p-3">
                  {item.event}
                </td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-3">
                  {item.time}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </SectionCard>
  );
}

export default WebhookTable;