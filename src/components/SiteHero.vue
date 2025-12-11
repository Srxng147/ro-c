<script setup lang="ts"></script>

<template>
  <section class="mission-banner">
    <div class="overlay"></div>

    <img src="@/assets/images/hero1.png" alt="Mission Image" class="mission-bg" />

    <div class="mission-content">
      <h1 class="mission-title">MISSION</h1>
      <h2 class="mission-subtitle">PLASTIC-FREE RIVERS/OCEAN</h2>
    </div>
  </section>
</template>

<style scoped>
/* --- Container --- */
.mission-banner {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* --- Background Image --- */
.mission-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}

/* --- Dark Overlay --- */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35); /* same as screenshot */
}

/* --- Centered Content --- */
.mission-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

/* --- Title --- */
.mission-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  margin: 0;
}

/* --- Subtitle --- */
.mission-subtitle {
  margin-top: 10px;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: 700;
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 768px) {
  .mission-banner {
    height: 45vh;
  }

  .mission-subtitle {
    margin-top: 6px;
  }
}

@media (max-width: 480px) {
  .mission-banner {
    height: 40vh;
  }
}
</style>
