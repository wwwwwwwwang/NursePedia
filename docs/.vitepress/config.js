import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '护理知识库',
  description: '面向实习护士的轻量高性能文档站点',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '护理指南', link: '/guide/first-aid' },
      { text: '速查', link: '/reference/high-blood-pressure' }
    ],
    sidebar: {
      '/guide/': [
        { text: '急救措施', link: '/guide/first-aid' },
        { text: '静脉输液', link: '/guide/iv-infusion' }
      ],
      '/reference/': [
        { text: '高血压护理', link: '/reference/high-blood-pressure' },
        { text: '药物过敏识别', link: '/reference/medication-allergy' }
      ]
    }
  },
  vite: {
    optimizeDeps: { 
      include: ['vue'],
      exclude: ['vitepress']
    },
    build: { 
      minify: true, 
      target: 'es2015', 
      brotliSize: false,
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    },
    server: {
      port: 3002,
      fs: {
        strict: true
      },
      headers: {
        'Content-Type': 'application/javascript'
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}) 