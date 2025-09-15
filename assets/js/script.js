// Blog 드롭다운
const navItems = document.querySelectorAll('nav ul li');
navItems.forEach(item => {
  const dropdown = item.querySelector('ul');
  if(!dropdown) return;
  item.addEventListener('mouseenter', () => { dropdown.style.display = 'block'; });
  item.addEventListener('mouseleave', () => { dropdown.style.display = 'none'; });
});

// 스크롤 애니메이션
const sections = document.querySelectorAll('section');
function checkSections() {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) section.classList.add('visible');
  });
}
window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
