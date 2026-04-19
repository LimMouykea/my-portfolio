<template>
  <section id="skills" class="section-container">
    <div class="container">
      <div class="row align-items-center gy-5">
        
        <div class="col-12 mb-4 mb-md-5 text-center">
          <h2 class="text-start text-uppercase display-5 fw-bold">
            <span class="text-accent">Technical</span> Expertise
          </h2>
        </div>

        <div class="col-12 col-xl-6">
          <div class="demo-progress pe-xl-5">
            <div class="skill-group mb-4">
              <p class="fw-semibold mb-2">Front End <span class="text-muted small">(HTML, CSS, JS, Vue, React)</span></p>
              <el-progress :text-inside="true" :stroke-width="24" :percentage="100" color="#168193" />
            </div>

            <div class="skill-group mb-4">
              <p class="fw-semibold mb-2">Back End <span class="text-muted small">(Laravel, Node.js, Express)</span></p>
              <el-progress :text-inside="true" :stroke-width="24" :percentage="90" status="success" />
            </div>

            <div class="skill-group mb-4">
              <p class="fw-semibold mb-2">UI/UX Design <span class="text-muted small">(Figma)</span></p>
              <el-progress :text-inside="true" :stroke-width="24" :percentage="80" color="#67C23A" />
            </div>

            <div class="skill-group mb-4">
              <p class="fw-semibold mb-2">Database <span class="text-muted small">(PostgreSQL, MySQL)</span></p>
              <el-progress :text-inside="true" :stroke-width="24" :percentage="80" status="warning" />
            </div>

            <div class="skill-group">
              <p class="fw-semibold mb-2">Version Control <span class="text-muted small">(Git, GitHub)</span></p>
              <el-progress :text-inside="true" :stroke-width="24" :percentage="100" color="#168193" />
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6 d-flex justify-content-center align-items-center">
          <div class="globe-wrapper">
            <InteractiveGlobe />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>
import InteractiveGlobe from './InteractiveGlobe.vue';
</script>
<style scoped>
.section-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding-block: 80px;
}

.text-accent {
  color: #168193;
}

/* Customizing Element Plus Progress Text */
:deep(.el-progress-bar__innerText) {
  font-weight: bold;
}

.skill-group p {
  font-size: 1.05rem;
  color: #333;
}

/* Ensure the globe is responsive */
.globe-wrapper {
  width: 100%;
  max-width: 500px; /* Limits size on desktop */
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive Adjustments */
@media (max-width: 1199px) {
  .section-container {
    height: auto;
    padding-inline: 20px;
  }
  
  .demo-progress {
    max-width: 700px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .skill-group p {
    font-size: 0.9rem;
  }
  
  .globe-wrapper {
    max-width: 300px; /* Smaller globe on mobile */
  }
}
</style>