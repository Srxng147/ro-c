<script setup lang="ts">
import { ref, onMounted } from 'vue'

/* ----------------------------------
   REACTIVE STATE
---------------------------------- */
const displayNumber = ref(0)
const targetNumber = ref(0)
const hasAnimated = ref(false)

/* ----------------------------------
   GOOGLE SHEETS CSV URL
---------------------------------- */
const googleCsvUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSy4Zxvrvq5DhgeEggwD0RlpXaE9izWPyAFz09dh3VFQHirX_3XRTdKzgQq_CdCallDvnLb8b4PnIX2/pub?gid=0&single=true&output=csv'

/* ----------------------------------
   FETCH VALUE FROM GOOGLE SHEET
---------------------------------- */
async function fetchGoogleSheetNumber() {
  try {
    const response = await fetch(googleCsvUrl)
    const text = await response.text()

    const rows = text.trim().split('\n')

    // Row 2 = rows[1]
    const row2 = rows[1]?.split(',')
    // ? means if the value is null or undefine, it wont throw an eror

    // Column 1 = row2[0]
    const firstCell = row2?.[0]

    if (firstCell) {
      const parsed = Number(firstCell.replace(/[^0-9]/g, ''))
      if (!isNaN(parsed)) {
        targetNumber.value = parsed
        return
      }
    }

    // fallback if sheet fails
    targetNumber.value = 0
  } catch (err) {
    console.warn('Google Sheet fetch failed:', err)
    targetNumber.value = 0
  }
}

/* ----------------------------------
   COUNT-UP ANIMATION
---------------------------------- */
function animateCount() {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const duration = 2000
  const startTime = performance.now()

  function update(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    displayNumber.value = Math.floor(progress * targetNumber.value)

    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

/* ----------------------------------
   TRIGGER WHEN SECTION IS VISIBLE
---------------------------------- */
function observeVisibility() {
  const section = document.querySelector<HTMLElement>('.stats-section')
  if (!section) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateCount()
          observer.disconnect() // stop observing after first trigger
          break
        }
      }
    },
    { threshold: 0.5 },
  )

  observer.observe(section)
}

onMounted(async () => {
  await fetchGoogleSheetNumber()
  observeVisibility()
})
</script>

<template>
  <section class="stats-section">
    <img src="@/assets/images/boat_and_trash_pic.jpg" class="stats-bg" />

    <div class="stats-content">
      <h1 class="stats-number">{{ displayNumber.toLocaleString() }} KG</h1>

      <p class="stats-subtitle">collected from Mekong, Tonle Sap, Bassac Rivers.</p>
    </div>
  </section>
</template>

<style scoped>
/* --------------------------------------------------
   FULLSCREEN BANNER
-------------------------------------------------- */
.stats-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* BACKGROUND IMAGE */
.stats-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  z-index: -1;
}

/* CONTENT */
.stats-content {
  text-align: center;
  color: white;
  padding: 0 20px;
}

/* NUMBER */
.stats-number {
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 900;
  margin: 0;
}

/* SUBTITLE */
.stats-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-top: 10px;
}

/* RESPONSIVE HEIGHT */
@media (max-width: 768px) {
  .stats-section {
    height: 50vh;
  }
}
</style>
