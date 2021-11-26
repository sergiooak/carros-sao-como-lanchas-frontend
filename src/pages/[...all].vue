<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="py-16">
    <div class="text-center">
      <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
        {{ t('404') }}
      </p>
      <h1
        class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl"
      >
        {{ t('page-not-found') }}
      </h1>
      <p
        class="mt-2 text-base dark:text-light-900 text-dark-900"
      >
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-6">
        <a href="#" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
          Go back home
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
