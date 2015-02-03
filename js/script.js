jQuery(document).ready(function ($) {
    console.log('iniciando');
    $('#content').localScroll(800);

    $('#nosotros').parallax("50%", 0.1);
    $('#servicios').parallax("50%", 0.4);
    $('#portafolio').parallax("50%", 0.3);
    $('#contacto').parallax("50%", 0.3);
});