const menuBtn =document.getElementById("menu-btn");
const navlinks =document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e)=> {
navlinks.classList.toggle("open");

const isOpen=navlinks.classList.contains("open");
menuBtnIcon.setAttribute("class",isOpen? "ri-close-line" : "ri-menu-line");
});


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});