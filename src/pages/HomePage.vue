<script setup>
import HeroSection from '../components/HeroSection.vue'
import HowIWork from '../components/HowIWork.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
import ContactCta from '../components/ContactCta.vue'
import { projects } from '../data/projects'
import { CheckSquare, FileSpreadsheet, Gauge, Presentation } from 'lucide-vue-next'

const tools = [
  { icon: FileSpreadsheet, label: 'Google Sheets' },
  { icon: Presentation, label: 'Google Workspace' },
  { icon: Gauge, label: 'Formulas' },
  { icon: CheckSquare, label: 'Data Validation' },
]
</script>

<template>
  <main>
    <HeroSection />
    <HowIWork />
    <ProjectGrid :projects="projects" />

    <section id="tools" class="tools-band">
      <strong>Tools I Use</strong>
      <div class="tools-list">
        <span v-for="tool in tools" :key="tool.label"><component :is="tool.icon" :size="17" /> {{ tool.label }}</span>
        <span>Dashboards</span>
        <span>PDF Export</span>
      </div>
    </section>

    <ContactCta />
  </main>
</template>
