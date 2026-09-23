<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: { type: Array, required: true },
})
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Selected Projects</p>
        <p class="section-subtitle">Six spreadsheet-based systems built to solve real operational problems.</p>
      </div>
      <a class="project-link" href="#projects">View All Projects →</a>
    </div>

    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
