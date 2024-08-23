const packagesMock = [
  {
    packageName: "Standard Plan",
    recurrence: "monthly",
    description: "Basic access to core features with limited support.",
    subServices: [
      {
        subServiceName: "User Management",
        details: "Manage up to 100 users with basic admin controls.",
      },
      {
        subServiceName: "Basic Analytics",
        details: "Access to standard performance metrics and reports.",
      },
    ],
  },
  {
    packageName: "Premium Plan",
    recurrence: "yearly",
    description:
      "Full access to all features with priority support and advanced tools.",
    subServices: [
      {
        subServiceName: "User Management",
        details: "Manage unlimited users with advanced admin controls.",
      },
      {
        subServiceName: "Advanced Analytics",
        details:
          "In-depth performance metrics, custom reports, and data export.",
      },
      {
        subServiceName: "Integration Support",
        details: "Seamless integration with third-party tools and services.",
      },
    ],
  },
  {
    packageName: "Enterprise Plan",
    recurrence: "custom",
    description:
      "Tailored solutions for large organizations with dedicated account management.",
    subServices: [
      {
        subServiceName: "Custom User Management",
        details: "Customizable user roles, permissions, and admin controls.",
      },
      {
        subServiceName: "Enterprise Analytics",
        details: "Bespoke analytics solutions tailored to your business needs.",
      },
      {
        subServiceName: "Dedicated Support",
        details: "24/7 dedicated support with a personal account manager.",
      },
    ],
  },
];

export default packagesMock;
