## Portfolio Website

Modern, performant personal portfolio with a clean, industry-standard design. Built with React, Tailwind CSS, and Three.js effects. Includes a combined front page (Hero + About), projects, skills, achievements, certifications, quote, and contact.

## Features
- **Combined front page**: `Hero + About` merged into a single, focused entry section (`HeroAbout`)
- **Dark/Light theme** toggle with smooth animated sun/moon icon and preference persisted in `localStorage`
- **3D starfield background** using `@react-three/fiber` and `@react-three/drei`
- **Elegant motion** with `framer-motion`
- **Responsive** and accessible (keyboard/screen-reader friendly labels)

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, Framer Motion
- **3D/FX**: @react-three/fiber, @react-three/drei
- **Tooling**: react-scripts (CRA)

## Project Structure
```
portfolio-website1/
  frontend/
    public/
    src/
      components/
        HeroAbout.js   # Combined Hero + About front page
      App.js
      App.css
      index.css
    package.json
  backend/             # (optional) Python server, not required for frontend dev
```

## Getting Started
1) Install dependencies
```
cd frontend
npm ci
```

2) Start the development server
```
npm start
```
Open `http://localhost:3000` in your browser.

3) Build for production
```
npm run build
```
The optimized static output will be in `frontend/build`.

## Theme Toggle
- The theme button is at the top-right.
- Uses Tailwind `darkMode: 'class'` with the class toggled on the `document.documentElement` (root `<html>`).
- Preference is saved in `localStorage` under the key `theme` (`dark` or `light`).

## Deployment
- Any static hosting can serve the `frontend/build` folder (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
- For Netlify: point the build command to `npm run build` and the publish directory to `frontend/build`.

## Environment
- Node 18+ recommended
- If you see Browserslist warnings, update the DB:
```
npx update-browserslist-db@latest
```

## License
This project is for personal portfolio use. You may adapt it for your own portfolio.

## Contact
- Email: `aditya0002adi@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/adityachaudhary0/`
- GitHub: `https://github.com/AdityaChaudhary0002`


