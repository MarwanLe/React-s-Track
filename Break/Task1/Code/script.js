const hamburger = document.querySelector(".Hamburger");
const navmenu = document.querySelector(".Menu-Header nav ul");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

document.querySelectorAll('.Menu-Header nav ul li a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}));