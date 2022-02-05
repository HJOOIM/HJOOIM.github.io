$(function(){
    $('.owl-carousel').owlCarousel({
items:4,
loop:true,
margin:10,
nav:true,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true

})

$(window).scroll(function(){
    if($(this).scrollTop() >= 300){
        $('.go_top').fadeIn();
    }else{
        $('.go_top').fadeOut();
    }
});
$('.go_top').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:0},500);
});

$(window).scroll(function(){
    if($(this).scrollTop() >= 1800){
        $('.aside').show();
    }else{
        $('.aside').hide();
    }
});

});