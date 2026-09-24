<script setup>
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const open = ref(false)
const close = () => (open.value = false)
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" @click="close">OLADUNNI CATHERINE WATERS</RouterLink>

    <nav class="desktop-nav" aria-label="Primary navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/#projects">Projects</RouterLink>
      <RouterLink to="/#tools">Tools</RouterLink>
      <RouterLink to="/#contact">Contact</RouterLink>
    </nav>

    <button class="menu-button" type="button" aria-label="Toggle navigation" @click="open = !open">
      <X v-if="open" :size="20" />
      <Menu v-else :size="20" />
    </button>

    <nav v-if="open" class="mobile-nav" aria-label="Mobile navigation">
      <RouterLink to="/" @click="close">Home</RouterLink>
      <RouterLink to="/#projects" @click="close">Projects</RouterLink>
      <RouterLink to="/#tools" @click="close">Tools</RouterLink>
      <RouterLink to="/#contact" @click="close">Contact</RouterLink>
    </nav>
  </header>
</template>
