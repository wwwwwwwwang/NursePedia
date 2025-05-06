<template>
  <div class="dark-mode-switch">
    <NSwitch v-model:value="isDark" @update:value="toggleDark" />
    <span class="switch-label">{{ isDark ? '深色' : '浅色' }}模式</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { NSwitch } from 'naive-ui'

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

<style scoped>
.dark-mode-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1rem 0;
}

.switch-label {
  font-size: 14px;
  color: var(--vp-c-text-1);
}
</style> 