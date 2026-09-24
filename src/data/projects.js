export const projects = [
  {
    id: "01",
    slug: "executive-virtual-assistant-operations",
    title: "Executive & Virtual Assistant Daily Operations System",
    subtitle: "Google Sheets | Executive Operations & VA Management",
    description:
      "A centralized Google Sheets system for managing executive tasks, appointments, deadlines, and automated daily Morning Briefs.",
    image: "/images/project-01.png",

    overview:
      "Built a Google Sheets system that centralizes an executive's daily tasks, appointments, deadlines and automatically generates a daily Morning Brief; increasing daily workflow efficiency by 60% and replacing manual, tool-switching prep with one repeatable routine.",

    challenge: [
      "Daily tasks, appointments, and deadlines were split across Google Tasks and Google Calendar, with no single view of the day.",
      "Preparing a daily brief for the executive required manually compiling information each morning.",
      "Task ownership and completion were hard to track without a separate follow-up process.",
    ],

    solution:
      "Designed a Google Sheets system anchored by a central Tasks database, a Dashboard for at-a-glance workload visibility, and an automated Morning Brief that uses formulas to pull today's schedule, deadlines, and key notes the moment the date changes. The brief can then be exported to PDF and sent to the executive each morning.",

    skills: [
      "Data validation & dropdowns",
      "FILTER",
      "SORT",
      "IFERROR",
      "COUNTIF / COUNTIFS",
      "TEXT",
      "TODAY",
      "Cross-sheet references",
      "Automated calculations",
      "Dynamic daily reporting",
      "Conditional formatting",
      "Data accuracy & consistency",
      "Executive task management",
    ],

    impact:
      "Increased daily workflow efficiency by 60% by removing the need to check multiple tools and manually prepare daily briefings. The Morning Brief now generates automatically, creating a simple Plan → Brief → Execute → Report → Update accountability loop between executive and VA.",

    tools: [
      "Google Sheets",
      "Google Sheets Formulas",
      "Data Validation",
      "Conditional Formatting",
      "PDF Export",
      "WhatsApp",
    ],

    sheetEmbedUrl:
      "https://docs.google.com/spreadsheets/d/1CYjeDFYTRhETLTXNEOq1rU3an9svJgPkb3ofytkgIFA/edit?usp=drivesdk",

    sheetRows: [],
  },

  {
    id: "02",
    slug: "content-social-media-management",
    title: "Content & Social Media Management System",
    subtitle: "Google Sheets | Social Media Management & Reporting",
    description:
      "An end-to-end content management system covering idea generation, content production, scheduling, analytics, and monthly client reporting.",
    image: "/images/project-02.png",

    overview:
      "Built an end-to-end content management system for a client, covering idea generation, content production, scheduling, performance analytics, and monthly reporting in one connected workbook.",

    challenge: [
      "There was no structured way to move content from idea to published post across three platforms.",
      "Caption, creative, and approval status needed tracking so nothing got missed before a post date.",
      "Performance data such as reach, engagement, and follower growth had to be pulled together manually into a report for the client each month.",
    ],

    solution:
      "Built a 6-sheet system — Ideas, Content, Calendar, Analytics, Platform Data, and Monthly Report — where each idea moves through caption, creative, and approval status into a publishing calendar. Per-post performance is logged, while platform-level metrics such as followers, reach, and engagement rate automatically roll up into a client-ready monthly report with top content and insights.",

    skills: [
      "Content Workflow Design",
      "Editorial Calendar Management",
      "Social Analytics Tracking",
      "Engagement Rate Calculation",
      "Cross-Sheet Reporting",
      "KPI Reporting",
      "Client Reporting",
    ],

    impact:
      "Gave a first-time social media manager one system to run content creation, scheduling, analytics, and monthly reporting for a live client account.",

    tools: [
      "Google Sheets",
      "Google Sheets Formulas",
      "Dashboard Design",
      "Report Design",
    ],

    sheetEmbedUrl:
      "https://docs.google.com/spreadsheets/d/1XKaFgxkD64FoGug1En_QR47z1J8605hHlQkJF0rjx3k/edit?usp=drivesdk",

    sheetRows: [],
  },

  {
    id: "03",
    slug: "invoice-expense-processing",
    title: "Invoice & Expense Processing System",
    subtitle: "Google Sheets | Financial & Operations Tracking",
    description:
      "A connected financial operations system for managing jobs, invoices, payments, expenses, balances, and job-level profitability.",
    image: "/images/project-03.png",

    overview:
      "Built a 4-sheet Google Sheets system for a small Nigerian catering business that connects jobs, invoices, payments, and expenses in one place. This allows job-level profit and outstanding balances to be seen at a glance instead of manual cross-checking.",

    challenge: [
      "Outstanding customer payments and overdue invoices were hard to track manually.",
      "Expenses weren't consistently recorded or connected to the jobs that caused them.",
      "There was no visibility into whether individual jobs or the business overall were actually profitable.",
    ],

    solution:
      "Designed an integrated 4-sheet system — Jobs, Invoices, Expenses, and Dashboard — where cross-sheet lookups tie each job to its invoices and categorized expenses, automatically calculate balances due and payment status, roll up job-level profit, and surface revenue, outstanding payments, and missing receipts on one dashboard.",

    skills: [
      "XLOOKUP / VLOOKUP",
      "ARRAYFORMULA",
      "SUMIF / SUMIFS",
      "AVERAGEIF",
      "Automated ID Generation",
      "Cross-Sheet References",
      "Profit Calculations",
      "Dashboard Design",
    ],

    impact:
      "Replaced scattered manual tracking with a single system that shows outstanding balances, missing receipts, and job-level profitability at a glance — giving the business a clear, real-time read on financial performance.",

    tools: [
      "Google Sheets",
      "Google Sheets Formulas",
      "Data Validation",
      "Conditional Formatting",
      "PDF Export",
    ],

    sheetEmbedUrl:
      "https://docs.google.com/spreadsheets/d/15qR-wL65Hf47A-vJxf1YNhSpk1tUm6CvEO2OpPD6NAk/edit?usp=drivesdk",

    sheetRows: [],
  },

  {
    id: "04",
    slug: "business-data-cleaning-reporting",
    title: "Business Data Cleaning & Reporting System",
    subtitle: "Google Sheets | Data Cleaning & Operations Reporting",
    description:
      "A data-cleaning and reporting system that turns messy operational records into standardized data, a customer database, and management-level reporting.",
    image: "/images/project-04.png",

    overview:
      "Built a 4-sheet Google Sheets system that turns messy operational job records for a Nigerian cleaning and facility services company into clean, standardized data with a centralized customer database and management-level reporting.",

    challenge: [
      "Job records had inconsistent customer names, missing contact information, invalid emails, and duplicate entries.",
      "Payment and job statuses and totals were often wrong, with no way to flag records needing review.",
      "There was no centralized customer database or reporting system to track revenue and performance.",
    ],

    solution:
      "Designed a 4-sheet pipeline — Raw Data, Cleaned Data, Customer Master, and Reporting — where formulas standardize names, phone numbers, emails, and statuses; flag duplicates, missing fields, and calculation errors; roll job-level records into a customer database; and surface everything in a KPI dashboard covering revenue, job performance, and data quality.",

    skills: [
      "Data Cleaning & Standardization",
      "ARRAYFORMULA",
      "XLOOKUP",
      "FILTER",
      "REGEXMATCH",
      "COUNTIFS / SUMIFS",
      "Data Quality Control",
      "KPI Reporting",
    ],

    impact:
      "Replaced manual record-checking with an automated pipeline that surfaces bad data, duplicates, and errors on its own — giving management a clean customer database and clear revenue and performance reporting instead of scattered raw records.",

    tools: [
      "Google Sheets",
      "Google Sheets Formulas",
      "Data Validation",
      "Conditional Formatting",
    ],

    sheetEmbedUrl:
      "https://docs.google.com/spreadsheets/d/1zXBYsH7IJALcDXhlb4D2jSgGNmXnU9JOZDpDx1gCpJs/edit?usp=drivesdk",

    sheetRows: [],
  },

  {
    id: "05",
    slug: "inventory-management-system",
    title: "Inventory Management System",
    subtitle: "Google Sheets | Operations & Inventory Automation",
    description:
      "An inventory operations system for tracking stock, purchases, expiry risk, storage locations, and real-time inventory value.",
    image: "/images/project-05.png",

    overview:
      "Built a 5-sheet Google Sheets system for a Nigerian wholesale business to centralize product data, track incoming stock, monitor expiry risk, and calculate real-time inventory value — replacing scattered manual records with a single operational source of truth.",

    challenge: [
      "Stock information was spread across manual records, making it hard to see what was actually available.",
      "Expired products often stayed in storage undetected, and low-stock items were caught too late.",
      "There was no quick way to see current inventory value or where products were physically stored.",
    ],

    solution:
      "Designed an integrated 5-sheet system — Products, Purchases, Inventory, Alerts, and Dashboard — linked by cross-sheet formulas that automatically flag low-stock and expiring items, calculate inventory value from cost price and quantity on hand, and surface everything on one dashboard for quick daily review.",

    skills: [
      "Data Validation",
      "Cross-Sheet Formulas",
      "SUMIF / SUMIFS",
      "COUNTIFS",
      "IF / IFERROR",
      "Date & Expiry Logic",
      "Conditional Formatting",
      "Dashboard Design",
    ],

    impact:
      "Replaced manual stock checks with a single dashboard that gives instant visibility into stock levels, expiry risk, and inventory value — cutting the time and guesswork involved in keeping the business's inventory accurate.",

    tools: [
      "Google Sheets",
      "Google Sheets Formulas",
      "Data Validation",
      "Conditional Formatting",
    ],

    sheetEmbedUrl:
      "https://docs.google.com/spreadsheets/d/1JlOkjYsC4Mbg3Gbd6Eei612k5WKPkZlyhglRdndfTkY/edit?usp=drivesdk",

    sheetRows: [],
  },

  {
    id: "06",
    slug: "personal-budget-dashboard",
    title: "Personal Budget Tracker & Dashboard",
    subtitle: "Google Sheets | Personal Finance & Budget Planning",
    description:
      "A personal budgeting system for planning monthly spending, tracking actual transactions, measuring variance, and monitoring savings goals.",
    image: "/images/project-06.png",

    overview:
      "Built a personal budgeting system for a friend to plan monthly spending, track actual transactions against budget, and monitor savings goals — giving her clear visibility into her money instead of running out before the month ended.",

    challenge: [
      "Money often ran out before month-end with no clear view of which categories were driving it.",
      "Savings and debt-payoff goals weren't tracked toward a deadline, so progress was invisible.",
      "There was no way to compare planned spending against actual transactions.",
    ],

    solution:
      "Designed a connected system — Budget, Transactions, Dashboard, and Savings Goal sheets — where planned amounts per category are checked against actual transaction totals to calculate variance and flag each category as On Track, Under Budget, or Over Budget, alongside a goal tracker showing progress percentage and target dates for savings, debt payoff, and sinking funds.",

    skills: [
      "SUMIFS",
      "Category Variance Analysis",
      "Cross-Sheet Formulas",
      "Goal & Progress Tracking",
      "Conditional Status Flags",
      "Dashboard Design",
      "Personal Finance Modeling",
    ],

    impact:
      "Gave the user a clear, category-by-category view of planned versus actual spending, making it easier to catch overspending early and stay on track through the month instead of running out of money before month-end. This was a real-world result from an actual user of the system.",

    tools: [
      "Google Sheets",
      "Google Sheets Formulas",
      "Data Validation",
      "Conditional Formatting",
    ],

    sheetEmbedUrl:
      "https://docs.google.com/spreadsheets/d/1aUoY9SBUjQJDZrZbEOAP09I2wPW2HFY3RT4LQHsKfMk/edit?usp=drivesdk",

    sheetRows: [],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
