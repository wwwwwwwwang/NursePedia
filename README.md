# 护理知识库 (Nursepedia)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

这是一个基于 VitePress 构建的轻量、快速、高性能的静态文档站点，旨在为实习护士提供一个易于访问和使用的护理知识资源库。通过现代化的界面和丰富的功能，护理知识库提供了核心护理知识的快速查阅和学习体验。

## 目录

- [护理知识库 (Nursepedia)](#护理知识库-nursepedia)
  - [目录](#目录)
  - [✨ 特性](#-特性)
  - [📸 功能预览](#-功能预览)
  - [📱 页面截图功能](#-页面截图功能)
  - [🚀 技术栈](#-技术栈)
  - [🛠️ 项目设置](#️-项目设置)
  - [⚙️ 可用脚本](#️-可用脚本)
  - [🚀 部署](#-部署)
  - [📝 最近更新](#-最近更新)
  - [🤝 贡献](#-贡献)
  - [📄 许可证](#-许可证)

## ✨ 特性

- **轻量快速**: 使用 VitePress 构建，加载速度快，性能优越。
- **内容丰富**: 包含急救措施、静脉输液、高血压护理、药物过敏识别等核心护理知识。
- **页面截图**: 一键保存页面内容为图片，便于分享和学习 (页面右下角按钮)。
- **现代 UI**: 集成了 Naive UI 组件库，提供美观的用户界面。
- **响应式设计**: 适应不同屏幕尺寸，在桌面和移动设备上均有良好体验。
- **暗色模式**: 支持用户切换深色/浅色主题 (页面右上角切换)。
- **Markdown 支持**: 使用 Markdown 编写文档，简单高效。
- **搜索功能**: 支持站内内容搜索 (页面右上角)。
- **易于扩展**: 可以方便地添加新的知识分类和文档页面。

## 📸 功能预览

护理知识库提供了丰富的功能，包括但不限于：

- 护理指南和操作流程
- 急救措施和重点知识点
- 高血压等常见病症的护理要点
- 页面截图功能
- 深色/浅色主题切换
- 响应式布局适配各种设备

## 📱 页面截图功能

护理知识库提供了便捷的页面截图功能，可以一键保存当前页面内容为图片：

- **位置**: 页面右下角的相机图标按钮
- **文件格式**: 生成的截图为PNG格式，文件名包含页面标题和时间戳
- **使用场景**:
  - 快速保存学习资料
  - 分享知识点给同事
  - 制作学习笔记
  - 离线查看重要内容

技术实现上，截图功能使用了html2canvas库，通过DOM克隆和样式复制技术，确保截图内容与页面显示一致。该功能经过多次优化，提供了高质量的页面截图效果。

## 🚀 技术栈

- **框架**: [Vue 3](https://vuejs.org/) (v3.5.13)
- **静态站点生成器**: [VitePress](https://vitepress.dev/) (v1.6.3)
- **UI 组件库**: [Naive UI](https://www.naiveui.com/) (v2.41.0)
- **截图工具**: [html2canvas](https://html2canvas.hertzen.com/) (v1.4.1)
- **包管理器**: [pnpm](https://pnpm.io/)
- **部署**: [GitHub Pages](https://pages.github.com/)

## 🛠️ 项目设置

1. **克隆仓库**
   ```bash
   git clone https://github.com/wwwwwwwwang/NursePedia.git
   cd NursePedia
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm run dev
   ```

## ⚙️ 可用脚本

在项目目录中，您可以运行以下命令：

- **启动开发服务器**:
  ```bash
  pnpm run dev
  ```
  这将在本地启动开发服务器 (默认 http://localhost:3002)，支持热重载。

- **构建生产版本**:
  ```bash
  pnpm run build
  ```
  这会将站点构建到 `docs/.vitepress/dist` 目录。

- **本地预览生产版本**:
  ```bash
  pnpm run serve
  ```
  这会在本地启动一个服务器来预览构建后的站点。

- **部署到GitHub Pages**:
  ```bash
  pnpm run deploy
  ```
  这会构建项目并自动部署到GitHub Pages。

## 🚀 部署

本项目使用GitHub Pages进行部署，完整流程如下：

1. **配置部署脚本**：
   - 项目已配置`gh-pages`包用于部署
   - `package.json`中的`deploy`脚本会自动处理部署过程

2. **手动部署**：
   ```bash
   pnpm run deploy
   ```

3. **自动部署**：
   - 每次推送到`main`分支后，GitHub Actions可以被配置为自动构建和部署项目

4. **访问网站**：
   - 部署完成后，网站将可通过以下地址访问：https://wwwwwwwwang.github.io/NursePedia/

## 📝 最近更新

- **2025.05.06** - 添加页面截图功能
  - 实现了右下角截图按钮
  - 优化了截图内容和样式
  - 添加了文件名自动生成功能

- **2025.05.04** - 添加高血压护理指南
  - 完善了高血压护理要点
  - 添加了用药指导和生活方式干预内容

- **2025.05.01** - 项目初始化
  - 创建基本项目结构
  - 实现了急救措施和静脉输液指南
  - 添加了暗色模式支持

## 🤝 贡献

欢迎提出改进建议或贡献新的知识内容！

**基本流程**:

1. Fork 本仓库
2. 创建您的 Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit 您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. Push 到 Branch (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

本项目采用 [MIT 许可证](LICENSE)。请在仓库根目录查看 `LICENSE` 文件获取详细信息。 
