# 🏛️ Stoicism Presentation

> A modern, interactive web application for presenting Stoic philosophy

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/status-ready-brightgreen)]()
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://mariuscomper.github.io/stoicism-presentation/)

## 🚀 View Online

**👉 [https://mariuscomper.github.io/stoicism-presentation/](https://mariuscomper.github.io/stoicism-presentation/)**

No installation required! Just click the link above to start the presentation.

---

## 💻 Run Locally (Optional)

If you prefer to run it locally:

```bash
# Clone the repository
git clone https://github.com/mariuscomper/stoicism-presentation.git
cd stoicism-presentation

# Option 1: Use the quick start script
./RUN_PRESENTATION.sh

# Option 2: Run Python server manually
python3 server.py

# Then open http://localhost:8000
```

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
- 🌓 **Light and dark themes** - explicit, persistent theme control
- ♿ **Reduced-motion support** - respects the system accessibility preference
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
- **Dependencies**: none; fonts and icons use local system fallbacks

The former `stoicism_presentation.html` entry is retained as a dependency-free compatibility redirect to `index.html`.
- **Data**: JSON (easy to edit)
- **Dependencies**: Zero! Pure vanilla code
- **Size**: Only 67 KB total
- **Hosting**: GitHub Pages (free!)

---

## 📁 Project Structure

```
.
├── index.html              # Main web app
├── app.js                  # Interactive features
├── presentation_data.json  # Slide content (editable!)
├── server.py              # Local dev server (optional)
├── RUN_PRESENTATION.sh    # Quick start script (optional)
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
4. **Share the link** - Send the GitHub Pages URL to anyone!
5. **Second monitor** - Show overview on laptop, present on screen

---

## 📈 Stats

- **Total Features**: 100+
- **Load Time**: < 1 second
- **File Size**: 67 KB
- **Slides**: 19
- **Browser Support**: All modern browsers
- **Accessibility**: Works on any device with a browser

---

## 🎓 Ready to Present!

Just visit **[mariuscomper.github.io/stoicism-presentation](https://mariuscomper.github.io/stoicism-presentation/)** and you're ready to go!

1. Press **`F`** for fullscreen
2. Navigate with **arrow keys**
3. Share Stoic wisdom! 🏛️

---

## 🌐 Share This Presentation

Perfect for:
- Philosophy classes and lectures
- Book clubs and discussion groups
- Personal study and reflection
- Workshops on mental resilience
- Introduction to Stoic practices

Simply share the link: **https://mariuscomper.github.io/stoicism-presentation/**

---

## 📄 License

MIT License - feel free to use this for your own presentations!

---

**Built with Claude Code** • **Zero Dependencies** • **Live on GitHub Pages**
