import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Webhook,
  Workflow,
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6 h-screen">

      <h1 className="text-3xl font-bold text-blue-600 mb-10">
        Shopify CRM
      </h1>

      <ul className="space-y-3">

        <li
          onClick={() => setActivePage("dashboard")}
          className={`flex items-center gap-3 font-medium cursor-pointer px-3 py-2 rounded-lg transition ${
            activePage === "dashboard"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </li>

        <li
          onClick={() => setActivePage("customers")}
          className={`flex items-center gap-3 font-medium cursor-pointer px-3 py-2 rounded-lg transition ${
            activePage === "customers"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <Users size={20} />
          Customers
        </li>

        <li
          onClick={() => setActivePage("orders")}
          className={`flex items-center gap-3 font-medium cursor-pointer px-3 py-2 rounded-lg transition ${
            activePage === "orders"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <ShoppingCart size={20} />
          Orders
        </li>

        <li className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer px-3 py-2 rounded-lg transition">
          <Webhook size={20} />
          Webhooks
        </li>

        <li className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer px-3 py-2 rounded-lg transition">
          <Workflow size={20} />
          Automation
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;