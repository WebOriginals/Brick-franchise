var reviewsPagin = new Swiper('.reviews-pagin-container', {
    slidesPerView: 3,

    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: 'horizontal',
            spaceBetween: 20,
        },
        990: {
            direction: 'vertical',
        }
    }
});
var reviewsDescription = new Swiper('.reviews-container', {
    navigation: {
        prevEl: '.reviews-button-prev',
        nextEl: '.reviews-button-next',
    },
    autoHeight: true,
    thumbs: {
        swiper: reviewsPagin
    },

});

