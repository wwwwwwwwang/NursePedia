# 护理知识库 (Nursepedia)

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/nursepedia/build.yml?branch=main)](https://github.com/your-username/nursepedia/actions) <!-- 请将 your-username 替换为您的 GitHub 用户名 -->
[![Vercel Deployment](https://img.shields.io/vercel/deploy/your-vercel-project-id?label=Vercel)](https://vercel.com/your-username/nursepedia) <!-- 请将 your-vercel-project-id 和 your-username 替换 -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) <!-- 链接到 LICENSE 文件 -->

这是一个基于 VitePress 构建的轻量、快速、高性能的静态文档站点，旨在为实习护士提供一个易于访问和使用的护理知识资源库。

## 目录

- [护理知识库 (Nursepedia)](#护理知识库-nursepedia)
  - [目录](#目录)
  - [✨ 特性](#-特性)
  - [📸 功能预览](#-功能预览)
  - [🚀 技术栈](#-技术栈)
  - [🛠️ 项目设置](#️-项目设置)
  - [⚙️ 可用脚本](#️-可用脚本)
  - [🚀 部署](#-部署)
  - [🤝 贡献](#-贡献)
  - [📄 许可证](#-许可证)

## ✨ 特性

- **轻量快速**: 使用 VitePress 构建，加载速度快，性能优越。
- **内容丰富**: 包含急救措施、静脉输液、高血压护理、药物过敏识别等核心护理知识。
- **易于扩展**: 可以方便地添加新的知识分类和文档页面。
- **现代 UI**: 集成了 Naive UI 组件库，提供美观的用户界面。
- **响应式设计**: 适应不同屏幕尺寸，在桌面和移动设备上均有良好体验。
- **暗色模式**: 支持用户切换深色/浅色主题 (页面右上角切换)。
- **Markdown 支持**: 使用 Markdown 编写文档，简单高效。
- **搜索功能**: 支持站内内容搜索 (页面右上角)。

## 📸 功能预览

*(在此处添加关键页面截图，例如首页、暗色模式、搜索结果等)*

![首页截图](placeholder-screenshot-home.png) <!-- 替换为实际截图路径 -->
![暗色模式截图](placeholder-screenshot-dark.png) <!-- 替换为实际截图路径 -->

## 🚀 技术栈

- **框架**: [Vue 3](https://vuejs.org/)
- **静态站点生成器**: [VitePress](https://vitepress.dev/)
- **UI 组件库**: [Naive UI](https://www.naiveui.com/)
- **包管理器**: [pnpm](https://pnpm.io/)

## 🛠️ 项目设置

1.  **克隆仓库** (如果项目托管在 Git)
    ```bash
    git clone https://github.com/your-username/nursepedia.git <!-- 替换为实际仓库 URL -->
    cd nursepedia
    ```
2.  **安装依赖**
    ```bash
    pnpm install
    ```

## ⚙️ 可用脚本

在项目目录中，您可以运行以下命令：

-   **启动开发服务器**:
    ```bash
    pnpm run dev
    ```
    这将在本地启动开发服务器 (默认 http://localhost:3002)，支持热重载。

-   **构建生产版本**:
    ```bash
    pnpm run build
    ```
    这会将站点构建到 `docs/.vitepress/dist` 目录。

-   **本地预览生产版本**:
    ```bash
    pnpm run serve
    ```
    这会在本地启动一个服务器来预览构建后的站点。

## 🚀 部署

将 `docs/.vitepress/dist` 目录下的文件部署到任何静态文件托管服务，例如：

-   [GitHub Pages](https://pages.github.com/)
-   [Vercel](https://vercel.com/)
-   [Netlify](https://www.netlify.com/)

**提示**: 部署到 Vercel 或 Netlify 时，通常需要配置构建命令为 `pnpm run build`，输出目录为 `docs/.vitepress/dist`。

## 🤝 贡献

欢迎提出改进建议或贡献新的知识内容！

-   请查阅我们的 [贡献指南](CONTRIBUTING.md) (如果存在)。
-   请遵守我们的 [行为准则](CODE_OF_CONDUCT.md) (如果存在)。
-   如有 Bug 或功能建议，请通过 [Issues](https://github.com/your-username/nursepedia/issues) 提交。

**基本流程**:

1.  Fork 本仓库
2.  创建您的 Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit 您的更改 (`git commit -m 'Add some AmazingFeature'`)
4.  Push 到 Branch (`git push origin feature/AmazingFeature`)
5.  提交 Pull Request

## 📄 许可证

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

本项目采用 [MIT 许可证](LICENSE)。请在仓库根目录查看 `LICENSE` 文件获取详细信息。 