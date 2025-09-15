document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // 모든 섹션 및 fade-in 요소
  const fadeElements = document.querySelectorAll('section, .home-content, .skill-item, .service-item, .contact-item');
  fadeElements.forEach(el => observer.observe(el));
});
