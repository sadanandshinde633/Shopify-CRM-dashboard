import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Webhook,
  Workflow,
} from "lucide-react";
function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">

      <h1 className="text-3xl font-bold text-blue-600 mb-10">
        Shopify CRM
      </h1>

      <ul className="space-y-3">

  <li className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer px-3 py-2 rounded-lg transition">
    <LayoutDashboard size={20} />
    Dashboard
  </li>

  <li className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer px-3 py-2 rounded-lg transition">
    <Users size={20} />
    Customers
  </li>

  <li className="flex items-center gap-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer px-3 py-2 rounded-lg transition">
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