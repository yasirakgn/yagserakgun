//Sticky Navbar//
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
    if (menu.classList.contains('bx-menu')) {
        menu.classList.replace('bx-menu', 'bx-x');
    } else {
        menu.classList.replace('bx-x', 'bx-menu');
    }
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.replace('bx-x', 'bx-menu');
}

// Dark Mode//
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('active');
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-container'),
    path: 'herolottie.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",

});


//poup//
const buttons = document.querySelectorAll('.popupbutton');
const modals = document.querySelectorAll('.modalpopup');
const overlay = document.getElementById("overlay")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        modals[i].classList.toggle("active")
        overlay.classList.toggle("active")
    });
}

for (let i = 0; i < modals.length; i++) {
    const closeButton = modals[i].querySelector('.close-button');
    closeButton.addEventListener('click', function () {
        modals[i].classList.toggle("active")
        overlay.classList.toggle("active")
    });
}
