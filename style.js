function slider (anything) {
    document.querySelector('.one').src = anything
};

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclik = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

