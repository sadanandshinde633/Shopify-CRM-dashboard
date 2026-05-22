import { useState } from "react";
import { ordersData } from "../data/dashboardData";

function OrdersPage() {

  const [search, setSearch] = useState("");

  const filteredOrders = ordersData.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Orders
        </h2>

        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="space-y-4">

        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md transition"
          >

            <div>

              <h3 className="font-semibold text-lg text-gray-800">
                {order.id}
              </h3>

              <p className="text-gray-500">
                {order.customer}
              </p>

            </div>

            <div className="flex items-center gap-6">

              <span className="font-semibold text-gray-700">
                {order.amount}
              </span>

              <span
                className={`px-4 py-1 rounded-full text-sm ${
                  order.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {order.status}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default OrdersPage;