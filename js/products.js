/* ============================================================
   AÑADIR PRODUCTOS: copia un bloque { ... } al final de la lista.
   category: Bovino | Ovino y caprino | Especiales | Acabados (o crea otra nueva, el filtro se genera solo)
   image: ruta de la foto en assets/img/
   ============================================================ */
const pics = (n, k = 4) => Array.from({ length: k }, (_, i) => `assets/img/${n}/${n}-${i + 1}.jpeg`);

window.PRODUCTS = [
  { name: "Cuero salado", images: pics("salado"),
    desc: "Piel cruda conservada con sal para preservarla hasta su procesamiento.",
    process: "Tras el desuello y la limpieza, la piel se cura con sal, que frena su descomposición y permite almacenarla y transportarla.",
    uses: ["Curtiembres", "Exportación"] },
  { name: "Cuero en pelo", images: pics("en-pelo"),
    desc: "Piel bovina conservada con su pelaje natural intacto, apreciada por sus patrones únicos.",
    process: "Se procesa sin depilar y se seca cuidadosamente para preservar el pelo fijado.",
    uses: ["Tapicería", "Decoración", "Marroquinería"] },
  { name: "Cuero para gelatina y colágeno", images: pics("gelatina-colageno"),
    desc: "Materia prima destinada a la industria alimentaria que produce colágeno y gelatina.",
    process: "Se selecciona y prepara bajo los requisitos de exportación para aplicaciones alimentarias. CDC cuenta con certificación TCG.",
    uses: ["Colágeno", "Gelatina", "Industria alimentaria"] },
  { name: "Cuero Wet Blue", images: pics("wet-blue"),
    desc: "Piel curtida al cromo, aún húmeda y de tono azulado. Producto intermedio listo para recurtir y terminar.",
    process: "Tras la ribera, la piel se curte con sales de cromo y se escurre, sin secar.",
    uses: ["Curtiembres", "Calzado", "Tapicería"] },
  { name: "Cuero Crust", images: pics("crust"),
    desc: "Cuero curtido, recurtido, teñido y secado, aún sin acabado superficial.",
    process: "Se recurte y tiñe en tambor y se seca, dejándolo listo para recibir el acabado final.",
    uses: ["Curtiembres", "Fabricantes de artículos de cuero"] },
  { name: "Cuero terminado", images: pics("terminado"),
    desc: "Cuero con acabado final, listo para la fabricación de artículos.",
    process: "Sobre el crust se aplica el acabado (pigmento, anilina u otros) y se prensa para obtener el aspecto y la resistencia requeridos.",
    uses: ["Marroquinería", "Calzado", "Tapicería"] },
  { name: "Cuero seco", images: pics("seco"),
    desc: "Piel cruda conservada por deshidratación.",
    process: "Se seca hasta reducir su humedad, lo que permite almacenarla y enviarla con facilidad.",
    uses: ["Curtiembres", "Exportación"] }
];

