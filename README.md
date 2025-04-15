# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# PhD Portfolio Website

A modern, responsive portfolio website for PhD scholars to showcase their research, publications, and academic achievements.

## Features

- **About Me**: Personal introduction, skills, and background information
- **Research Areas**: Detailed information about research interests and projects
- **Publications**: Searchable list of academic publications
- **News & Events**: Updates on recent achievements and upcoming events
- **Teaching**: Overview of teaching philosophy and courses
- **CV**: Detailed curriculum vitae with QR code for download
- **Contact**: Contact form and information

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Router for navigation
- React Icons
- QR Code generator

## Development

This project uses Bun as the package manager.

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Setup

1. Update the `homepage` field in `package.json` with your GitHub username and repository name:

```json
"homepage": "https://yourusername.github.io/phd-portfolio"
```

2. Update the `base` path in `vite.config.ts` to match your repository name:

```typescript
base: '/phd-portfolio/', // Change this to match your repository name
```

### Deployment

```bash
# Deploy to GitHub Pages
bun run deploy
```

This will create a production build of your site and push it to the `gh-pages` branch of your GitHub repository.

## Customization

- Edit the content in the page components to add your personal information
- Update the profile image in the `public/images` directory
- Modify the color scheme in the `src/index.css` file

## License

MIT
