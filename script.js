const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

let timeout;



menuIcon.onclick = () => {
    navLinks.classList.toggle('active');

    if(navLinks.classList.contains('active')){

    clearTimeout(timeout);

    timeout = setTimeout(() =>{
        if(!navLinks.matches(':hover')){
            navLinks.classList.remove('active');
        }
    }, 1000);

 
    }

  
};
navLinks.addEventListener('mouseleave',() => {
    navLinks.classList.remove('active');
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  
  const progress = scrollTop / maxScroll;
  const maxX = window.innerWidth - 100; 
  
  const moveX = progress * maxX;
  const rotation = progress * 720;

  document.getElementById("mario").style.transform = `translateX(${moveX}px) rotate(${rotation}deg)`;;
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    }
});