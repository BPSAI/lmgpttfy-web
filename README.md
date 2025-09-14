# Let Me GPT That For You (LMGPTTFY)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Flmgpttfy.io)](https://lmgpttfy.io)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://pages.github.com/)

For all those people who find it more convenient to ask you instead of AI.

## What is LMGPTTFY?

LMGPTTFY is a humorous web tool inspired by "Let Me Google That For You" but for the AI age. When someone asks you a question they could easily ask ChatGPT, generate a link that:

1. **Shows a typing animation** of their question
2. **Displays a sarcastic message** about pressing Enter
3. **Redirects to ChatGPT** with the question pre-filled
4. **Teaches them** they literally just need to press Enter

## Features

- **Static Site** - No backend required, runs entirely in the browser
- **Free Hosting** - Deployed on GitHub Pages at zero cost
- **Mobile Responsive** - Works on all devices
- **Dark Mode** - Easy on the eyes
- **Social Sharing** - Share links on Twitter, Reddit, or via email
- **Customizable Messages** - Random sarcastic messages for variety
- **Fast & Lightweight** - No frameworks, just vanilla HTML/CSS/JS

## Live Demo

Visit [https://lmgpttfy.io](https://lmgpttfy.io) to try it out!

## Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bpsai/lmgpttfy-web.git
   cd lmgpttfy-web
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

3. **Visit:**
   ```
   http://localhost:8000
   ```

## Project Structure

```
lmgpttfy-web/
├── index.html          # Homepage - Query input
├── generate.html       # Link generation page
├── s.html              # Animation page (s = search)
├── 404.html            # Custom 404 page
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # All JavaScript
├── images/             # Favicons and assets
├── CNAME               # Custom domain config
└── README.md           # This file
```

## Deployment

### Deploy to GitHub Pages

1. **Fork this repository**

2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)

3. **Custom Domain (Optional):**
   - Add your domain to the CNAME file
   - Configure DNS (for Namecheap):
     - Add A records pointing to:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - OR add CNAME record pointing to: `bpsai.github.io`

### Deploy to Other Platforms

**Netlify:**
- Drag and drop the folder to Netlify
- Automatic deployment

**Vercel:**
- Import the GitHub repository
- Zero configuration needed

**Surge.sh:**
```bash
npm install -g surge
surge
```

## Customization

### Change the Accent Color

Edit the CSS variables in `css/style.css`:

```css
:root {
    --accent-primary: #00e676;  /* Change this */
    --accent-hover: #00c853;    /* And this */
}
```

### Add More Sarcastic Messages

Edit the `sarcasticMessages` array in `js/app.js`:

```javascript
const sarcasticMessages = [
    {
        line1: "Your custom message...",
        line2: "Your instruction:",
        line3: "Your punchline!"
    },
    // Add more...
];
```

### Change Redirect Delay

In `js/app.js`, modify the countdown start value:

```javascript
let count = 5;  // Change to desired seconds
```

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

We love contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [Let Me Google That For You](https://lmgtfy.com)
- Built for the AI age when people ask humans instead of ChatGPT
- Special thanks to everyone who's ever been asked a Google-able question

## Known Issues

- ChatGPT requires manual Enter press (by design from OpenAI)
- Some ad blockers may interfere with redirects
- URL length limited by browser (usually ~2000 characters)

## Future Ideas

- [ ] Support for other AI services (Claude, Gemini, etc.)
- [ ] Browser extension for quick link generation
- [ ] Analytics to track how many people actually press Enter
- [ ] API for programmatic link generation
- [ ] More animation styles

## Support

- **Issues:** [GitHub Issues](https://github.com/bpsai/lmgpttfy-web/issues)
- **Discussions:** [GitHub Discussions](https://github.com/bpsai/lmgpttfy-web/discussions)

## Authors

- ([@Buschleague](https://github.com/Buschleague))
- ([@56BadKarma](https://github.com/56BadKarma))

---

Made with sarcasm for all those times someone asked you something they could've asked AI.