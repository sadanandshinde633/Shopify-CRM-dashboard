export const statsData = [
  {
    title: "Customers Synced",
    value: "1245",
    color: "text-blue-600",
  },

  {
    title: "Orders Processed",
    value: "532",
    color: "text-green-600",
  },

  {
    title: "Active Webhooks",
    value: "6",
    color: "text-purple-600",
  },

  {
    title: "Failed Requests",
    value: "2",
    color: "text-red-600",
  },
];

export const webhookData = [
  {
    event: "orders/create",
    status: "Success",
    time: "2 mins ago",
  },

  {
    event: "customers/update",
    status: "Success",
    time: "5 mins ago",
  },

  {
    event: "refunds/create",
    status: "Failed",
    time: "10 mins ago",
  },
];

export const automationData = [
  {
    title: "Welcome Email Automation",
    description: "Automatically sends welcome emails to new customers.",
    status: "Active",
  },

  {
    title: "Abandoned Cart Recovery",
    description: "Sends reminder emails for abandoned carts.",
    status: "Pending",
  },
];

export const errorData = [
  {
    title: "refunds/create Webhook Failed",
    message: "Retry attempt #2 in progress",
    time: "10 mins ago",
    type: "error",
  },

  {
    title: "API Rate Limit Warning",
    message: "Request threshold nearing limit",
    time: "15 mins ago",
    type: "warning",
  },
];

export const customersData = [
  {
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },

  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    status: "Active",
  },

  {
    name: "Michael Johnson",
    email: "michael@example.com",
    status: "Inactive",
  },

  {
    name: "Emma Wilson",
    email: "emma@example.com",
    status: "Active",
  },
];

export const ordersData = [
  {
    id: "#ORD-1021",
    customer: "John Doe",
    amount: "$240",
    status: "Paid",
  },

  {
    id: "#ORD-1022",
    customer: "Sarah Smith",
    amount: "$120",
    status: "Pending",
  },

  {
    id: "#ORD-1023",
    customer: "Michael Johnson",
    amount: "$540",
    status: "Paid",
  },

  {
    id: "#ORD-1024",
    customer: "Emma Wilson",
    amount: "$320",
    status: "Cancelled",
  },
];