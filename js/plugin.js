/*global $, jquery, alert*/

$(document).ready(function () {
	
	"use strict";
	
	//nicescroll
	
	$("body").niceScroll();

    $('.carousel').carousel({
		
		interval: 6000

    });

    //show color option div when click on the gear 

    $('.gear-check').click(function () {

        $('.color-option').fadeToggle();

    });

    // change theme color on click

    var
	
		colorLi = $('.color-option ul li'),
		
		scrollButton = $('#scroll-top');

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

    colorLi.click(function () {

        //$('link[href*="theme"]').remove();

        //console.log($(this).attr('data-value'));

        $('link[href*=theme]').attr('href', $(this).attr('data-value'));

    });

    //caching the scroll-top  


    $(window).scroll(function () {

        //console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 700) {

            scrollButton.show();
        
		} else {
			
			scrollButton.hide();
		}
		
    });
	
	
	//Click on scroll button
		
	scrollButton.click(function () {
		
		$('html,body').animate({scrollTop : 0}, 700);
		
	});

});


// Loading Screen

$(window).on("load", function () {

    //loading
	
	"use strict";
	
    $(".loading-overlay .spinner").fadeOut(2000,
        
        function () {
		
			$("body").css("overflow", "auto");
			$(this).parent().fadeOut(2000, function () {
				
				$(this).remove();
            
			});
		});
});

