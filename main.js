/* Small screen nav bar open/close */
function clickNav() {
    const links = document.querySelectorAll('.links');
    links.forEach((link) => {
        link.classList.toggle('links-hide');
    });
}

/* Checks screen size and adds or removes nav links add button depending on size */
function checkLinks(width) {
    const navButton = document.querySelector('.nav-button');
    const links = document.querySelectorAll('.links');
    if (width >= 775) {
        links.forEach((link) => {
            link.classList.remove('links-hide');
        });
        navButton.classList.add('nav-button--hide');
    } else {
        navButton.classList.remove('nav-button--hide');
    }
}

addEventListener('DOMContentLoaded', (_) => {
    const width = window.innerWidth;
    const navButton = document.querySelector('.nav-button');
    const topButton = document.querySelector('.button-top');
    checkLinks(width);

    topButton.addEventListener('click', (_) => {
        const top = document.querySelector('#homepage');
        top.scrollIntoView({ behavior: 'smooth' });
    });

    navButton.addEventListener('click', clickNav);

    addEventListener('resize', (_) => {
        const width = window.innerWidth;
        const links = document.querySelectorAll('.links');
        links.forEach((link) => {
            link.classList.add('links-hide');
        });
        checkLinks(width);
    });

    addEventListener('scroll', (_) => {
        const pixelsTop = window.scrollY;
        const topButton = document.querySelector('.button-top')
        if (pixelsTop > 425) {
            topButton.classList.remove('button-top--hide')
        } else {
            topButton.classList.add('button-top--hide')
        }
    });
});
