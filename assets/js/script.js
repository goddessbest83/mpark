// 스크롤 시 fade-in 적용
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // 홈 프로필 이미지
  const homeProfile = document.querySelector('.home-profile');
  if (homeProfile) observer.observe(homeProfile);

  // 모든 섹션 및 fade-in 요소
  const fadeElements = document.querySelectorAll('section, .home-content, .skill-item');
  fadeElements.forEach(el => observer.observe(el));
});
