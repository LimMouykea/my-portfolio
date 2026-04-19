<template>
  <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <button class="toggle-btn" @click="toggleSidebar">
      <i :class="isCollapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'"></i>
    </button>

    <div class="avatar">
      <div class="border-avatar">
        <img src="../../assets/image/photo_2026-03-03_21-37-04.jpg" alt="Avatar">
      </div>
      <div class="profile-info" v-if="!isCollapsed">
        <h3>Lim Mouykea</h3>
        <p>Web Developer</p>
      </div>
    </div>

    <nav class="nav-action">
      <ul>
        <li class="nav-item">
            <a href="#about" :class="{ 'active': activeSection === 'about' }">
                <i class="bi bi-file-person-fill"></i>
                <span v-if="!isCollapsed">About</span>
            </a>
        </li>
        <li class="nav-item">
          <a href="#education" :class="{ 'active': activeSection === 'education' }">
            <i class="bi bi-mortarboard"></i>
            <span v-if="!isCollapsed">Education</span>
          </a>
        </li>
        <li class="nav-item">
            <a href="#skills" :class="{ 'active': activeSection === 'skills' }">
                <i class="bi bi-code"></i>
                <span v-if="!isCollapsed">Skills</span>
            </a>
        </li>
        <li class="nav-item">
          <a href="#projects" :class="{ 'active': activeSection === 'projects' }">
            <i class="bi bi-briefcase"></i>
            <span v-if="!isCollapsed">Projects</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#contact" :class="{ 'active': activeSection === 'contact' }">
            <i class="bi bi-envelope"></i>
            <span v-if="!isCollapsed">Contact</span>
          </a>
        </li>
      </ul>
    </nav>

    <footer class="sidebar-footer mt-auto" v-if="!isCollapsed">
      <div class="footer-content">
        <div class="divider mb-3"></div>
        <p class="copyright mb-0">&copy; 2025 <span>Lim Mouykea</span></p>
        <p class="design-tag">Designed with <i class="bi bi-heart-fill text-danger"></i></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    defineProps(['activeSection']);
    const emit = defineEmits(['toggle']);
    const isCollapsed = ref(false);

    function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value;
    emit('toggle');
    }
</script>

<style scoped>
/* 1. Base Sidebar Styling */
.sidebar {
  box-sizing: border-box;
  padding-block: 40px;
  position: fixed;
  left: 0;
  top: 0;
  width: 300px; /* Expanded Width */
  height: 100vh;
  background-color: #03323a; /* Your dark theme color */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  transition: all 0.3s ease;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1050; /* Ensure it stays above everything */
}

/* 2. Collapsed State */
.sidebar.collapsed {
  width: 80px;
}

/* 3. Toggle Button */
.toggle-btn {
  position: absolute;
  right: -15px;
  top: 50px;
  background: #168193;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* 4. Avatar & Profile Info */
.avatar {
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  text-align: center;
}

.border-avatar {
  border: 3px solid #168193;
  padding: 8px;
  border-radius: 50%;
  display: inline-flex;
}

.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.collapsed .avatar img {
  width: 45px;
  height: 45px;
}

.profile-info h3 {
  margin-top: 15px;
  font-size: 1.2rem;
  white-space: nowrap;
}

.profile-info p {
  color: #168193;
  font-size: 0.9rem;
}

/* 5. Navigation Links */
.nav-action {
  width: 100%;
  margin-top: 20px;
}

.nav-action ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item a {
  text-decoration: none;
  color: #b0d4d9;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 30px;
  transition: all 0.2s ease;
  border-left: 4px solid transparent;
}

.nav-item a i {
  font-size: 1.2rem;
}

/* 6. ACTIVE & HOVER STATES */
.nav-item a:hover {
  color: #fff;
  background-color: rgba(22, 129, 147, 0.1);
}

.nav-item a.active {
  background-color: rgba(22, 129, 147, 0.2);
  color: #ffffff !important;
  border-left: 4px solid #168193; /* Teal indicator line */
  font-weight: bold;
}

/* 7. Collapsed Nav Adjustments */
.collapsed .nav-item a {
  justify-content: center;
  padding: 15px 0;
}

/* 8. Mobile Responsiveness */
@media (max-width: 991px) {
  .sidebar {
    transform: translateX(-100%); /* Hides sidebar on small screens */
  }
  /* Optional: Show sidebar if you add a 'mobile-show' class later */
}

/* Sidebar Footer Styling */
.sidebar-footer {
  width: 100%;
  padding: 20px;
  text-align: center;
  /* Animates the fade-in when sidebar expands */
  animation: fadeIn 0.5s ease;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Subtle divider line */
.divider {
  width: 40px;
  height: 2px;
  background-color: #168193;
  opacity: 0.3;
  border-radius: 2px;
}

.copyright {
  font-size: 0.85rem;
  color: #b0d4d9;
  letter-spacing: 0.5px;
}

.copyright span {
  color: #fff;
  font-weight: 600;
}

.design-tag {
  font-size: 0.7rem;
  color: #7f9ea3;
  margin-top: 4px;
}

.version {
  font-size: 0.65rem;
  color: rgba(176, 212, 217, 0.4);
  margin-top: 8px;
  text-transform: uppercase;
}

/* Smooth fade in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Logic for when sidebar is collapsed */
.collapsed .sidebar-footer {
  display: none; /* Keeps it clean when collapsed */
}
</style>