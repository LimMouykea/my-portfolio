<template>
  <div
    class="cloud-wrapper d-flex justify-content-center align-items-center overflow-hidden w-100"
    ref="containerRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="cloud-container">
      <div
        v-for="icon in icons"
        :key="icon.slug"
        class="cloud-icon"
        :style="{
          transform: `translate3d(${icon.x}px, ${icon.y}px, 0) scale(${icon.scale})`,
          opacity: icon.opacity,
          zIndex: icon.zIndex
        }"
      >
        <img 
          v-if="icon.url" 
          :src="icon.url" 
          :alt="icon.slug" 
          @error="handleImageError"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slugs = [
  "typescript", "javascript", "vuedotjs", "laravel", "dart", "react",
  "flutter", "android", "html5", "nodedotjs", "express", "nextdotjs",
  "prisma", "postgresql", "firebase", "nginx", "vercel",
  "testinglibrary", "jest", "cypress", "docker", "git", "jira", "github",
  "gitlab", "androidstudio", "figma"
];

const containerRef = ref(null);
const icons = ref([]);
const radius = 180; 

let baseIcons = [];
let mouseX = 0.002;
let mouseY = 0.002;
let targetX = 0.002;
let targetY = 0.002;
let animationFrameId;

onMounted(() => {
  const N = slugs.length;
  
  // 1. Calculate the 3D sphere positions first
  baseIcons = slugs.map((slug, i) => {
    const phi = Math.acos(1 - (2 * i) / N);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    return {
      slug,
      url: '', 
      fallbackTried: false, // Track fallback state here safely
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi)
    };
  });

  // 2. Stagger the image requests by 40ms
  baseIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.url = `https://cdn.simpleicons.org/${icon.slug}`;
    }, index * 40); 
  });

  animate();
});

// 3. Bulletproof fallback (Vue-native approach)
const handleImageError = (icon) => {
  if (icon.fallbackTried) return; // Prevent infinite loops
  icon.fallbackTried = true;
  // Swap the reactive URL to the enterprise CDN
  icon.url = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon.slug}.svg`;
};

const handleMouseMove = (e) => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  targetX = x * 0.00005;
  targetY = y * 0.00005;
};

const handleMouseLeave = () => {
  targetX = 0.002;
  targetY = 0.002;
};

const animate = () => {
  mouseX += (targetX - mouseX) * 0.05;
  mouseY += (targetY - mouseY) * 0.05;

  const rotY = mouseX;
  const rotX = -mouseY;

  // FIX: Mutate the existing objects instead of destroying/recreating them!
  // This ensures the 40ms timer updates the correct objects.
  baseIcons.forEach((icon) => {
    let y1 = icon.y * Math.cos(rotX) - icon.z * Math.sin(rotX);
    let z1 = icon.y * Math.sin(rotX) + icon.z * Math.cos(rotX);
    let x2 = icon.x * Math.cos(rotY) - z1 * Math.sin(rotY);
    let z2 = icon.x * Math.sin(rotY) + z1 * Math.cos(rotY);

    icon.x = x2;
    icon.y = y1;
    icon.z = z2;
  });

  const perspective = 300;

  // Map to the reactive Vue ref for rendering
  icons.value = baseIcons.map((icon) => {
    const scale = perspective / (perspective - icon.z);
    const opacity = 0.2 + 0.8 * ((icon.z + radius) / (2 * radius));

    return {
      ...icon,
      scale,
      opacity,
      zIndex: Math.round(icon.z),
    };
  });

  animationFrameId = requestAnimationFrame(animate);
};

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.cloud-wrapper {
  height: 500px;
  background-color: transparent;
  cursor: crosshair;
}

.cloud-container {
  position: relative;
  width: 0;
  height: 0;
}

.cloud-icon {
  position: absolute;
  left: 0;
  top: 0;
  /* Centering the icon by offsetting half its width/height */
  margin-left: -24px;
  margin-top: -24px;
  will-change: transform, opacity;
}

.cloud-icon img {
  width: 48px;
  height: 48px;
  pointer-events: none;
  /* Optional styling: adds a clean background so dark icons pop on dark backgrounds */
  background-color: #ffffff;
  border-radius: 12px;
  padding: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
</style>