<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <!-- Background -->
    <img src="@/assets/images/waterbg.png" class="bg" alt="footer background" />

    <div class="footer-content">
      <!-- LEFT LOGO -->
      <div class="footer-logo">
        <img src="@/assets/images/logo_white.png" class="logo" alt="logo" />
      </div>

      <!-- FOUR COLUMNS -->
      <div class="footer-columns">
        <div class="col">
          <h2>ABOUT</h2>
          <a>Team</a>
          <a>Our Story</a>
          <a>Careers</a>
          <a>News</a>
          <a>Resources</a>
          <a>FAQ</a>
        </div>

        <div class="col">
          <h2>SUPPORT</h2>
          <a>Explore Plastic Credit</a>
          <a>Become a member</a>
          <a>Donate as individual</a>
          <a>Sign up as volunteer</a>
        </div>

        <div class="col">
          <h2>EVENT</h2>
          <a>World Cleanup Day</a>
          <a>Good Deeds Day</a>
        </div>

        <div class="col">
          <h2>IMPACT</h2>
          <a>Impact Report</a>
        </div>
      </div>
    </div>

    <!-- SOCIAL ICONS -->
    <div class="social-row">
      <button class="social-btn">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </button>

      <button class="social-btn">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </button>

      <button class="social-btn">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>

      <button class="social-btn">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </button>
    </div>

    <!-- COPYRIGHT ROW -->
    <div class="footer-bottom">
      <p class="copy">© 2023 River Ocean Cleanup. All rights reserved.</p>

      <div class="policy-links">
        <a>Term and condition</a>
        <a>Privacy Policy</a>
        <a>Disclaimer</a>
        <a>Imprint</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  color: white;
  padding-top: 5vh;
  padding-bottom: 4vh;
  overflow: hidden;
}

.bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.6);
}

/* CONTENT AREA */
.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 0 6vw;
  flex-wrap: wrap;
  gap: 3rem;
}

/* LOGO */
.footer-logo {
  width: 260px;
}

.logo {
  width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
}

/* COLUMNS */
.footer-columns {
  display: flex;
  gap: 4vw;
  flex-wrap: wrap;
}

.col {
  min-width: 150px;
}

.col h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.col a {
  display: block;
  margin-bottom: 0.5rem;
  text-decoration: underline;
  font-size: 1.05rem;
  cursor: pointer;
  color: white;
}

/* SOCIAL ICONS */
.social-row {
  margin-top: 4vh;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.social {
  width: 45px;
  opacity: 0.9;
  transition: 0.2s;
}

.social:hover {
  opacity: 1;
}

/* COPYRIGHT BOTTOM */
.footer-bottom {
  margin-top: 3vh;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 2vh;

  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
  flex-wrap: wrap;
}

.copy {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.policy-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.policy-links a {
  text-decoration: underline;
  cursor: pointer;
  color: white !important;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-columns {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
}

.social-row {
  margin-top: 4vh;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

/* BUTTON STYLE */
.social-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);

  border: none;
  border-radius: 12px; /* Use 50% if you want circles */

  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.social-btn :deep(svg) {
  font-size: 24px;
  color: white;
}
</style>
