jQuery(document).ready(function($) {
    $.fn.viewport_size();
    var viewport_width = $.fn.viewport_size('width');
    var viewport_height = $.fn.viewport_size('height');
    
    $.fn.js_paths();
    $.fn.set_logo();
    $.fn.about_link_event();
}); // end of jQuery(document).ready(function($)

// Window Resize
(function($) {
    $(window).resize(function() {
        console.log('resizing');
        $.fn.viewport_size();
        var viewport_width = $.fn.viewport_size('width');
        var viewport_height = $.fn.viewport_size('height');
    }); // End of jQuery(window).resize(function($)
})( jQuery );
// End of Windows Resize

// Functions
(function($) {
    
    $.fn.viewport_size = function(dimension) {
        viewport_width = $(window).width();
        viewport_height = $(window).height();
        
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
    
    $.fn.set_logo = function() { 
        var logo_path = '/images/logo.png';
        var title_desc = 'Virtual Learning and Infrastructure Management';
        $('.site-header .title-area').addClass('clearfix');        
        $('.site-header .title-area').html('<a id="logo" href="/"><img src="'+logo_path+'"></a><span id="title-desc">'+title_desc+'</span>');
    } // end of $.fn.set_logo = function()
    
    $.fn.get_lang = function() {
        var language = $('html').attr('lang');
        return language;
        //console.log('language: '+language);
    } // end of $.fn.get_lang = function()
    
    $.fn.about_link_event = function() {
        var lang = $.fn.get_lang();
        
        if (lang == 'en-US') {
            $('.genesis-nav-menu .menu-item a[href="#about"]').click(function(e) {
                e.preventDefault();
                window.location = document.location.origin + '#about';
            }); // end of $('.genesis-nav-menu .menu-item a[href="#about"]').click(function()
        } // end of if (lang == 'es-ES')
        
        else if (lang == 'es-ES') {
            $('.genesis-nav-menu .menu-item a[href="#about"]').click(function(e) {
                e.preventDefault();
                window.location = document.location.origin + '/es/#about';
            }); // end of $('.genesis-nav-menu .menu-item a[href="#about"]').click(function()
        } // end of if (lang == 'es-ES')
    } // end of $.fn.about_link_event = function()
    
    $.fn.js_paths = function() {
        console.log('document.URL: ' + document.URL);
        console.log('document.location.href: ' + document.location.href);
        console.log('document.location.origin: ' + document.location.origin);
        console.log('document.location.host: ' + document.location.host);
        console.log('document.location.pathname: ' + document.location.pathname);
    } // end of $.fn.js_paths = function()
    
})( jQuery );
// End of functions