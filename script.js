var swiperP = new Swiper(".mySwiperP", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    /* autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});