/**
 * Featured finds — the gallery.
 *
 * Photos are in. `model` is read straight off each dial or caseback in the
 * supplied file — an observation about the photograph, not a claim about the
 * piece's history.
 *
 * `caption` and `status` stay null: DATOS.md is explicit that this is
 * "Placeholder structure only — do not invent specific finds", and where a
 * watch was found or whether it sold is not visible in a photograph. Those two
 * fields render as marked placeholders (see components/Plate.tsx) until Marcin
 * supplies the real lines.
 *
 * TO FILL: `caption` (her voice, e.g. "Encontrado en el Rastro, [mes] 2026 —
 * [marca], [detalle]") and `status` ("En la colección" / "Vendido en Vinted" /
 * "Restaurado") for each of the six.
 */

/** How the tile sits in the run. `plate` is a standalone piece at full column
 *  width; `detail` is the tight crop that pairs with the plate before it —
 *  a dial macro, a caseback, a clasp. `spread` breaks the column and goes
 *  edge to edge, once, to reset the eye mid-scroll. */
export type Scale = "plate" | "detail" | "spread";

export type Find = {
  /** Stable key + the filename stem this slot expects in /public/finds. */
  slug: string;
  scale: Scale;
  /** Tailwind aspect class — the shape the layout reserves before the photo
   *  lands, so nothing shifts on load. Portrait for wrist/full-watch, landscape
   *  for the spread, square for detail crops. May carry breakpoint variants
   *  (see the spread below); it is passed to Plate verbatim. */
  ratio: string;
  /** Watch make/model. null until Marcin supplies it. */
  model: string | null;
  /** One line in the author's voice. null until supplied. */
  caption: string | null;
  /** "En la colección" | "Vendido en Vinted" | "Restaurado". null until supplied. */
  status: string | null;
  /** Photo path under /public. null until supplied. */
  src: string | null;
};

// Six photos supplied, so six slots — finds.ts's own rule is to delete rather
// than pad, and the old find-07/find-08 are gone rather than left pending.
//
// Each `ratio` is now the source file's real aspect, not a design call: these
// render through <img object-cover>, so any mismatch is a crop, and every crop
// here would eat a dial or a caseback. Measured, in order below: 0.750, 1.000,
// 1.000, 1.014, 1.546, 2.244.
export const FINDS: Find[] = [
  { slug: "find-01", scale: "plate", ratio: "aspect-[3/4]", model: "Seiko Seikomatic Weekdater 6218-8971", caption: null, status: null, src: "/image-5.jpg" },
  { slug: "find-02", scale: "detail", ratio: "aspect-square", model: "Seiko Sea Lion C22 6602-9060", caption: null, status: null, src: "/image-4.jpg" },
  { slug: "find-03", scale: "plate", ratio: "aspect-square", model: "Seiko Seikomatic Diashock 17 jewels", caption: null, status: null, src: "/image-1.jpg" },
  // The spread is the only responsive ratio, because it is the only slot whose
  // width is the viewport rather than a column: the plates shrink into the
  // 12-col grid at lg while the spread does not, so one fixed ratio cannot stay
  // the largest frame in the run. Below lg the plates are full-container 4/5
  // and stand ~1.17x their width tall, so the spread has to be portrait (5/6 =
  // 1.2, the tightest that clears them at every width up to 1023) or the
  // "reset" is the third-smallest thing on the page. From lg the grid caps the
  // tallest plate at 1.25 x 7 columns, i.e. 0.645-0.675 of the viewport, so 7/5
  // is the tightest landscape that stays on top — 16/9 only clears from 1920px
  // up and is 153px short of the tallest plate at 1440.
  // Kept at the tuned ratio rather than the source's 1.014, because this is the
  // one photo with margin to lose: the watch sits centred on wood with grain
  // above and below, so cropping to 7/5 takes background, not subject. Every
  // other file is framed tight enough that a crop would cut the piece.
  { slug: "find-04", scale: "spread", ratio: "aspect-[5/6] lg:aspect-[7/5]", model: "Seiko Weekdater 6306", caption: null, status: null, src: "/image-3.jpg" },
  { slug: "find-05", scale: "plate", ratio: "aspect-[3/2]", model: "Seiko Seikomatic Weekdater 6218-8971", caption: null, status: null, src: "/image.jpg" },
  { slug: "find-06", scale: "detail", ratio: "aspect-[9/4]", model: "Seikomatic Blue Yacht J13034", caption: null, status: null, src: "/image-2.jpg" },
];
