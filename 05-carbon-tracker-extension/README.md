# 🌱 Carbon Tracker — Chrome Extension

A Manifest V3 Chrome extension that displays real-time carbon intensity and fossil fuel usage data for any electricity grid region — helping users make energy-conscious browsing decisions.

## ✨ Features

- Fetches live carbon intensity (gCO₂/kWh) for any grid region
- Dynamically colors the extension icon based on carbon level (green → red scale)
- Persists user's API key and region in localStorage
- Shows fossil fuel percentage alongside carbon intensity
- Error handling for unavailable regions
- Clear/reset functionality to change region

## 🛠 Tech Stack

- **Chrome Extensions Manifest V3** — service worker, `chrome.runtime`, `chrome.action`
- **JavaScript (ES6+)** — async/await, try/catch, localStorage
- **Axios** — HTTP client for CO₂Signal API requests
- **HTML/CSS** — extension popup UI

## 📂 Project Structure

```
05-carbon-tracker-extension/
├── dist/
│   ├── manifest.json     # Extension manifest (MV3)
│   ├── index.html        # Popup UI
│   ├── main.js           # Bundled output
│   ├── background.js     # Service worker (icon color updates)
│   ├── styles.css        # Popup styles
│   └── images/           # Extension icons
├── index.js              # Source: form handling, API calls, DOM updates
└── package.json
```

## ▶️ Installing the Extension Locally

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked** and select the `dist/` folder
4. The extension icon appears in your toolbar

## 🔑 API Setup

This extension uses the [CO₂Signal API](https://www.co2signal.com/).

1. Sign up for a free API key at co2signal.com
2. Enter your key and a region code (e.g., `GB`, `US-CAL-CISO`) in the extension popup

## 🧠 Key Concepts Demonstrated

- **Manifest V3** — service workers replace background pages
- **`chrome.runtime.sendMessage`** — popup-to-background communication
- **`chrome.action.setIcon`** — dynamic icon based on data
- **localStorage** — persisting API credentials across sessions
- **async/await error handling** — graceful fallback for failed API calls

## 🔮 Future Improvements

- [ ] Auto-detect user's region using browser geolocation
- [ ] Historical carbon trend chart (last 24 hours)
- [ ] Weekly carbon usage badge
- [ ] Support additional sustainability APIs

---

*Built to learn Chrome Extension development, background service workers, and external API integration.*
