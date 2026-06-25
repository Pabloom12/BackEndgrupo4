// PRIMERA LINEA — cargar variables de entorno
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://127.0.0.1:5500";
// ── MIDDLEWARES ──────────────────────────────────────────
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// ── DATOS ────────────────────────────────────────────────
// Reemplazar con los artículos reales del grupo
const articulos = [
  {
    id: 1,
    titulo: "Torta frita un sabor que une a los uruguayos",
    autor: "Lusmila Lanusse",
    categoria: "Categoria",
    descripcion: `
<p> Cuando nombramos a la torta frita es imposible no pensar en una tarde lluviosa, con unos mates y por supuesto compartiendo con amigos o familia.

</p>
<p>Estas forman parte de nuestra identidad y nuestras costumbres creando recuerdos, ya sea de las charlas que se dan mientras las compartimos,
De su proceso jugando con el harina con un niño de nuestra familia mientras las hacemos, o comiendo una en algún puestito de la calle con amigos a la salida del liceo.
</p>
<p> Se cree que las tortas fritas llegaron a nuestro país gracias a los inmigrantes Suizos, Italianos, Alemanes y Españoles. Ellos trajeron consigo, recetas y costumbres que con el tiempo se fueron haciendo parte de la nuestra.
</p>
<p> Aunque no se sabe exactamente cuál es su origen, muchos aseguran que tienen relación con una receta alemana llamada “Kreppel”. 
</p>
<p>En uruguay existe una fuerte relación entre las tortas fritas y  los días de lluvia.
Seguramente, la mayoría de la población conozca el “quedan más ricas con agua de lluvia”.
 </p>
<p>Debido a que una de las leyendas más conocidas, cuenta que  las mujeres de las colonias inmigrantes utilizaban agua de lluvia para preparar la masa. 
También dicen que los gauchos de la banda oriental aprovechaban el agua de la lluvia para cocinarlas cuando estaban en el campo. 
 </p>
<p>Sea que estas versiones 	fueran ciertas o no, esta costumbre existe hasta hoy y cada vez que hay un dia nublado automáticamente nos llega esa idea de hacer unas tortas para acompañar el mate
 </p>
<p>
Su receta es muy fácil
Se necesita harina, levadura, agua tibia, sal y grasa para freírlas
 </p>
<p> A lo largo del tiempo fueron apareciendo nuevas versiones. 
Ya no se comen solas, ahora además de las clásicas es común encontrar tortas fritas con azucar, dulce de leche, chocolate e incluso queso cheddar. 
Estos ingredientes permiten innovar un poco sin dejar de lado su receta y la forma tradicional de comerlas.  
</p>
<p> La importancia y costumbre de ellas es tan grande que desde el año 2002 se realiza en canelones el festival de la torta frita. 
Se trata de un evento que reúne a muchas personas para disfrutar de música, actividades y por supuesto de su gran protagonista como alimento para compartir. 
Es una oportunidad para pasar un rato en familia y celebrar una tradición que aún sigue viva.
</p>
<p> Aunque existen en otros países de sudamérica e incluso en algunas partes de Europa, en Uruguay llevan un significado especial. No son solo una costumbre sino también una excusa para reunirse, conversar y disfrutar de pequeños momentos. Por eso cada vez que llueve y alguien pone el agua para el mate mientras prepara unas tortas.
Una costumbre que ya forma parte del uruguayo.
</p>
<p>Reflexión: Una receta tan simple se volvió parte de una gran costumbre. 
Que a pesar de su sencillez tienen un sabor único y son ideales para los días fríos y una excusa para compartir un lindo momento. 
 </p>

<section class="article-section article-sources">

<h2> FUENTES DE INFORMACIÓN </h2>

<ul><li><p><a href="https://amec.com.uy/blog/cultura/el-origen-de-la-torta-frita/">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://www.clarin.com/informacion-general/fiesta-nacional-torta-frita-2026-conseguir-entradas_0_8kUMtzGhMa.html">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://www.cocina-uruguaya.com/articulos/los-datos-que-no-conocias-version-torta-frita-uruguaya">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://www.gub.uy/ministerio-turismo/comunicacion/calendario-actividades/13o-fiesta-torta-frita">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://grupormultimedio.com/las-torta-fritas-una-tradicion-uruguaya-id138336/">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://www.todouruguay.net/lluvia-mate-y-tortas-fritas/">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://turismo.imcanelones.gub.uy/visita-canelones/que-hacer/fiestas/fiesta-torta-frita">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="https://cousa.com/tortas-fritas/">NOMBRE DE LA FUENTE</a><p></li></ul>

</section>
`,
  },
  {
    id: 2,
    imagen: "imgcga.png",

    titulo: "Postre Chajá",
    autor: "Martha Mesa",
    categoria: "Categoria",
<<<<<<< HEAD
    descripcion: `Su origen se remonta a Paysandú, una ciudad clave en la identidad gastronómica uruguaya. Fue creado el 27 de abril de 1927 por Orlando Castellano, propietario de la Confitería Las Familias. A mediados de los años 20, Don Orlando hacía lo que podía  para sacar adelante a su familia con trabajos esporádicos en la ciudad hasta que descubrió su pasión por la repostería. Castellano buscaba concebir un dulce que pudiera resistir fuera de la heladera y que pudiera transportarse en una época sin refrigeración doméstica ni pasteurización generalizada; nació como una solución de pastelería inteligente para durar, viajar y conservar su atractivo.`,
=======
    descripcion: `
<p> PARRAFO 1</p>
<p> PARRAFO 2 </p>
<p> PARRAFO 3 </p>

<section class="article-section article-sources">

<h2> FUENTES DE INFORMACIÓN </h2>

<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>

</section>
`,
>>>>>>> b6013a4bb0521d496040df7ef5d92bd11d1dd0d1
  },
  {
    id: 3,
    titulo: "400 AÑOS DE ASADO EN URUGUAY",
    autor: "Santiago Narez",
    categoria: "Asado",
    descripcion: `
    <p>Introducción: El asado es una de las tradiciones más representativas del Río de la Plata, especialmente en Uruguay y Argentina. Aunque hoy se conoce como una reunión social donde familiares y amigos comparten distintos cortes de carne, su origen fue muy diferente. En sus comienzos estuvo relacionado con la abundancia de ganado y la forma de vida de los gauchos, quienes aprovechaban los recursos disponibles para alimentarse. Con el paso del tiempo, los cambios en la producción ganadera, la llegada de los frigoríficos, la influencia de distintas culturas y la evolución de las formas de cocinar transformaron esta práctica hasta convertirla en una parte importante de la identidad uruguaya.</p>
<p>El asado forma parte de la economía y la identidad uruguaya, el país produce carne en gran cantidad, tanto que hay más vacas que uruguayos. Aunque actualmente es más consumido por tradición en sus inicios el consumo era por motivos diferentes siendo esto por clases bajas y puramente supervivencia, antiguamente hace más de 400 años comienza cuando un Gobernador de Asunción, Hernando Arias de Saavedra (Hernandarias), envió ganado en el año 1611 llegando por primera vez al territorio de Uruguay, específicamente en los actuales departamentos de Soriano y Colonia.</p>
<p>Hernandarias creía que estos territorios eran los mejores para la crianza de ganado, por eso hubo una estrategia en utilizar islas llamadas Isla Vizcaíno e Isla de los Lobos. En esos lugares, al estar rodeadas de agua, las vacas no podían escapar y tampoco ser atacadas por pumas u otros animales salvajes.</p>
<p>En los inicios del asado no son como los que se conocen a día de hoy, cuando pensamos en el asado nos imaginamos cortes como tiras de asado, vacío, embutidos en parrilleros de hierros, estos son muy comunes pero es una invención más actual. Al principio los gauchos con sus propios cuchillos ponían la vaca entera seccionada en cuartos sin quitar el cuero, se clavaba en estacas al costado del fuego sobre brasas o dando vueltas cerca del fuego y solo se utilizaba sal gruesa para sazonar. Los gauchos utilizaban cualquier combustible que tuvieran a mano para cocinar, ahora se suele utilizar distintos tipos de madera como combustibles, esto cambia el sabor de la carne al utilizar distintos tipos de leña entre eucalipto, quebracho, coronilla, aunque se prefiere utilizar leña dura.</p>
<p>El tipo de cocción de la carne en los inicios era muy diferente a la actualidad, al inicio se consumía más roja, o por decir así, sangrienta. Porque al ser vacas salvajes si se cocinaba mucho se endurecía, en esa sociedad la carne era muy consumida por la clase baja como los gauchos que en los inicios eran cazadores.</p>
<p>El proceso de cocción hasta la actualidad de pasar a tener una carne sangrienta a una carne más a punto con un color más cocido ocurre porque en los siguientes años con el alambrado de campo el ganado fue por decir así "domesticado". Los gauchos pasaron a ser peones de estancias y el ganado tuvo una selección genética durante décadas y la práctica de un cuidado especial en las estancias hasta llegar a la carne que conocemos a día de hoy con ese aspecto bien cocido.Luego en Argentina con la llegada de los frigoríficos su misión era exportar la carne a Europa, pero solo querían las partes del ganado que no tenían huesos y grasa. Gracias a tecnologías como la sierra mecánica, está permitía cortar huesos, quedando el famoso descarte. Embutidos, tiras de asado, costillas y otros cortes eran el descarte que los trabajadores se llevaban y aprovechaban para el consumo propio. Esto se conoce como asado de tira, el cual llega 50 años más tarde a Uruguay.</p>
<p>Con la llegada de inmigrantes se empezó a experimentar con especias muy populares en los asados, y también acompañamientos, naciendo el chimichurri entre otras salsas como la salsa criolla.</p>
<p>Finalmente no se sabe la fecha ni cómo inició realmente la tradición de comer asado, pero existen teorías firmes. Algunas de ellas dicen que con la construcción de las ciudades y la urbanización fueron las causas de que lo que al inicio solamente se veía como una forma común de cocinar carne por supervivencia alrededor del fuego, terminó siendo una reunión social entre familiares y amigos. Esto se terminó haciendo una tradición entre los uruguayos formando así también la identidad uruguaya, “no puede faltar el asado del domingo con los amigos o familiares”.</p>
<p>Mi reflexión filosófica ocurre al descubrir en toda esta investigación es que hernandarias dejó una marca sin ser reconocido hasta el dia de hoy en gran parte del continente sudamericano solamente trayendo vacas, cuando los conquistadores españoles llegaron no vieron oro ni plata la llamaron “tierra de ningún provecho” hernandarias vio que las tierras eran más valiosas que el oro. entonces él envió una carta a la corona española con el objetivo de traer ganado pero no tuvo una respuesta, utilizó sus propios fondos para traer ganado dando con la tierra llamada uruguay que a día de hoy seria potencia ganadera mundial. “el oro no estaba debajo de la tierra sino sobre ella”.</p>

<section class="article-section article-sources">
<h2>Bibliografía</h2>
<ul>
<li>
<p><a href="https://www.elobservador.com.uy/nota/el-asado-como-bandera-2015521000">mayor fuente utilizada</a><p>
</li>
<li>
<p><a href="https://grupormultimedio.com/los-origenes-del-asado-uruguayo-id137795/">La cocción del asado</a></p>
</li>
<li>
<p><a href="https://www.montevideo.com.uy/Tiempo-libre/-El-asado-de-tira-es-argentino-o-uruguayo-Puede-que-la-respuesta-no-nos-guste-uc712088">Asado de tira</a></p>
</li>
<li>
<p><a href="https://www.inac.uy/innovaportal/v/3092/17/innova.front/tradicion-de-400-anos">Llegada de la carne vacuna</a></p>
</li>
<li>
<p><a href="https://www.canal26.com/general/2024/11/12/inmigrantes-leyendas-y-secretos-de-la-parrilla-conocias-el-origen-del-chimichurri-y-la-salsa-criolla/">Acompañamientos</a></p>
</li>
<li>
<p><a href="https://es.wikipedia.org/wiki/Isla_Vizca%C3%ADno">Isla Vizca</a></p>
</li>
<li>
<p><a href="https://www.estudiandohistoria.org/8vo-a%C3%B1o/la-colonizaci%C3%B3n">Tierras</a></p>
</li>
</ul>
</section>
`,
  },
  {
    id: 4,
    imagen: "imgkiosco.jpg",
    titulo: "Una dulce historia que atravesó el océano.",
    autor: "Pablo Ortiz",
    categoria: "Alfajor",
    descripcion: `
<p> PARRAFO 1</p>
<p> PARRAFO 2 </p>
<p> PARRAFO 3 </p>

<section class="article-section article-sources">

<h2> FUENTES DE INFORMACIÓN </h2>

<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>

</section>
`,
  },
  {
    id: 5,
    titulo: "Mate",
    autor: "Agustín Abreu",
    categoria: "Categoria de prueba",
    descripcion: `
<p> PARRAFO 1</p>
<p> PARRAFO 2 </p>
<p> PARRAFO 3 </p>

<section class="article-section article-sources">

<h2> FUENTES DE INFORMACIÓN </h2>

<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>
<ul><li><p><a href="URL DE LA FUENTE">NOMBRE DE LA FUENTE</a><p></li></ul>

</section>
`,
  },
];
// ── RUTAS ────────────────────────────────────────────────
// GET /articulos → devuelve todos los artículos
app.get("/articulos", (req, res) => {
  res.json(articulos);
});
// GET /articulos/:id → devuelve un artículo por id
app.get("/articulos/:id", (req, res) => {
  const id = Number(req.params.id);
  const articulo = articulos.find((a) => a.id === id);
  if (!articulo) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(articulo);
});
// POST /articulos → crea un artículo nuevo
app.post("/articulos", (req, res) => {
  const {
    titulo = "Prueba",
    autor = "Autor de prueba",
    categoria = "Categoria de prueba",
    descripcion = "Descripcion de prueba",
  } = req.body;
  // Validar campos obligatorios
  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({
      error: "Los campos título, autor y descripción son obligatorios",
    });
  }
  const nuevo = {
    id: articulos.length + 1,
    titulo,
    autor,
    categoria: categoria || "Sin categoría",
    descripcion,
  };
  articulos.push(nuevo);
  res.status(201).json(nuevo);
});
// ── 404 ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
// ── ERROR HANDLER ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});
// ── INICIAR SERVIDOR ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
