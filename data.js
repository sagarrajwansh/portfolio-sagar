const projects = [
  {
    title: "Petlinx",
    slug: "petlinx",
    description:
      "Pet Care Management Platform with invoicing, payment processing, and transaction workflows serving 1,000+ active records.",
    link: "https://petlinx.com/",
    images: [
      "/projects/screenshots/petlinx/1.png",
      "/projects/screenshots/petlinx/2.png",
    ],
    tags: ["Node.js", "Next.js", "PostgreSQL", "Global Payments API"],
    contributions: [
      "Architected and delivered RESTful APIs for invoicing, payment processing, and transaction workflows serving 1,000+ active records in PostgreSQL",
      "Integrated Global Payments gateway for both online and card-present device transactions, reducing payment errors by standardizing checkout logic",
      "Engineered dynamic pricing engine supporting discounts, surcharges, prepaid credits, and automated checkout — cutting manual billing effort by ~40%",
      "Built modular React UI components for invoices, payments, client profiles, and pet records, improving data entry speed and UX consistency",
      "Designed and optimized complex PostgreSQL queries for booking, pricing, and reporting modules, improving average query response time"
    ],
    displayImage: "/projects/screenshots/petlinx/1.png",
  },
  {
    title: "IntelliBook",
    slug: "intellibook",
    description:
      "Restaurant POS System with multi-module platform handling order management, kitchen workflows, and QR-code-based digital menu.",
    link: "https://intellibooks.io/",
    images: [
      "/projects/screenshots/intellibooks/Intellibooks.jpg",
      "/projects/screenshots/intellibooks/Intellibooks1.png",
      "/projects/screenshots/intellibooks/Intellibooks2.jpg",
    ],
    tags: ["Node.js", "Angular", "MySQL", "RazorPay"],
    contributions: [
      "Developed backend APIs and Angular frontend for a multi-module POS platform handling order management and kitchen workflows",
      "Implemented QR-code-based digital menu with real-time order placement and integrated RazorPay for online payment processing",
      "Optimized Angular UI rendering and API response times, improving customer-facing load performance significantly",
      "Built customer flow management features enabling concurrent order tracking across multiple tables"
    ],
    displayImage: "/projects/screenshots/intellibooks/Intellibooks.jpg",
  },
  {
    title: "Sales CRM Tool",
    slug: "sales-crm",
    description:
      "Sales CRM with user authentication, role-based access control, LinkedIn profile management, and automated prospect import pipeline.",
    link: null,
    images: [
      "/projects/screenshots/salesTool/sales-crm-tools.jpg",
    ],
    tags: ["Node.js", "React", "PostgreSQL", "CSV Processing"],
    contributions: [
      "Developed user authentication, role-based access control, and LinkedIn profile management modules",
      "Built automated prospect import pipeline with CSV parsing and LinkedIn chat ingestion, reducing manual data entry",
      "Created a Reports Wizard with advanced filtering, date ranges, and analytics dashboards for sales team insights"
    ],
    displayImage: "/projects/screenshots/salesTool/sales-crm-tools.jpg",
  },
  {
    title: "Global Crypto News Platform",
    slug: "crypto-news",
    description:
      "End-to-end application for aggregating and displaying categorized crypto news with JSON data ingestion pipeline.",
    link: "https://globalcryptonews.com/",
    images: [
      "/projects/screenshots/gcn/gcn.jpg",
      "/projects/screenshots/gcn/gcn2.png",
    ],
    tags: ["Node.js", "Angular", "MongoDB"],
    contributions: [
      "Built end-to-end application — Angular frontend and Node.js/Express backend — for aggregating and displaying categorized crypto news",
      "Implemented JSON data ingestion pipeline with categorization logic and secure MongoDB storage for high-volume news feeds",
      "Added server-side PDF validation to filter reports under 3 pages, ensuring content quality standards",
      "Designed daily randomized category ordering algorithm to improve user engagement and content discovery"
    ],
    displayImage: "/projects/screenshots/gcn/gcn2.png",
  },
];

module.exports = { projects };
