let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2600,
    reset: true
});

sr.reveal('.main-content h1', {delay:400, origin: 'left'});
sr.reveal('.main-content p', {delay:600, origin: 'bottom'});
sr.reveal('.main-content .button', {delay:700, origin: 'top'});