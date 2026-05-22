export const statsData = [
  {
    title: "Customers Synced",
    value: "1,245",
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
    event: "customers/create",
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
    title: "Welcome Email",
    description:
      "Automatically sends welcome emails to new customers.",
    status: "Active",
  },

  {
    title: "Abandoned Cart Recovery",
    description:
      "Sends reminders to customers who leave products in cart.",
    status: "Active",
  },

  {
    title: "VIP Customer Campaign",
    description:
      "Targets high-value customers with personalized offers.",
    status: "Pending",
  },
];
export const errorData = [
  {
    title: "refunds/create Webhook Failed",
    description: "Retry attempt #2 in progress",
    time: "10 mins ago",
    type: "error",
  },

  {
    title: "API Rate Limit Warning",
    description: "Request threshold nearing limit",
    time: "15 mins ago",
    type: "warning",
  },
];