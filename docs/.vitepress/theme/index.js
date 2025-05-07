import DefaultTheme from 'vitepress/theme'
import { createApp } from 'vue'
import { create, NButton, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSwitch } from 'naive-ui'
import Layout from './Layout.vue'
import './styles/override.css'

const theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // 仅在客户端应用 Naive UI
    if (!import.meta.env.SSR) {
      // 1. 安装 Naïve UI
      const naive = create({
        themeOverrides: {
          common: { primaryColor: '#3eaf7c' }
        }
      })
      app.use(naive)
      
      // 2. 全局注册常用组件 (也可以按需在组件内部导入)
      app.component('NButton', NButton)
      app.component('NLayout', NLayout)
      app.component('NLayoutHeader', NLayoutHeader)
      app.component('NLayoutContent', NLayoutContent)
      app.component('NLayoutFooter', NLayoutFooter)
      app.component('NSwitch', NSwitch)
    }
  }
}

export default theme 