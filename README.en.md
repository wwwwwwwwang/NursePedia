# Nursepedia - Nursing Knowledge Base

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight, fast, and high-performance static documentation site built with VitePress, designed to provide nursing students and interns with an easily accessible knowledge resource. Through a modern interface and rich features, Nursepedia offers quick reference and learning experience for core nursing knowledge.

[中文文档](README.md) | English

## Table of Contents

- [Nursepedia - Nursing Knowledge Base](#nursepedia---nursing-knowledge-base)
  - [Table of Contents](#table-of-contents)
  - [✨ Features](#-features)
  - [📸 Feature Preview](#-feature-preview)
  - [📱 Page Screenshot Function](#-page-screenshot-function)
  - [🔧 Project Architecture](#-project-architecture)
  - [🚀 Tech Stack](#-tech-stack)
  - [🛠️ Project Setup](#️-project-setup)
  - [⚙️ Available Scripts](#️-available-scripts)
  - [🚀 Deployment](#-deployment)
  - [📝 Recent Updates](#-recent-updates)
  - [🗺️ Roadmap](#️-roadmap)
  - [👥 Contributing](#-contributing)
  - [🙏 Acknowledgements](#-acknowledgements)
  - [📄 License](#-license)

## ✨ Features

- **Lightweight & Fast**: Built with VitePress, ensuring quick loading and superior performance.
- **Rich Content**: Includes first aid measures, intravenous infusion, hypertension care, medication allergy identification, and other core nursing knowledge.
- **Page Screenshot**: One-click saving of page content as images for easy sharing and learning (button in bottom-right corner).
- **Modern UI**: Integrated with Naive UI component library for an aesthetically pleasing interface.
- **Responsive Design**: Adapts to different screen sizes for excellent experience on both desktop and mobile devices.
- **Dark Mode**: Supports user-toggled dark/light themes (toggle in top-right corner).
- **Markdown Support**: Simple and efficient documentation writing using Markdown.
- **Search Functionality**: Built-in site search (in top-right corner).
- **Easy to Extend**: Convenient addition of new knowledge categories and document pages.

## 📸 Feature Preview

Nursepedia offers rich features including but not limited to:

- Nursing guidelines and operational procedures
- First aid measures and key knowledge points
- Nursing essentials for common conditions like hypertension
- Page screenshot functionality
- Dark/light theme switching
- Responsive layout for various devices

![Screenshot of Homepage](https://github.com/wwwwwwwwang/NursePedia/raw/main/docs/assets/screenshot-homepage.png) <!-- Please add actual screenshot to path: docs/assets/screenshot-homepage.png -->

## 📱 Page Screenshot Function

Nursepedia provides a convenient page screenshot function that allows one-click saving of current page content as an image:

- **Location**: Camera icon button in the bottom-right corner of the page
- **File Format**: Generated screenshots are in PNG format, with filenames containing page title and timestamp
- **Use Cases**:
  - Quickly save learning materials
  - Share knowledge points with colleagues
  - Create study notes
  - Offline viewing of important content

From a technical perspective, the screenshot function uses the html2canvas library, with DOM cloning and style copying techniques to ensure screenshot content matches the page display. This feature has been optimized multiple times to provide high-quality page screenshots.

![Screenshot Function Demo](https://github.com/wwwwwwwwang/NursePedia/raw/main/docs/assets/screenshot-demo.png) <!-- Please add actual screenshot to path: docs/assets/screenshot-demo.png -->

## 🔧 Project Architecture

The project follows a modular architecture with clear separation of concerns:

```
nursepedia/
├── docs/                  # Main content directory
│   ├── .vitepress/        # VitePress configuration
│   │   ├── components/    # Vue components
│   │   ├── theme/         # Custom theme
│   │   └── config.js      # Site configuration
│   ├── guide/             # Nursing guides
│   ├── reference/         # Quick reference materials
│   └── index.md           # Homepage
├── node_modules/          # Dependencies
└── package.json           # Project metadata and scripts
```

The project uses VitePress's file-based routing system, where each Markdown file becomes a page in the final site. Custom components enhance the standard Markdown functionality, providing features like the screenshot button.

## 🚀 Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (v3.5.13)
- **Static Site Generator**: [VitePress](https://vitepress.dev/) (v1.6.3)
- **UI Component Library**: [Naive UI](https://www.naiveui.com/) (v2.41.0)
- **Screenshot Tool**: [html2canvas](https://html2canvas.hertzen.com/) (v1.4.1)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🛠️ Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/wwwwwwwwang/NursePedia.git
   cd NursePedia
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   ```

## ⚙️ Available Scripts

In the project directory, you can run:

- **Start the development server**:
  ```bash
  pnpm run dev
  ```
  This will start a local development server (default http://localhost:3002) with hot-reload support.

- **Build for production**:
  ```bash
  pnpm run build
  ```
  This will build the site to the `docs/.vitepress/dist` directory.

- **Preview the production build locally**:
  ```bash
  pnpm run serve
  ```
  This will start a local server to preview the built site.

- **Deploy to GitHub Pages**:
  ```bash
  pnpm run deploy
  ```
  This will build the project and automatically deploy it to GitHub Pages.

## 🚀 Deployment

This project uses GitHub Pages for deployment. The complete workflow is as follows:

1. **Configure deployment script**:
   - The project is configured with the `gh-pages` package for deployment
   - The `deploy` script in `package.json` automatically handles the deployment process

2. **Manual deployment**:
   ```bash
   pnpm run deploy
   ```

3. **Automatic deployment**:
   - GitHub Actions can be configured to automatically build and deploy the project after each push to the `main` branch

4. **Access the website**:
   - After deployment, the website will be accessible at: https://wwwwwwwwang.github.io/NursePedia/

## 📝 Recent Updates

- **2025.05.06** - Added page screenshot function
  - Implemented screenshot button in bottom-right corner
  - Optimized screenshot content and styling
  - Added automatic filename generation

- **2025.05.04** - Added hypertension care guide
  - Completed hypertension care essentials
  - Added medication guidance and lifestyle intervention content

- **2025.05.01** - Project initialization
  - Created basic project structure
  - Implemented first aid measures and intravenous infusion guides
  - Added dark mode support

## 🗺️ Roadmap

Future plans for Nursepedia include:

1. **Q2 2025**
   - Add interactive quiz components for self-assessment
   - Implement more comprehensive search functionality
   - Add internationalization support for multiple languages

2. **Q3 2025**
   - Develop medication dosage calculator
   - Add printable PDF export for guides
   - Create mobile app version using capacitor

3. **Q4 2025**
   - Implement user accounts for progress tracking
   - Add community contribution platform
   - Integrate with nursing practice management systems

We welcome contributions to help achieve these goals and expand the project's capabilities!

## 👥 Contributing

Contributions are welcome and greatly appreciated! There are many ways you can contribute:

- Fixing typos or clarifying content
- Adding new nursing guides or reference materials
- Improving the UI/UX
- Enhancing the codebase
- Reporting bugs or suggesting features

**Basic Process**:

1. Fork the repository
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Submit a Pull Request

Please ensure your contributions adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🙏 Acknowledgements

This project would not be possible without the contributions and support of:

- All content contributors who shared their nursing expertise
- The VitePress and Vue.js development teams
- The creator and maintainers of the html2canvas library
- Contributors to the Naive UI component library
- All open-source projects that inspired this work

We also thank JetBrains for their support through the Open Source License program.

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2025 Nursepedia Contributors 