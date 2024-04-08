$(document).ready(function() {
    // Agregar un evento de clic al enlace del navbar "¿Quiénes somos?"
    $('.nav-link[href="#QuienesSomos"]').click(function() {
        // Seleccionar el título de la sección "¿Quiénes somos?"
        var title = $('#quienesSomosTitle');
        
        // Agregar la clase 'rotate-once' al título para aplicar la animación una sola vez
        title.addClass('rotate-once');
        
        // Remover la clase después de la animación para que pueda reproducirse nuevamente si se hace clic nuevamente
        setTimeout(function() {
            title.removeClass('rotate-once');
        }, 2000); // El valor debe coincidir con la duración de la animación (2 segundos en este caso)
    });
// Smooth scroll to Destacados section
$('a[href^="#Destacados"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000); // Tiempo de animación en milisegundos
    }
});
$('[data-toggle="tooltip"]').tooltip();
});
 // Agregar evento clic al enlace "Contacto" del navbar
 $('.nav-link[href="#Contacto"]').click(function() {
    // Seleccionar el título de la sección "Contacto"
    var title = $('#ContactoTitle');

    // Ocultar el título de forma instantánea
    title.hide();

    // Mostrar el título con la animación de deslizamiento hacia arriba
    title.slideDown('slow');
});


