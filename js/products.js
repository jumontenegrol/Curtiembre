/* ============================================================
   AÑADIR PRODUCTOS: copia un bloque { ... } al final de la lista.
   category: Bovino | Ovino y caprino | Especiales | Acabados (o crea otra nueva, el filtro se genera solo)
   image: ruta de la foto en assets/img/
   ============================================================ */
window.PRODUCTS = [
  { name: "Cuero en pelo (pelo bovino)", category: "Bovino", images: ["assets/img/vaqueta-1.jpg", "assets/img/vaqueta-2.jpg", "assets/img/vaqueta-3.jpg", "assets/img/vaqueta-4.jpg"],
    desc: "Piel bovina conservada con su pelaje natural intacto, apreciada por sus patrones únicos en calzado, bolsos y tapicería.",
    process: "Se curte omitiendo el depilado; se limpia y lubrica con aceites y se seca cuidadosamente para preservar el pelo fijado.",
    uses: ["Tapicería", "Bolsos", "Decoración"] },
  { name: "Cuero liso o sin pelo (flor entera / vaqueta)", category: "Bovino", images: ["assets/img/vaqueta-1.jpg", "assets/img/vaqueta-2.jpg", "assets/img/vaqueta-3.jpg", "assets/img/vaqueta-4.jpg"],
    desc: "Cuero suave y uniforme al que se le retira todo el pelaje para exponer la superficie de la piel (flor).",
    process: "Se somete a depilado con cal, curtido (al cromo o vegetal), recurtido, teñido y un acabado final que resalta la flor lisa.",
    uses: ["Calzado", "Marroquinería", "Cinturones"] },
  { name: "Gamuza y carnaza (cuero esmerilado o dividido)", category: "Bovino", images: ["assets/img/gamuza-1.jpg", "assets/img/gamuza-2.jpg", "assets/img/gamuza-3.jpg", "assets/img/gamuza-4.jpg"],
    desc: "Material de textura aterciopelada y suave, obtenido del lado inferior de la piel o mediante lijado de la capa interna.",
    process: "La piel se divide en capas; la capa inferior se curte y se lija mecánicamente para lograr la felpa característica.",
    uses: ["Calzado", "Chaquetas", "Forrería"] },
  { name: "Napa", category: "Ovino y caprino", images: ["assets/img/napa-1.jpg", "assets/img/napa-2.jpg", "assets/img/napa-3.jpg", "assets/img/napa-4.jpg"],
    desc: "Cuero muy suave y flexible de caída natural, ideal para prendas y accesorios de tacto delicado.",
    process: "Curtido al cromo y recurtido con engrase generoso para conservar la elasticidad y la suavidad.",
    uses: ["Confección", "Guantes", "Bolsos"] },
  { name: "Nobuck", category: "Bovino", images: ["assets/img/nobuck-1.jpg", "assets/img/nobuck-2.jpg", "assets/img/nobuck-3.jpg", "assets/img/nobuck-4.jpg"],
    desc: "Cuero con la flor lijada ligeramente, de acabado aterciopelado fino y resistente.",
    process: "Se lija la superficie de la flor tras el curtido y se tiñe en tambor para un color profundo y parejo.",
    uses: ["Calzado", "Botas", "Accesorios"] },
  { name: "Cuero para suela", category: "Especiales", images: ["assets/img/suela-1.jpg", "assets/img/suela-2.jpg", "assets/img/suela-3.jpg", "assets/img/suela-4.jpg"],
    desc: "Cuero firme y denso, de gran resistencia al desgaste, destinado a suelas y plantillas.",
    process: "Curtido vegetal lento con taninos, prensado y secado controlado.",
    uses: ["Suelas", "Plantillas", "Talabartería"] },
  { name: "Cuero para tapicería", category: "Especiales", images: ["assets/img/tapiceria-1.jpg", "assets/img/tapiceria-2.jpg", "assets/img/tapiceria-3.jpg", "assets/img/tapiceria-4.jpg"],
    desc: "Cuero de gran uniformidad y durabilidad, con resistencia a la luz y a la fricción.",
    process: "Curtido al cromo, recurtido y acabado pigmentado o anilina según el uso.",
    uses: ["Muebles", "Automotriz", "Náutica"] },
  { name: "Charol", category: "Acabados", images: ["assets/img/charol-1.jpg", "assets/img/charol-2.jpg", "assets/img/charol-3.jpg", "assets/img/charol-4.jpg"],
    desc: "Cuero con acabado brillante tipo espejo, elegante y de fácil limpieza.",
    process: "Se aplica una capa de poliuretano sobre el cuero curtido y se cura en horno.",
    uses: ["Calzado de vestir", "Bolsos", "Cinturones"] }
];

window.TESTIMONIALS = [
  { name: "Nombre del cliente", role: "Empresa / país", text: "Escribe aquí un testimonio real de un cliente sobre la calidad y el servicio." },
  { name: "Nombre del cliente", role: "Empresa / país", text: "Escribe aquí un testimonio real de un cliente sobre la calidad y el servicio." },
  { name: "Nombre del cliente", role: "Empresa / país", text: "Escribe aquí un testimonio real de un cliente sobre la calidad y el servicio." }
];
