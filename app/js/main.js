$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px",
    });

 

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });


    

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();    
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active');
    });

    $('.product-one__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });





    var mixer = mixitup('.products__inner-box');

});