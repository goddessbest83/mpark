// Scroll animation + Blog menu 개선 + GSAP 애니메이션 + 부드러운 스크롤
document.addEventListener('DOMContentLoaded', function(){
  // 스크롤 시 section 애니메이션
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('visible'); }
    });
  }, { threshold:0.1 });
  sections.forEach(section => observer.observe(section));

  // Blog 메뉴 hover with delay
  const blogMenu = document.querySelector('.has-submenu');
  const submenu = blogMenu.querySelector('.submenu');
  let timer;
  blogMenu.addEventListener('mouseenter', ()=>{
    clearTimeout(timer);
    submenu.style.display='block';
  });
  blogMenu.addEventListener('mouseleave', ()=>{
    timer = setTimeout(()=>{ submenu.style.display='none'; }, 300);
  });

  // GSAP 배너 애니메이션
  gsap.from(".banner h1", { y:-50, opacity:0, duration:1 });
  gsap.from(".banner p", { y:50, opacity:0, duration:1, delay:0.3 });

  // 부드러운 스크롤
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href; // 페이지 이동
      }
    });
  });
});
