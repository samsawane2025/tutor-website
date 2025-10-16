// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document has loaded');
});

const toggleButton = document.querySelector('.nav-bar .mobile-menu-toggle');
const mobileMenu = document.querySelector('.nav-bar .mobile-menu-items');

toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});
// Navigation bar scroll effect
window.addEventListener('scroll', function() {
    const navBar = document.querySelector('.nav-bar')

    if (window.scrollY > 0) {
        navBar.classList.add('nav-bar-scroll')
    } else {
        navBar.classList.remove('nav-bar-scroll')
    }
})