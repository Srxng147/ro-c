<script setup lang="ts">
import SiteNavBar from '@/components/SiteNavbar.vue'
import SiteHero from '@/components/SiteHero.vue'
import VisionMission from '@/components/VisionMission.vue'
import WorkMap from '@/components/WorkMap.vue'
import SiteStats from '@/components/SiteStats.vue'
import SupportImpact from '@/components/SupportImpact.vue'
import WhyUs from '@/components/WhyUs.vue'
import SiteGallery from '@/components/SiteGallery.vue'
import SupportMission from '@/components/SupportMission.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="home-container">
    <SiteNavBar />

    <SiteHero />

    <VisionMission />

    <WorkMap />

    <SiteStats />

    <SupportImpact />

    <WhyUs />

    <SiteGallery />

    <SupportMission />

    <SiteFooter />
  </div>
</template>

<style scoped>
.home-container {
  width: 100vw;
  display: block;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 0;
  margin-top: 0;
}
</style>
