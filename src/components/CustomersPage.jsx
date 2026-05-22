import { useState } from "react";

function CustomersPage({ customers, setCustomers }) {

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  // Delete Customer
  const handleDelete = (name) => {

    const updatedCustomers = customers.filter(
      (customer) => customer.name !== name
    );

    setCustomers(updatedCustomers);
  };

  // Toggle Status
  const handleStatusToggle = (name) => {

    const updatedCustomers = customers.map((customer) => {

      if (customer.name === name) {

        return {
          ...customer,
          status:
            customer.status === "Active"
              ? "Suspended"
              : "Active",
        };
      }

      return customer;
    });

    setCustomers(updatedCustomers);
  };

  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Customers
        </h2>

        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="space-y-4">

        {filteredCustomers.map((customer, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md transition"
          >

            <div>

              <h3 className="font-semibold text-lg text-gray-800">
                {customer.name}
              </h3>

              <p className="text-gray-500">
                {customer.email}
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span
                className={`px-4 py-1 rounded-full text-sm ${
                  customer.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {customer.status}
              </span>

              <button
                onClick={() => handleStatusToggle(customer.name)}
                className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl"
              >
                Suspend
              </button>

              <button
                onClick={() => handleDelete(customer.name)}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CustomersPage;