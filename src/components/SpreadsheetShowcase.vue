<script setup>
import { ExternalLink, FileSpreadsheet } from 'lucide-vue-next'

defineProps({
  rows: { type: Array, default: () => [] },
  embedUrl: { type: String, default: '' },
  title: { type: String, default: 'Spreadsheet Demo' },
})

const cellName = (columnIndex, rowIndex) => `${String.fromCharCode(65 + columnIndex)}${rowIndex + 1}`
</script>

<template>
  <section class="sheet-showcase">
    <div class="sheet-showcase-head">
      <div class="sheet-showcase-title">
        <span class="sheet-icon"><FileSpreadsheet :size="18" /></span>
        <div>
          <strong>View Demo</strong>
          <span>{{ embedUrl ? 'Embedded Google Sheet' : 'Interactive portfolio preview' }}</span>
        </div>
      </div>
      <a v-if="embedUrl" :href="embedUrl" target="_blank" rel="noreferrer" class="project-link">
        Open Demo <ExternalLink :size="14" />
      </a>
    </div>

    <div v-if="embedUrl" class="sheet-frame-wrap">
      <iframe
        class="sheet-frame"
        :src="embedUrl"
        :title="title"
        loading="lazy"
        referrerpolicy="no-referrer"
      ></iframe>
    </div>

    <div v-else class="mock-sheet" role="table" :aria-label="`${title} preview`">
      <div class="mock-sheet-toolbar">
        <span class="sheet-doc-icon"><FileSpreadsheet :size="19" /></span>
        <strong>{{ title }}</strong>
        <span class="toolbar-chip">View only</span>
      </div>
      <div class="formula-row">
        <span>fx</span>
        <span>{{ rows[1]?.[1] || 'Portfolio spreadsheet preview' }}</span>
      </div>
      <div class="sheet-scroll">
        <table>
          <thead>
            <tr>
              <th class="row-number"></th>
              <th v-for="(_, index) in rows[0] || []" :key="index">{{ String.fromCharCode(65 + index) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <th class="row-number">{{ rowIndex + 1 }}</th>
              <td
                v-for="(cell, columnIndex) in row"
                :key="cellName(columnIndex, rowIndex)"
                :class="{ 'sheet-header-cell': rowIndex === 0 }"
              >
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sheet-tabs">
        <button type="button" class="active-sheet-tab">Daily Operations</button>
        <button type="button">Dashboard</button>
        <button type="button">Archive</button>
      </div>
    </div>
  </section>
</template>
