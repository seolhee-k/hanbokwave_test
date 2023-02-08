//서브메뉴_pc버전(상하)
$(document).ready(function(){
 
    $('#gnb_open').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            top:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            top: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });  
});

//서브메뉴에서 마우스 벗어날 시 창이 닫힘
$(function () {
    $(".sidebar_menu").mouseleave(function () {
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            top: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });
});


//사이드바_모바일 버전

$(document).ready(function(){
 
    $('#mobile_open').on('click', function(){
        
        $('#nav_wrap').show().animate({
            left:0
        });  
    });
    $('.left_close').on('click', function(){
       
        $('#nav_wrap').animate({
            left: '-' + 100 + '%'
                    },function(){
                        $('#nav_wrap').hide();          
                    });  
    });

});

//모바일 사이드바 세로(아코디언) 버전
$(function(){
    $('.buger_menu li').mouseenter(function(){
        $(this).children('.nav_category li ul').stop().slideDown();
    });
        $('.buger_menu li').mouseleave(function(){
        $(this).children('.nav_category li ul').stop().slideUp();
    });
});
