<template>
  <Navbar />
  <main>
    <HeroSection />
    <AboutSection />
    <TechStack />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechStack from './components/TechStack.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>