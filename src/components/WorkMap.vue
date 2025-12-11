<script setup lang="ts">
</script>

<template>
  <section class="map-banner">
    <!-- Background -->
    <img src="@/assets/images/waterbg.png" alt="Background" class="map-background" />

    <!-- Foreground content -->
    <div class="map-contents">
      <h1 class="map-page-title">MAPPING OUR WORK</h1>

      <div class="map-wrapper">
        <img src="@/assets/images/map.png" alt="World Map" class="map-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------------------------------------------------
   FULLSCREEN SECTION
--------------------------------------------------- */
.map-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* ---------------------------------------------------
   BACKGROUND IMAGE
--------------------------------------------------- */
.map-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75);
  z-index: -1;
}

/* ---------------------------------------------------
   CONTENT LAYOUT
--------------------------------------------------- */
.map-contents {
  width: 100%;
  max-width: 1400px;
  padding: 5vh 5vw;
  text-align: center;
  color: white;
}

/* ---------------------------------------------------
   TITLE
--------------------------------------------------- */
.map-page-title {
  font-weight: 900;
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  margin-bottom: 4vh;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ---------------------------------------------------
   MAP IMAGE WRAPPER
--------------------------------------------------- */
.map-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
}

/* Map Image */
.map-image {
  width: 75%;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1); /* match your white map */
}

/* ---------------------------------------------------
   RESPONSIVE ADJUSTMENTS
--------------------------------------------------- */
@media (max-width: 900px) {
  .map-page-title {
    margin-bottom: 3vh;
  }

  .map-wrapper {
    max-width: 90%;
  }
}

@media (max-width: 600px) {
  .map-banner {
    height: auto;
    padding: 8vh 0;
  }

  .map-page-title {
    font-size: clamp(1.6rem, 6vw, 2.5rem);
  }

  .map-wrapper {
    max-width: 100%;
  }
}
</style>
