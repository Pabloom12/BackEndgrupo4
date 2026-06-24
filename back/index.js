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
    descripcion: "Descripcion breve del artículo.",
  },
  {
    id: 2,
    imagen: "imgcga.png",

    titulo: "Postre Chajá",
    autor: "Martha Mesa",
    categoria: "Categoria",
    descripcion:
      "Su origen se remonta a Paysandú, una ciudad clave en la identidad gastronómica uruguaya. Fue creado el 27 de abril de 1927 por Orlando Castellano, propietario de la Confitería Las Familias. A mediados de los años 20, Don Orlando hacía lo que podía  para sacar adelante a su familia con trabajos esporádicos en la ciudad hasta que descubrió su pasión por la repostería. Castellano buscaba concebir un dulce que pudiera resistir fuera de la heladera y que pudiera transportarse en una época sin refrigeración doméstica ni pasteurización generalizada; nació como una solución de pastelería inteligente para durar, viajar y conservar su atractivo.",
  },
  {
    id: 3,
    titulo: "Asado",
    autor: "Santiago",
    categoria: "Categoria",
    descripcion: "Descripcion breve del artículo.",
  },
  {
    id: 4,
    imagen: "imgkiosco.jpg",
    titulo: "Una dulce historia que atravesó el océano.",
    autor: "Pablo Ortiz",
    categoria: "Alfajor",
    descripcion:
      "Existen alimentos que parecen sencillos, casi cotidianos pero que guardan una historia mucho más profunda de lo que se ve a simple vista. El alfajor es uno de ellos, está presente tanto en el kiosco de la esquina como en la merienda de la escuela y también en la vida diaria, y sin embargo no es una golosina más. Detrás de su forma redonda y su relleno dulce, existe un largo recorrido histórico y cultural que empezó lejos de Uruguay, navegando por siglos y océanos hasta el día de hoy que se convirtió en parte de nuestra identidad.",
  },
  {
    id: 5,
    titulo: "Mate",
    autor: "Agustín Abreu",
    categoria: "Categoria de prueba",
    descripcion: "Descripcion breve del artículo.",
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
