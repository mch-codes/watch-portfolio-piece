"use client";

import { INSTAGRAM, YOUTUBE } from "@/lib/site";
import { scrollToId } from "@/components/SmoothScroll";

/**
 * The nav bar. Four destinations, at Marcin's request: two in-page, two out.
 *
 * It replaces the hero's masthead rule rather than sitting above it — that row
 * was already a running head at the top of the fold, and stacking a nav on top
 * of it would have put two hairline rows of 10.88px caps in the first 100px of
 * the page. "Relojería vintage" is not lost with it: Story signs off with
 * "Relojería vintage · Madrid".
 *
 * A translucent ink scrim, white type, one state everywhere. The scrim is what
 * lets the type be a single colour: at 70% over the white sections the bar
 * composites to #635f5b, where white measures 6.34:1 and the resting 85% white
 * measures 5.07:1 — both clear AA for 10.88px caps, which the labels are. Over
 * the hero it only deepens a photograph that is already dark.
 *
 * That single state is why this component carries no observer, no state and no
 * noscript fallback any more. The earlier version was transparent and had to
 * watch #finds to know whether to set white or ash type; the scrim answers the
 * same question by making the ground constant, so ~30 lines of machinery came
 * out with it. It also fixes what transparent could not promise: Finds' full-
 * bleed spread passes under this bar, and the scrim holds contrast over it.
 *
 * backdrop-blur is not decoration here either — it keeps the photograph beneath
 * from reading as detail through the bar and competing with the labels.
 */
const SECTIONS = [
  { label: "Press", id: "press" },
  { label: "Shop", id: "shop" },
] as const;

const EXTERNAL = [
  { label: "Instagram", href: INSTAGRAM },
  { label: "YouTube", href: YOUTUBE },
] as const;

// The type tokens sit on the elements, not the <ul>, because <button> does not
// inherit text-transform — the UA stylesheet sets `text-transform: none` on
// form controls, so "Press" and "Shop" rendered sentence case next to an
// uppercase "INSTAGRAM" until this moved down.
const LINK =
  "inline-flex min-h-11 items-center text-[0.68rem] uppercase tracking-[0.26em] text-paper/85 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper";

export default function Nav() {
  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-paper/15 bg-ink/70 backdrop-blur"
    >
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        {/* Four equal columns, so the destinations sit on a fixed rhythm across
            the bar rather than bunched at one end.

            grid, not flex with justify-between: between-spacing distributes the
            *gaps* evenly, which leaves the columns unequal because "Shop" and
            "Instagram" are different lengths. Equal columns with centred labels
            is what makes the four read as a set. */}
        <ul className="grid h-16 grid-cols-4 items-center">
          {SECTIONS.map((s) => (
            <li key={s.id} className="flex justify-center">
              {/* A button, not an <a href="#id">: the page scrolls through
                  Lenis, and an anchor would jump past it and also write a hash
                  the rest of the site never uses. */}
              <button
                type="button"
                onClick={() => scrollToId(s.id)}
                className={LINK}
              >
                {s.label}
              </button>
            </li>
          ))}

          {EXTERNAL.map((e) => (
            <li key={e.href} className="flex justify-center">
              <a href={e.href} target="_blank" rel="noreferrer" className={LINK}>
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
