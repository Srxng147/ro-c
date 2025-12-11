<script setup lang="ts">
</script>

<template>
  <section class="support-section">

    <h1 class="title">SUPPORT OUR MISSION</h1>

    <!-- Three cards -->
    <div class="support-grid">

      <!-- Card 1 -->
      <div class="support-card">
        <img src="@/assets/images/hero.png" alt="" class="card-img" />

        <h2 class="card-title">SUPPORT AS COMPANY</h2>

        <button class="action-btn">EXPLORE</button>
      </div>

      <!-- Card 2 -->
      <div class="support-card">
        <img src="@/assets/images/hero.png" alt="" class="card-img" />

        <h2 class="card-title">SUBCRIBE AS MEMBER</h2>

        <button class="action-btn">JOIN NOW!</button>
      </div>

      <!-- Card 3 -->
      <div class="support-card">
        <img src="@/assets/images/hero.png" alt="" class="card-img" />

        <h2 class="card-title">BE A VOLUNTEER</h2>

        <button class="action-btn">CHECK UP-COMING EVENT</button>
      </div>

    </div>

  </section>
</template>

<style scoped>
/* MAIN SECTION */
.support-section {
  width: 100%;
  padding: 8vh 5vw;
  text-align: center;
  background-color: white;
  color: #0a1f33;
}

/* TITLE */
.title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 6vh;
}

/* GRID LAYOUT */
.support-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4vw;
  flex-wrap: wrap;
}

/* INDIVIDUAL CARD */
.support-card {
  width: 300px;
  text-align: center;
}

/* IMAGE */
.card-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
}

/* CARD TITLE */
.card-title {
  margin: 1.2rem 0;
  font-size: 1.3rem;
  font-weight: 800;
  color: #0a1f33;
}

/* BUTTONS */
.action-btn {
  background-color: #d48537;
  color: white;
  font-weight: 700;
  border: none;
  padding: 12px 35px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.25s;
}

.action-btn:hover {
  background-color: #b56c2e;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .support-card {
    width: 80%;
  }
}

@media (max-width: 600px) {
  .support-card {
    width: 100%;
  }
}
</style>
