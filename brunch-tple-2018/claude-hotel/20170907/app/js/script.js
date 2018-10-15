$(function(){
    /* popup comfirmationinscription partner : begin */
     $(document).find("#popup-comfirmation-partener").modal();
    /* popup comfirmationinscription partner : end */
    /* page - mes reservation > begin */
    $(".crn-detail a").on('click', function(e){
        $(this).parents(".cr-nav").siblings(".liste-reservations-historique").toggleClass("cr-hide");
        $(this).toggleClass("crn-close");
    });
    /* page - mes reservation > end */
    
	// Communs
	$('.tchat .btn-open').on('click touch', function(e){
		e.preventDefault();
		$('.tchat-content').addClass('open');
        
        $('.tchat-content.open .btn-close').on('click touch', function(e){
            e.preventDefault();
            $('.tchat-content').removeClass('open');
        });
	});
    
    $('[data-toggle="popover"]').popover();
    
    $('input[type="date"].arrivee, input[type="date"].depart').on('keyup change', function(){
        if($(this).val() != '')
            $(this).addClass('actif');
        else
            $(this).removeClass('actif');
    });
    
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( ".min-price" ).text( ui.values[ 0 ] + "€" );
            $( ".max-price" ).text( ui.values[ 1 ] + "€" );
        }
    });
    $( ".min-price" ).text( $( "#slider-range" ).slider( "values", 0 ) + "€" );
    $( ".max-price" ).text( $( "#slider-range" ).slider( "values", 1 ) + "€" );
    
    var col_gauche = $('.colonne-gauche');
    col_gauche.find('.bottom .plus-filtres').on('click touch', function(e){
        e.preventDefault();
        
        col_gauche.find('.bottom, .resultats').hide();
        col_gauche.find('.filtres').show();
        
        col_gauche.find('.filtres .btn-annuler').on('click touch', function(e){
            e.preventDefault();
            col_gauche.find('.filtres').hide();
            col_gauche.find('.bottom, .resultats').show();
        });
    });
    
    var window_h = $(window).height();
    var page_recherche = $('.content.recherche');
    
    page_recherche.closest('body').find('footer').hide();
    page_recherche.find('.colonne-gauche').height(window_h);
    page_recherche.find('.colonne-principale').height(window_h-4);
    
    // si le bouton ouvrir le chat existe
	if($('.tchat-content').length > 0) {
		$(window).scroll(function() {
			var w_height = $(window).height();
			var w_top = $(window).scrollTop();
			var body_height = $('body').height();
			var footer_height = $('footer').outerHeight();
			
			if((body_height - (w_top + w_height)) < footer_height) {
				$('.tchat-content').addClass('bottom');
			} else {
				$('.tchat-content').removeClass('bottom');
			}
		});
	}
    
    $('.liste-salle a').on('click touch', function(e) {
        e.preventDefault();
        var b = false;
        if($(this).hasClass('actif')) {
            b = true;
        }
        $('.liste-salle a').removeClass('actif');
        if(!b) {
            $(this).addClass('actif');
        }
    });
    
    var stickyPanier = function() {
        var w_pos = $(window).scrollTop();
        var w_h = $(window).outerHeight();
        var sticky_pos = $('.hotel .recherche .panier').position().top;
        var sticky_panier = $('.hotel .recherche .panier .sticky-panier');
        
        sticky_panier.find('.cell').height(sticky_panier.find('.container').outerHeight());
        
        if(w_pos < sticky_pos - w_h)
            $('.hotel .recherche .panier .sticky-panier').show();
        else
            $('.hotel .recherche .panier .sticky-panier').hide();
    };
    
    stickyPanier();
    $(window).scroll(stickyPanier);
    
    // Page panier
    
    $('.addComment').on('click touch', function(e){
        e.preventDefault();
        
        if(!$(this).hasClass('open')) {
            $(this).addClass('open');
            $(this).closest('.contenu').find('.ajout-commentaire').slideDown();
        } else {
            $(this).removeClass('open');
            $(this).closest('.contenu').find('.ajout-commentaire').slideUp();
        }
    });
    $('.defineUsers').on('click touch', function(e){
        e.preventDefault();
        
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $(this).closest('.contenu').find('.definir-occupants').slideDown();
        } else {
            $(this).removeClass('open');
            $(this).closest('.contenu').find('.definir-occupants').slideUp();
        }
    });
    
    var gestionMenuMobile = function() {
		$body = $('body');
		$btnMenu = $('.btnMenu');
		$menuMobile = $('.menu-mobile');

		$btnMenu.on('touchstart click',function(e){
			e.preventDefault();

			/* Cross browser support for CSS "transition end" event */
      		transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

			$body.addClass('animating left');

			$menuMobile.on( transitionEnd, function() {
				$body
				.removeClass( 'animating left' )
				.addClass( 'menu-visible' );

				$menuMobile.off( transitionEnd );
			});
		});
		
		$menuMobile.on('touchstart click', function(e){
			$target = $(e.target);
			var isActive = false;
			if($target.hasClass('menu-mobile')) {
                e.preventDefault();
				/* Cross browser support for CSS "transition end" event */
	      		transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

				$body.addClass('animating right');
				
				$menuMobile.on( transitionEnd, function() {
					$body
					.removeClass( 'animating right menu-visible' );

					$menuMobile.off( transitionEnd );
				});
			}
		});
	};
    gestionMenuMobile();
});