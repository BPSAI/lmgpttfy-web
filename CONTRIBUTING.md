# Contributing to LMGPTTFY

First off, thank you for considering contributing to LMGPTTFY! It's people like you that make LMGPTTFY such a great tool for passive-aggressively helping people learn to use AI.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if relevant**
- **Include browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Provide specific examples to demonstrate the enhancement**
- **Describe the current behavior and explain what behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** 
3. **Test your changes** locally
4. **Ensure the code follows the existing style**
5. **Write a clear commit message**
6. **Open a Pull Request**

## Branching & Commits
- Branch from `main` using: `feature/<short-goal>`, `refactor/<module>`, or `fix/<ticket>`.
- Use Conventional Commits:
  - `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`, `build:`, `ci:`
  - Example: `refactor(auth): inject interface for token validation`

## Development Process

### Prerequisites

- Git
- A modern web browser
- Python 3 (for local server) or Node.js

### Local Development

1. Fork and clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/lmgpttfy-web.git
cd lmgpttfy-web
```

2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

3. Start a local server:
```bash
python -m http.server 8000
# or
npx http-server
```

4. Make your changes and test at `http://localhost:8000`

5. Commit your changes:
```bash
git add .
git commit -m "Add your descriptive commit message"
```

6. Push to your fork:
```bash
git push origin feature/your-feature-name
```

7. Open a Pull Request

## Style Guidelines

### HTML

- Use semantic HTML5 elements
- Include proper meta tags
- Ensure all inputs have labels or aria-labels
- Maintain consistent indentation (2 spaces)

### CSS

- Follow the existing CSS variable pattern
- Use descriptive class names
- Mobile-first responsive design
- Keep specificity low

### JavaScript

- Use ES6+ features
- Add comments for complex logic
- Keep functions small and focused
- Handle errors gracefully

## Adding New Sarcastic Messages

To add new sarcastic messages, edit the `sarcasticMessages` array in `js/app.js`:

```javascript
const sarcasticMessages = [
    // ... existing messages
    {
        line1: "First line of sarcasm",
        line2: "The instruction:",
        line3: "The punchline!"
    }
];
```

Keep them:
- Funny but not offensive
- Clear about what the user needs to do
- Varied in tone

## Testing

Before submitting a PR, please test:

1. **Functionality:**
   - Generate a link
   - Preview the animation
   - Ensure redirect works
   - Test social sharing buttons

2. **Responsive Design:**
   - Desktop (1920x1080, 1366x768)
   - Tablet (768x1024)
   - Mobile (375x667, 414x896)

3. **Browsers:**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (if available)
   - Edge (latest)

## Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Examples:
```
Add new sarcastic messages for variety

Fix mobile layout issue on small screens
- Adjust padding on mobile devices
- Fix text overflow in animation box
Fixes #123
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers:

- [@Buschleague](https://github.com/Buschleague)
- [@56BadKarma](https://github.com/56BadKarma)

## Recognition

Contributors will be recognized in our README. Thank you for helping make LMGPTTFY better!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.