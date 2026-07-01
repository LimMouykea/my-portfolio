<template>
    <section id="projects" class="section-container">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-center text-md-start">
                    <h2 class="text-uppercase mb-5 display-5 fw-bold">
                        <span style="color: #168193">Project</span> Experience
                    </h2>
                </div>
            </div>

            <div class="row g-4 justify-content-center">
                <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                    <div class="portfolio-card card border-0 shadow-sm overflow-hidden position-relative h-100">
                        <div class="image-wrapper">
                             <img :src="project.image" class="card-img-top project-image" :alt="project.title" />
                        </div>

                        <div class="card-overlay d-flex flex-column justify-content-center align-items-center text-center p-4">
                            <span class="badge bg-accent mb-2 text-uppercase letter-spacing-1 project-category">
                                {{ project.category }}
                            </span>

                            <h4 class="text-white fw-bold mb-4 px-2 project-title">{{ project.title }}</h4>

                            <a :href="project.link" target="_blank" class="mt-2">
                                <button class="btn btn-outline-light rounded-pill px-4 btn-sm-mobile">
                                    View Detail
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import image1 from '@/assets/image/project/image1.png'
import image2 from '@/assets/image/project/image2.png'
import image3 from '@/assets/image/project/image3.png'
import image4 from '@/assets/image/project/image4.png'
import image5 from '@/assets/image/project/image5.png'
import image6 from '@/assets/image/project/image6.png'
const projects = ref([
    {
        id: 1,
        title: "Portfolio Website",
        category: "html / css / js ",
        image: image1,
        link : "https://portfolio-mini-project-group6-ant.netlify.app/"
    },
    {
        id: 2,
        title: "Kunpheap",
        category: "html / css / bootstrap / js",
        image: image2,
        link : "https://kunpheab.netlify.app/"
    },
    {
        id: 3,
        title: "ANT APP",
        category: "VUE / BOOTSTRAP / Rest API",
        image: image3,
        link : "https://youtu.be/vO9gVN5WpL0?si=TW7jhc-dvCV_MNxb"
    },
    {
        id: 4,
        title: "Nham Ey",
        category: "React / Tailwind / Rest API",
        image: image4,
        link : "https://www.youtube.com/watch?v=UuCTQJ9Xpl8"
    },
    {
        id: 5,
        title : "Tos Louk (On develop)",
        category: "Laravel 12 Restful API / PostgreSQL / Nuxt / Tailwind",
        image: image5,
        link : ""
    },
    {
        id: 6,
        title: "E-Submit",
        category : "Fullstack (Vue / Bootstrap / Node Express / JWT)",
        image: image6,
        link : "http://e-submit-v1-front-es.e-submit.linkpc.net/"
    }
]);

</script>

<style scoped>
.section-container {
    min-height: 100vh;
    padding-block: 80px;
    background-color: #f5f5f5;
    border-bottom: 2px solid #168193;
    display: flex;
    align-items: center;
}

.bg-accent {
    background-color: #168193;
}

/* Maintain aspect ratio for images to keep grid aligned */
.image-wrapper {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures images fill the area without distortion */
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.portfolio-card:hover .project-image {
    transform: scale(1.1);
}

/* Enhanced Overlay for Touch Devices */
.card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(3, 50, 58, 0.9); /* Using your sidebar dark teal color */
    opacity: 0;
    transition: all 0.4s ease;
    backdrop-filter: blur(2px); /* Modern touch */
}

.portfolio-card:hover .card-overlay {
    opacity: 1;
}

/* Content animation */
.card-overlay > * {
    transform: translateY(15px);
    transition: transform 0.4s ease;
}

.portfolio-card:hover .card-overlay > * {
    transform: translateY(0);
}

.letter-spacing-1 {
    letter-spacing: 1.5px;
}

.project-title { 
    font-size: clamp(1.1rem, 3vw, 1.4rem) !important; /* Scales between 1.1rem and 1.4rem depending on screen size */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.4;
}

.project-category {
    font-size: clamp(0.65rem, 2.5vw, 0.85rem);
    white-space: normal; /* Allows long category text to wrap */
    line-height: 1.4;
    padding: 8px 12px;
}

/* Mobile Specific Adjustments */
@media (max-width: 767px) {
    .image-wrapper {
        height: 200px; /* Shorter images on mobile to save space */
    }
    
    .display-5 {
        font-size: 2.2rem;
    }

}

@media (max-width: 400px) {
    .btn-sm-mobile {
        padding: 5px 15px;
        font-size: 0.8rem;
    }
}
</style>