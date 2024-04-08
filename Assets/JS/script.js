$(document).ready(function() {
    // Agregar un evento de clic al enlace del navbar "¿Quiénes somos?"
    $('.nav-link[href="#QuienesSomos"]').click(function() {
        var title = $('#quienesSomosTitle');

        title.addClass('rotate-once');
        
        setTimeout(function() {
            title.removeClass('rotate-once');
        }, 2000); 
    });
$('a[href^="#Destacados"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000); 
    }
});
$('[data-toggle="tooltip"]').tooltip();
});
 $('.nav-link[href="#Contacto"]').click(function() {
    var title = $('#ContactoTitle');

    title.hide();

    title.slideDown('slow');
});


