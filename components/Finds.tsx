"use client";

import { useEffect, useRef, useState } from "react";

import Plate from "@/components/Plate";
import { FINDS, type Find } from "@/lib/finds";

/**
 * Featured finds — the gallery. `id="finds"` is what the hero's CTA aims at.
 *
 * Photos and models are in (six of them). Captions and statuses are still null
 * on purpose: DATOS.md says "Placeholder structure only — do not invent
 * specific finds", and neither a provenance nor a sale is visible in a
 * photograph. The pending line under each plate is set in the caption's own
 * type, so the rhythm is judgeable now and the real copy drops in without
 * moving anything.
 *
 * Structure, from A Collected Man by way of a warmer palette: no card grid, no
 * borders around anything, no per-item chrome. Frames sit on the page at
 * different widths, alternating side, with a lot of nothing between them. The
 * one `spread` breaks the container and reaches the true viewport edge, once,
 * halfway down — the run is deliberately near-symmetric around it:
 *
 *   plate(L,7col) + detail(R,4col, dropped)
 *                                   plate(R,5col)
 *   ================ SPREAD, edge to edge ================
 *   detail(L,4col, dropped) + plate(R,7col)
 *
 * Six slots since the photos landed, so the run is now two pairs around one
 * solo and the spread — still near-symmetric, one frame shorter each side.
 */

/** The padded container, matched to Hero's so the two read as one page. */
const SHELL = "mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12";

/** What each frame is meant to hold. Direction for the photographer, not a
 *  claim about a watch — the one kind of text this section is allowed. */
const LABEL = {
  plate: "Pieza completa, vertical — la maquinita entera",
  detail: "Detalle en macro: esfera, caja o cierre",
  spread: "Plano abierto y apaisado: la pieza en su sitio",
} as const;

type Row =
  | { kind: "pair"; plate: Find; detail: Find; mirrored: boolean }
  | { kind: "spread"; item: Find }
  | { kind: "solo"; item: Find; right: boolean };

/**
 * Groups the flat list into rows by `scale`, so the layout survives Marcin
 * deleting a slot (finds.ts says to delete rather than pad). A `detail`
 * immediately after a `plate` becomes that plate's pair; a `spread` always
 * takes its own full-bleed row; everything else stands alone, alternating side.
 * A stray `detail` with no plate in front of it just becomes a solo.
 */
function toRows(finds: Find[]): Row[] {
  const rows: Row[] = [];
  let pairs = 0;
  let solos = 0;
  for (let i = 0; i < finds.length; i++) {
    const f = finds[i];
    if (f.scale === "spread") {
      rows.push({ kind: "spread", item: f });
      continue;
    }
    const next = finds[i + 1];
    if (f.scale === "plate" && next?.scale === "detail") {
      rows.push({ kind: "pair", plate: f, detail: next, mirrored: pairs++ % 2 === 1 });
      i++;
      continue;
    }
    // Solos start on the right so the first one doesn't stack under the big
    // left-hand plate of the pair above it.
    rows.push({ kind: "solo", item: f, right: solos++ % 2 === 0 });
  }
  return rows;
}

/**
 * One frame + its caption.
 *
 * Reveal and parallax are lifted from Hebras's GalleryItem, with its three
 * hard-won constraints kept intact:
 *
 *  1. The observed element (<figure>) is never transformed. The reveal moves
 *     `.find-photo` inside it. IntersectionObserver reads the *transformed*
 *     rect, so animating what you observe walks it off-screen and it can never
 *     report its way back in.
 *  2. The caption is observed separately from the tile. A 4:5 plate six columns
 *     wide is ~520-900px tall, so "20% of the tile is visible" fires with the
 *     caption still well below the fold — one observer would play the caption's
 *     reveal where nobody is looking.
 *  3. State is null-first. No data attribute until the observer speaks, so the
 *     server HTML and a JS-off render are plainly visible. Absence is the safe
 *     state, never the hidden one.
 *
 * Changed from Hebras: it cycles four arrival directions by index; here the
 * direction comes from the layout instead — plates rise, a paired detail drifts
 * in from the side it sits on — because this brand is quieter and a tile
 * arriving from a side it isn't on reads as noise. Timings are slower (1300ms
 * vs 1100, a 520ms beat before the caption) to match the weighted Lenis scroll.
 */
function Tile({
  find,
  className = "",
  capClass = "",
  stagger = 0,
  from = "translateY(2rem)",
  drift = "2.5vh",
}: {
  find: Find;
  /** Grid placement for this tile. */
  className?: string;
  /** Only the spread needs this: its figure is full-bleed, so the caption has
   *  to re-enter the padded container on its own. */
  capClass?: string;
  /** ms this tile waits behind its row-mate. */
  stagger?: number;
  /** Where the photo travels from. */
  from?: string;
  /** Half the total parallax travel. Small things move more. */
  drift?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const capRef = useRef<HTMLElement>(null);
  const [shown, setShown] = useState<boolean | null>(null);
  const [capShown, setCapShown] = useState<boolean | null>(null);

  useEffect(() => {
    const tile = ref.current;
    const cap = capRef.current;
    if (!tile || !cap) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === cap) setCapShown(e.isIntersecting);
          else setShown(e.isIntersecting);
        }
      },
      // 0.2, below Hebras's 0.3: the spread runs 5/6 to 7/5 at full viewport
      // width, so it is taller than the window at every size and can never
      // reach a high threshold. 0.2 clears it with room (1344px tall at 1920
      // needs 269px on screen) and still holds the reveal back until the frame
      // is properly on screen.
      { threshold: 0.2 },
    );
    io.observe(tile);
    io.observe(cap);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      data-photo={shown === null ? undefined : shown ? "y" : "n"}
      data-seen={capShown === null ? undefined : capShown ? "y" : "n"}
      style={
        {
          "--stagger": stagger,
          "--from": from,
          "--drift": drift,
        } as React.CSSProperties
      }
      className={className}
    >
      {/* Two nested boxes on purpose: drift is scroll-driven and continuous,
          the reveal is observer-driven and one-shot per pass. Stacking them on
          one element means the last one to write `transform` wins. */}
      <div className="find-drift">
        <div className="find-photo">
          <Plate
            src={find.src}
            /* The model is the alt text; both land together or neither does. */
            alt={find.model ?? ""}
            ratio={find.ratio}
            label={LABEL[find.scale]}
          />
        </div>
      </div>

      {/* The pending caption. Same box, same type, same hairline the real one
          will use — only the words are placeholders, and they say so. No <h3>:
          there is no title yet, and eight headings reading "pendiente" would
          wreck the outline for a screen reader to say nothing. */}
      <figcaption ref={capRef} className={`find-cap ${capClass}`}>
        <div className="mt-5 border-t border-ink/15 pt-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <span className="font-serif text-lg italic text-ash">
              {find.model ?? "Marca y modelo"}
            </span>
            {/* The hero's micro-label token, not a third micro size: this line
                carries the real status ("En la colección" / "Vendido en
                Vinted" / "Restaurado"), the second most important fact about a
                find. At 0.6rem/text-ink÷45 it was 9.6px at 2.75:1 — below AA
                by 1.75. 0.68rem + text-ash is 10.88px at 4.83:1. */}
            <span className="text-[0.68rem] uppercase tracking-[0.26em] text-ash">
              {find.status ?? "Ficha pendiente"}
            </span>
          </div>
          <p className="mt-2 max-w-[42ch] text-[0.9rem] leading-relaxed text-ash">
            {find.caption ??
              "Una línea suya: dónde apareció y qué hubo que hacerle · en la colección / vendido en Vinted / restaurado"}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Finds() {
  const rows = toRows(FINDS);

  return (
    <section id="finds" className="bg-paper py-[14vh] lg:py-[18vh]">
      <div className={SHELL}>
        <header className="reveal max-w-[52rem]">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-ash">
            Selección
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Hallazgos
          </h2>
          <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-[1.65] text-ink/80">
            Una selección corta, no un catálogo. Cada pieza con lo que traía
            puesto: la marca, la historia y lo que hubo que arreglarle.
          </p>
          {/* Said out loud rather than left to be discovered mid-scroll: the
              photographs and the captions are the open item in DATOS.md. */}
          <p className="mt-8 text-[0.68rem] uppercase tracking-[0.26em] text-ash">
            Fotos y fichas pendientes — maqueta de ritmo
          </p>
        </header>
      </div>

      {rows.map((row, i) => {
        // Air between frames. The spread earns extra at lg and up: there its
        // frame is landscape, and 24vh either side is what puts the beat into
        // and out of it within 0.4% of the ordinary beat (measured 1234 vs 1239
        // at 1440; at 18vh it undershoots to 1180). Below lg it gets the
        // ordinary 12vh instead — the spread is portrait there and already
        // taller than every plate in the run, so it punctuates by size, and the
        // extra 4vh only pushed a beat that is unavoidably long (a taller frame
        // costs its own extra height) further past its neighbours.
        const gap =
          i === 0
            ? "mt-[10vh] lg:mt-[14vh]"
            : row.kind === "spread" || rows[i - 1].kind === "spread"
              ? "mt-[12vh] lg:mt-[24vh]"
              : "mt-[12vh] lg:mt-[18vh]";

        if (row.kind === "spread") {
          // Deliberately outside SHELL, not negative-margined out of it: a
          // plain block child of the section is already the full document
          // width, so it reaches the real viewport edge at every size without
          // 100vw, which would overflow by the width of a classic scrollbar.
          return (
            <div key={row.item.slug} className={gap}>
              <Tile
                find={row.item}
                capClass={SHELL}
                from="translateY(2.5rem)"
                drift="1.5vh"
              />
            </div>
          );
        }

        if (row.kind === "solo") {
          return (
            <div key={row.item.slug} className={`${SHELL} ${gap}`}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <Tile
                  find={row.item}
                  className={
                    row.right
                      ? "ml-auto w-[86%] lg:col-span-5 lg:col-start-8 lg:w-full"
                      : "mr-auto w-[86%] lg:col-span-6 lg:col-start-1 lg:w-full"
                  }
                />
              </div>
            </div>
          );
        }

        // Pair. DOM order is always plate → detail (the detail is a crop of the
        // piece above it, and that is the order it should be read in); the
        // mirror is done with col-start + row-start, so the visual flip costs
        // the reading order nothing.
        return (
          <div key={row.plate.slug} className={`${SHELL} ${gap}`}>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
              <Tile
                find={row.plate}
                className={
                  row.mirrored
                    ? "lg:col-span-7 lg:col-start-6 lg:row-start-1"
                    : "lg:col-span-7 lg:col-start-1 lg:row-start-1"
                }
              />
              <Tile
                find={row.detail}
                /* Dropped a fifth of a screen so it hangs against the lower
                   half of the tall plate instead of lining up with its top —
                   two frames flush at the top is a card grid again. */
                className={
                  row.mirrored
                    ? "mr-auto mt-10 w-[72%] lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-[18vh] lg:w-full"
                    : "ml-auto mt-10 w-[72%] lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-[24vh] lg:w-full"
                }
                stagger={180}
                from={row.mirrored ? "translateX(-1.75rem)" : "translateX(1.75rem)"}
                drift="4vh"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
