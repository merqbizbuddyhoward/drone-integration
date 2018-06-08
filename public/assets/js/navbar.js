const NavbarFunction = () => {
    let toggle = document.getElementsByClassName('navbar-toggler')[0],
        collapse = document.getElementsByClassName('navbar-collapse')[0],
        dropdowns = document.getElementsByClassName('dropdown'),
        pageLinks = document.getElementsByClassName('pageLinks')[0],
        navbarTogglerIcon = document.getElementsByClassName('navbar-toggler-icon')[0];

    let closeMenu = () => {
        collapse.classList.remove('show');
    }

    let openMenu = () => {
        collapse.classList.add('show');
    }

    // Event listeners
    pageLinks.addEventListener('click', closeMenu, false);
}

export { NavbarFunction };
