$(function(){	

	/* Evènement au scroll sur le header */
	var scrollMiniHeader = function() {
		$('header').removeClass('scroll');
		$(window).scroll(function(){			
			if($(window).scrollTop() > 0) {
				$('header').addClass('scroll');
			} else {
				$('header').removeClass('scroll');
			}
		});
	};

	/* Slider Homepage */
	var tweenMaxSlideHome = function() {

		var mouseMove = true; 

		var $slider = $("#slider");

		var w_w = $(window).width();
		var w_c = $(".container").width();

		var active = "";
		var unactive = "";
		var type = "";

		var f = $slider.find("#first");
		var s = $slider.find("#second");
		var both = $slider.find("#first, #second");


		both.hover(function(){ 
			var elmt = $(this);
			active = elmt.addClass("active").removeClass("unactive");
			unactive = both.not(elmt).addClass("unactive").removeClass("active");
			type = active.attr("id");
		});

		$("#slider").mousemove(function(event){
			mouseUpdate(event.clientX);			
		});

		function mouseUpdate(x){  

			if(w_w >= 1200 && active && active.length > 0) {
				if(type == "first") {	
					TweenMax.to(f, 1.5, {css:{ width:w_w-x, right:x }, onUpdateParams:[f] });
					TweenMax.to(s, 1.5, {css:{ width:x, left: w_w-x }, onUpdateParams:[s] });	
				} else {     
					TweenMax.to(f, 1.5, {css:{ width:w_w-x, right:x }, onUpdateParams:[f] });
					TweenMax.to(s, 1.5, {css:{ width:x, left: w_w-x }, onUpdateParams:[s] });   			
				}
			} else {
				TweenMax.killAll();
			}
		};		
	};






	scrollMiniHeader();
	
	// Globals events
	if($('.home').length > 0) {
		tweenMaxSlideHome();
		$(window).resize(tweenMaxSlideHome);
	}
});