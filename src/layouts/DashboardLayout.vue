<template>
  <div class="app-layout">
    <Sidebar :active-section="activeSection" @toggle="handleToggle" />

    <main :class="{ 'content-collapsed': isCollapsed }">
      <AboutSection id="about" />
      <EducationPage id="education" />
      <SkillPage id="skills" />
      <ProjectPage id="projects" />
      <ContactPage id="contact" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from '@/components/layout/SideBar.vue';
import AboutSection from '@/views/AboutPage.vue';
import EducationPage from '@/views/EducationPage.vue';
import SkillPage from '@/views/SkillPage.vue';
import ProjectPage from '@/views/ProjectPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import image from '@/assets/image/photo_2026-03-03_21-37-04.jpg'


const isCollapsed = ref(false);
const activeSection = ref('about');

function handleToggle() {
  isCollapsed.value = !isCollapsed.value;
}

// Logic for active section detection
let observer = null;

onMounted(() => {
  const options = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.6, // Trigger when 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // This updates the variable we pass to the Sidebar
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  // CRITICAL: These strings MUST match the id="" in your HTML tags
  const sectionIds = ['about', 'education', 'skills', 'projects', 'contact'];
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      observer.observe(el);
    } else {
      console.warn(`Element with id "${id}" not found!`);
    }
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style>
/* Global resets */
body { margin: 0; overflow-x: hidden; font-family: 'Inter', sans-serif; }

.app-layout { display: flex; width: 100%; }

main {
  background-color: #f5f5f5;
  transition: all 0.3s ease;
  margin-left: 300px; 
  width: calc(100% - 300px);
}

main.content-collapsed {
  margin-left: 80px;
  width: calc(100% - 80px);
}

/* Important: Fixes the 'squeezed' look on mobile */
@media (max-width: 991px) {
  main, main.content-collapsed {
    margin-left: 0 !important;
    width: 100% !important;
  }
}
</style>