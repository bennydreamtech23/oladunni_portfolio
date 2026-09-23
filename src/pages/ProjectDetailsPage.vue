<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, BarChart3, BriefcaseBusiness, Check, FileSpreadsheet, Wrench } from 'lucide-vue-next'
import ProjectCard from '../components/ProjectCard.vue'
import SpreadsheetShowcase from '../components/SpreadsheetShowcase.vue'
import { getProject, projects } from '../data/projects'

const route = useRoute()
const project = computed(() => getProject(route.params.slug) || projects[0])
const otherProjects = computed(() => projects.filter((item) => item.slug !== project.value.slug).slice(0, 5))
</script>

<template>
  <main class="project-page">
    <section class="project-hero section-pad">
      <RouterLink class="back-link" to="/#projects"><ArrowLeft :size="15" /> Back to Projects</RouterLink>
      <div class="project-hero-grid">
        <div class="project-hero-copy">
          <p class="eyebrow">{{ project.id }}</p>
          <h1>{{ project.title }}</h1>
          <p class="project-subtitle">{{ project.subtitle }}</p>
          <p>{{ project.description }}</p>
        </div>
        <div class="project-hero-image">
          <img :src="project.image" :alt="`${project.title} spreadsheet screenshot`" />
          <span class="google-sheet-badge"><FileSpreadsheet :size="20" /></span>
        </div>
      </div>
    </section>

    <section class="project-overview section-pad">
      <h2>Project Overview</h2>
      <p>{{ project.overview }}</p>
    </section>

    <section class="challenge-solution section-pad">
      <article>
        <h3><BriefcaseBusiness :size="20" /> Business Challenge</h3>
        <ul>
          <li v-for="item in project.challenge" :key="item">{{ item }}</li>
        </ul>
      </article>
      <article>
        <h3><BarChart3 :size="20" /> The Solution</h3>
        <p>{{ project.solution }}</p>
      </article>
    </section>

    <section class="project-facts section-pad">
      <article>
        <h3><Check :size="20" /> Key Skills Demonstrated</h3>
        <ul class="check-list">
          <li v-for="skill in project.skills" :key="skill"><Check :size="14" /> {{ skill }}</li>
        </ul>
      </article>
      <article>
        <h3><BarChart3 :size="20" /> Impact</h3>
        <p>{{ project.impact }}</p>
      </article>
      <article>
        <h3><Wrench :size="20" /> Tools Used</h3>
        <ul>
          <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
      </article>
    </section>

    <div class="section-pad demo-wrap">
      <SpreadsheetShowcase
        :rows="project.sheetRows"
        :embed-url="project.sheetEmbedUrl"
        :title="project.title"
      />
    </div>

    <section class="other-projects section-pad">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Other Projects</p>
          <p class="section-subtitle">Explore the rest of my systems and how I turn data into practical solutions.</p>
        </div>
      </div>
      <div class="other-project-grid">
        <ProjectCard v-for="item in otherProjects" :key="item.slug" :project="item" compact />
      </div>
    </section>
  </main>
</template>
