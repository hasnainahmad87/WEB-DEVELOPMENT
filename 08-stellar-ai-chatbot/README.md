# 🤖 Stellar AI Chatbot

A full-stack AI chat application with a polished dark-mode frontend and a Python/Flask backend powered by a large language model. Features real-time message streaming, typing indicators, accessibility-first markup, and a PWA-ready structure.

## ✨ Features

- Dark/light theme toggle (persisted across sessions)
- Animated typing indicator (3-dot bounce animation) while AI responds
- XSS-safe message rendering (HTML escaping before DOM injection)
- `Shift+Enter` for newline, `Enter` to send
- Accessible chat log with `role="log"`, `aria-live="polite"`, `aria-relevant`
- Visually hidden labels for screen readers
- Clear chat button with confirmation
- Live backend status indicator in the footer
- PWA manifest ready (`manifest.webmanifest`)
- Responsive layout for mobile and desktop

## 🛠 Tech Stack

**Frontend:**
- HTML5 · CSS3 · Vanilla JavaScript (ES6+)
- Inter variable font · Font Awesome 6 icons
- Custom CSS variables for theme switching

**Backend:**
- Python 3 · Flask
- LLM integration via `llm.py` (configurable model provider)

## 📂 Project Structure

```
08-stellar-ai-chatbot/
├── frontend/
│   ├── index.html      # Chat UI with full accessibility markup
│   ├── styles.css      # Dark-mode CSS with CSS custom properties
│   └── app.js          # IIFE chat client: API calls, DOM updates, typing indicator
└── backend/
    ├── api.py          # Flask REST endpoint (/hello)
    └── llm.py          # LLM integration layer
```

## ▶️ Running

**Backend:**
```bash
cd backend
pip install flask flask-cors
python api.py       # starts on http://localhost:5000
```

**Frontend:**
```bash
# Update BASE_URL in frontend/app.js to point to your backend
# Then open frontend/index.html in browser
```

## 🌐 API

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| `POST` | `/hello` | `{ "message": "..." }` | `{ "response": "..." }` |

## 🧠 Key Concepts Demonstrated

- **IIFE pattern** — entire frontend wrapped in an immediately-invoked function, no global leakage
- **XSS prevention** — `escapeHtml()` sanitizes all user input before innerHTML injection
- **Accessible live regions** — `role="log"` + `aria-live="polite"` announces new messages to screen readers
- **Async/await error handling** — try/catch with user-facing error messages on network failure
- **CSS custom properties** — theme switching with a single `data-theme` attribute on the root
- **Full-stack integration** — frontend `fetch` calls connect to a real Python/Flask LLM backend

## 🔮 Future Improvements

- [ ] Stream responses token-by-token (SSE / WebSocket)
- [ ] Conversation history (multi-turn context sent to backend)
- [ ] Selectable AI personas or system prompts
- [ ] Export chat history as a text file
- [ ] Deploy frontend to Vercel, backend to Render

---

*Built to learn full-stack integration, accessibility best practices, and LLM-powered application development.*
