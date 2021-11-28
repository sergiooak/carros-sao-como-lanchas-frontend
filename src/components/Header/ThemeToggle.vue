<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <dimmedButton @click="toggleDark()">
    <ph:sun-bold v-if="isDark" class="h-5 w-5" />
    <ph:moon-bold v-else class="h-5 w-5" />
  </dimmedButton>
</template>
