"use client";

import Mark from "@/components/Mark";
import { scrollToId } from "@/components/SmoothScroll";

/**
 * Hero — centred lockup over the photograph.
 *
 * The composition is the reference Marcin supplied: mark over wordmark over
 * tagline, all on one axis. What changed is the ground — the photograph moved
 * from a band underneath the type to behind it, which forces the whole section
 * to invert.
 *
 * It is not a stylistic inversion, it is a contrast one. The accent numeral is
 * #e8501f, which holds 3.75:1 on paper and needs 3:1 as large text. Veiling the
 * photo with white to keep ink type readable drags that figure *down* — at 85%
 * white over the dial it measures under 3:1 and the "1" fails. Going the other
 * way works: at 86% ink over the photograph's brightest patch the veil lands on
 * #3a332e, where the accent measures 3.31:1 and white body copy 12.4:1. So the
 * hero is dark, the type is white, and the accent survives — which it would not
 * have done under any light veil heavy enough to protect it.
 *
 * That makes two dark sections on the page (this and Shop) rather than one, and
 * they are the first and last things a visitor sees, which brackets the
 * editorial middle rather than interrupting it.
 *
 * Every word here is either verbatim from DATOS.md (the tagline, the handle,
 * Madrid) or written to its voice notes without asserting a fact it does not
 * contain — no counts, no dates, no named markets.
 */
export default function Hero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-ink">
      {/* The photograph, full-bleed. Not a <Plate>: that component reserves a
          box in flow for a pending image, and this one is a positioned ground
          with a real file behind it.

          object-[center_40%] rather than dead centre — the dial sits slightly
          above the middle of the frame, and at tall viewports a centred crop
          pushes it under the paragraph. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */}
      <img
        src="/image-3.jpg"
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_40%]"
      />
      {/* The veil. 86% at the top where the wordmark sits, easing to 78% at the
          floor where nothing is set — the photograph gets to breathe under the
          fold without ever putting a bright patch behind a glyph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/[0.86] via-ink/[0.86] to-ink/[0.78]"
      />

      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        {/* Masthead rule. Not a nav — the brief forbids one — just the two
            standing facts, set as a running head over a hairline. */}
        <div className="flex items-center justify-between gap-4 border-b border-paper/20 pb-4 pt-7 text-[0.68rem] uppercase tracking-[0.26em] text-paper/70">
          {/* Was the byline name; now the discipline, since the handle already
              carries identity below as the h1 wordmark. */}
          <span>Relojería vintage</span>
          <span>Madrid</span>
        </div>

        <div className="flex flex-col items-center pb-[14vh] pt-[13vh] text-center lg:pb-[16vh] lg:pt-[15vh]">
          {/* The mark opens the page and the wordmark answers it directly
              below, on the same axis — the two halves of the lockup read as
              one gesture. White dial and hand, accent pivot: the same drawing
              as the favicon, which is also light-on-ink. */}
          <Mark className="h-20 w-20 text-paper lg:h-24 lg:w-24" />

          {/* One h1, the wordmark. The accent numeral is the only coloured
              glyph on the screen: it picks the "1" out of the handle and pays
              off the accent token in the one place it can't be mistaken for
              decoration.

              The clamp is measured, not guessed, and it was re-measured when
              the face changed. Newsreader set this string at 7.19em; Cormorant
              sets it at 5.91em (measured off the render at 1440: 644px of type
              at a 109px size). Carrying the old 7.6vw over dropped the wordmark
              from 58% of the container to 48% — a smaller logo by accident, not
              by choice. 9.6vw puts it back at ~61%, which is the proportion the
              reference lockup holds.

              The cap moves with it: 10rem rather than 8rem, still landing where
              max-w-[100rem] stops the container, so above 1600px the type
              freezing is the layout being consistent, not the type giving up.

              font-light — 300, thin by request. 200 is not available: the
              Cormorant variable font ships a wght axis of 300–700, so a 200
              would be clamped back to 300 by the browser and only look like it
              was honoured. 300 is the real floor.

              This is the one heading that goes light. The rest of the page
              holds 500, because at 28–72px on white the hairlines get spindly;
              here the type is 154px at the cap, which is where a Garamond this
              high-contrast wants to be thin. */}
          <h1 className="mt-9 font-serif text-[clamp(2.5rem,9.6vw,10rem)] font-light leading-[0.9] tracking-[-0.03em] text-paper">
            almenos<span className="text-brass">1</span>minuto
          </h1>

          {/* Her own YouTube line, in Cormorant's real italic — a true cursive
              drawing, not a slant.

              The ⌚🗺️ she writes it with are dropped here at Marcin's
              direction, so this is her wording rather than her string. They
              were the only glyphs on the page rendered by the OS rather than
              the typeface: full-colour, differently drawn on every platform,
              and sitting inside a line of hairline italic. The share card never
              carried them either, so the two now agree. */}
          <p className="mt-7 font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] italic leading-snug text-paper/80">
            Maquinitas de todo el mundo
          </p>

          <p className="mt-9 max-w-[44ch] text-[1.0625rem] leading-[1.65] text-paper/85">
            No busco relojes de lujo. Busco maquinitas: las que aparecen en una
            caja revuelta de mercadillo, sin estuche y sin certificado,
            esperando a que alguien las vuelva a poner en hora. ¿Y la historia
            que traen dentro? Esa es la parte que cuento.
          </p>

          {/* The only CTA on the screen, and the same inverted treatment Shop
              uses: the rule is full-strength paper rather than accent, because
              the accent over the veiled photograph is 3.31:1 — a thin pass,
              and not a margin worth shipping on the one control in the fold.

              No arrow glyph. It carried the hover's half of the motion, so the
              rule now carries all of it: 1px to 2px with -mb-px cancelling the
              growth, which keeps the baseline still. Dropping it costs nothing
              in meaning — "ver los hallazgos" says where it goes — and it is
              the last non-typographic mark in the fold.

              min-h-11 = 44px touch target, held by the padding rather than by
              the glyph's line box now that the glyph is gone. */}
          <button
            type="button"
            onClick={() => scrollToId("finds")}
            className="group mt-12 inline-flex min-h-11 items-center border-b border-paper py-2 text-[0.78rem] uppercase tracking-[0.24em] text-paper transition-colors hover:-mb-px hover:border-b-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
          >
            Ver los hallazgos
          </button>
        </div>
      </div>
    </section>
  );
}
