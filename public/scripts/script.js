const open_menu = document.querySelector('.open-menu')
const navbar = document.querySelector('.navbar')
const hamburgerBtn = document.querySelector('.hamburger')

open_menu.addEventListener('click', toggleMenu)

function toggleMenu () {
    navbar.classList.toggle('is-active')
    hamburgerBtn.classList.toggle('toggle')
}



