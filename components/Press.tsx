import { PRESS } from "@/lib/site";

/**
 * Press — where the writing has actually been published.
 *
 * PROVENANCE. Both entries come from lib/site.ts, which holds DATOS.md's two
 * items verbatim. Two is the whole list: DATOS.md says "Don't reproduce article
 * text — one-line description each, as above, is enough", and inventing a third
 * outlet is the exact failure the brief names. The `note` strings are the
 * one-line descriptions it sanctions, not excerpts.
 *
 * A list, not a logo wall. "As featured in" strips are logo walls because they
 * carry no information beyond the brand mark — but here the interesting fact is
 * the *work*: a Seikomatic lineage piece and a four-watch comparison. So each
 * row leads with the title and the outlet drops to a micro-label, which is the
 * inverse of a press strip and the right way round for someone being read
 * rather than name-dropped.
 *
 * The whole row is the link. Two nested interactive targets (title and outlet)
 * would give a keyboard user two stops to the same href; one <a> wrapping the
 * row gives one stop and a 100%-width hit area.
 */
export default function Press() {
  return (
    <section id="press" className="bg-paper py-[14vh] lg:py-[18vh]">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <header className="reveal max-w-[52rem]">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-ash">
            Escribe para
          </p>
          {/* Same rank and size as Story's h2 — this is a sentence, not the
              single display word Finds gets. The claim is sourced twice over:
              both outlets are watch-culture magazines, which is also how her
              own bio describes where she publishes. */}
          <h2 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            Dos revistas de{" "}
            <span className="block italic">cultura relojera.</span>
          </h2>
        </header>

        <ul className="mt-[10vh] lg:mt-[12vh]">
          {PRESS.map((item) => (
            <li key={item.href} className="reveal">
              {/* rel="noreferrer" also implies noopener in every engine that
                  ships target="_blank" today, so one token covers both. */}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block border-t border-ink/15 py-9 transition-colors hover:border-oxblood focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oxblood lg:grid lg:grid-cols-12 lg:gap-x-8 lg:py-12"
              >
                <span className="block text-[0.68rem] uppercase tracking-[0.26em] text-ash lg:col-span-3">
                  {item.outlet}
                </span>

                <span className="mt-5 block lg:col-span-7 lg:mt-0">
                  {/* The title carries the underline, not the row: an
                      underline spanning twelve columns reads as a rule, and
                      this section already has one of those on every row. */}
                  <span className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.35] text-ink decoration-brass decoration-1 underline-offset-[0.3em] group-hover:underline">
                    {item.title}
                  </span>
                  <span className="mt-4 block max-w-[46ch] text-[0.9375rem] leading-relaxed text-ash">
                    {item.note}
                  </span>
                </span>

                {/* Byline last and quietest — it repeats the handle the page has
                    already established twice, so it is confirmation, not news.
                    Right-aligned at lg only; below it would collide with the
                    note's ragged edge. */}
                <span className="mt-5 flex items-baseline gap-3 text-[0.68rem] uppercase tracking-[0.26em] text-ash lg:col-span-2 lg:mt-0 lg:justify-end lg:text-right">
                  <span>{item.byline}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
