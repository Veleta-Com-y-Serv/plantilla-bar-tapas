# Plantilla NoExpertise · Bar de tapas

Web alegre y a todo el ancho para bares de tapas: precios en grande, carta, almuerzos, vermut y grupos.

- Sectores: bar, cervecería, vermutería, taberna, hostelería. Estilo: carnival (tema Carnival de Hallmark, variante «diner-sign»). Plan mínimo: gratis. Orden 680.
- Secciones: hero, pizarra, especialidades, carta, sobre, momentos, galeria, grupos, horario-ubicacion, preguntas, contacto (y `texto` para apartados nuevos).
- Diseño: papel tintado, tinta cálida, titulares en mayúsculas de cartel (Big Shoulders Display 800) sobre Golos Text, filetes de 2 px, sombra dura sin difuminar y dos acentos que compiten como campos enteros. Portada con la foto como lámina clavada y el reclamo en una etiqueta de precio, la pizarra de precios en grande sobre el acento, las de la casa con su precio, la carta en filas con el menú del día en un pozo, el bar, una tira «cuándo venir», una pared de fotos, la banda de grupos a tamaño de cartel, horario con la fachada y el mapa bajo demanda, preguntas a la vista, contacto con el formulario en un pozo, pie de tinta y barra fija «Llamar / Reservar» en el móvil. Detalle en `DISEÑO.md`.
- Ejemplo: Bar Casa Tino, bar ficticio de la calle del Laurel de Logroño (teléfonos y correo de muestra).
- SEO de base incluido (`src/lib/seo.ts`): canónica, og:image, JSON-LD (`BarOrPub`) y preguntas frecuentes, `robots.txt`, `sitemap.xml` y `llms.txt`; `noindex` si `seo.indexable: false`.
- Varias páginas (opcional, `paginas:` en la raíz de `site.yaml`): Inicio + una página por entrada (`{ ruta, titulo, secciones: "a; b" }`, hasta 6) con el menú hecho solo; reparto recomendado en `template.yaml → paginas` (Carta, El bar, Reservas y horario). Sin la clave, una sola página larga.
- Sin fichas por elemento ni páginas por zona (la carta son platos).
- Fuentes alojadas en `public/fuentes/` (OFL-1.1, ver `public/fuentes/LICENCIAS.md`); sin peticiones a otros dominios.
- Contenido editable en `site.yaml`; metadatos y guion del asistente (14 pasos) en `template.yaml`; reglas para el agente en `CLAUDE.md`; fotos en `fotos.json` (11).

## Campos propios

| Sección | Campos |
|---|---|
| `hero` | `imagen`, `destacado` {texto, precio} (etiqueta encima de la foto), `cta`, `cta_secundario`, `items` [{titulo}] (detalles cortos) |
| `pizarra` | `precios` [{precio, texto}] |
| `especialidades` | `platos` [{nombre, texto, precio, imagen}] |
| `carta` | `marca_destacado`, `menu_dia` {titulo, precio, texto}, `platos` [{nombre, texto, precio, categoria, destacado}], `cta` |
| `sobre` | `declaracion`, `texto`, `imagen`, `items` [{titulo, texto}] |
| `momentos` | `momentos` [{cuando, titulo, texto}] |
| `galeria` | `galeria` [rutas], `cta` |
| `grupos` | `items` [{titulo}], `cta`, `cta_secundario`, `nota` |
| `horario-ubicacion` | `imagen`, `mapa` (sí/no), `horario` [{dia, horas}] |
| `preguntas` | `preguntas` [{pregunta, respuesta}] |

```
npm ci
npm run dev      # desarrollo
npm run build    # web estática en dist/
```

Basada en [AstroWind](https://github.com/onwidget/astrowind) © onWidget, licencia MIT (`LICENSE-ASTROWIND.md`). Imágenes de relleno (`public/placeholders/`) dibujadas para esta plantilla, sin licencias de terceros. Fotos de ejemplo generadas con IA para esta plantilla.
