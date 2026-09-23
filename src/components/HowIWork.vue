<script setup>
import { ArrowRight, BarChart3, Bot, ListChecks, Search, TableProperties } from 'lucide-vue-next'

const steps = [
  { icon: Search, title: 'Understand', text: 'Learn your needs and challenges.' },
  { icon: TableProperties, title: 'Organize', text: 'Structure data and processes.' },
  { icon: ListChecks, title: 'Build', text: 'Create simple, practical systems.' },
  { icon: Bot, title: 'Automate', text: 'Reduce repeat manual work.' },
  { icon: BarChart3, title: 'Report', text: 'Deliver insights and track progress.' },
]
</script>

<template>
  <section id="about" class="how-work">
    <div class="how-work-intro">
      <p class="eyebrow eyebrow-light">How I Work</p>
      <p>I turn scattered information into simple systems that create clarity, save time and drive results.</p>
    </div>

    <div class="steps-row">
      <template v-for="(step, index) in steps" :key="step.title">
        <article class="work-step">
          <component :is="step.icon" :size="27" stroke-width="1.5" />
          <strong>{{ step.title }}</strong>
          <span>{{ step.text }}</span>
        </article>
        <ArrowRight v-if="index < steps.length - 1" class="step-arrow" :size="17" />
      </template>
    </div>
  </section>
</template>
