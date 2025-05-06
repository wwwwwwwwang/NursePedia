<template>
  <button
    v-if="visible"
    @click="takeScreenshot"
    class="screenshot-fab"
    title="保存本页为截图"
    aria-label="保存本页为截图"
  >
    <!-- 使用简单的相机 emoji 作为图标，也可以替换为 SVG 图标 -->
    📸
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
import html2canvas from 'html2canvas';

const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
  pageTitle: {
    type: String,
    default: '',
  }
});

/**
 * 递归复制计算样式到目标元素
 */
function copyComputedStyles(sourceElement, targetElement) {
  if (!sourceElement || !targetElement) return;
  
  // 获取所有计算样式
  const computedStyle = window.getComputedStyle(sourceElement);
  
  // 复制主要样式属性
  const stylesToCopy = [
    'color', 'backgroundColor',
    'fontSize', 'fontFamily', 'fontWeight', 'lineHeight', 'textAlign',
    'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
    'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'borderRadius', 'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft',
    'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap',
    'position', 'width', 'height', 'maxWidth', 'minWidth', 'boxShadow'
  ];
  
  stylesToCopy.forEach(style => {
    try {
      targetElement.style[style] = computedStyle[style];
    } catch (e) {
      console.warn(`无法复制样式: ${style}`, e);
    }
  });
  
  // 递归处理子元素
  const sourceChildren = sourceElement.children;
  const targetChildren = targetElement.children;
  
  for (let i = 0; i < Math.min(sourceChildren.length, targetChildren.length); i++) {
    copyComputedStyles(sourceChildren[i], targetChildren[i]);
  }
}

const takeScreenshot = async () => {
  console.log("开始截图过程...");
  
  try {
    // 隐藏FAB按钮避免它出现在截图中
    const fab = document.querySelector('.screenshot-fab');
    if (fab) fab.style.display = 'none';

    // 获取页面标题
    let pageTitle = '';
    const h1Element = document.querySelector('h1');
    if (h1Element && h1Element.textContent) {
      pageTitle = h1Element.textContent.trim();
    } else if (props.pageTitle) {
      pageTitle = props.pageTitle;
    } else if (document.title) {
      const titleParts = document.title.split('|');
      pageTitle = titleParts.length > 1 ? titleParts[0].trim() : document.title;
    } else {
      pageTitle = '护理知识库';
    }
    
    console.log("使用的页面标题:", pageTitle);

    // 1. 找到VitePress主要内容区域 - 尝试多种选择器
    console.log("开始查找主要内容区域...");
    let mainContent = null;
    
    // VitePress 1.6.x中的常见内容选择器
    const mainContentSelectors = [
      '.VPContent .VPDoc', // 整个文档区域
      '.vp-doc',
      'main.content',
      'main',
      '#app main', // 可能更通用的选择器
      '.content-container', // VitePress内容容器
      'main.main' // 通用主内容区
    ];
    
    for (const selector of mainContentSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`找到主内容元素: ${selector}`);
        mainContent = element;
        break;
      }
    }
    
    // 如果无法找到主内容，则尝试查找包含h1的元素
    if (!mainContent && h1Element) {
      console.log("通过h1查找主内容区域...");
      let parent = h1Element.parentElement;
      
      // 向上遍历最多5层查找合适的容器
      for (let i = 0; i < 5 && parent; i++) {
        if (
          parent.tagName === 'MAIN' || 
          parent.classList.contains('content') ||
          parent.classList.contains('vp-doc') ||
          parent.classList.contains('VPDoc')
        ) {
          mainContent = parent;
          console.log("通过h1父元素找到主内容", parent.tagName, parent.className);
          break;
        }
        parent = parent.parentElement;
      }
    }
    
    // 2. 找到侧边栏导航 "On this page"
    console.log("开始查找侧边栏...");
    let sidebar = null;
    
    // VitePress 1.6.x中的常见侧边栏选择器
    const sidebarSelectors = [
      '.VPDocAside',
      '.VPContentDocOutline',
      'nav.aside',
      'aside[aria-label="right sidebar"]',
      'aside.sidebar',
      '.toc'
    ];
    
    for (const selector of sidebarSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`找到侧边栏元素: ${selector}`);
        sidebar = element;
        break;
      }
    }
    
    // 如果没有找到侧边栏，尝试查找包含"On this page"的元素
    if (!sidebar) {
      console.log("通过文本查找侧边栏...");
      const elements = Array.from(document.querySelectorAll('h2, h3, div.title, div.header'));
      
      for (const el of elements) {
        if (el.textContent && el.textContent.trim().includes('On this page')) {
          // 找到包含"On this page"的父元素
          let parent = el.parentElement;
          for (let i = 0; i < 5 && parent; i++) {
            if (
              parent.tagName === 'ASIDE' || 
              parent.tagName === 'NAV' ||
              parent.classList.contains('aside') ||
              parent.classList.contains('sidebar') ||
              parent.classList.contains('toc')
            ) {
              sidebar = parent;
              console.log("通过'On this page'文本找到侧边栏", parent.tagName, parent.className);
              break;
            }
            parent = parent.parentElement;
          }
          if (sidebar) break;
        }
      }
    }
    
    // 3. 创建截图容器和布局
    console.log("创建截图容器...");
    const screenshotContainer = document.createElement('div');
    screenshotContainer.id = 'vp-screenshot-container';
    screenshotContainer.style.cssText = `
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: 1200px;
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      z-index: -1;
      padding: 20px;
    `;
    
    // 复制CSS样式表
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    for (const style of styles) {
      screenshotContainer.appendChild(style.cloneNode(true));
    }
    
    // 创建内容布局
    const contentLayout = document.createElement('div');
    contentLayout.style.cssText = `
      display: flex;
      width: 100%;
      position: relative;
      gap: 20px;
    `;
    screenshotContainer.appendChild(contentLayout);
    
    let success = false;
    
    if (mainContent) {
      console.log("正在克隆主内容区域...");
      // 克隆主内容
      const clonedContent = mainContent.cloneNode(true);
      clonedContent.style.cssText = `
        flex: 1;
        max-width: 800px;
        min-width: 600px;
        overflow: visible;
      `;
      
      // 复制计算样式
      copyComputedStyles(mainContent, clonedContent);
      
      // 确保只有一个页面标题
      const titles = clonedContent.querySelectorAll('h1');
      let foundMainTitle = false;
      for (const title of titles) {
        if (title.textContent && title.textContent.trim() === pageTitle) {
          if (foundMainTitle) {
            // 保留第一个标题，移除重复的
            if (title.parentNode) {
              title.parentNode.removeChild(title);
            }
          } else {
            foundMainTitle = true;
          }
        }
      }
      
      contentLayout.appendChild(clonedContent);
      success = true;
    }
    
    if (sidebar) {
      console.log("正在克隆侧边栏...");
      // 克隆侧边栏
      const clonedSidebar = sidebar.cloneNode(true);
      clonedSidebar.style.cssText = `
        flex: 0 0 250px;
        overflow: visible;
      `;
      
      // 复制计算样式
      copyComputedStyles(sidebar, clonedSidebar);
      
      contentLayout.appendChild(clonedSidebar);
    }
    
    // 如果没有找到任何内容，显示错误消息
    if (!success) {
      const errorMessage = document.createElement('div');
      errorMessage.style.cssText = `
        padding: 20px;
        color: #e53e3e;
        text-align: center;
        font-weight: bold;
      `;
      errorMessage.textContent = '无法找到页面内容，截图可能不完整。';
      screenshotContainer.appendChild(errorMessage);
    }
    
    // 添加到DOM
    document.body.appendChild(screenshotContainer);
    
    // 等待DOM更新和样式应用
    console.log("等待DOM更新...");
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // 4. 创建截图
    console.log("正在生成截图...");
    const canvas = await html2canvas(screenshotContainer, {
      useCORS: true,
      backgroundColor: 'white',
      scale: 1.5, // 提高分辨率
      logging: false,
      allowTaint: true,
      onclone: (clone) => {
        // 在克隆的文档中可以进行额外修改
        const container = clone.getElementById('vp-screenshot-container');
        if (container) {
          container.style.position = 'static';
          container.style.top = '0';
          container.style.left = '0';
        }
      }
    });
    
    // 5. 清理
    console.log("清理临时元素...");
    document.body.removeChild(screenshotContainer);
    if (fab) fab.style.display = 'flex';

    // 6. 生成文件名并下载
    console.log("准备下载截图...");
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    let safeTitle = pageTitle.replace(/[\\\\/:*?\"<>|]/g, '_').trim();
    safeTitle = safeTitle.replace(/[_\s]+$/g, '');
    safeTitle = safeTitle.replace(/_+/g, '_');
    if (!safeTitle) {
      safeTitle = '护理知识库';
    }
    
    const filename = `${safeTitle}${timestamp}.png`;

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log("截图完成:", filename);
  } catch (error) {
    console.error('截图失败:', error);
    // 确保FAB按钮恢复显示
    const fab = document.querySelector('.screenshot-fab');
    if (fab) fab.style.display = 'flex';
    
    alert(`抱歉，截图失败: ${error.message || '未知错误'}。请查看控制台获取更多信息。`);
  }
};
</script>

<style scoped>
.screenshot-fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--vp-c-brand-1, #3eaf7c); /* 使用 VitePress 品牌色 */
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000; /* 确保在顶层 */
  transition: background-color 0.3s ease, transform 0.2s ease-out;
}

.screenshot-fab:hover {
  background-color: var(--vp-c-brand-2, #359468);
  transform: scale(1.05);
}

.screenshot-fab:active {
  transform: scale(0.95);
}
</style> 