# Workbench — almenos1minuto gauntlet loop

Reference: acollectedman.com. Cap: 2 critic rounds per section.

## Hero — round 1/2
- Changed: full hero built (off-axis type-led composition, masthead rule, 88px display, brass "1", one scroll CTA).
- Critic found: "the plate is `-mr-12` against `px-12`, which cancels to exactly zero overhang — 21.7% of the opening frame against the reference's ~73%; make the bleed real and let the fold crop it."
- Fix: plate broken out of the capped container to an absolute right panel, true viewport edge at all widths, base 90-108px below fold, 31.6% of frame. Also fixed out-of-band: --color-ash 3.35:1 -> 4.83:1.
- Current gap: pending round 2.
## Hero — round 2/2 (CAP REACHED)
- Critic found: "h1 capped at 5.5rem/88px, reached at a 1073px viewport — wordmark fills only 66% of its 885px track at 1440 and 59% at 1920, so the photo slab is the dominant mass and 'type-led' is false."
- Fix: clamp(2.25rem, 8vw, 8rem); cap now lands exactly where max-w-[100rem] stops growing. Measured via headless Chrome + Range rects: 88-96% of track at every width 320-2560, zero overflow. Critic's suggested 8.5rem would have overflowed by 99px (it estimated the font advance; opsz saturates near 72px).
- Also fixed out-of-band: CTA border 1.70:1 -> 3.21:1; plate top 88px -> 64px onto the masthead rule.
- Current gap: NONE OPEN. Hero closed at cap, critic never declared an outright WIN.
- Lead fix (affects all sections): @source not "../out"/".next" — Tailwind was rediscovering deleted classes in its own build output.

## Finds (gallery) — round 1/2
- Changed: 8-slot asymmetric grid derived from `scale` (plate/detail/spread), five widths / four ratios, side run L R R ▬ R L L R, spread full-bleed at true viewport edge. Reveal + per-tile parallax adapted from Hebras (kept all three documented constraints, changed direction source, threshold 0.3->0.2, timing 1100->1300ms, stagger per row-position, drift graded by tile size). Fixed a real overflow bug at 320/360/414 with `overflow-x: clip` on #finds.
- Critic found: "the per-item status line renders at 9.6px and 2.75:1 — it will carry 'En la colección / Vendido en Vinted / Restaurado', the second most important fact about each find, and fails AA by 1.75 points; raise it to the hero's established micro-label token (10.88px, 4.83:1)."
- Fix: status line + section note moved to `text-[0.68rem] tracking-[0.26em] text-ash`; measured 4.833:1, caption rhythm unchanged. Lead also brought Plate.tsx's "Foto pendiente" badge onto the same token.
- Current gap: pending round 2. Critic separately measured the spread's beat as 9% faster than the ordinary beat (1125 vs 1239px) — not the named gap, watch for it in round 2.

## Finds (gallery) — round 2/2 (CAP REACHED)
- Critic found: "the spread's aspect-[16/9] is hardcoded at every breakpoint, so below lg the full-bleed 'reset' is SMALLER than the frames it punctuates — 432px against an 880px plate at 768 (3rd smallest of 8), 180 vs 340 at 320; make the ratio responsive so the spread's height >= the tallest plate at all four widths."
- Fix: ratio -> `aspect-[5/6] lg:aspect-[7/5]`; spread now 1st by height AND area at 320/768/1023/1440/1600/1920. Spread-adjacent air below lg 16vh -> 12vh. 1440 adjacent beat 1125 -> 1234 against an ordinary 1239 (0.4% off).
- Current gap: NONE OPEN. Closed at cap; critic never declared an outright WIN.
- NOTE — critic could NOT fetch measurable geometry from acollectedman.com (its fetches returned the brand directory, not the editorial object run). It said so rather than inventing numbers.
- OPEN DECISION for Marcin: literal 16:9 on the spread is recoverable at >=1920 with one class but it drops the spread 291px at the 1919->1920 boundary. Left out.

## Story — round 1/2
- Changed: first-person narrative rewritten from her one sourced bio paragraph, no image (pacing contrast against the gallery), measure capped at max-w-[36rem] = 65.7 cpl, outdented pull quote under a brass hairline, standfirst baseline-aligned to the headline foot.
- Critic found: "the pull quote renders at 24px — 1.33x the 18px body — at every viewport from 320 to 889px, and at 768 that leaves it a single 68-character line filling 84.8% of its box, which reads as a caption rather than the section's only display event; raise the clamp floor from 1.5rem to 2rem so it holds >=1.78x the body at every width."
- Fix: clamp floor 1.5rem -> 2rem. Applied by lead directly (one verified value; the critic had already probed a 32px floor for overflow at 320/768/1024). tsc clean, live page confirms.
- Critic measured the REFERENCE properly this round (loaded two acollectedman.com journal articles over CDP): its body runs 123-168 cpl at desktop against this section's 65.7. The site's measure beats the reference outright.
- Fabrication check: CLEAN. Every assertion traced to DATOS.md or the Madrid brief.
- Current gap: pending round 2.

## LOOP STOPPED BY MARCIN — delivered as-is
Sections 1-3 built and reviewed. Sections 4-6 (Press, Shop, Follow) remain `return null` stubs, not built. No further rounds run.

## Sections 4-6 built OUTSIDE the loop (no critic rounds), at Marcin's request
- Press: two-item list from lib/site.ts, title-led rather than a logo wall, whole row is one link.
- Shop: the page's only dark band (oxblood). Paper on oxblood 11.93:1, secondary at 70% 6.64:1. Brass was rejected for the CTA rule — 3.03:1 on oxblood clears 1.4.11 by 0.03 and that is not a margin to ship a commercial control on.
- Follow: three channels as display type, not brand icons — icons would be the first non-type, non-photo marks on the page and they would land in the last screen.
- Verified: tsc clean, production build clean, no horizontal overflow at 390 (scrollWidth == clientWidth == 390), rendered at 1440 and 390 over CDP.
- NOT reviewed by a critic. These three sections have had no adversarial pass, unlike 1-3.
