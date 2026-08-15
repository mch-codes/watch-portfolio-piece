/**
 * Story / about — the page's one sustained read.
 *
 * PROVENANCE. Every factual claim below traces to DATOS.md's one sourced
 * paragraph (her own World Watch Museum author bio), rewritten into first
 * person for tone as DATOS.md permits:
 *
 *   "Profesional del mundo del arte, desarrolla en paralelo una actividad
 *    centrada en la comunicación, divulgación e investigación sobre la
 *    relojería, su historia y sus complicaciones. Crea contenido bajo la firma
 *    'almenos1minuto' para redes sociales y diversas revistas de cultura
 *    relojera."
 *
 * — plus Madrid (client brief). Everything else here is connective prose that
 * asserts nothing a reader would take as biography: no dates, no counts, no
 * origin story, no named market, no family. There is exactly one sourced
 * paragraph in the world for this section and it is short; the section is
 * therefore short. Padding it is the one unrecoverable failure on a page
 * carrying a real person's name.
 *
 * NO PLATE, deliberately. The brief allows one portrait well here. It sits
 * between an eight-frame gallery and a press strip, and the brief says the
 * pacing contrast is the point — so a ninth image well is the thing that
 * destroys the contrast, not the thing that creates it. After a long run of
 * photographs the change of gear is a page made only of words. The gear change
 * is structural too: the gallery runs full-bleed to the true viewport edge,
 * this section contracts hard into an inset text block under a hairline.
 *
 * Palette stays on `paper`. A tinted band (linen) was measured and rejected:
 * the page's single micro-label token is `text-ash`, and ash on linen is
 * 3.97:1 — the eyebrow and the signature would fail AA at 10.88px. On paper
 * they hold 4.83:1. Magazines change gear by changing the type block, not by
 * tinting the sheet.
 */
export default function Story() {
  return (
    <section id="story" className="bg-paper pb-[14vh] pt-[8vh] lg:pb-[18vh] lg:pt-[10vh]">
      {/* Same padded container as Hero and Finds, so the three read as one
          page even though this one holds no image. */}
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        {/* Opening spread: headline left, standfirst dropped to the right and
            baseline-aligned to the foot of the headline. A masthead device,
            not a centred stack — the two blocks are different faces, different
            sizes and different columns, which is what says "start reading" on
            a page where everything above it was a photograph. */}
        <header className="reveal border-t border-ink/15 pt-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:pt-12">
          <div className="lg:col-span-7">
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-ash">
              Quién firma
            </p>
            {/* h2, following Finds' h2 — same level, no skipped rank. Smaller
                cap than Finds (3.75rem vs 4.5rem) because that one is a single
                display word and this one is a sentence: at 4.5rem it would run
                to three lines and stop being a headline. Second clause in
                Newsreader's real italic, which is the whole reason the face is
                on this page. */}
            <h2 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
              Vengo del arte.{" "}
              <span className="block italic">Y de las maquinitas.</span>
            </h2>
          </div>

          {/* Capped below lg only. Unconstrained it inherits the full container
              and ran 101 characters per line at 768 (measured) — a standfirst
              set looser than the body it introduces. At lg the 4-column track
              is already the right width (51 cpl at 1440), so the cap steps
              aside and lets the grid own it. */}
          <p className="mt-8 max-w-[26rem] font-serif text-[clamp(1.125rem,1.5vw,1.375rem)] leading-[1.6] text-ink lg:col-span-4 lg:col-start-9 lg:mt-0 lg:max-w-none lg:self-end">
            Trabajo en el mundo del arte. Y en paralelo, sin que lo uno desplace
            a lo otro, hago esto: comunicar, divulgar, investigar relojería.
          </p>
        </header>

        {/* The read. One grid, three placed children — the two prose blocks sit
            in columns 5-10 and the pull quote outdents left to 2-9, so it hangs
            into the margin the body deliberately leaves empty. That outdent is
            the section's one structural event and it costs no extra markup:
            each child names its column, and grid auto-placement drops the next
            one to a new row the moment the spans would collide.

            18px on a flat 32px line box, not a ratio. The rest of the page runs
            17px/1.65 (≈28px) for supporting copy; this is the only text on the
            site anyone is expected to read a screen of, so it gets a larger
            size, a slower line, and paragraph gaps set to exactly one line
            height. Full `text-ink` rather than the /80 used elsewhere — 13.7:1
            against 7.9:1, and the sustained read is where that is worth
            spending.

            THE MEASURE IS CHOSEN, NOT INHERITED — `max-w-[36rem]`. Left to the
            6-column track alone the line length is whatever the viewport hands
            it: measured 50.6 cpl at 1024, 74.2 at 1440, 83.2 at 1920, and 79.6
            below lg where the block goes full-container. The top half of that
            range is past Bringhurst's 75-character ceiling, on the one block on
            the site meant to be read rather than scanned. 36rem = 576px, and
            Work Sans at 18px averages 8.85px per character in this copy (Range
            advance, not an estimate), so the cap holds a flat 65 cpl from
            ~1150px up and the narrower tracks below it never exceed it. Stated
            in rem, not `ch`: `ch` is the advance of "0", ~10.8px here, so
            `max-w-[65ch]` would have bought 79 characters, not 65.

            The cap leaves slack inside the track at wide viewports, which is
            the point — the text block stops where reading says it should and
            the grid still owns where it starts. Whitespace to the right of a
            measure is not a gap to fill. */}
        <div className="mt-[10vh] lg:mt-[14vh] lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="reveal max-w-[36rem] space-y-8 text-[1.125rem] leading-[2rem] text-ink lg:col-span-6 lg:col-start-5">
            {/* Opens on its own subject. An earlier pass began "Su historia y
                sus complicaciones" — a pronoun whose antecedent lived in the
                standfirst, which at lg is a different column 460px to the
                right and 200px up. The read is the one place on the page a
                sentence has to stand up without the layout helping it. */}
            <p>
              Empiezo por dentro: la historia de una pieza y sus complicaciones.
              De dónde sale un calibre. Por qué dejó de fabricarse. Qué problema
              venía a resolver una complicación antes de que otra cosa lo
              resolviera mejor.
            </p>
            <p>
              Investigar un reloj casi nunca es investigar solo un reloj. Es una
              fábrica, una década, una decisión que alguien tomó hace mucho y
              que sigue ahí dentro, girando.
            </p>
          </div>

          {/* Pull quote. Serif italic, roughly double the body size, set on a
              short brass rule — brass is #a8763e on paper at 3.21:1, which
              clears WCAG 1.4.11's 3:1 for a non-text boundary. It is the
              section's only coloured mark — deliberately the only one, because
              3.21:1 is a pass for a rule and a fail for any 18px word, so the
              accent lives where it carries no text and nowhere else.

              Columns 1-7: the same track the h2 occupies, so the quote is
              flush with the headline and the page margin while the body sits
              three columns inset. The outdent reads as a return to the
              headline column, not as a block that missed an alignment — an
              earlier pass had it at 2-10, one column short of the body's right
              edge, which is the near-miss that looks like a mistake.

              THE BREAK IS SET, NOT NEGOTIATED. `text-balance` was doing the
              wrong thing here and the measurement caught it: at 1440 the whole
              quote advances 969px in a 771px box, and balance minimises the
              longest line rather than respecting the syntax, so it split
              "…es un / documento" — an orphaned article at the end of the
              largest line in the section. `lg:block` on the second sentence
              forces the break onto the full stop instead, which is where a
              two-clause pull quote wants it. Safe at every lg width because
              the first sentence fits its box on one line: 415px in 528 at
              1024, 571 in 771 at 1440, 571 in 864 at 1600 and 1920.

              Below lg the sentence is inline again and the quote wraps to 1
              line at 768 and 3 at 320 — forcing the break there would leave a
              two-word line — so `text-pretty` handles orphans instead. */}
          <blockquote className="reveal mt-[9vh] lg:col-span-7 lg:col-start-1 lg:mt-[12vh]">
            <span aria-hidden="true" className="block h-px w-12 bg-brass" />
            {/* 2rem floor, not the 1.5rem this started at. 2.7vw only clears
                the floor above an 889px viewport, so from 320 to 889 the quote
                was pinned at 24px against a fixed 18px body — 1.33x, under the
                1.63x display step the reference uses for its smallest editorial
                heading, and at 768 that rendered one 68-character italic line
                filling 85% of its box. That is the shape of a caption, not of
                the section's only display event. At 2rem it holds >=1.78x the
                body at every width and wraps to two lines at 768. */}
            <p className="mt-7 text-pretty font-serif text-[clamp(2rem,2.7vw,2.375rem)] italic leading-[1.28] tracking-[-0.01em] text-ink">
              {/* Hard spaces after both articles. Below lg the quote wraps
                  freely and at 320 it was ending a line on "un" with its noun
                  on the next — the same orphan the lg break was fixing, one
                  breakpoint down. Neither pair is long enough to overflow the
                  narrowest box (272px at 320; "un documento." advances ~135px
                  at 24px). */}
              Un reloj es un{"\u00a0"}objeto y es un{"\u00a0"}documento.{" "}
              <span className="lg:block">Yo cuento la segunda parte.</span>
            </p>
          </blockquote>

          <div className="reveal mt-[9vh] max-w-[36rem] text-[1.125rem] leading-[2rem] text-ink lg:col-span-6 lg:col-start-5 lg:mt-[12vh]">
            {/* "cabe en un minuto" plays on her own handle and claims nothing
                about format or length. An earlier pass read "un vídeo de un
                minuto", which asserted a running time DATOS.md does not give —
                and contradicted the handle itself, which is *al menos* one. */}
            <p>
              A veces eso cabe en un minuto. A veces necesita un artículo largo
              en una revista de cultura relojera. Cambia el formato, no el
              trabajo.
            </p>
            <p className="mt-8">
              En redes o en revista, todo sale bajo la misma firma:{" "}
              {/* The wordmark set in ink, not with the hero's brass "1". That
                  glyph is #a8763e on paper at 3.21:1 — which clears AA in the
                  hero because the h1 is 88px (large text, 3:1) and fails it
                  here at 18px (body text, 4.5:1). Recolouring just this "1" to
                  oxblood would pass at 9.71:1 and give the same wordmark two
                  different accent colours on one page, so the accent drops out
                  instead: the brass rule over the pull quote is already this
                  section's one coloured mark, and it carries no text.
                  `whitespace-nowrap` keeps the handle off a line break. */}
              <span className="whitespace-nowrap">almenos1minuto</span>.
            </p>

            {/* Signature, on the same hairline-over-micro-label pattern the
                gallery captions use, echoing the hero masthead's two standing
                facts. It closes the section the way the page opened, and adds
                no claim of its own. */}
            <p className="mt-10 border-t border-ink/15 pt-4 text-[0.68rem] uppercase tracking-[0.26em] text-ash">
              Relojería vintage · Madrid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
