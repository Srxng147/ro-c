<script setup lang="ts">
import { ref } from 'vue'

/* Dropdown state */
const aboutOpen = ref<boolean>(false)
const involvedOpen = ref<boolean>(false)

/* Mobile menu open/close */
const mobileMenuOpen = ref<boolean>(false)

/* Toggle dropdowns */
const toggleAbout = () => {
  aboutOpen.value = !aboutOpen.value
  involvedOpen.value = false
}

const toggleInvolved = () => {
  involvedOpen.value = !involvedOpen.value
  aboutOpen.value = false
}

const closeDropdowns = () => {
  aboutOpen.value = false
  involvedOpen.value = false
}
</script>

<template>
  <nav class="navbar-container" @click.self="closeDropdowns()">
    <!-- Left: Logo -->
    <div class="logo-area">
      <img src="@/assets/images/logo.png" class="logo" alt="logo" />
    </div>

    <!-- Right: Hamburger (mobile only) -->
    <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen">
      <span :class="{ open: mobileMenuOpen }"></span>
      <span :class="{ open: mobileMenuOpen }"></span>
      <span :class="{ open: mobileMenuOpen }"></span>
    </button>

    <!-- Main Menu -->
    <ul :class="['menu', { 'menu-open': mobileMenuOpen }]">
      <li><a href="#">PLASTIC POLLUTION</a></li>
      <li><a href="#">MISSION</a></li>
      <li><a href="#">IMPACT</a></li>

      <!-- ABOUT US -->
      <li class="dropdown">
        <button class="dropdown-btn" @click.stop="toggleAbout">ABOUT US ▾</button>

        <ul class="dropdown-menu" v-if="aboutOpen">
          <li><a href="#">TEAM</a></li>
          <li><a href="#">OUR STORY</a></li>
          <li><a href="#">CERTIFICATION AND CONTROL BODY</a></li>
          <li><a href="#">CAREERS</a></li>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">RESOURCES</a></li>
        </ul>
      </li>

      <!-- GET INVOLVED -->
      <li class="dropdown">
        <button class="dropdown-btn" @click.stop="toggleInvolved">GET INVOLVED ▾</button>

        <ul class="dropdown-menu" v-if="involvedOpen">
          <li><a href="#">PROJECT</a></li>
          <li><a href="#">EVENT</a></li>
          <li><a href="#">CLEANUP</a></li>
        </ul>
      </li>

      <li>
        <a href="#" class="donate-btn">DONATE</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* -----------------------------------------
   DESKTOP NAVBAR
------------------------------------------ */
.navbar-container {
  width: 100%;
  background-color: #0057b7;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1000;
}

.logo {
  height: 60px;
}

.menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.menu li a {
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}

.dropdown {
  position: relative;
}

.dropdown-btn {
  background: none;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
}

/* DESKTOP DROPDOWN MENU */
.dropdown-menu {
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white; /* SAME BLUE AS NAVBAR */
  padding: 10px 0;
  border-radius: 6px;
  min-width: 240px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu li a {
  display: block;
  padding: 10px 15px;
  color: #0057b7 !important;
  font-weight: 500;
}

.dropdown-menu li a:hover {
  background-color: #004a9e; /* Slightly darker blue */
}

/* DONATE BUTTON */
.donate-btn {
  background-color: white;
  color: #0057b7 !important;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
}

/* -----------------------------------------
   HAMBURGER BUTTON (hidden on desktop)
------------------------------------------ */
.hamburger {
  display: none; /* hidden on desktop */
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 28px;
  height: 3px;
  background: white;
  transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* -----------------------------------------
   MOBILE NAVBAR
------------------------------------------ */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 80px; /* below navbar */
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #0057b7;
    padding: 20px 0;
    gap: 20px;
    display: none;
  }

  .menu.menu-open {
    display: flex !important;
  }

  /* center mobile items */
  .menu li,
  .dropdown-btn {
    text-align: center;
    width: 100%;
  }

  /* MOBILE DROPDOWN MENU */
  .dropdown-menu {
    position: static;
    background-color: #004a9e;
    min-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }

  .dropdown-menu li a {
    color: white !important;
  }
}
</style>
