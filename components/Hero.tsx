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
 * Four elements, no fifth: mark, wordmark, tagline, control. The standfirst
 * paragraph that used to sit above the control is gone at Marcin's direction —
 * the photograph is now doing the work it was doing, and the first prose a
 * visitor reads is Story's, which says the same thing at length and in her own
 * voice. Nothing else on the page depended on it.
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
        {/* The masthead rule that used to open this section is now the nav bar,
            which is fixed and sits over this photograph — see Nav.tsx. The
            padding below absorbs its 4rem, so the mark still starts clear of
            it rather than under it. */}
        <div className="flex flex-col items-center pb-[14vh] pt-[calc(4rem+11vh)] text-center lg:pb-[16vh] lg:pt-[calc(4rem+13vh)]">
          {/* The mark opens the page and the wordmark answers it directly
              below, on the same axis — the two halves of the lockup read as
              one gesture. White dial and hand, accent pivot: the same drawing
              as the favicon, which is also light-on-ink. */}
          <Mark className="h-20 w-20 text-paper lg:h-24 lg:w-24" />

          {/* One h1, the wordmark. The accent numeral is the only coloured
              glyph on the screen: it picks the "1" out of the handle and pays
              off the accent token in the one place it can't be mistaken for
              decoration.

              Josefin Sans, not the page serif — the wordmark is the one place
              the site speaks in a different voice, so it is a mark rather than
              a big headline. font-extralight is a real 200 here: Josefin's
              variable font carries a wght axis of 100–700, where Cormorant
              stopped at 300 and clamped the request.

              The clamp is measured, not guessed, and re-measured on every face
              change. Newsreader set this string at 7.19em, Cormorant at 5.91em,
              Josefin at 6.26em — so 9.6vw lands at ~64% of the container here
              against Cormorant's 61%, close enough to leave alone. The 10rem
              cap still falls where max-w-[100rem] stops the container, so above
              1600px the type freezing is the layout being consistent.

              Tracking eases from -0.03em to -0.01em: the serif needed pulling
              together, a geometric sans set this light does not, and the tight
              value was closing the counters.

              The numeral carries 0.05em of air on each side. Josefin draws "1"
              as a near-bare stem with a short flag, which at 200 collides with
              the "s" and "m" either side and reads as a bracket — the one glyph
              on the page that must be unmistakable. The space is on the span,
              not the tracking, so only the numeral moves. */}
          <h1 className="mt-9 font-display text-[clamp(2.5rem,9.6vw,10rem)] font-extralight leading-[0.9] tracking-[-0.01em] text-paper">
            almenos<span className="mx-[0.05em] inline-block text-brass">1</span>
            minuto
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
