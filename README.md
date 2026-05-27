# 🚀 Premium 3D Developer Portfolio | Pardeep Kumar

Welcome to my personal, high-performance visual portfolio website. This is a fully responsive, state-of-the-art Single Page Application (SPA) designed to showcase my journey as a **Senior React Native Developer** specializing in native platform bridges, hardware integrations (PAX POS SDK, RFID scanners), AI/ML on-device pipelines, and AR video filter compilation.

Live Demo: [pkaypilania.github.io/pardeep-kumar/](https://pkaypilania.github.io/pardeep-kumar/)

---

## 🛠️ Core Technology Stack

*   **Frontend Library**: [React.js](https://react.dev/) (v18)
*   **Build Tool & Dev Server**: [Vite](https://vite.dev/) (High-speed HMR, optimized production assets bundling)
*   **Styling (CSS)**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first framework with fully custom core metrics)
*   **Vector Iconography**: [Lucide React](https://lucide.dev/) (Sleek, matching wireframe icon packs)
*   **Automation & Deployment**: [GitHub Actions](https://github.com/features/actions) (Automated compilation and static page hosting)

---

## ✨ Premium Features & Interactions

### 1. Scroll-to-Reveal Navigation Header
*   **Clean Hero View**: At the very top of the page, the navigation bar is completely hidden off-screen to give the layout breathing room and prevent text overlaps on mobile screens.
*   **Slide-Down Entrance**: As the user scrolls past `50px`, the header smoothly slides down from the top with an ultra-fluid `ease-in-out` animation, displaying a solid dark slate glassmorphic background (`backdrop-blur-xl border-b border-white/10`).
*   **Safari Compatibility**: Built using safe `top` layout positioning to bypass GPU compositing/repaint bugs common in Safari and iOS devices.

### 2. Immersive Case-Study Modal Dialogs
*   Clicking **"View Project Details"** on any project card triggers an elegant, modal slide-up overlay with a blurred backdrop.
*   Shows a full project write-up, detailed highlights grids, and specific technologies integrated.
*   **Dynamic Action Hub**: Houses specific, branded redirects (App Store 🍏, Play Store 🤖, GitHub 💻, and Live Website 🌐) based on what links are available for each project build.

### 3. Swipeable Mobile Tab Controls
*   On desktop viewports, the Work Experience section displays a vertical sidebar for selecting companies.
*   On iPhone/mobile screens, this reflows automatically into a **horizontal swipeable row** (`overflow-x-auto`) with hidden scrollbar thumbs, preserving crucial vertical screen height.

### 4. Custom 3D Glassmorphic Assets
*   Features high-resolution 3D custom glassmorphic renders tailored to the specific theme of each project card (e.g. smart pillow for QYTENITE, POS scanner for RFID, glass moon for Neend).

---

## 💻 Local Development

Run the following commands in your terminal to set up the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/pkaypilania/pardeep-kumar.git
cd pardeep-kumar

# 2. Install all node dependencies
npm install

# 3. Start the Vite local development server
npm run dev
# Open http://localhost:5173 inside your browser
```

---

## 🏗️ Production Bundling & Hosting

### Compiling Static Assets
To package and tree-shake the code into highly optimized production assets (`/dist` directory):
```bash
npm run build
```

### Free Automated Deployments (GitHub Pages)
This project is configured with a **CI/CD GitHub Action** located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). 

Every time you push an update to your `main` branch:
1.  GitHub Actions spins up a secure runner.
2.  It automatically installs dependencies and builds the project.
3.  It pushes the compiled `/dist` directory assets to your **`gh-pages`** branch.
4.  GitHub Pages hosts your website completely free of cost!

*Note: Ensure your GitHub Repository Settings -> Pages -> Build and deployment source branch is configured to use **`gh-pages`** (root).*

---

### Author
*   **Pardeep Kumar** — Senior React Native Developer
*   Email: [pilaniapkay@gmail.com](mailto:pilaniapkay@gmail.com)
*   GitHub: [@pkaypilania](https://github.com/pkaypilania)
