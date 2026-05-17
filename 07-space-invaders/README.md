# 🚀 Space Invaders — Canvas Game

A feature-complete browser space shooter built entirely with the HTML5 Canvas API and vanilla JavaScript. Defend against waves of enemy ships with adjustable difficulty, settings, sound, leaderboards, and fullscreen mode.

## ✨ Features

- Smooth 60fps game loop with real-time FPS counter
- Enemy wave generation with configurable spawn rate and speed
- Collision detection for lasers and enemy ships
- Lives system and shield percentage HUD
- Difficulty presets: Easy / Normal / Hard / Insane
- Graphics quality settings: Low / Medium / High / Ultra
- Mute / volume controls for SFX and background music
- Fullscreen mode (F key or button)
- WASD and Arrow key control schemes
- Settings dialog (`<dialog>` element, native browser modal)
- Pause/resume with P key or Pause button
- Leaderboard with top scores
- Skip-to-content accessibility link
- PWA manifest support

## 🛠 Tech Stack

- **HTML5 Canvas API** — all rendering: sprites, background, lasers, HUD overlays
- **JavaScript (ES6+)** — IIFE module pattern, config tables, game state machine
- **CSS3** — space-themed UI with radial gradients, Orbitron / Poppins fonts
- **Web APIs** — `requestAnimationFrame`, `<dialog>`, `<audio>`, Fullscreen API, keyboard events

## 📂 Project Structure

```
07-space-invaders/
├── index.html          # Game shell: header, HUD, canvas, settings dialog
├── app.js              # All game logic (~700 lines)
├── spritesheet.png     # Combined sprite sheet
└── spaceArt/
    └── png/
        ├── player.png · playerLeft.png · playerRight.png · playerDamaged.png
        ├── enemyShip.png · enemyUFO.png
        ├── laserRed.png · laserGreen.png · shield.png · life.png
        ├── meteorBig.png · meteorSmall.png
        └── Background/  # nebula, stars, speed lines
```

## ▶️ Running

Open `index.html` in any modern browser — no build step required.

**Controls:**

| Key | Action |
|-----|--------|
| `W` / `↑` | Move up |
| `S` / `↓` | Move down |
| `A` / `←` | Move left |
| `D` / `→` | Move right |
| `Space` | Fire laser |
| `P` | Pause / Resume |
| `F` | Toggle fullscreen |
| `Shift` | Special ability |

## 🧠 Key Concepts Demonstrated

- **Game loop architecture** — `requestAnimationFrame` with delta-time calculation
- **IIFE module pattern** — entire game encapsulated, no global scope pollution
- **Config-driven design** — `difficultyTable` drives enemy behavior at runtime
- **Collision detection** — AABB (axis-aligned bounding box) rectangle intersection
- **Canvas 2D API** — `drawImage`, `clearRect`, `fillText`, `save`/`restore`
- **`<dialog>` element** — native browser modal for settings (no custom overlay needed)
- **Fullscreen API** — `requestFullscreen` / `exitFullscreen` with vendor prefixes

## 🔮 Future Improvements

- [ ] Persistent leaderboard in localStorage
- [ ] Animated explosion particle effects
- [ ] Boss enemy at every 5th wave
- [ ] Power-up drops (shield restore, rapid fire, bomb)
- [ ] Mobile touch controls overlay

---

*Most technically complex project in the portfolio — demonstrates game architecture, Canvas API mastery, and advanced JavaScript patterns.*
