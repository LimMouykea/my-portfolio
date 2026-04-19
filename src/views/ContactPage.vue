<template>
  <section id="contact" class="section-container">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h1 class="text-uppercase mb-4 display-5 fw-bold">Let's <span class="text-accent">Connect</span></h1>
          <p class="mb-5">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div class="info-list">
            <div class="info-item d-flex align-items-center mb-4">
              <div class="icon-box me-3">
                <i class="bi bi-envelope-at"></i>
              </div>
              <div>
                <p class="mb-0 text-uppercase small text-muted fw-bold">Email Me</p>
                <a href="mailto:mouykealim2@gmail.com" class="text-decoration-none text-dark">mouykealim2@gmail.com</a>
              </div>
            </div>

            <div class="info-item d-flex align-items-center mb-4">
              <div class="icon-box me-3">
                <i class="bi bi-telephone"></i>
              </div>
              <div>
                <p class="mb-0 text-uppercase small text-muted fw-bold">Call Me</p>
                <span class="text-dark">010 96 14 34</span>
              </div>
            </div>

            <div class="info-item d-flex align-items-center">
              <div class="icon-box me-3">
                <i class="bi bi-pin-map-fill"></i>
              </div>
              <div>
                <p class="mb-0 text-uppercase small text-muted fw-bold">Location</p>
                <span class="text-dark">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 offset-lg-1">
          <div class="form-card p-4 p-md-5 shadow-sm">
            <form @submit.prevent="">
              <div class="mb-3">
                <label for="name" class="form-label fw-semibold">Name</label>
                <input type="text" class="form-control custom-input" id="name" placeholder="Your Name">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label fw-semibold">Email address</label>
                <input type="email" class="form-control custom-input" id="email" placeholder="name@example.com">
              </div>
              <div class="mb-4">
                <label for="message" class="form-label fw-semibold">Message</label>
                <textarea class="form-control custom-input" id="message" rows="4" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" class="btn btn-accent w-100 py-2 fw-bold text-white">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 80px 15px; 
}

.text-accent {
  color: #168193;
}

.btn-accent {
  background-color: #168193;
  border-color: #168193;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background-color: #126a7a;
  transform: translateY(-2px);
}

.icon-box {
  width: 50px;
  height: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #168193;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.form-card {
  background: white;
  border-radius: 20px;
  border-bottom: 4px solid #168193;
}

.custom-input {
  padding: 12px;
  border: 1px solid #e0e0e0;
  background-color: #fdfdfd;
}

.custom-input:focus {
  border-color: #168193;
  box-shadow: 0 0 0 0.25rem rgba(22, 129, 147, 0.1);
}

@media (max-width: 991px) {
  .contact-section {
    height: auto;
    padding: 60px 20px;
  }
}
</style>