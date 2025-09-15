// ==============================
// Blog 드롭다운 메뉴 제어
// ==============================
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach(item => {
  const dropdown = item.querySelector('ul');
  if(!dropdown) return;

  // 마우스 들어오면 드롭다운 표시
  item.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
  });

  // 마우스 나가면 드롭다운 숨기기
  item.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});

// ==============================
// 스크롤 시 섹션 애니메이션
// ==============================
const sections = document.querySelectorAll('section');

function checkSections() {
  const triggerBottom = window.innerHeight / 5 * 4; // 화면 아래 80% 지점
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);

// ==============================
// 부드러운 스크롤 (옵션)
// ==============================
document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // 내부 섹션 링크면 스크롤 부드럽게
    if(href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
