const menu = document.getElementById('dropdown-menu');
const button_menu = document.getElementById('nav-menu');
const close_icon = document.getElementById('close-icon');
const navbar_links = document.querySelectorAll('.nav-link');


button_menu.addEventListener('click', () => {
    menu.classList.remove('hidden');
});

close_icon.addEventListener('click', () => {
    menu.classList.add('hidden');
});

navbar_links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});