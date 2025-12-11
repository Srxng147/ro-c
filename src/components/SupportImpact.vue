<script setup lang="ts">
import { ref, onMounted } from 'vue'

/* ----------------------------------
   GOOGLE SHEET CSV URL
---------------------------------- */
const googleCsvUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSy4Zxvrvq5DhgeEggwD0RlpXaE9izWPyAFz09dh3VFQHirX_3XRTdKzgQq_CdCallDvnLb8b4PnIX2/pub?gid=0&single=true&output=csv'

/* ----------------------------------
   TARGET VALUES FROM GOOGLE SHEET
---------------------------------- */
const eventsTarget = ref(0)
const volunteersTarget = ref(0)
const jobsTarget = ref(0)

/* ----------------------------------
   CURRENT DISPLAY VALUES (ANIMATED)
---------------------------------- */
const events = ref(0)
const volunteers = ref(0)
const jobs = ref(0)

let hasAnimated = false

/* ----------------------------------
   FETCH VALUES FROM GOOGLE SHEETS
---------------------------------- */
async function loadSheetValues() {
  try {
    const response = await fetch(googleCsvUrl)
    const text = await response.text()

    // Convert CSV into lines
    const rows = text.trim().split('\n')

    // Row 2 = actual stats
    const row2 = rows[1]?.split(',')

    if (row2 && row2.length >= 4) {
      eventsTarget.value = Number(row2[1]) // Column B
      volunteersTarget.value = Number(row2[2]) // Column C
      jobsTarget.value = Number(row2[3]) // Column D
    }
  } catch (error) {
    console.warn('Failed to load Google Sheet values:', error)
  }
}

/* ----------------------------------
   ANIMATE ALL 3 STATS
---------------------------------- */
function animateStats() {
  if (hasAnimated) return
  hasAnimated = true

  const duration = 2000
  const startTime = performance.now()

  function update(time: number) {
    const progress = Math.min((time - startTime) / duration, 1)

    events.value = Math.floor(eventsTarget.value * progress)
    volunteers.value = Math.floor(volunteersTarget.value * progress)
    jobs.value = Math.floor(jobsTarget.value * progress)

    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

/* ----------------------------------
   RUN ANIMATION WHEN VISIBLE
---------------------------------- */
function observeVisibility() {
  const section = document.querySelector('.support-impact-section')
  if (!section) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    },
    { threshold: 0.4 },
  )

  observer.observe(section)
}

/* ----------------------------------
   MOUNT LOGIC
---------------------------------- */
onMounted(async () => {
  await loadSheetValues()
  observeVisibility()
})
</script>

<template>
  <section class="support-impact-section">
    <!-- Background image -->
    <img src="@/assets/images/bluesky.jpg" class="bg" />

    <div class="content">
      <h1 class="title">WE GO BEYOND CLEANUP!</h1>

      <div class="stats-grid">
        <!-- EVENTS -->
        <div class="stat-box">
          <img src="@/assets/images/events_count.png" class="icon" alt="" />
          <h2 class="number">{{ events.toLocaleString() }}</h2>
          <p class="label">EVENTS</p>
        </div>

        <!-- VOLUNTEERS -->
        <div class="stat-box">
          <img src="@/assets/images/volunteers_count.png" class="icon" alt="" />
          <h2 class="number">{{ volunteers.toLocaleString() }}</h2>
          <p class="label">VOLUNTEERS</p>
        </div>

        <!-- JOBS -->
        <div class="stat-box">
          <img src="@/assets/images/jobs_count.png" class="icon" alt="" />
          <h2 class="number">{{ jobs.toLocaleString() }}</h2>
          <p class="label">JOBS</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Background wrapper section */
.support-impact-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vh 5vw;
  overflow: hidden;
}

/* Background image */
.bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  z-index: -1;
}

/* Title styles */
.content {
  text-align: center;
  color: white;
  width: 100%;
}

.title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 5vh;
}

/* Stats row layout */
.stats-grid {
  display: flex;
  justify-content: center;
  gap: 6vw;
  flex-wrap: wrap;
}

.stat-box {
  text-align: center;
  width: 220px;
}

/* Icons */
.icon {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 1vh;
}

/* Numbers */
.number {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin: 0;
}

/* Labels */
.label {
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-top: 0.5rem;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-grid {
    gap: 12vw;
  }

  .stat-box {
    width: 150px;
  }

  .icon {
    width: 70px;
    height: 70px;
  }
}
</style>
