# 🧠 Dev Quiz App

A multilingual web development quiz application built with Vue 3 and Vite. Tests knowledge of HTML, CSS, JavaScript, and frontend concepts — available in 15+ languages.

## ✨ Features

- Multiple quiz categories with multi-choice questions
- Multilingual support via JSON translation files (15+ locales)
- Vue Router for client-side navigation between quizzes
- Component-based architecture (Quiz, QuizGreeting, QuizzesComponent)
- Correct/incorrect answer feedback
- Clean, minimal UI

## 🛠 Tech Stack

- **Vue 3** — Composition API, `<script setup>`, reactive state
- **Vite** — lightning-fast dev server and build tool
- **Vue Router 4** — client-side routing
- **JavaScript (ES6+)** — dynamic imports, locale matching

## 📂 Project Structure

```
04-quiz-app/
├── src/
│   ├── App.vue                     # Root component with router-view
│   ├── main.js                     # App entry point
│   ├── router/index.js             # Route definitions
│   ├── components/
│   │   ├── QuizComponent.vue       # Individual quiz with Q&A logic
│   │   ├── QuizzesComponent.vue    # Quiz listing/selection
│   │   └── QuizGreeting.vue        # Header greeting
│   ├── views/
│   │   ├── HomeView.vue            # Quiz selection page
│   │   └── AboutView.vue           # About page
│   └── assets/
│       ├── translations/           # i18n JSON files (15+ languages)
│       └── *.css                   # App-wide styles
├── vite.config.js
└── package.json
```

## ▶️ Running

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🧠 Key Concepts Demonstrated

- **Vue 3 SFC** — Single File Components with `<template>`, `<script>`, `<style>`
- **Vue Router** — programmatic navigation, `<RouterLink>`, `<RouterView>`
- **i18n without a library** — locale detection via `navigator.language`, JSON translation files
- **`v-for` / `v-if`** — conditional rendering and list iteration
- **Component props** — passing data between parent and child components

## 🔮 Future Improvements

- [ ] Add score tracking and a results summary screen
- [ ] Timer per question for added challenge
- [ ] Randomize question order on each attempt
- [ ] Add more categories: Git, React, CSS specificity
- [ ] Persist high scores with localStorage

---

*Built to learn Vue 3, Vite, and component-based architecture alongside React.*
