$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.menu').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
        $(".wrapper-gamburger").addClass('menu-hover');
    } else {
        $('.menu').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
        $(".wrapper-gamburger").removeClass('menu-hover');
    }
});
if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
    $(".li-second-level-menu").click(function () {
        var elem = this;
        var block = $(elem).closest('.li-second-level-menu');
        var items = $(block).find('.ul-second-level-menu');
        $(items).toggleClass("ul-second-level-menu-visible");
    });
}
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

