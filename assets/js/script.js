// Scroll animation
document.addEventListener('DOMContentLoaded', function(){
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('visible'); }
    });
  }, { threshold:0.1 });
  sections.forEach(section => observer.observe(section));

  // Blog menu hover with delay
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
});
