import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import faviconImg from '@/assets/image/photo_2026-03-03_21-37-04.jpg'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')

// Generate rounded favicon dynamically
function setRoundedFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = faviconImg;
  img.onload = () => {
    ctx.beginPath();
    ctx.arc(64, 64, 64, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, 0, 0, 128, 128);
    
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = canvas.toDataURL('image/png');
  };
}
setRoundedFavicon();
