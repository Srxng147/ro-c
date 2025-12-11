<script setup lang="ts">
</script>

<template>
  <section class="hero-section">
    <img src="@/assets/images/hero.png" class="hero-bg" alt="Hero Image" />

    <div class="hero-content">
      <h1 class="hero-title">
        WHAT INSPIRE US!
      </h1>

      <button class="hero-btn">Watch Video</button>
    </div>
  </section>
</template>

<style scoped>
/* ------------------------------
   BASE HERO LAYOUT
--------------------------------*/
.hero-section {
  width: 100%;
  height: 100vh; /* Subtract navbar height */
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
}

/* ------------------------------
   HERO CONTENT (DESKTOP)
--------------------------------*/
.hero-content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px black;
  margin: 0;
}

.hero-btn {
  margin-top: 18px;
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  border: none;
  border-radius: 6px;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  cursor: pointer;
  transition: 0.2s ease;
}

.hero-btn:hover {
  background: white;
  transform: translateY(-2px);
}

/* ------------------------------
   MOBILE STYLES
--------------------------------*/
@media (max-width: 768px) {
  .hero-section {
    height: calc(100vh - 100px); /* Navbar taller on mobile */
  }

  .hero-content {
    bottom: 20px;
    left: 20px;
  }

  .hero-btn {
    padding: 10px 20px;
  }
}

/* ------------------------------
   SMALL MOBILE
--------------------------------*/
@media (max-width: 480px) {
  .hero-content {
    bottom: 15px;
    left: 15px;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .hero-btn {
    padding: 8px 18px;
    font-size: 0.9rem;
  }
}
</style>
