<template>
  <!-- border is a gradient from white to 50% alpha -->
  <header
    class="py-4"
    style="border-style: solid;
           border-bottom-width: 2px;
           border-image-source: linear-gradient(to right, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
           border-image-slice: 60 30;"
  >
    <div class="container flex mx-auto items-center justify-between">
      <nav dark="text-white">
        Left
      </nav>
      <h1
        border="black 4 dark:white"
        text="black dark:white"
        class="text-black py-1 px-2"
      >
        <span>Carros são como as lanchas</span>
        <div class="flex justify-between items-end">
          <div class="bg-red-500 h-1 mb-1 w-4"></div>
          <small>v0.0.1</small>
        </div>
      </h1>
      <nav class="flex gap-3 items-center" dark="text-white">
        <ThemeToggle />
        <LangSelector />
      </nav>
    </div>
  </header>
</template>
