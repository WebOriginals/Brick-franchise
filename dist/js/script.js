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


//var sliderWrapp = $( '.portfolio-container' ).closest( '.portfolio-row' );
//var bodySlider = $( .portfolio-row' ).find( '.portfolio-container' );

$( '.portfolio-container' ).each( function(){
    new Swiper( this, {
        navigation: {
            nextEl: '.portfolio-button-next',
            prevEl:  '.portfolio-button-prev' ,
        },
    });
});




var swiper = new Swiper('.business-container', {
    pagination: {
        el: '.business-pagination',
    },
    spaceBetween: 30,
});
var ratesSl = new Swiper('.rates-container', {
    pagination: {
        el: '.rates-pagination',
    },
    spaceBetween: 30,
});
var ratesSl_2 = new Swiper('.rates-container_2', {
    pagination: {
        el: '.rates-pagination_2',
    },
    spaceBetween: 30,
});
var swiper = new Swiper('.ready-made-brand-container', {
    pagination: {
        el: '.ready-made-brand-paginatio',
    },
    spaceBetween: 30,
});
var desigin = new Swiper('.design-container', {
    pagination: {
        el: '.design-pagination',
    },
});