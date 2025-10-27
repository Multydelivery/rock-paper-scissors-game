# Rock-Paper-Scissors

A Rock-Paper-Scissors game available in both command-line and web versions.

## 🎮 Web Version (Recommended)

The web version features a beautiful, interactive interface with animations and sound effects.

**Quick start:**
1. Start a local server:
   ```
   py -3 -m http.server 8000
   ```
2. Open your browser and go to: `http://localhost:8000`

**Features:**
- Beautiful gradient design with animations
- Score tracking
- Responsive design (works on mobile)
- Keyboard shortcuts: `R` (Rock), `P` (Paper), `S` (Scissors), `Esc` (Reset)
- Easter egg: Try the Konami code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA

## 🖥️ Command-Line Version

Simple terminal-based Rock-Paper-Scissors game.

**Run the game:**
```
python main.py
```

**Run tests (requires pytest):**
```
python -m pip install pytest
pytest -q
```

## Files Structure

- `index.html` - Web version HTML structure
- `style.css` - Styling and animations for web version
- `script.js` - Game logic and interactions for web version
- `main.py` - Command-line version and core game logic
- `tests/test_rps.py` - Unit tests for the game logic
