<template>
    <section id="education" class="section-container">
        <div class="container-fluid p-0">
            <div class="row g-5 align-items-center">
                <div class="col-12 text-center text-lg-start">
                    <h2 class="text-uppercase mb-5 display-5 fw-bold">
                        <span style="color: #168193;">Education</span> Background
                    </h2>
                </div>

                <div class="col-12 col-lg-5 album-wrapper">
                    <div class="example-container mx-auto">
                        <motion.ul ref="containerRef" :style="listStyles">
                            <motion.li v-for="(image, index) in imageList" :key="index"
                                :style="{ ...listItemStyles, backgroundImage: `url(${image.src})` }"
                                :initial="{ opacity: 0, scale: 0.5 }" :whileInView="{ opacity: 1, scale: 1 }"
                                :whileHover="{ scale: 1.02 }" :transition="{ duration: 0.4 }">
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>

                <div class="col-12 col-lg-7 timeline-wrapper">
                    <el-timeline>
                        <el-timeline-item timestamp="2023 - 2027" placement="top">
                            <el-card class="edu-card">
                                <h5>Royal University of Phnom Penh</h5>
                                <p>Bachelor of Computer Science</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2025 - 2026" placement="top">
                            <el-card class="edu-card">
                                <h5>CBRD Foundation (MPTC)</h5>
                                <p>Web Developer Program</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2011 - 2022" placement="top">
                            <el-card class="edu-card">
                                <h5>Hun Sen Saang High School</h5>
                                <p>General Education Graduate</p>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { motion, useScroll, useMotionValue, useMotionValueEvent, useDomRef, animate } from 'motion-v'
import image1 from '@/assets/image/photo_2026-03-03_21-37-04.jpg'
import image2 from '@/assets/image/image2.png'
import image3 from '@/assets/image/image3.png'
import image4 from '@/assets/image/image.png'
import image5 from '@/assets/image/team.JPG'
const containerRef = useDomRef()
const { scrollXProgress } = useScroll({ container: containerRef })
const maskImage = useScrollOverflowMask(scrollXProgress)

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask(scrollXProgress) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    )

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(maskImage, `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`)
        } else if (value === 1) {
            animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`)
        } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
            animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`)
        }
    })

    return maskImage
}

const listStyles = {
    width: '100%',
    display: 'flex',
    listStyle: 'none',
    height: '350px',
    overflowX: 'auto',
    padding: '20px 0',
    margin: '0',
    gap: '20px',
    scrollSnapType: 'x mandatory', 
}

const listItemStyles = {
    flex: '0 0 85%', // Takes up 85% of width on small screens
    maxWidth: '350px', // But won't get too big on desktop
    borderRadius: '20px',
    backgroundSize: 'cover', // Use cover for better photo display
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    scrollSnapAlign: 'start',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
}

const imageList = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
]
</script>

<style scoped>
/* Ensure the section grows with content */
#education {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
}

.example-container {
    width: 100%;
    max-width: 500px; /* Limits size on desktop */
    position: relative;
}

.edu-card {
    border-radius: 12px;
    transition: transform 0.3s ease;
    border-left: 5px solid #168193;
}

.edu-card:hover {
    transform: translateX(10px);
}

.edu-card h5 {
    color: #03323a;
    font-weight: 700;
}

/* Timeline Customization */
:deep(.el-timeline-item__node) {
    background-color: #168193;
}

/* Responsive Overrides */
@media (max-width: 991px) {
    #education {
        padding-block: 60px; /* More space on top/bottom for mobile */
    }
    
    .album-wrapper {
        margin-bottom: 40px;
    }

    .example-container {
        max-width: 100%;
    }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    height: 6px;
}
::-webkit-scrollbar-thumb {
    background: #168193;
    border-radius: 10px;
}
</style>