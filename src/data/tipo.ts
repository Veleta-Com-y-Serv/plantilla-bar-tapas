// Ajuste de los titulares en mayúsculas (Big Shoulders Display 800): ninguna palabra se parte ni se sale.
// `letras(texto)` devuelve la palabra más larga (mínimo 7) y el CSS (`.ajusta` en global.css) limita el tamaño
// a lo que cabe en su columna: font-size = min(tamaño del diseño, ancho de la columna / (letras × 0,7)).
// Así «Impermeabilizaciones» (20 letras) cabe a 375 px y un título corto se ve a tamaño de cartel.
export function letras(texto?: string | null): number {
  const palabras = String(texto ?? '')
    .split(/[\s/–-]+/)
    .map((p) => p.replace(/[^\p{L}\p{N}€%&]/gu, ''));
  return Math.max(7, ...palabras.map((p) => [...p].length));
}

/** Atributo `style` con la variable `--letras` del titular. */
export const ajuste = (texto?: string | null): string => `--letras:${letras(texto)}`;
