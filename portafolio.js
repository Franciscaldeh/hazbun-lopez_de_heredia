// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Diseño industrial",
    about: "Banda contenedora de agua para mantener hidratados a los temporeros mientras trabajan",
}, {
    figure: "media/foto-02.jpg",
    title: "Diseño gastronómico",
    about: "Comida laminar, una nueva experiencia gastronómica que promete renovar la industria",
}, {
    figure: "media/foto-03.jpg",
    title: "Branding",
    about: "Marca de helados \"bogi\" con sabor de verduras para nutrir bien a tu hijo de una manera más entretenida",
}, {
    figure: "media/foto-04.jpg",
    title: "Publicidad",
    about: "Tríptico informativo para una fundación que promueve combatir al bullying",
}, {
    figure: "media/foto-05.jpg",
    title: "Diseño 3D",
    about: "Modelado 3D y renderizado de un tanque militar de la segunda guerra mundial",
}, {
    figure: "media/foto-06.jpg",
    title: "Diseño textil",
    about: "\"Froggy\" poleras que flotan para que los niños no se ahoguen al caerse a la piscina",
}, {
    figure: "media/foto-07.jpg",
    title: "Corte láser",
    about: "Tarjeta de presentación hecha en madera con una máquina de corte láser",
}, {
    figure: "media/foto-08.jpg",
    title: "Diseño de mobiliario",
    about: "Juegos para niños construido con madera plástica de alta calidad resistente a la humedad",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});