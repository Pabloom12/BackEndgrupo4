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
    titulo: "Torta Frita",
    autor: "Lusmila",
    categoria: "Categoria",
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
    id: 2,
    imagen: "imgcga.png",

    titulo: "Postre Chajá",
    autor: "Martha Mesa",
    categoria: "Categoria",
    descripcion: `
<p> El chajá es un postre típico de la gastronomía uruguaya y un verdadero símbolo del país. Se trata de un dulce, sabor delicado y personal inconfundible que ha construido una memoria afectiva colectiva, ocupando un lugar casi ritual en cumpleaños, reuniones familiares y celebraciones. Este exquisito postre nacional se vende además en Argentina, Brasil, Paraguay, Estados Unidos y otras partes del mundo donde hay uruguayos.
</p>
<p> Su origen se remonta a Paysandú, una ciudad clave en la identidad gastronómica uruguaya. Fue creado el 27 de abril de 1927 por Orlando Castellano, propietario de la Confitería Las Familias. A mediados de los años 20, Don Orlando hacía lo que podía  para sacar adelante a su familia con trabajos esporádicos en la ciudad hasta que descubrió su pasión por la repostería. Castellano buscaba concebir un dulce que pudiera resistir fuera de la heladera y que pudiera transportarse en una época sin refrigeración doméstica ni pasteurización generalizada; nació como una solución de pastelería inteligente para durar, viajar y conservar su atractivo. 
 </p>
<p> Debe su nombre indígena de origen guaraní al chajá, un ave que habita en las zonas centro y sur de América del Sur y es abundante en Paysandú. Un amigo de la familia le pidió a Don Orlando ese postre “lleno de plumas y de cuerpo liviano” en referencia al merengue y a la mezcla de bizcochuelo y crema, que le hacía recordar a un pájaro Chajá. El ave es grande como un pavo (entre 80 a 90 cmts.), de plumas grisáceas, herbívora, anida en los pantanos, es fácil de domesticar, se usa como guardián en los ranchos emitiendo un fuerte chillido ante el peligro y posee espolones duros en sus alas </p>
<p> Los componentes tradicionales del postre son bizcochuelo, crema y merengue, y sus frutas características son el durazno y la frutilla, existiendo variantes con el dulce de leche, chocolate o ananá. Actualmente, la receta esencialmente es secreta y solo la sabe la familia del inventor gracias a la división de trabajo en la fábrica: cada sección elabora una parte hasta el empaquetado y nadie conoce el proceso completo. Los integrantes de la familia, que van por la cuarta generación (representada hoy por Alfonso Nardini), comienzan trabajando en la cocina desde chicos y luego pasan a la administración. A pesar de la tecnología, no hay máquina capaz de armarlo manteniendo su forma original, por lo que se sigue elaborando artesanalmente. </p>
<p> A lo largo de los años, su éxito ha generado hitos muy importantes: es considerado un bien de interés patrimonial e inmaterial por el departamento de Paysandú; el ministerio de Turismo de Uruguay y el instituto Uruguay XXI le concedieron la licencia de uso de la marca país ”Uruguay Natural” para promocionar la imagen del país y fomentar exportaciones; en 2023, fue reconocido por el sitio especializado TasteAtlas en el puesto 30 de los mejores 50 postres del mundo con una clasificación de 4.3 sobre 5; y su fama inspiró en 1995 la creación del famoso postre Balcarce en Argentina, luego Guillermo Talou conociera el chajá en un viaje.
 </p>
<p> Se puede considerar que el postre Chajá es una obra maestra de la repostería rioplatense porque logra una combinación perfecta entre simpleza y grandeza. Lo más admirable es como una preparación nacida de la necesidad de conservación en 1927 ha sabido mantener intacta su esencia artesanal y su receta a lo largo de cuatro generaciones. Se puede decir que su verdadero éxito radica en que el secreto de su receta original se ha custodiado por décadas dentro de la familia; ese misterio es algo único que nadie ha logrado imitar. La importancia del Chaja ha trascendido fronteras gracias a la perfecta armonía entre el merengue, el bizcochuelo y el durazno, una combinación de texturas que conquista cualquier paladar. Esto , sumado a un diseño pensado para resistir los traslados sin perder la calidad, le permitió viajar desde Paysandú hacia el mundo. 
 </p>
<p> Es un orgullo que un producto tan auténticamente local represente nuestra identidad cultural, demostrando que la tradición familiar puede competir con los más altos estándares internacionales.Esto nos demuestra que las grandes genialidades nacen de la simplicidad cotidiana. Su historia es un recordatorio de que cuando un legado se protege con pasión y lealtad , es capaz de derribar cualquier frontera y volverse eterno. </p>
<p> En conclusión, el Chajá no es solo un  bizcochuelo, crema, merengue y fruta; es un relato vivo de identidad, pertenencia y tradición que ha trascendido fronteras. Desde su nacimiento en una pequeña confitería de Paysandú hasta consolidarse como marca país y posicionarse entre las mejores tortas del mundo, este manjar sigue conquistando paladares gracias a su ligereza y sabor inigualable. Siempre fue imitado pero nunca fue igualado este fue el eslogan para distinguir el postre chaja de cualquier imitación.Representa la belleza de lo esencial como la unión armoniosa de los elementos simples pueden crear una experiencia universal que conecta a los seres humanos de distintas culturas.El postre nace como un acto de resistencia y adaptación es una solución inteligente que logra durar, viajar y conservar su autenticidad a pesar de las adversidades del entorno. Tal como dice la  conocida frase “un turista que viene, un Chajá que se va”, asegurando que el legado siga volando muy alto. </p>

<section class="article-section article-sources">

    <h2> FUENTES DE INFORMACIÓN </h2>

<ul><li><p><a href="https://es.wikipedia.org/wiki/Chaj%C3%A1_(postre)">Wikipedia</a><p></li></ul>
<ul><li><p><a href="https://www.canal26.com/historia/2026/06/13/la-historia-de-la-torta-chaja-como-nacio-el-postre-uruguayo-mas-esponjoso-que-conquisto-el-rio-de-la-plata/">canal26</a><p></li></ul>
<ul><li><p><a href="https://www.elobservador.com.uy/nota/un-postre-uruguayo-fue-elegido-como-una-de-las-30-mejores-tortas-del-mundo-202321113028">el observador</a><p></li></ul>
<ul><li><p><a href="https://www.elentrerios.com/actualidad/tras-92-aos-de-historia-el-postre-chaj-es-marca-pas-en-el-uruguay.htm">entre rios</a><p></li></ul>
<ul><li><p><a href="https://www.lr21.com.uy/comunidad/153594-%c2%bfquien-invento-el-postre-chaja#google_vignette">La red 21</a><p></li></ul>
<ul><li><p><a href="https://imagenes.montevideo.com.uy/imgnoticias/202302/_W880_H495/833747.jpg">Wikimedia Commons</a><p></li></ul>
<ul><li><p><a href="https://media.elentrerios.com/fotos-v2/2018/10/13/l_1539426980.jpg">entre rios fotos</a><p></li></ul>


</section>
`,
  },
  {
    id: 3,
    imagen: "asado.webp",
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
<p>Existen alimentos que parecen sencillos, casi cotidianos pero que guardan una historia mucho más profunda de lo que se ve a simple vista. El alfajor es uno de ellos, está presente tanto en el kiosco de la esquina como en la merienda de la escuela y también en la vida diaria, y sin embargo no es una golosina más. Detrás de su forma redonda y su relleno dulce, existe un largo recorrido histórico y cultural que empezó lejos de Uruguay, navegando por siglos y océanos hasta el día de hoy que se convirtió en parte de nuestra identidad.
</p>
<p>El origen del alfajor suele vincularse con la tradición árabe que pasó a la península ibérica  durante la presencia musulmana en España. Algunas fuentes comentan que su nombre proviene del árabe hispano referenciando al relleno  “al hasú“ (palabra proveniente del árabe andalusí ) un rasgo que sigue siendo esencial al día de hoy.</p>
<p> Con el paso de los años esta preparación fue cambiando, adaptando ingredientes y gustos hasta llegar a América, donde adquirió nuevas formas. Más que una receta fija el alfajor parece ser una prueba de que las tradiciones sobreviven porque pueden transformarse y evolucionar logrando transportarnos varios siglos al pasado
</p>
<p> En América latina el alfajor se transformó de manera diferente según cada región, pero en Uruguay encontró una presencia fuerte dejando de ser solamente un dulce o golosina para pasar a ser un producto de la vida cotidiana. No es casualidad que la mayoría  lo identifiquen como uno de los productos típicos del país ni que sea considerado tan frecuentemente como regalo cuando alguien viaja hacia otros destinos. Este gesto no solo significa compartir algo rico sino transmitir una experiencia, un lugar y una pequeña y dulce parte de nuestra cultura local.
 </p>
<p> Dentro de la historia uruguaya tiene un lugar importante la tradicional marca Las Sierras de Minas, fundada en la ciudad de Minas en 1953 por Conrado Cedrés. Varias fuentes la destacan como la primera fábrica de alfajores del Uruguay la cual tuvo peso en la construcción de la identidad del alfajor a nivel local. Tanto así que en Lavalleja existe un museo dedicado enteramente al alfajor, reforzando la idea de que no se trata únicamente de un producto comercial sino de un objeto cultural que merece ser conservado y recordado. Cuando un alimento llega a ese punto deja de pertenecer al ámbito del consumo y pasa a formar parte de la memoria colectiva.
 </p>
<p> Esa importancia no se explica únicamente por la antigüedad de su historia. También se entiende por la manera que el alfajor acompaña escenas comunes de la vida diaria. Puede aparecer en una merienda compartida, en una parada de ruta, en una bolsa de regalos o en una charla o debate sobre cuál es el mejor o el perfecto. Su valor no está solo en el sabor sino en todo lo que lo rodea como la costumbre, el cariño, el recuerdo o hasta la expectativa de probar uno distinto. Por esto el alfajor es uno de esos objetos cotidianos que sin proponérselo termina diciendo mucho sobre la forma en que una sociedad vive y transmite sus hábitos. El paso del tiempo hizo que estas costumbres dieran a luz un mercado muy variado. La oferta actual nos permite saborear la calidez de una receta artesanal o experimentar con baños de reposteria que estallan en colores crujientes.Cada persona se enfrenta entonces a un abanico de posibilidades que muta constantemente transformando la visita al super o al kiosco en una coreografía silenciosa de selección </p>
<p> Por eso hablar del origen del alfajor es hablar más que de un dulce o postre, es hablar de un producto que nació en otro contexto, cruzó fronteras se transformó con el tiempo y encontró en Uruguay una manera propia de permanecer y ser parte de la propia identidad. Es hablar de una tradición que sigue viva no solo por que se sigue fabricando y consumiendo todos los días, sino porque continúa ocupando un lugar en la memoria colectiva, en las costumbres. Tal vez eso nos demuestra su verdadero valor y nos invita a preguntarnos si algunas cosas aparentemente pequeñas pueden guardar dentro de sí una historia mucho más grande de lo que parece.</p>


<section class="article-section article-sources">

<h2> Bibliografía </h2>

 <ul><li><p><a href="https://es.wikipedia.org/wiki/Alfajor_(Latinoam%C3%A9rica)">Alfajor (Latinoamérica) - Wikipedia</a><p></li></ul>
 <ul><li><p><a href="https://alfajoresdeluruguay.com.uy/">Alfajores del Uruguay
</a><p></li>
<li><p><a href="https://www.clarin.com/gourmet/origen-alfajor-hace-pais_0_CisPblcXap.html">El verdadero origen del alfajor: dónde se inventó y cómo se hace en cada país - Clarín</a><p></li></ul>
<ul><li><p><a href="https://amec.uy/blog/cultura/el-origen-de-los-alfajores/">El origen de los Alfajores - Amec</a><p></li></ul>
<ul><li><p><a href="https://mundialdelalfajor.com/historia-del-alfajor/">Historia del alfajor - Mundial del Alfajor</a><p></li></ul>
<ul><li><p><a href="https://www.elpais.com.uy/el-empresario/la-historia-detras-del-primer-alfajor-uruguayo-un-amor-vision-comercial-y-un-producto-que-perduro-70-anos">La historia detrás del primer alfajor uruguayo - El País</a><p></li></ul>
<ul><li><p><a href="https://eventurismo.com.uy/la-importancia-del-alfajor-como-presente-para-el-regreso-del-turista-y-su-identificacion-con-la-localidad/">La importancia del alfajor como presente - Eventurismo</a><p></li></ul>
<ul><li><p><a href="https://lavalleja.uy/bienestar-y-espiritualidad/museo-del-alfajor/">Museo del Alfajor - Lavalleja</a><p></li></ul>
<ul><li><p><a href="https://uruguaynatural.com/es/experiences/una-dulce-tentacion-para-deleitar-en-uruguay-el-alfajor/">Una dulce tentación para deleitar en Uruguay: el alfajor - Uruguay Natural</a><p></li></ul>
</section>
`,
  },
  {
    id: 5,
    imagen: "matebanner2.jpg",
    titulo: "El origen del mate",
    autor: "Agustín Abreu",
    categoria: "Mate",
    descripcion: `
<p> Todo aquel que desee saber más sobre la cultura uruguaya, aunque no lo busque, lo va a encontrar bajo el brazo de algún transeúnte uruguayo promedio o en internet, al buscar información sobre costumbres uruguayas, ya que el mate siempre está a la vista</p>
<p> Antes de entrar en detalles sobre el origen del mate, reconocido como uno, o incluso el mayor representante de la cultura criolla, es necesario que hablemos sobre qué es este emblemático brebaje. El mate es una infusión de yerba, de la cual existen diferentes tipos: yerba orgánica, saborizada, barbacuá, yerba con palo y yerba despalada son algunos de ellos. El mate se prepara en un recipiente al que se le da el nombre de "mate", donde se coloca la yerba y el agua caliente. El recipiente más común es el de calabaza, pero hoy en día existe una gran variedad de materiales. La infusión se consume con una bombilla.
 </p>
<p> El ritual de cebar mate consiste en compartirlo, pasándolo de persona en persona, como si todos estuvieran formando una ronda. Cuando el cebador (quien llena de agua caliente la calabaza) termina su primer mate, vuelve a llenarlo y lo pasa a la siguiente persona del círculo. Cada integrante bebe todo el contenido de una vez y devuelve el mate al cebador, quien lo vuelve a llenar y lo pasa al siguiente, continuando la rotación. A medida que avanza la sesión, el sabor de la yerba va disminuyendo, lo que se conoce como "mate lavado". En ese momento, el cebador mueve con cuidado la bombilla para aprovechar la yerba fresca y seca, o reemplaza la yerba por completo para continuar la ronda. </p>
<p> Ahora que ya hablamos sobre el qué es y el cómo se consume, podemos comenzar a conocer sus orígenes. Su historia se remonta a tiempos anteriores a la llegada de los españoles a América del Sur, aunque estos fueron muy importantes en su difusión. En un principio, las autoridades religiosas prohibieron a los nativos tomar mate, considerando su consumo como una actividad improductiva y herética. Sin embargo, no tuvieron éxito, ya que la costumbre se instaló rápidamente, incluso entre las poblaciones criollas de campaña y en el resto de la antigua Banda Oriental, territorio que hoy corresponde al Uruguay.
 </p>
<p> Otros que tuvieron un papel clave fueron los jesuitas, quienes reconocieron rápidamente el valor económico y estimulante de la yerba mate. Además de adoptar su consumo, impulsaron su cultivo organizado en las reducciones jesuíticas, donde implementaron técnicas agrícolas más sistemáticas. Gracias a ello, la yerba mate dejó de ser un recurso silvestre para convertirse en un producto cultivado y comercializable, lo que permitió su circulación por distintas regiones del Virreinato del Río de la Plata y facilitó su expansión hacia sectores no indígenas de la población. </p>
<p> Pero los primeros en consumir la yerba mate e iniciar esta tradición fueron los guaraníes, que se asentaban en lo que hoy es Paraguay, el litoral argentino, el sur de Brasil y el norte de Uruguay. Ellos utilizaban las hojas de Ilex paraguariensis para preparar una bebida energizante y medicinal. Consumían la infusión en cuencos naturales y con bombillas rudimentarias, otorgándole un sentido espiritual y comunitario; para ellos, ya era un acto de hospitalidad y de unión.
 </p>
<p> Dentro de la cultura guaraní existe una leyenda. Yasí, la diosa Luna, y Araí, la diosa Nube, bajaron a la Tierra convertidas en jóvenes para conocer la selva. Durante su viaje fueron atacadas por un yaguareté (jaguar), pero un cazador las salvó y las llevó a su humilde hogar, donde su familia las recibió con gran generosidad, compartiendo incluso su último alimento. Conmovida por la valentía y la bondad de la familia, Yasí decidió recompensarlos. Una noche sembró unas semillas mágicas que dieron origen a la planta de la yerba mate, llamada caá. Luego les enseñó a preparar el primer mate y declaró que esta planta sería un símbolo de amistad para todos los hombres. Además, otorgó a la hija del cazador la misión de proteger la yerba mate. Tras la muerte de sus padres, la joven se convirtió en Caá Yarí, la deidad guardiana de los yerbales, encargada de cuidar las plantas y velar por quienes trabajan con ellas.
 </p>
 <img src="front/imagenes/mateleyenda.jpg" class="imgmate" alt="Mate"/>
<p> Más allá de explicar el origen de la yerba mate desde una perspectiva mitológica, la leyenda guaraní transmite una enseñanza sobre los valores que sostienen la convivencia dentro de las comunidades. La planta nace como una recompensa a la hospitalidad y la generosidad de una familia que, aunque tenía muy poco, decidió compartir lo que tenía con dos personas desconocidas.
 </p>
<p> No es raro que el mate, surgido de ese acto de bondad, haya terminado convirtiéndose en un símbolo de amistad y encuentro que nos acompaña hasta hoy. Esta idea invita a una reflexión que sigue siendo vigente. Aunque hoy vivimos rodeados por una gran cantidad de estímulos y por la necesidad de que todo ocurra con rapidez, compartir un mate continúa siendo una forma de detenerse, conversar con quienes forman parte de nuestra vida y construir vínculos.
 </p>
<p> Quizás allí radique una de las razones de su permanencia en la cultura uruguaya: el mate no representa únicamente una bebida, sino también una manera de entender las relaciones humanas, basada en el intercambio, la confianza y la compañía. En Uruguay, llevar el termo y el mate bajo el brazo forma parte de la identidad nacional. Más allá de ser una infusión o de sus propiedades, acompaña tanto conversaciones profundas como charlas cotidianas, largas jornadas de trabajo o estudio e, incluso, crea momentos de socialización entre familiares, amigos y hasta compatriotas desconocidos, demostrando día a día que todavía existen costumbres capaces de unir a las personas.
 </p>


<section class="article-section article-sources">

<h2> FUENTES DE INFORMACIÓN </h2>

<ul><li><p><a href="https://cuentos.rll.lsa.umich.edu/blog/2018/03/22/leyenda-de-la-yerba-mate-leyenda-guarani/">Leyenda de guaraní</a><p></li></ul>
<ul><li><p><a href="https://estudyando.com/historia-del-mate-origen-y-expansion-en-sudamerica/">Expansión en sudamérica</a><p></li></ul>
<ul><li><p><a href="https://www.nationalgeographicla.com/historia/2023/12/cual-es-el-origen-de-la-yerba-mate-segun-la-historia">Orígen de la yerba mate</a><p></li></ul>
<ul><li><p><a href="https://peakd.com/hive-156509/@delcarmat/the-legend-of-the-yerba-mate-la-leyenda-de-la-yerba-mate">Imagen de la leyenda</a><p></li></ul>

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
