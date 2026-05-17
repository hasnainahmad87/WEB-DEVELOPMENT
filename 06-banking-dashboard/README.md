# 🐿️ Squirrel Banking Dashboard

A fully functional single-page banking application built with vanilla JavaScript — no frameworks. Includes client-side routing, REST API integration, form validation, a modal transaction dialog, theme toggling, and internationalized currency formatting.

## ✨ Features

- **SPA routing** — login and dashboard views powered by `<template>` elements and JS navigation
- **User registration & login** — form validation with accessible error messages
- **Transaction management** — add/view income and expense transactions via a modal dialog
- **Internationalized currency** — uses the `Intl.NumberFormat` API with accounting style
- **Dark/light theme toggle** — persisted across sessions
- **LocalStorage state** — account data and schema version stored client-side
- **REST API backend** — Node.js/Express server (included in `/api`)
- **Accessibility** — ARIA roles, live regions, semantic HTML throughout

## 🛠 Tech Stack

- **Frontend:** HTML5 · CSS3 · Vanilla JavaScript (ES6+)
- **Backend:** Node.js · Express
- **Browser APIs:** `Intl.NumberFormat` · `Intl.DateTimeFormat` · localStorage · Fetch API · `<template>` elements

## 📂 Project Structure

```
06-banking-dashboard/
├── index.html      # SPA shell with <template> elements for each page
├── app.js          # All client-side logic: routing, state, API calls
├── styles.css      # Full responsive UI — auth card, dashboard, table
├── logo.svg        # Squirrel Banking brand logo
└── api/
    ├── server.js   # Express REST API (accounts CRUD)
    └── package.json
```

## ▶️ Running

**Frontend only** (read-only demo with mocked data):
```bash
# Open index.html directly in browser
```

**Full stack** (with live API):
```bash
cd api
npm install
node server.js      # starts on http://localhost:5000

# Then open index.html in browser
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/accounts/:user` | Get account by username |
| `POST` | `/api/accounts` | Register new account |
| `POST` | `/api/accounts/:user/transactions` | Add transaction |

## 🧠 Key Concepts Demonstrated

- **Client-side routing** — URL hash-based navigation without React Router or Vue Router
- **`<template>` elements** — cloning and injecting page templates without frameworks
- **Intl API** — currency-aware formatting, accounting sign style, locale detection
- **Schema versioning** — `schemaVersion` key in localStorage for safe data migration
- **Modal accessibility** — `role="dialog"`, `aria-modal`, `aria-labelledby`, Escape key close

## 🔮 Future Improvements

- [ ] Chart.js balance history graph
- [ ] Export transactions to CSV
- [ ] Multiple account support (savings, checking)
- [ ] Budget category tagging

---

*Built to understand SPA architecture, state management, and REST API integration without a framework.*
