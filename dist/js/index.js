$(function(){
    $('.slider').slick({
        dots: true,
        prevArrow: '<button class="slider-btn slider-btnprev"><img src="assets/images/btn/btn-left.png"></button>',
        nextArrow: '<button class="slider-btn slider-btnnext"><img src="assets/images/btn/btn-right.png"></button>',
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.tabs-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="tabs-content slider-btn slider-btnprev"><img src="assets/images/btn/btn-left-black.png"></button>',
        nextArrow: '<button class="tabs-content slider-btn slider-btnnext"><img src="assets/images/btn/btn-right-black.png"></button>'  
    });

    $('.tab').on('click',function(e){
        e.preventDefault();

        $('.tab').removeClass('tab-active');
        $('.tab-content-item').removeClass('content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('content-active');
    });


    $('.tab-2').on('click',function(e){
        e.preventDefault();
    
        $($(this).siblings()).removeClass('tab-2-active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content-active');
    
        $(this).addClass('tab-2-active');
        $($(this).attr('href')).addClass('tabs-content-active');

        
    });

    $('.tab-3').on('click',function(e){
        e.preventDefault();
    
        $($(this).siblings()).removeClass('tab-3-active');
        $($(this).parent().siblings().find('div')).removeClass('tab-3-item-active');
    
        $(this).addClass('tab-3-active');
        $($(this).attr('href')).addClass('tab-3-item-active');

        
    });

    $('.like').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('like-active');
    });


    $('.filter-style').styler();

    $('.filter-drop').on('click', function(){
        $(this).toggleClass('filter-drop-active');
        $(this).next().slideToggle('50');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.img-btn').on('click', function(){
        $(this).addClass('change-btn-active');
        $('.list').removeClass('change-btn-active');
        $('.product_item').removeClass('product_item-active');
    });

    $('.list').on('click', function(){
        $(this).addClass('change-btn-active');
        $('.img-btn').removeClass('change-btn-active');
        $('.product_item').addClass('product_item-active')
    });
});

