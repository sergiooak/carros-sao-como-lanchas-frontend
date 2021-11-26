if (localStorage && localStorage.getItem('vueuse-color-scheme') === null)
  localStorage.setItem('vueuse-color-scheme', 'dark')

// these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
