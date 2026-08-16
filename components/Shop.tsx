import { VINTED } from "@/lib/site";

/**
 * Shop the finds — the one commercial ask on the page.
 *
 * DATOS.md: "CTA section linking to Vinted profile... no live embed, just a
 * styled teaser + outbound link." So there is no listing grid, no price, no
 * count, and no stock claim — nothing here can go stale or turn out to be
 * false, because nothing here asserts what is currently for sale.
 *
 * The dark band that closes the page — Hero opens on one too, since the
 * photograph moved behind the lockup, so the two of them bracket the editorial
 * middle. This is still the only *tinted* section: Hero is dark because there
 * is a photograph under it, this one is dark by choice.
 * Story rejected a tinted band for itself and the reasoning holds — but it
 * rejected *linen*, where the site's micro-label token (ash) drops to 3.97:1
 * and fails AA. Oxblood is the other direction: paper on #5e2429 is 11.93:1,
 * and the secondary line at 70% is 6.64:1. Both pass comfortably, so the gear
 * change costs no contrast.
 *
 * It earns its place structurally too. This is the page's only transaction,
 * sitting between two editorial sections; the ground changing under it is what
 * separates "here is my work" from "here is where you buy it", without a
 * button widget or a colour the page hasn't already declared. It is also the
 * only substantial use of oxblood, which otherwise appears once per section as
 * a hover state.
 */
export default function Shop() {
  return (
    <section id="shop" className="bg-oxblood py-[14vh] text-paper lg:py-[18vh]">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <div className="reveal lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-paper/70">
              En venta
            </p>
            <h2 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em]">
              Algunas se quedan.{" "}
              <span className="block italic">Otras siguen camino.</span>
            </h2>
          </div>

          {/* Right column, baseline-aligned to the foot of the headline — the
              same masthead device Story opens with, so the two sections that
              lead with a sentence lead with it the same way. */}
          <div className="mt-8 max-w-[26rem] lg:col-span-4 lg:col-start-9 lg:mt-0 lg:max-w-none lg:self-end">
            {/* Claims nothing about stock: what is listed on Vinted at any
                given moment is Vinted's business, and this sentence stays true
                whether that is nine pieces or none. */}
            <p className="text-[1.0625rem] leading-[1.65] text-paper/80">
              No todo se queda en la colección. Lo que sigue camino se publica
              en Vinted.
            </p>

            {/* Hero's CTA, inverted. The rule is full-strength paper rather
                than the accent — the accent on oxblood is 3.18:1, which clears
                WCAG 1.4.11 by eighteen hundredths and is not a margin worth
                shipping on the only commercial control. Hover presses the nib from
                1px to 2px with -mb-px cancelling the growth, so the baseline
                never moves; the colour stays put because there is nothing
                lighter than paper to move it to. */}
            <a
              href={VINTED}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex min-h-11 items-center gap-3 border-b border-paper text-[0.78rem] uppercase tracking-[0.24em] text-paper hover:-mb-px hover:border-b-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
            >
              Ver piezas disponibles
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
