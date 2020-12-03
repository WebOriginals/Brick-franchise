var reviewsPagin = new Swiper('.reviews-pagin-container', {
    slidesPerView: 3,
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
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

