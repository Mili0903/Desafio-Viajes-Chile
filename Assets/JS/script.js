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

document.addEventListener('DOMContentLoaded', function () {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = 'Presiona para redirigir a la Página';
            document.body.appendChild(tooltip);

            const iconRect = icon.getBoundingClientRect();
            tooltip.style.top = iconRect.bottom + 'px';
            tooltip.style.left = iconRect.left + 'px';
        });

        icon.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});







