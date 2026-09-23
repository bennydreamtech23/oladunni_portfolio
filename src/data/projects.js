export const projects = [
  {
    id: '01',
    slug: 'executive-virtual-assistant-operations',
    title: 'Executive & Virtual Assistant Daily Operations System',
    subtitle: 'Google Sheets | Executive Operations & VA Management',
    description:
      'A centralized system for daily tasks, appointments, deadlines and automated morning briefs — designed to reduce tool switching and make daily operations easier to manage.',
    image: '/images/project-01.png',
    overview:
      'Built a Google Sheets system that centralizes an executive’s daily tasks, appointments and deadlines, then turns the most important information into a reliable daily brief.',
    challenge: [
      'Daily tasks and deadlines were split across multiple tools.',
      'Preparing a morning brief took too much manual effort.',
      'Task ownership and follow-up were difficult to track consistently.',
    ],
    solution:
      'Designed one structured workbook with task tracking, deadline visibility, priority indicators and a dashboard-style brief. The workflow is intentionally simple so both the executive and assistant can use it without extra software.',
    skills: ['Data validation & dropdowns', 'FILTER / SORT / IFERROR', 'Cross-sheet references', 'Conditional formatting', 'Automated calculations', 'Dynamic daily reporting'],
    impact:
      'Creates one source of truth for recurring executive operations and makes the most important daily information visible without searching through multiple apps.',
    tools: ['Google Sheets', 'Google Sheets formulas', 'Data validation', 'Conditional formatting', 'PDF export'],
    sheetEmbedUrl: '',
    sheetRows: [
      ['Priority', 'Task', 'Owner', 'Due', 'Status'],
      ['High', 'Prepare board brief', 'Catherine', '09:30', 'In progress'],
      ['Medium', 'Confirm client call', 'Catherine', '11:00', 'Done'],
      ['High', 'Review expense report', 'Executive', '14:00', 'Pending'],
      ['Low', 'Update travel notes', 'Catherine', '16:30', 'Scheduled'],
    ],
  },
  {
    id: '02',
    slug: 'content-social-media-management',
    title: 'Content & Social Media Management System',
    subtitle: 'Content Planning | Analytics | Reporting',
    description:
      'An end-to-end content workflow that organizes planning, publishing status and simple performance reporting across platforms.',
    image: '/images/project-02.png',
    overview:
      'A spreadsheet workspace for content planning, publishing coordination and monthly performance review.',
    challenge: ['Content ideas were scattered.', 'Publishing status was hard to see.', 'Reporting required manual consolidation.'],
    solution:
      'Combined planning, status tracking and analytics into one workbook with clear views for weekly execution and monthly reporting.',
    skills: ['Content calendar design', 'Status logic', 'Dashboard summaries', 'Cross-sheet references'],
    impact: 'Makes it easier to move from content idea to published post while keeping reporting in the same system.',
    tools: ['Google Sheets', 'Formulas', 'Charts', 'Data validation'],
    sheetEmbedUrl: '',
    sheetRows: [
      ['Date', 'Platform', 'Content', 'Status', 'Reach'],
      ['Sep 22', 'LinkedIn', 'Operations tip', 'Published', '2,340'],
      ['Sep 24', 'Instagram', 'Behind the scenes', 'Scheduled', '—'],
      ['Sep 25', 'LinkedIn', 'Case study', 'Draft', '—'],
    ],
  },
  {
    id: '03',
    slug: 'invoice-expense-processing',
    title: 'Invoice & Expense Processing System',
    subtitle: 'Finance Operations | Tracking | Reporting',
    description:
      'A practical invoice and expense tracker with payment status, due dates and outstanding balance visibility.',
    image: '/images/project-03.png',
    overview:
      'A compact finance operations workbook for managing invoices and recurring expenses without losing track of status or due dates.',
    challenge: ['Invoices were easy to miss.', 'Outstanding balances were not visible in one place.', 'Month-end review was slow.'],
    solution: 'Created structured invoice and expense tables with status labels, due-date indicators and summary calculations.',
    skills: ['SUMIFS', 'Status rules', 'Date logic', 'Financial summaries'],
    impact: 'Improves visibility of paid, due and overdue items and reduces month-end reconciliation effort.',
    tools: ['Google Sheets', 'Formulas', 'Conditional formatting'],
    sheetEmbedUrl: '',
    sheetRows: [
      ['Invoice', 'Client', 'Amount', 'Due', 'Status'],
      ['INV-1041', 'Client A', '$1,250', 'Sep 25', 'Paid'],
      ['INV-1042', 'Client B', '$820', 'Sep 28', 'Due'],
      ['INV-1043', 'Client C', '$560', 'Sep 20', 'Overdue'],
    ],
  },
  {
    id: '04',
    slug: 'business-data-cleaning-reporting',
    title: 'Business Data Cleaning & Reporting System',
    subtitle: 'Data Quality | Validation | Reporting',
    description:
      'A structured workflow that checks records, flags problems and prepares cleaner data for reporting.',
    image: '/images/project-04.png',
    overview: 'A spreadsheet system for spotting duplicate, missing and inconsistent records before reporting begins.',
    challenge: ['Missing fields reduced report quality.', 'Duplicate entries caused confusion.', 'Manual checks were inconsistent.'],
    solution: 'Built a validation-focused workbook with clear flags, review columns and summary counts for common quality issues.',
    skills: ['Data cleaning', 'Validation rules', 'Duplicate checks', 'Exception reporting'],
    impact: 'Makes data issues visible earlier and creates a repeatable cleanup workflow.',
    tools: ['Google Sheets', 'Data validation', 'Conditional formatting'],
    sheetEmbedUrl: '',
    sheetRows: [
      ['Customer', 'Email', 'Duplicate', 'Missing data'],
      ['Ada Obi', 'ada@example.com', 'No', 'No'],
      ['T. James', '—', 'No', 'Yes'],
      ['Ada Obi', 'ada@example.com', 'Yes', 'No'],
    ],
  },
  {
    id: '05',
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    subtitle: 'Inventory | Stock Control | Alerts',
    description:
      'Tracks stock levels, expiry dates and low-stock items with a compact management dashboard.',
    image: '/images/project-05.png',
    overview: 'A simple inventory workbook focused on stock visibility and replenishment decisions.',
    challenge: ['Stock levels were updated manually.', 'Expiry dates were difficult to monitor.', 'Low-stock items were discovered too late.'],
    solution: 'Created structured stock records with alert logic and summary cards for available, expired and low-stock items.',
    skills: ['Stock calculations', 'Date rules', 'Alerts', 'Dashboard summaries'],
    impact: 'Provides a quick view of inventory health and highlights items that need action.',
    tools: ['Google Sheets', 'Formulas', 'Conditional formatting'],
    sheetEmbedUrl: '',
    sheetRows: [
      ['Item', 'Stock', 'Reorder level', 'Expiry', 'Alert'],
      ['Rice', '120', '40', 'Dec 2026', 'OK'],
      ['Cooking oil', '18', '25', 'Nov 2026', 'Low'],
      ['Yoghurt', '9', '10', 'Sep 2026', 'Expiring'],
    ],
  },
  {
    id: '06',
    slug: 'personal-budget-dashboard',
    title: 'Personal Budget Tracker & Dashboard',
    subtitle: 'Budgeting | Monthly Reporting | Dashboard',
    description:
      'Tracks monthly income, expenses and savings with a clear at-a-glance dashboard.',
    image: '/images/project-06.png',
    overview: 'A personal finance workbook that turns transaction entries into an easy monthly overview.',
    challenge: ['Spending categories were not visible.', 'Savings progress was difficult to measure.', 'Monthly review took too long.'],
    solution: 'Built transaction categories, automated totals and a dashboard for income, expenses, savings and category trends.',
    skills: ['SUMIFS', 'Charts', 'Category tracking', 'Monthly reporting'],
    impact: 'Makes spending patterns easier to understand and monthly savings progress easier to track.',
    tools: ['Google Sheets', 'Charts', 'Formulas'],
    sheetEmbedUrl: '',
    sheetRows: [
      ['Category', 'Budget', 'Actual', 'Variance'],
      ['Housing', '$900', '$900', '$0'],
      ['Food', '$450', '$390', '$60'],
      ['Transport', '$220', '$260', '-$40'],
    ],
  },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
