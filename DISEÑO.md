# Bar de tapas: brief de diseño

Plantilla `bar-tapas` creada el 10/11/2026 a partir de `restaurante-moderno` con `php artisan plantillas:nueva` y
rediseñada entera con el tema **Carnival** de la skill Hallmark (de la base solo queda la estructura técnica). Tanda
Hallmark de Roberto: «Crea 20 nuevas plantillas utilizando plantillas de hallmark y generando el asistente de
noexpertise.com para la configuración inicial». Este fichero se queda en el repo: es lo que lee quien (persona o
agente) rediseñe la plantilla.

## Brief

- **Para quién**: bares de tapas y raciones, cervecerías, vermuterías, tabernas y bodegas de barrio o de pueblo. Su
  cliente entra para ver qué se come y se bebe y cuánto cuesta, el horario, dónde está y, si acaso, reservar para un
  grupo por teléfono o WhatsApp. No es un restaurante de mantel (para eso, `restaurante-moderno`): es popular,
  alegre y directa.
- **Qué tiene que conseguir la web**: que vengan. Precio y tapa en la primera pantalla, «Reservar» en la cabecera, en
  la portada y en la barra fija del móvil (con «Llamar»); la banda de grupos con WhatsApp y teléfono; horario y
  «Cómo llegar» bien a la vista.
- **Tono** (`estilo: carnival`): alegre, de cartel, exacto. Sí: la pizarra del bar, los carteles serigrafiados, la
  barra de zinc. No: la elegancia tranquila de `restaurante-moderno`, la cafetería de brunch ni las cajas centradas
  con tarjetas iguales.

## Tema Hallmark y cómo se ha traducido

- **Carnival**, variante «diner-sign» (la que el tema da para comida y bebida): papel tintado, tinta cálida muy
  oscura, Big Shoulders Display 800 en mayúsculas de cartel sobre Golos Text, filetes de 2 px, sombra dura de 4 px sin
  difuminar, radios de 2 px y dos acentos que compiten como campos enteros (nunca los dos en la misma superficie).
- **Firma**: la pizarra de precios en mayúsculas de cartel sobre el acento (lo más ruidoso de la página es un dato, no
  una foto) y el reclamo de la portada como etiqueta de precio que pisa la esquina de la foto.
- **Forma de la portada**: Stage (texto en 11 columnas de 21, foto en 10), con la foto como lámina clavada (borde de
  tinta, sombra dura, 1,5° de giro). El texto nunca va encima de una foto (regla del tema).
- **Material en cada apartado**: láminas (fotos enmarcadas y giradas, sin giro en móvil), etiquetas de precio, pozos
  con sombra dura (menú del día y formulario), filas con filetes de 2 px del segundo acento (carta, el bar, horario,
  preguntas, contacto), una tira de casillas (cuándo venir), trama de semitono en una esquina de la pizarra.
- **Movimiento**: quieto. El paso del ratón solo cambia el color; al pulsar, la sombra baja a 1 px. Sin marquesina.

## Paleta y colores del cliente

- Ejemplo: fondo `#f8eed5` (papel), texto `#1d0b07` (tinta), acento `#d01c29` (cereza, algo más oscuro que el del
  tema para que el blanco encima pase AA), primario `#0b2a6f` (azul marino, el segundo acento).
- `fondo` = papel, `texto` = tinta, `acento` = primer acento (botón principal, pizarra, etiquetas de precio),
  `primario` = segundo acento (filetes, foco, enlaces, banda de grupos, etiqueta de la portada). `paper-2`,
  `paper-3`, `ink-2` y `muted` se derivan con `color-mix()`; el texto sobre cada acento se elige solo con
  `oklch(from …)` (claro u oscuro) y el filete nunca pasa de L 0,45. Probado con primario amarillo y acento turquesa
  claros: el texto pasa a tinta y los filetes se oscurecen.

## Tipografías y licencias

- Big Shoulders Display 800 (titulares, botones, precios) y Golos Text 400 y 500 (texto), las dos del tema, OFL-1.1,
  bajadas de Fontsource a `public/fuentes/` (unos 38 KB en total), `font-display: swap`, precarga solo de la de
  titulares. Licencias en `public/fuentes/LICENCIAS.md`.
- La cara de titulares en mayúsculas mide unas 0,67 em por letra: «Impermeabilizaciones» no cabría a 375 px a tamaño
  de cartel. `src/data/tipo.ts` + `.ajusta` limitan cada titular a lo que cabe su palabra más larga en su columna
  (unidades de contenedor `cqi`), así un título corto sale enorme y uno largo nunca parte palabras ni se sale.

## Apartados (en orden) y ritmo de bandas

1. `hero` (papel): Stage con lámina y etiqueta `destacado` {texto, precio}; detalles (`items`) como pastillas con
   filete.
2. `pizarra` (banda del acento): `precios` [{precio, texto}] en grande, separados por barras; semitono en la esquina.
3. `especialidades` (papel): `platos` como láminas giradas con su precio.
4. `carta` (papel): `platos` por `categoria` en filas a dos columnas y el `menu_dia` en un pozo fijo al bajar.
5. `sobre` (papel): lámina vertical | titular, `declaracion` con un cuadrado del acento, párrafos e `items` en filas.
6. `momentos` (papel): tira de casillas `momentos` [{cuando, titulo, texto}] con la etiqueta de cuándo en el
   segundo acento.
7. `galeria` (papel): pared de láminas, una grande y cuatro pequeñas.
8. `grupos` (banda del segundo acento): frase a tamaño de cartel, condiciones, WhatsApp y llamar.
9. `horario-ubicacion` (papel): horario en filas | fachada con el mapa bajo demanda.
10. `preguntas` (papel): filas pregunta | respuesta, a la vista.
11. `contacto` (papel): vías en filas | formulario en un pozo. Pie de tinta (mástil).

Dos bandas de color (pizarra y grupos), como pide el tema; entre dos secciones de papel, filete de 2 px. Fotos y
material alternan: foto, dato, foto, filas, foto, casillas, fotos, cartel, filas.

## Fotos (`fotos.json`, 11)

Generadas con IA (Gemini 2.5 Flash Image, salen cuadradas a 1024 px y se recortan y amplían a su hueco con sharp):
barra con caña, vermut, bravas, gildas y croquetas (portada), patatas bravas, croquetas de jamón, bocadillo de
calamares, interior del bar con barra de zinc y vitrina, terraza con barriles en una calle de casco antiguo, vermut de
grifo con sifón, mesa de raciones para un grupo (solo manos), almuerzo con bocadillo de tortilla y vino, caña
tirándose del grifo y fachada de esquina con toldo rojo sin rótulo. Luz dura y colores vivos (lo que pide el tema),
sin texto legible, sin logotipos, sin personas reconocibles. Revisadas una a una; el interior se repitió porque la
primera versión dejaba ver un rótulo de la calle. El tratamiento del tema (`saturate(1.1) contrast(1.1)`) va por CSS.

## Lo que no se ha podido o se ha decidido distinto

- **Antetítulo**: Hallmark no quiere etiquetas sobre los titulares, pero el contrato tiene el campo `antetitulo`: se
  pinta como etiqueta discreta en Golos 500, minúsculas normales, sin espaciar.
- **Palabras partidas**: Hallmark pide `overflow-wrap: break-word` en titulares; Roberto no quiere palabras partidas:
  `overflow-wrap: normal` y el ajuste de tamaño de arriba.
- **Fotos**: Hallmark pide como mucho un tercio de la página en fotos; aquí hay algo más porque Roberto quiere fotos
  grandes. Nunca dos apartados de foto seguidos.
- **sloplint** (`dist/index.html`): quedan avisos que vienen del contrato y se dejan anotados en la cabecera de
  `global.css`: el sello no es la primera línea del CSS construido (Tailwind antepone la suya), el color de
  `comun.css` y los del `style` del `<html>` (los cuatro colores del cliente), los días del horario en mayúsculas (voz
  del tema), unas 960 palabras visibles (la carta entera es el contenido de un bar) y la pareja de botones del tema
  en la portada.
- Las fotos generadas salen a 1024 px: la de portada se amplía a 1920 y se nota algo blanda a pantalla grande.

## Qué no hacer

- Sombras difuminadas, degradados, radios grandes, titulares en minúsculas o con interletra suelta.
- Los dos acentos en la misma superficie (sobre la banda de grupos el botón principal va en papel).
- Texto encima de una foto, dibujos o mascotas, emojis como iconos.
- Fuentes externas, dependencias nuevas o JavaScript más allá del menú del móvil y el botón del mapa.
- Precios, cifras u opiniones fijos en los componentes: todo sale de `site.yaml` y los componentes pintan bien vacíos.
- Cargar el mapa de Google sin que el visitante lo pida.
