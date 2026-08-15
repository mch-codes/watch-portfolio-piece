"use client";

import Plate from "@/components/Plate";
import { scrollToId } from "@/components/SmoothScroll";

/**
 * Hero — type-led, asymmetric, one photo well.
 *
 * A Collected Man opens catalog-first: masthead, hairline, then straight into
 * object photography, no shouting. The bones are borrowed (masthead rule,
 * serif display, acres of air, image cropped by the fold) and the temperature
 * is not — paper/brass/oxblood instead of gallery white, because this brand is
 * a flea-market hunt, not a vitrine.
 *
 * The composition is deliberately off-axis: type sits left in 8 of 12 columns,
 * the plate owns the right third as a full-height panel that starts *above* the
 * headline, escapes the container to the true viewport edge, and runs past the
 * fold. Nothing is centred and nothing is symmetrical.
 *
 * Every word here is either verbatim from DATOS.md (the tagline, the handle,
 * Madrid) or written to its voice notes without asserting a fact it does not
 * contain — no counts, no dates, no named markets.
 */
export default function Hero() {
  return (
    <section className="relative min-h-svh bg-paper lg:min-h-[110svh]">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        {/* Masthead rule. Not a nav — the brief forbids one — just the two
            standing facts, set as a running head over a hairline. */}
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-4 pt-7 text-[0.68rem] uppercase tracking-[0.26em] text-ash">
          {/* Was the byline name; now the discipline, since the handle already
              carries identity 60px below as the h1 wordmark. */}
          <span>Relojería vintage</span>
          <span>Madrid</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8">
          <div className="pb-[14vh] pt-[13vh] lg:col-span-8 lg:pt-[18vh]">
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-ash">
              Búsqueda · Historia · Divulgación
            </p>

            {/* One h1, the wordmark. The brass numeral is the only coloured
                glyph on the screen: it picks the "1" out of the handle and
                pays off the accent token in the one place it can't be
                mistaken for decoration.

                The clamp is measured, not guessed. Newsreader's opsz axis
                saturates near 72px, so above 80px this string renders at a
                flat 7.238em wide (14 chars, -0.03em tracking → 7.19em). The
                8-column track is (min(vw,1600) - 448) * 2/3 + 224, whose
                tightest point against the ramp is the lg breakpoint itself:
                at 1024px the track collapses from 960px to 608px in one step.
                8vw clears that with ~15px to spare and holds ~94-98% fill all
                the way up. The cap lands at exactly 8rem = 8vw × 1600, which
                is where max-w-[100rem] stops the container — above 1600px
                nothing else on the page moves either, so the type freezing
                there is the layout being consistent, not the type giving up. */}
            <h1 className="mt-7 font-serif text-[clamp(2.25rem,8vw,8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-ink">
              almenos<span className="text-brass">1</span>minuto
            </h1>

            {/* Her own YouTube line, verbatim, in the italic Newsreader ships
                a real drawing for. */}
            <p className="mt-6 font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] italic leading-snug text-ink/75">
              Maquinitas de todo el mundo ⌚🗺️
            </p>

            <p className="mt-10 max-w-[44ch] text-[1.0625rem] leading-[1.65] text-ink/80">
              No busco relojes de lujo. Busco maquinitas: las que aparecen en
              una caja revuelta de mercadillo, sin estuche y sin certificado,
              esperando a que alguien las vuelva a poner en hora. ¿Y la historia
              que traen dentro? Esa es la parte que cuento.
            </p>

            {/* The only CTA on the screen. A ruled word, not a button widget —
                the hover thickens the rule and drops the arrow a hair, which is
                the whole interaction. min-h-11 = 44px touch target.

                The rule is full-strength brass, not brass/50: at 50% it mixed
                down to #cbaf8b for 1.71:1 on paper, and this rule is the only
                affordance the control has before hover, so it owes WCAG 1.4.11
                its 3:1. #a8763e on the white base is 3.94:1. Hover then presses the
                nib down — 1px to 2px, with -mb-px cancelling the growth so the
                baseline never moves — rather than only recolouring, which is
                what the opacity pair was doing badly in both states at once. */}
            <button
              type="button"
              onClick={() => scrollToId("finds")}
              className="group mt-12 inline-flex min-h-11 items-center gap-3 border-b border-brass text-[0.78rem] uppercase tracking-[0.24em] text-ink transition-colors hover:-mb-px hover:border-b-2 hover:border-oxblood hover:text-oxblood focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oxblood"
            >
              Ver los hallazgos
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Photo well, deliberately outside the max-w container so it can reach
          the true viewport edge above 1600px too — inside it, `-mr-12` only
          cancelled the gutter and stopped 160px short at 1920.

          At lg it is absolutely positioned against the section, which is the
          full document width: `right-0` lands on the real edge without `100vw`,
          so a classic scrollbar can't push it into horizontal overflow. It runs
          from just under the masthead rule to the section floor, and the
          section is 110svh, so the base is always a tenth of a screen below the
          fold — cropped, not politely framed. 35% keeps its left edge clear of
          the 8-column type block at every width from 1024 up.

          Below lg it stays in flow under the type, still bleeding right.
          4:5 portrait: a person holding a watch, not a product cut-out.

          top-16, not the old 5.5rem: the masthead rule's bottom edge sits at
          61.32px (28 + 16.32 + 16 + 1), and 88px was 26.68px below it — off the
          rule and off the 4px scale at the same time. 64px is the scale step
          the rule falls in, so the panel now hangs from the hairline. */}
      <div className="ml-14 pb-[14vh] sm:ml-16 lg:absolute lg:inset-y-0 lg:right-0 lg:top-16 lg:ml-0 lg:w-[35%] lg:pb-0">
        <Plate
          src={null}
          alt="Retrato con una pieza recién encontrada"
          ratio="aspect-[4/5]"
          label="Retrato: una pieza en la mano, luz natural"
          className="lg:aspect-auto lg:h-full"
          priority
        />
      </div>
    </section>
  );
}
