<script setup lang="ts">
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
const { t, availableLocales, locale } = useI18n()

// set locale to whatever is in localStorage, fallback to browser language
locale.value = useStorage('locale', navigator.language).value

// function that return if the locale is the same as the parameter
const isLocale = (localeToBeChecked: string, availableLocale?: string) => {
  if (availableLocale)
    return availableLocale === localeToBeChecked

  else
    return locale.value === localeToBeChecked
}

</script>

<template>
  <Listbox v-model="locale" as="div">
    <ListboxLabel class="sr-only">
      {{ t('button.toggle_langs') }}
    </ListboxLabel>
    <div class="relative">
      <ListboxButton
        :title="t('button.toggle_langs')"
        dark="bg-transparent border-gray-700 hover:border-gray-400"
        border="~ gray-300"
        p="l-3 r-6 y-2"
        text="left sm:sm"
        class="bg-white rounded-md cursor-pointer shadow-sm transition group relative focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      >
        <div class="flex items-center justify-center">
          <!-- eslint-disable-next-line -->
          <twemoji:flag-for-flag-brazil v-if="isLocale('pt-BR')" class="h-6 w-6" />
          <twemoji:flag-for-flag-united-states v-else-if="isLocale('en')" class="h-6 w-6" />
          <span class="sr-only">{{ locale }}</span>
        </div>
        <span class="flex opacity-50 pr-1 transition-opacity inset-y-0 right-0 absolute items-center pointer-events-none group-hover:opacity-100">
          <heroicons-outline:selector class="w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          bg="transparent"
          sm="text-sm"
          class="rounded-md shadow-lg ring-black mt-1 text-base max-h-60 py-1 right-0 ring-1 ring-opacity-5 w-24 z-10 backdrop-filter absolute overflow-auto backdrop-blur-lg backdrop-brightness-110 focus:outline-none"
        >
          <ListboxOption
            v-for="availableLocale in availableLocales"
            :key="availableLocale"
            v-slot="{ active }"
            as="template"
            :value="availableLocale"
          >
            <li
              class="flex bg-opacity-50 transition-colors gap-2 items-center"
              :class="[active ? 'text-white bg-indigo-600' : 'text-black dark:text-white', 'cursor-default select-none relative py-2 px-3']"
            >
              <twemoji:flag-for-flag-brazil
                v-if="isLocale('pt-BR', availableLocale)"
                class="h-5 w-5"
              />
              <twemoji:flag-for-flag-united-states
                v-else-if="isLocale('en', availableLocale)"
                class="h-5 w-5"
              />
              <span>{{ availableLocale }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
