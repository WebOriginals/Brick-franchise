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



