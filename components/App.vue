<template>
  <main>
    <slot></slot>
  </main>
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
  @apply text-gray-600;
  color: #555;
  font-weight: 300;
}

main {
  @apply px-8 py-8 md:py-16 lg:py-24;
  width: 48rem;
  margin: auto;
  max-width: 100%;
}
</style>
