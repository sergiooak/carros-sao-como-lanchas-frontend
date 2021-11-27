<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <button :title="t('button.toggle_dark')" class="flex items-center !outline-none" @click="toggleDark()">
    <ph:sun-bold v-if="isDark" />
    <ph:moon-bold v-else />
  </button>
</template>
