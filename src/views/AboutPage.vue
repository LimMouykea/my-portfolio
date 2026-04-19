<template>
  <section id="about" class="section-container">
    <div class="content-wrapper">
      <h1 class="text-uppercase mb-4 display-5 fw-bold">
        Welcome to <span class="text-accent">my resume!</span>
      </h1>

      <div class="info-grid d-flex flex-wrap gap-4 mb-4">
        <div class="info-item">
          <i class="bi bi-calendar2-day me-2"></i>
          <span>19.10.2004</span>
        </div>
        <div class="info-item">
          <i class="bi bi-telephone me-2"></i>
          <span>010 96 14 34</span>
        </div>
        <div class="info-item">
          <i class="bi bi-envelope-at me-2"></i>
          <span>mouykealim2@gmail.com</span>
        </div>
        <div class="info-item">
          <i class="bi bi-pin-map-fill me-2"></i>
          <span>Phnom Penh, Cambodia</span>
        </div>
      </div>

      <div class="bio-text mb-5">
        <p class="desc">
          My name is <strong>Lim Mouykea</strong>. I am a Computer Science graduate from the 
          <strong>Royal University of Phnom Penh (RUPP)</strong>.
        </p>
        <p class="desc">
          I have gained practical experience in web development through a scholarship program at 
          ANT Technology Training Center. I specialize in building responsive and user-friendly 
          web applications using modern front-end and back-end technologies.
        </p>
        <p class="desc">
          I am passionate about learning new technologies and solving real-world problems. 
          I possess strong communication skills and thrive in collaborative team environments.
        </p>
      </div>

      <div class="social-info">
        <div class="social-item" v-for="link in socialLinks" :key="link.icon">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            <i :class="['bi', link.icon]"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const socialLinks = [
  { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/mouykea-lim-4003b8350/' },
  { icon: 'bi-github', url: 'https://github.com/LimMouykea' },
  { icon: 'bi-facebook', url: 'https://www.facebook.com/mouykea.lim.16/' }
];
</script>

<style scoped>
/* Color Palette */
.text-accent {
  color: #168193;
}

i {
  color: #168193;
}


.info-grid .info-item {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}

.desc {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

/* Social Icons */
.social-info .social-item {
  display: inline-block;
  margin-right: 20px;
}

.social-info .social-item a {
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.social-info .social-item a:hover {
  color: #054d5a;
  transform: translateY(-3px);
  display: inline-block;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  .info-grid {
    flex-direction: column;
    gap: 10px !important;
  }
}
</style>