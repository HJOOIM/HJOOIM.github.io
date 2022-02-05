$(function(){
    $(window).scroll(function(){
    if($(this).scrollTop() >= 200){
        $('.go_top').fadeIn();
    }else{
        $('.go_top').fadeOut();
    }
});
$('go_top').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:0},500);
});

var navTop=$("#navi").offset().top;
    $(window).scroll(function(){
        if($(this).scrollTop() > navTop){
            $("#navi").addClass("fixed");
        }else{
            $("#nav").removeClass("fixed");
        }
    });
});