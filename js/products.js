/* ============================================================
   AÑADIR PRODUCTOS: copia un bloque { ... } al final de la lista.
   category: Bovino | Ovino y caprino | Especiales | Acabados (o crea otra nueva, el filtro se genera solo)
   image: ruta de la foto en assets/img/
   ============================================================ */
window.PRODUCTS = [
  { name: "Cuero en pelo (pelo bovino)", category: "Bovino", images: ["assets/img/Cuero_con_pelo/vaqueta-1.jpeg", "assets/img/Cuero_con_pelo/vaqueta-2.jpg", "assets/img/Cuero_con_pelo/vaqueta-3.jpeg", "assets/img/Cuero_con_pelo/vaqueta-4.jpeg"],
    desc: "Piel bovina conservada con su pelaje natural intacto, apreciada por sus patrones únicos en calzado, bolsos y tapicería.",
    process: "Se curte omitiendo el depilado; se limpia y lubrica con aceites y se seca cuidadosamente para preservar el pelo fijado.",
    uses: ["Tapicería", "Bolsos", "Decoración"] },
  { name: "Cuero liso o sin pelo (flor entera / vaqueta)", category: "Bovino", images: ["assets/img/Cuero_sin_pelo/vaqueta-1.jpg", "assets/img/Cuero_sin_pelo/vaqueta-2.jpeg", "assets/img/Cuero_sin_pelo/vaqueta-3.jpeg", "assets/img/Cuero_sin_pelo/vaqueta-4.jpeg"],
    desc: "Cuero suave y uniforme al que se le retira todo el pelaje para exponer la superficie de la piel (flor).",
    process: "Se somete a depilado con cal, curtido (al cromo o vegetal), recurtido, teñido y un acabado final que resalta la flor lisa.",
    uses: ["Calzado", "Marroquinería", "Cinturones"] },
  { name: "Gamuza y carnaza (cuero esmerilado o dividido)", category: "Bovino", images: ["assets/img/Gamuza/gamuza-1.jpg", "assets/img/Gamuza/gamuza-2.jpeg", "assets/img/Gamuza/gamuza-3.jpg", "assets/img/Gamuza/gamuza-4.jpeg"],
    desc: "Material de textura aterciopelada y suave, obtenido del lado inferior de la piel o mediante lijado de la capa interna.",
    process: "La piel se divide en capas; la capa inferior se curte y se lija mecánicamente para lograr la felpa característica.",
    uses: ["Calzado", "Chaquetas", "Forrería"] },
  { name: "Napa", category: "Ovino y caprino", images: ["assets/img/Napa/napa-1.jpg", "assets/img/Napa/napa-2.jpg", "assets/img/Napa/napa-3.jpg", "assets/img/Napa/napa-4.jpg"],
    desc: "Cuero muy suave y flexible de caída natural, ideal para prendas y accesorios de tacto delicado.",
    process: "Curtido al cromo y recurtido con engrase generoso para conservar la elasticidad y la suavidad.",
    uses: ["Confección", "Guantes", "Bolsos"] },
  { name: "Nobuck", category: "Bovino", images: ["assets/img/Nobuck/nobuck-1.jpg", "assets/img/Nobuck/nobuck-2.jpeg", "assets/img/Nobuck/nobuck-3.jpeg", "assets/img/Nobuck/nobuck-4.jpg"],
    desc: "Cuero con la flor lijada ligeramente, de acabado aterciopelado fino y resistente.",
    process: "Se lija la superficie de la flor tras el curtido y se tiñe en tambor para un color profundo y parejo.",
    uses: ["Calzado", "Botas", "Accesorios"] }
];

window.TESTIMONIALS = [
  { name: "Nombre del cliente", role: "Empresa / país", text: "Escribe aquí un testimonio real de un cliente sobre la calidad y el servicio." },
  { name: "Nombre del cliente", role: "Empresa / país", text: "Escribe aquí un testimonio real de un cliente sobre la calidad y el servicio." },
  { name: "Nombre del cliente", role: "Empresa / país", text: "Escribe aquí un testimonio real de un cliente sobre la calidad y el servicio." }
];
