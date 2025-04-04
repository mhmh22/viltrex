# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Viltrex

A modern React application built with Vite, TypeScript, and TailwindCSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/viltrex.git
cd viltrex

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🌐 Deployment on Vercel

This project is configured for seamless deployment on Vercel.

### Manual Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to preview:
   ```bash
   npm run vercel:preview
   ```

4. Deploy to production:
   ```bash
   npm run vercel:production
   ```

### Automatic Deployment with Git

1. Connect your Git repository to Vercel through the [Vercel Dashboard](https://vercel.com/dashboard).
2. Configure the following settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

3. Set up environment variables in the Vercel dashboard if needed.

## 📁 Project Structure

```
viltrex/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable UI components
│   ├── lib/         # Utility functions and hooks
│   ├── pages/       # Page components
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Application entry point
├── .env.example     # Example environment variables
├── vercel.json      # Vercel configuration
└── vite.config.ts   # Vite configuration
```

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` for local development and customize as needed. For production, set these in your Vercel project settings.
