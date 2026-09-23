# Vue Spreadsheet Portfolio

A Vue 3 + Vite implementation based on the supplied two-page portfolio reference.

## What changed in this version

The app is now split into reusable Vue components and two real page layouts:

- **Home page** — hero, services, “How I Work”, selected projects, tools and contact CTA.
- **Project details page** — title + screenshot, project overview, business challenge, solution, skills, impact, tools, spreadsheet demo and other projects.

### Components

```text
src/
├── components/
│   ├── ContactCta.vue
│   ├── HeroSection.vue
│   ├── HowIWork.vue
│   ├── ProjectCard.vue
│   ├── ProjectGrid.vue
│   ├── SiteFooter.vue
│   ├── SiteHeader.vue
│   └── SpreadsheetShowcase.vue
├── data/
│   └── projects.js
├── pages/
│   ├── HomePage.vue
│   └── ProjectDetailsPage.vue
├── assets/
│   └── main.css
├── App.vue
├── main.js
└── router.js
```

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Showing spreadsheet work

`SpreadsheetShowcase.vue` supports two approaches.

### Option 1 — Built-in portfolio preview

This is the safest default. Add sample rows to `sheetRows` in `src/data/projects.js`:

```js
sheetRows: [
  ['Priority', 'Task', 'Owner', 'Due', 'Status'],
  ['High', 'Prepare board brief', 'Catherine', '09:30', 'In progress'],
]
```

The component renders a Google-Sheets-like read-only preview directly in the portfolio. This is good when the real spreadsheet contains confidential client data.

### Option 2 — Embed a real Google Sheet

For a sheet that is safe to show publicly:

1. Open the Google Sheet.
2. Use **File → Share → Publish to web**.
3. Publish only the tab/range you want visitors to see.
4. Copy the published/embed URL.
5. Add it to the relevant project in `src/data/projects.js`:

```js
sheetEmbedUrl: 'YOUR_PUBLISHED_GOOGLE_SHEET_EMBED_URL'
```

When `sheetEmbedUrl` has a value, `SpreadsheetShowcase.vue` automatically displays the live sheet inside an iframe. When it is empty, the local portfolio preview is shown instead.

### Recommended portfolio approach

Use a **static screenshot on the project card** for fast loading, then use the **read-only spreadsheet preview or published iframe on the project detail page**. Never expose private client sheets, formulas, customer records or internal financial data just to demonstrate the project.

## Replacing project screenshots

The current images are cropped from the supplied design reference so the implementation matches the intended layout. Replace these files with screenshots of the real spreadsheet projects:

```text
public/images/project-01.png
public/images/project-02.png
public/images/project-03.png
public/images/project-04.png
public/images/project-05.png
public/images/project-06.png
```

Keep the images around a **16:9 or 1.7:1 landscape ratio** so the card grid remains aligned.
