<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import ScreenshotButton from '../components/ScreenshotButton.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
console.log('frontmatter:', frontmatter)
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <!-- 这里可以添加导航栏标题前的内容 -->
    </template>
    
    <template #nav-bar-title-after>
      <!-- 这里可以添加导航栏标题后的内容 -->
    </template>
    
    <template #nav-bar-content-before>
      <!-- 这里可以添加导航栏内容前的内容 -->
    </template>

    <template #layout-bottom>
      <ScreenshotButton 
        v-if="!frontmatter?.value?.home"
        :pageTitle="frontmatter?.value?.title"
      />
    </template>
  </Layout>
</template>

<style scoped>
/* 如果需要，可以在这里添加特定于自定义布局的样式 */
</style> 