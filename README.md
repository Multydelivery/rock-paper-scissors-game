# 🐍 Rock-Paper-Scissors (Pure Python)

![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![PyScript](https://img.shields.io/badge/PyScript-enabled-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Web](https://img.shields.io/badge/web-ready-brightgreen.svg)

A Rock-Paper-Scissors game powered by **pure Python** - available in both command-line and web versions using PyScript.

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

## 🚀 Deploy to GitHub & Netlify

### Step 1: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new)
2. Copy the remote URL (e.g., `https://github.com/yourusername/rock-paper-scissors.git`)
3. Connect your local repository:
   ```bash
   git remote add origin https://github.com/yourusername/rock-paper-scissors.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Netlify
1. Go to [Netlify](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Deploy settings (auto-detected from `netlify.toml`):
   - **Build command:** (leave empty)
   - **Publish directory:** (leave empty, defaults to root)
5. Click "Deploy site"

Your site will be live at `https://amazing-name-123456.netlify.app`

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Follow DNS configuration instructions

## 📁 Files Structure

- `index.html` - Web version HTML structure
- `style.css` - Styling and animations for web version  
- `script.js` - Game logic and interactions for web version
- `main.py` - Command-line version and core game logic
- `tests/test_rps.py` - Unit tests for the game logic
- `netlify.toml` - Netlify deployment configuration
- `.gitignore` - Git ignore rules
