const menuToggle = document.querySelector('.menu-toggle');
const harburgerFirstLine = document.querySelector('.menu-toggle span:nth-child(1)');
const harburgerMiddleLine = document.querySelector('.menu-toggle span:nth-child(2)');
const harburgerLastLine = document.querySelector('.menu-toggle span:nth-child(3)');
const listMenu = document.querySelector('.menu ul');


// console.log(menuToggle);
harburgerFirstLine.style.transformOrigin = '0 0';
harburgerLastLine.style.transformOrigin = '0 100%';

isMenuClick = false;
menuToggle.addEventListener('click', (e) => {
    isMenuClick = !isMenuClick;

    listMenu.classList.toggle('slide');
    if (isMenuClick) {
        harburgerFirstLine.style.transform = 'rotate(45deg) translate(-1px, -1px)';
        harburgerMiddleLine.style.transform = 'scale(0)';
        harburgerLastLine.style.transform = 'rotate(-45deg) translate(0px, 0px)';

        // Background Color
        harburgerFirstLine.style.backgroundColor = '#f3f3f3';
        harburgerLastLine.style.backgroundColor = '#f3f3f3';

    } else {
        harburgerFirstLine.style.transform = 'rotate(0)';
        harburgerMiddleLine.style.transform = '';
        harburgerLastLine.style.transform = 'rotate(0)';


        // Background Color
        harburgerFirstLine.style.backgroundColor = '#333';
        harburgerLastLine.style.backgroundColor = '#333';
    }

})