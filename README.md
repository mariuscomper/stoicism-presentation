# 🏛️ Stoicism Presentation

> A modern, interactive web application for presenting Stoic philosophy

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/status-ready-brightgreen)]()

## 🚀 Quick Start

The easiest way to run the presentation:

```bash
./RUN_PRESENTATION.sh
```

Or manually:

```bash
python3 server.py
```

Then open **http://localhost:8000** in your browser.

---

## ✨ Features

### Navigation
- ⌨️ **Keyboard shortcuts** - Arrow keys, Space, Esc, F, A, Home, End
- 🖱️ **Click navigation** - Visual arrow buttons
- 📱 **Touch gestures** - Swipe left/right on mobile

### Viewing Modes
- 📺 **Normal mode** - Standard presentation
- 🖥️ **Fullscreen mode** - Distraction-free presenting (press `F`)
- 🔍 **Overview mode** - See all 19 slides at once (press `Esc`)
- ⏯️ **Auto-play mode** - Hands-free slideshow (press `A`)

### Visual Features
- 🎨 **Smooth animations** - Professional transitions
- 📊 **Progress tracking** - Visual bar + slide counter
- 🌓 **Dark theme** - Stoic aesthetic
- 📱 **Responsive design** - Works on all devices

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `→` `Space` | Next slide |
| `←` | Previous slide |
| `Esc` | Overview mode |
| `F` | Fullscreen |
| `A` | Auto-play |
| `Home` | First slide |
| `End` | Last slide |

---

## 📖 Content

**19 Slides** covering:

### Part 1: The Foundation
- Introduction to Stoicism
- Historical timeline
- Key philosophers (Seneca, Epictetus, Marcus Aurelius)
- Four Cardinal Virtues
- Dichotomy of Control

### Part 2: The Practice
- Daily Stoic exercises
- Premeditatio Malorum
- Morning & evening routines
- Mindfulness practices
- Journaling techniques

### Part 3: The Science
- Stoicism and CBT
- Research evidence
- Digital Stoicism
- Real-world applications

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Python 3 (development server)
- **Data**: JSON (easy to edit)
- **Dependencies**: Zero! Pure vanilla code
- **Size**: Only 67 KB total

---

## 📁 Project Structure

```
.
├── index.html              # Main web app
├── app.js                  # Interactive features
├── presentation_data.json  # Slide content (editable!)
├── server.py              # Development server
├── RUN_PRESENTATION.sh    # Quick start script
│
├── Documentation/
│   ├── START_HERE.md       # Quick start guide
│   ├── QUICKSTART.md       # 30-second reference
│   ├── FEATURES.md         # Complete feature list
│   └── PRESENTATION_README.md  # Full user manual
│
└── stoicism_presentation.html  # Original HTML
```

---

## 🎨 Customization

### Change Content

Edit `presentation_data.json`:

```json
{
  "slides": [
    {
      "title": "Your Title",
      "content": "Your content"
    }
  ]
}
```

### Change Colors

Edit CSS variables in `index.html`:

```css
:root {
    --primary: #C49A6C;    /* Bronze */
    --secondary: #5C6D67;  /* Sage */
    --bg: #2B2B2B;         /* Dark */
}
```

---

## 📱 Browser Support

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS / Android)

---

## 📚 Documentation

- **START_HERE.md** - Quick welcome guide
- **QUICKSTART.md** - 30-second reference
- **FEATURES.md** - Complete feature list (100+)
- **PRESENTATION_README.md** - Full user manual

---

## 💡 Pro Tips

1. **Fullscreen mode** - Press `F` before presenting
2. **Overview mode** - Use `Esc` to navigate quickly
3. **Auto-play** - Press `A` for hands-free demos
4. **Second monitor** - Show overview on laptop, present on screen

---

## 📈 Stats

- **Total Features**: 100+
- **Load Time**: < 1 second
- **File Size**: 67 KB
- **Slides**: 19
- **Browser Support**: All modern browsers

---

## 🎓 Ready to Present!

Everything is set up and working perfectly.

1. Run `./RUN_PRESENTATION.sh` or `python3 server.py`
2. Open **http://localhost:8000**
3. Press **`F`** for fullscreen
4. Navigate with **arrow keys**
5. Share Stoic wisdom! 🏛️

---

## 📄 License

MIT License - feel free to use this for your own presentations!

---

**Built with Claude Code** • **Zero Dependencies** • **Production Ready**
