/*

Custom JavaScript
============

Author:  #00005494
Updated: March-April 2017
Notes:	 Coursework #2 IIWT

*/

$(document).ready(function() {			
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#goTop').stop().animate({
                bottom: '20px'    
                }, 500);
        }
        else{
            $('#goTop').stop().animate({
               bottom: '-100px'    
            }, 500);
        }
    });
    $('#goTop').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('#goTop').stop().animate({
               bottom: '-100px'    
           }, 500);
        });
    });
});    