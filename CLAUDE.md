# Plantilla «Bar de tapas» (NoExpertise)

Web estática Astro 5 + Tailwind 4, derivada de AstroWind (MIT, ver `LICENSE-ASTROWIND.md`). Estilo: **carnival**
(tema Carnival de la skill Hallmark, variante «diner-sign»). Todo en castellano de España, frases cortas, sin jerga,
tuteo. Brief de diseño completo en `DISEÑO.md`.

## Dónde está cada cosa
- **Textos, contacto, menú, SEO y secciones**: `site.yaml` (raíz). Es la única fuente de contenido. `src/data/site.ts` lo carga y lo tipa; no pongas textos fijos en los componentes.
- **Colores**: `site.yaml → colores`: `fondo` = papel, `texto` = tinta, `acento` = primer acento (botón principal, pizarra, etiquetas de precio, precio del menú del día) y `primario` = segundo acento (filetes de 2 px, foco, subrayados, banda de grupos, etiqueta de la portada y de «cuándo»). `src/layouts/Base.astro` los convierte en variables CSS (`--c-primario`…). Los derivados (`--papel-2`, `--papel-3`, `--tinta-2`, `--tenue`, `--filete`, `--sobre-acento`, `--sobre-fuerte`) se calculan con `color-mix` y `oklch(from …)` en `src/styles/global.css`: el texto sobre cada acento se elige solo (claro u oscuro) y el filete nunca es más claro que un tono medio. Nunca pongas un color literal fuera del bloque `:root`.
- **Tipografías**: Big Shoulders Display 800 (titulares, botones, precios, en mayúsculas) y Golos Text 400/500 (texto), alojadas en `public/fuentes/` (OFL-1.1, `public/fuentes/LICENCIAS.md`). Nada de Google Fonts ni otras fuentes externas.
- **Titulares que no parten palabras**: `src/data/tipo.ts` calcula la palabra más larga (`ajuste(texto)` → `style="--letras:N"`) y la clase `.ajusta` (dentro de un contenedor `.medida`) limita el tamaño a lo que cabe en su columna. Todo titular nuevo en mayúsculas va con `class="… ajusta" style={ajuste(texto)}` dentro de un `.medida`.
- **Material del tema** (`src/styles/global.css`): bandas `.banda--papel|acento|fuerte` (entre dos de papel, filete de 2 px), `.lamina` (foto con borde de tinta, sombra dura y giro `--giro`, sin giro en móvil), `.etiqueta` (precio que pisa una esquina), `.pozo` (caja de papel con sombra dura: menú del día y formulario), `.semitono` (trama en una esquina de la pizarra), botones `.btn` (acento) y `.btn-sec` (contorno de tinta sobre papel). Sombras siempre duras (`--sombra`), radios de 2 px, nunca degradados ni sombras difuminadas.
- **Imágenes**: en `public/`. Fotos en `public/fotos/` (descritas en `fotos.json`); si una foto de `/fotos/` falta, `Imagen.astro` muestra `/placeholders/<mismo nombre>.svg`. En `site.yaml` se referencian con ruta absoluta (`/fotos/hero.jpg`). Personas: siempre `/placeholders/persona.svg`, nunca caras generadas. El texto nunca va encima de una foto.
- **Logo**: `site.yaml → logo` (ruta en `public/`); vacío = nombre en mayúsculas.
- **Cabecera y pie**: cabecera fija sobre el papel (la portada empieza debajo, nada se pisa). Pie de tinta con el nombre enorme, horario, dirección, contacto, menú y redes; en el móvil, barra fija con «Llamar» y el botón de la cabecera. «Web creada con NoExpertise»: `site.yaml → marca_pie` (true en plan gratis).

## Secciones
Cada sección es un componente que solo se pinta si `site.yaml → secciones.<id>.activa` es `true` (y tiene algo que enseñar), en el orden de `site.yaml`.
- `hero` → `secciones/hero.astro`: título enorme, frase, dos botones, detalles (`items`) y la foto como lámina con el reclamo (`destacado`).
- `pizarra` → `secciones/pizarra.astro`: banda del acento con `precios` en grande.
- `especialidades` → `secciones/especialidades.astro`: `platos` como láminas con su precio.
- `carta` → `secciones/carta.astro`: `platos` por `categoria` en filas y el `menu_dia` en un pozo fijo al bajar.
- `sobre` → `secciones/sobre.astro`: lámina vertical, `declaracion`, párrafos e `items` en filas.
- `momentos` → `secciones/momentos.astro`: tira de casillas (`momentos`).
- `galeria` → `secciones/galeria.astro`: pared de láminas (una grande y cuatro pequeñas, se repite) y botón a Instagram.
- `grupos` → `secciones/grupos.astro`: banda del segundo acento con la frase a tamaño de cartel, condiciones (`items`), dos botones y `nota`.
- `horario-ubicacion` → `secciones/horario-ubicacion.astro`: horario en filas, dirección, «Cómo llegar» y la fachada con el mapa bajo demanda.
- `preguntas` → `secciones/preguntas.astro`: filas pregunta | respuesta, todas a la vista; sin preguntas no se pinta.
- `contacto` → `secciones/contacto.astro`: vías en filas y el formulario en un pozo.
- `texto` → `secciones/texto.astro`: apartado genérico (`tipo: texto`), con lámina si lleva `imagen`.

## Campos propios de esta plantilla (además del esquema común)
- `hero.destacado` {texto, precio}: etiqueta encima de la foto («Caña y tapa» + «2,20 €»); sin foto, sale bajo los botones; vacía, no sale. `hero.items`: detalles cortos (solo `titulo`). Sin `cta` el botón llama; sin `cta_secundario`, «Cómo llegar».
- `pizarra.precios` [{precio, texto}]: de 1 a 6 precios (mejor 3 o 4). `precio` SIEMPRE como cadena («1,80 €», «desde 12 €»).
- `especialidades.platos` [{nombre, texto, precio, imagen}]: de 1 a 6; sin `imagen`, pozo de papel; sin `precio`, sin etiqueta.
- `carta.platos` [{nombre, texto, precio, categoria, destacado}]: se agrupan por `categoria` en el orden en que aparecen. `destacado: true` pone la marca (`carta.marca_destacado`, por defecto «De la casa»). `carta.menu_dia` {titulo, precio, texto}: `texto` con una línea por cosa (`|` en YAML); sin `titulo` ni `texto`, no aparece.
- `sobre`: `declaracion` (frase corta), `texto` (párrafos separados por una línea en blanco), `imagen` vertical, `items` {titulo, texto}.
- `momentos.momentos` [{cuando, titulo, texto}]: `cuando` es una etiqueta corta («De 9:00 a 12:00», «Días de partido»).
- `grupos`: `items` (solo `titulo`, condiciones cortas), `cta` (sin él, el WhatsApp o el teléfono de contacto), `cta_secundario` (sin él, llamar) y `nota`.
- `horario-ubicacion`: `horario` [{dia, horas}] (sin él, `contacto.horario`; «Cerrado» sale apagado), `imagen` (fachada) y `mapa` (true = botón «Ver el mapa aquí»; el mapa no se carga hasta que se pulsa).

## Reglas para órdenes
1. **Activar o quitar una sección**: cambia `activa: true|false` en `site.yaml`. No borres componentes.
2. **Reordenar secciones**: mueve el bloque dentro de `secciones:` en `site.yaml`.
3. **Cambiar textos, tapas, precios, horarios, fotos**: solo en `site.yaml`. Si un texto contiene comas o dos puntos dentro de `{ … }`, ponlo entre comillas. Precios siempre entre comillas. En las horas, «9:00 a 23:30» mejor que con guion.
4. **Listas planas**: nunca una lista dentro de un elemento de lista. Para agrupar la carta usa `categoria`; para varios datos, una cadena. Máximo 24 elementos por lista.
5. **Nunca inventes** precios, cifras ni opiniones: si el cliente no los da, déjalos vacíos (los componentes lo soportan).
6. **Página nueva**: crea `src/pages/<slug>.astro` con `import Base from '../layouts/Base.astro'` y `<Base titulo="…" descripcion="…">…</Base>`, con bandas (`.banda .banda--papel`…) como `src/pages/aviso-legal.astro`; enlázala en `site.yaml → menu`.
7. **Apartado nuevo**: añade `secciones.<id>` en `site.yaml` con `tipo:` = `texto`, `carta`, `pizarra`, `momentos`, `galeria`… (el diseño que quiera reutilizar). `src/pages/index.astro` lo recoge solo; no lo toques.
8. **No tocar** `src/pages/index.astro`, `src/pages/[...pagina].astro`, `src/layouts/Base.astro`, `tailwind.config.mjs` ni `src/styles/comun.css` salvo orden explícita de diseño. Tampoco `src/lib/*.ts` ni `src/pages/robots.txt.ts`, `sitemap.xml.ts` y `llms.txt.ts`: son comunes a todas las plantillas (SEO de base y varias páginas). `seo.url` y `seo.indexable` los pone la plataforma: no los cambies.
9. Mantén: `lang="es-ES"`, imágenes con `Imagen.astro` (carga diferida), sin JavaScript nuevo salvo necesidad real (solo hay el del menú del móvil y el del botón del mapa), bandas a todo el ancho, botones de 44 px de alto como mínimo, sin scroll horizontal en móvil, titulares con `.ajusta`. Imágenes de contenido con `alt` sacado del contenido (`altHero`, `altFicha`, `altGaleria`, `altSeccion` de `src/lib/seo.ts`); las decorativas, `alt=""`.
10. El formulario no tiene servidor: abre el correo (`mailto`) con el email de `site.yaml`; al publicar, la plataforma lo conecta a su servidor. No cambies el marcado de `src/components/ui/FormularioContacto.astro`.

## Construir
```
npm ci && npm run build      # resultado en dist/
npx astro preview            # ver dist/ en http://localhost:4321
```
Antes de dar una orden por buena: `npm run build` sin errores.

## Páginas propias (fichas por elemento)
- Esta plantilla no tiene listas con página propia (`src/data/fichas.ts` vacío: la carta son platos) ni páginas por zona.

## Varias páginas
- `paginas:` (raíz de site.yaml, opcional): `[{ ruta, titulo, secciones: "carta" }]`, como mucho 6, cada sección en una sola página y nunca `hero`. Con ella la web pasa a Inicio (hero + lo que no esté en ninguna página) y una página por entrada (`/carta/`…); el menú se hace solo con las páginas y los enlaces `/#id` del site.yaml se cambian solos por la dirección de su sección. Sin ella, una sola página larga. Una orden «haz la web de varias páginas» = escribir `paginas`; nunca crees páginas a mano para eso. Reparto recomendado en `template.yaml → paginas` (Carta, El bar, Reservas y horario).
- En un componente, un enlace fijo a una sección va con `enlace('/#contacto')` (de `src/lib/multipagina.ts`).
