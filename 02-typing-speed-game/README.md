# ⌨️ Typing Speed Game

A browser-based typing speed game built with modern ES6+ JavaScript. Race against the clock to type Sherlock Holmes quotes as fast and accurately as possible.

## ✨ Features

- Random quote selection from a curated Sherlock Holmes quote pool
- Real-time word-by-word highlighting as you type
- Instant error feedback with red input border
- Completion time displayed in seconds (2 decimal precision)
- Live date and time display (auto-updates every minute)
- Accessible hidden labels and Font Awesome icons
- Fully responsive layout

## 🛠 Tech Stack

- **HTML5** — semantic form elements, accessible labels
- **CSS3** — gradient backgrounds, transitions, responsive media queries
- **JavaScript (ES6+)** — arrow functions, template literals, const/let, array methods

## 📂 Project Structure

```
02-typing-speed-game/
├── index.html    # Game layout with quote display and input field
├── index.css     # Teal gradient theme, responsive styles
└── index.js      # Game logic: state, rendering, typing handler
```

## ▶️ Running

Open `index.html` in any browser — no build step required.

## 🧠 Key Concepts Demonstrated

- **Game state management** — `words[]`, `wordIndex`, `startTime` as module-level state
- **ES6 arrow functions** — used throughout for clean, concise syntax
- **DOM rendering** — quote rendered as individual `<span>` elements for word-level highlighting
- **Event-driven architecture** — input events drive all game logic
- **Date/Time API** — live clock with 12-hour AM/PM formatting

## 🔮 Future Improvements

- [ ] Add WPM (words per minute) calculation alongside seconds
- [ ] High score leaderboard saved to localStorage
- [ ] Category selector (tech quotes, motivational, etc.)
- [ ] Difficulty modes (easy = short words, hard = technical jargon)
- [ ] Sound effects on correct/incorrect keypress

---

*Built to practice ES6+ JavaScript, event handling, and DOM manipulation.*
