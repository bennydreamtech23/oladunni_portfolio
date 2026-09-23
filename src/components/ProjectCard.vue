<script setup>
defineProps({
  project: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <article class="project-card" :class="{ 'project-card-compact': compact }">
    <RouterLink :to="`/projects/${project.slug}`" class="project-image-link">
      <img class="project-card-image" :src="project.image" :alt="`${project.title} spreadsheet preview`" />
    </RouterLink>
    <span class="project-id">{{ project.id }}</span>
    <RouterLink :to="`/projects/${project.slug}`" class="project-title-link">
      <h3>{{ project.title }}</h3>
    </RouterLink>
    <p v-if="!compact">{{ project.description }}</p>
    <RouterLink :to="`/projects/${project.slug}`" class="project-link">View Project →</RouterLink>
  </article>
</template>
