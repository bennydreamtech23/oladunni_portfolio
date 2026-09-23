<script setup>
import { ArrowRight, BarChart3, ClipboardList, Database, FileSpreadsheet, UserRound } from 'lucide-vue-next'

const services = [
  { icon: FileSpreadsheet, label: 'Spreadsheet Systems' },
  { icon: ClipboardList, label: 'Operations & Workflow' },
  { icon: UserRound, label: 'Executive & Virtual Assistance' },
  { icon: BarChart3, label: 'Reporting & Dashboards' },
  { icon: Database, label: 'Data Cleaning & Organization' },
]
</script>

<template>
  <section class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">Hello, I'm</p>
      <h1>Oladunni Catherine Waters</h1>
      <p class="hero-role">Virtual Assistant · Spreadsheet Systems · Operations & Reporting</p>
      <p class="hero-text">
        I build simple, effective spreadsheet systems that organize information,
        streamline workflows and help businesses and individuals work smarter.
      </p>

      <RouterLink class="button" to="/#projects">
        View My Projects <ArrowRight :size="15" />
      </RouterLink>
    </div>

    <div class="hero-image-wrap">
      <img src="/images/hero-workspace.png" alt="Warm desk workspace with a plant, coffee and laptop" />
    </div>

    <div class="expertise-row">
      <article v-for="item in services" :key="item.label" class="expertise-item">
        <component :is="item.icon" :size="25" stroke-width="1.5" />
        <span>{{ item.label }}</span>
      </article>
    </div>
  </section>
</template>
