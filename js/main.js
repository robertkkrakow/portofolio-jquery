'use strict';

$(document).ready(function(){
    //wywolanie funkcji scrollMenu  
    scrollMenu();            
    });

$(window).scroll(function(){
    scrollMenu(); 
});



//po zaczynaniu skrolowania ma sie zmieniac kolor tla menu
function scrollMenu () {

    //def - zczytywanie wysokosci menu
var navHeight = $('#menu').height();


   if($(window).scrollTop() >= navHeight ) {
       $('#menu').addClass('newMenu');
   } else {
       $('#menu').removeClass('newMenu');

    
        };
 };

//smooth scrool
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
