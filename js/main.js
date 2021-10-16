$(document).ready(function(){
   
    
// Objeto del Banner
var banner = {
    padre: $('#banner'),
    numeroSlides: $('#banner').children('.slide').length,
    posicion: 1
}

var info = {
    padre: $('#info'),
    numeroSlides: $('#info').children('.slide').length,
    posicion: 1
}

banner.padre.children('.slide').first().css({
    'left': 0
});

info.padre.children('.slide').first().css({
    'left': 0
});

    // Funcion para calcular el alto

var altoBanner = function () {
    var alto = banner.padre.children('.slide').outerHeight();
    banner.padre.css({
        'height': alto + 'px'
    });
}



    var altoinfo = function () {
    var alto = info.padre.children('.active').outerHeight();
    info.padre.animate({
        'height': alto + 'px'
    });
}




altoBanner();
altoinfo();



$(window).resize(function(){
    altoBanner();
    altoinfo();
});
// ---------------------------------------
// ----- Banner
// ---------------------------------------

	// Boton Siguiente

	$('#banner-next').on('click', function(e){
		e.preventDefault();

		if (banner.posicion < banner.numeroSlides){
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});

			$('#banner .active').prev().animate({
				'left': '-100%'
			});

			banner.posicion = banner.posicion + 1;
		} else {
			$('#banner .active').animate({
				'left': '-100%'
			});

			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children().first().addClass('active').animate({
				'left': 0
			});

			// Reseteamos la posicion a 1
			banner.posicion = 1;
		}

	});
	// Boton Anterior
		$('#banner-prev').on('click', function(e){
			e.preventDefault();

			if (banner.posicion > 1){

				banner.padre.children().not('.active').css({
					'left': '-100%'
				});

				$('#banner .active').animate({
					'left': '100%'
				});

			
				$('#banner .active').removeClass('active').prev().addClass('active').animate({
					'left': 0
				});

				banner.posicion = banner.posicion - 1;
			} else {

				banner.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Animamos el slide activo hacia la derecha
				$('#banner .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al primer elemento.
				// Despues lo animamos.
				$('#banner .active').removeClass('active');
				banner.padre.children().last().addClass('active').animate({
					'left': 0
				});

				// Reseteamos la posicion a 1
				banner.posicion = banner.numeroSlides;
			}

        });
// ---------------------------------------
// ----- info
// -
// Boton Siguiente info

$('#info-next').on('click', function(e){
    e.preventDefault();

    if (info.posicion < info.numeroSlides){
        info.padre.children().not('.active').css({
            'left': '100%'
        });

        $('#info .active').removeClass('active').next().addClass('active').animate({
            'left': 0
        });

        $('#info .active').prev().animate({
            'left': '-100%'
        });

        info.posicion = info.posicion + 1;
    } else {
        $('#info .active').animate({
            'left': '-100%'
        });

        info.padre.children().not('.active').css({
            'left': '100%'
        });

        $('#info .active').removeClass('active');
        info.padre.children().first().addClass('active').animate({
            'left': 0
        });

        // Reseteamos la posicion a 1
        info.posicion = 1;
    }
    altoinfo();

});
// Boton Anterior info
$('#info-prev').on('click', function(e){
    e.preventDefault();

    if (info.posicion > 1){

        info.padre.children().not('.active').css({
            'left': '-100%'
        });

        $('#info .active').animate({
            'left': '100%'
        });

    
        $('#info .active').removeClass('active').prev().addClass('active').animate({
            'left': 0
        });

        info.posicion = info.posicion - 1;
    } else {

        info.padre.children().not('.active').css({
            'left': '-100%'
        });

        // Animamos el slide activo hacia la derecha
        $('#info .active').animate({
            'left': '100%'
        });

        // Eliminamos la clase active y se la ponemos al primer elemento.
        // Despues lo animamos.
        $('#info .active').removeClass('active');
        info.padre.children().last().addClass('active').animate({
            'left': 0
        });

        // Reseteamos la posicion a 1
        info.posicion = info.numeroSlides;
    }
    altoinfo();

});



});