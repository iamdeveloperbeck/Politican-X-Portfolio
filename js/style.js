const menuBtn = document.querySelector('.menu-btn');
const menuSpan = document.querySelectorAll('span');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('anim')) {
        menuBtn.classList.remove('anim');
        mobileMenu.classList.remove('show')
    } else {
        menuBtn.classList.add('anim');
        mobileMenu.classList.add('show');
    }
});

AOS.init();

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        479: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});