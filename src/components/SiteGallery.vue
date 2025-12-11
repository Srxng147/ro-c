<script setup lang="ts">
/* -------------------------------------------
   Load all gallery images using import.meta.glob
------------------------------------------- */

/* Type for Vite image modules */
type ImageModule = {
  default: string
}

/* Load all matching image files */
const imageModules = import.meta.glob<ImageModule>(
  '@/assets/images/gallery/*.{png,jpg,jpeg,JPG}',
  { eager: true }
)

/* Extract URLs into an array */
const galleryImages: string[] = Object.values(imageModules).map(
  (mod) => mod.default
)
</script>

<template>
  <section class="gallery-section">
    <!-- Background -->
    <img src="@/assets/images/waterbg.png" class="bg" />

    <h1 class="title">GALLERY</h1>

    <div class="gallery-grid">
      <div v-for="(img, index) in galleryImages" :key="index" class="img-box">
        <img :src="img" alt="gallery image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Main section styling */
.gallery-section {
  position: relative;
  padding: 10vh 5vw;
  text-align: center;
  color: white;
}

/* Background image */
.bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  z-index: -1;
}

/* Title */
.title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 5vh;
}

/* Grid of all images */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

/* Each image box */
.img-box {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
}

/* Images themselves */
.img-box img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
  border-radius: 15px;
}

/* Tablet */
@media (max-width: 1000px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile */
@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .img-box img {
    height: 140px;
  }
}
</style>
