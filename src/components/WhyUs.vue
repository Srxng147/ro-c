<script setup lang="ts"></script>

<template>
  <section class="whyus-section">
    <!-- Background -->
    <img src="@/assets/images/waterbg.png" class="bg" />

    <h1 class="title">WHY YOU SHOULD BE WITH US?</h1>

    <div class="card-grid">
      <!-- CARD 1 -->
      <div class="info-card">
        <img src="@/assets/images/certified_impact.png" class="card-img" alt="" />

        <h2 class="card-title">CERTIFIED IMPACT</h2>

        <p class="card-text">
          We are Cambodia’s first NGO certified under the OBP Neutrality Standard— ensuring
          transparent, third-party verified plastic recovery.
        </p>
      </div>

      <!-- CARD 2 -->
      <div class="info-card">
        <img src="@/assets/images/prevention.JPG" class="card-img" alt="" />

        <h2 class="card-title">PREVENTION AT THE SOURCE</h2>

        <p class="card-text">
          We are Cambodia’s first NGO certified under the OBP Neutrality Standard— ensuring
          transparent, third-party verified plastic recovery.
        </p>
      </div>

      <!-- CARD 3 -->
      <div class="info-card">
        <img src="@/assets/images/scalable_image.JPG" class="card-img" alt="" />

        <h2 class="card-title">SCALABLE AND SUSTAINABLE SOLUTION</h2>

        <p class="card-text">
          We are Cambodia’s first NGO certified under the OBP Neutrality Standard— ensuring
          transparent, third-party verified plastic recovery.
        </p>
      </div>

      <!-- CARD 4 -->
      <div class="info-card">
        <img src="@/assets/images/stratic.JPG" class="card-img" alt="" />

        <h2 class="card-title">STRATEGIC PARTNERSHIP VALUE</h2>

        <p class="card-text">
          We are Cambodia’s first NGO certified under the OBP Neutrality Standard— ensuring
          transparent, third-party verified plastic recovery.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Background wrapper */
.whyus-section {
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
  z-index: -1;
  filter: brightness(0.7);
}

/* Title */
.title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 6vh;
}

/* Grid layout */
.card-grid {
  display: flex;
  justify-content: center;
  gap: 3vw;
  flex-wrap: wrap;
}

/* Individual cards */
.info-card {
  width: 260px;
  background: rgba(255, 255, 255, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding-bottom: 2vh;
}

/* Images */
.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
}

/* Titles */
.card-title {
  margin: 1.5vh 0 1vh 0;
  font-size: 1.1rem;
  font-weight: 900;
}

/* Description */
.card-text {
  font-size: 0.9rem;
  padding: 0 12px 10px 12px;
  line-height: 1.4;
}

/* Mobile Responsive */
@media (max-width: 900px) {
  .info-card {
    width: 45%;
  }
}

@media (max-width: 600px) {
  .info-card {
    width: 90%;
  }
}
</style>
