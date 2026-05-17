# 🃏 Memory Card Game

A dynamic, configurable memory card game built with React 19 and Next.js. Players flip cards to find matching pairs — with adjustable grid sizes from 2×2 up to 10×10.

## ✨ Features

- Configurable grid size (2–10, even numbers only) with live validation
- Fisher-Yates shuffle for truly random, unbiased card distribution
- Three visual states per card: hidden, flipped (blue), matched (green)
- 1-second delay before unmatched cards flip back
- Win detection with congratulations message
- Reset button to start a fresh game at any time
- Responsive grid that adapts to screen width

## 🛠 Tech Stack

- **React 19** — functional components, hooks
- **Next.js 16** — App Router, file-based routing
- **Tailwind CSS v4** — utility-first styling
- **JavaScript (ES6+)** — Fisher-Yates algorithm, array destructuring

## 📂 Project Structure

```
03-memory-card-game/
├── app/
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page — renders MemoryGame
│   └── globals.css     # Global Tailwind styles
├── components/
│   └── MemoryGame.jsx  # Main game component with all logic
├── public/             # Static assets
├── package.json
└── next.config.mjs
```

## ▶️ Running

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🧠 Key Concepts Demonstrated

- **React Hooks** — `useState`, `useEffect`, `useCallback` working together
- **Derived state** — game win condition computed from `selectedPairs` vs `array.length`
- **Fisher-Yates shuffle** — O(n) unbiased shuffle algorithm
- **`useCallback`** — memoizing `initializeGame` to prevent unnecessary re-renders
- **Controlled inputs** — grid size input with validation and error messaging

## 🔮 Future Improvements

- [ ] Add move counter and timer
- [ ] Themed card faces (emojis, flags, country capitals)
- [ ] Best score persistence with localStorage
- [ ] Animated card flip with CSS 3D transforms
- [ ] Multiplayer: two-player turn-based mode

---

*Built to learn React hooks, Next.js App Router, and Tailwind CSS.*
