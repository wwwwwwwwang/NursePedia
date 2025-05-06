<script setup>
import DefaultTheme from 'vitepress/theme'
import { NSwitch } from 'naive-ui'
import { ref, onMounted } from 'vue'

const { Layout } = DefaultTheme

const isDark = ref(false)

const toggleDark = (value) => {
  if (value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  // 初始化时检查系统主题
  isDark.value = document.documentElement.classList.contains('dark')
})
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
    
    <template #nav-bar-content-after>
      <div class="dark-mode-switch">
        <span class="switch-label">{{ isDark ? '深色' : '浅色' }}</span>
        <NSwitch v-model:value="isDark" @update:value="toggleDark" />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.dark-mode-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
}

.switch-label {
  font-size: 14px;
  color: var(--vp-c-text-1);
}
</style> 