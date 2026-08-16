import { INSTAGRAM, TIKTOK, YOUTUBE } from "@/lib/site";

/**
 * Follow along — the closing CTA, and the last thing on the page.
 *
 * DATOS.md: "Links to Instagram, YouTube, TikTok. Short line reinforcing the
 * content pillars." The three pillars in the headline are the ones her own
 * published work already demonstrates — the Cultura de Relojes piece runs in
 * that outlet's "Historias" section, the World Watch Museum piece is a
 * comparison, and the hunting is the gallery directly above. Nothing here
 * claims a posting cadence, a follower count, or a format length.
 *
 * TikTok is included on DATOS.md's own note that the article bylines list all
 * three, so leaving it out would contradict the source.
 *
 * The URLs come from lib/site.ts rather than being written here, which is that
 * file's stated job: every outbound link on the site funnels through it.
 *
 * Set as display type, not icons. Three brand glyphs would be the first marks
 * on the page that aren't type or photograph, and they would arrive in the last
 * screen — so the closing gesture is the same serif the page opened with, one
 * platform per line, each row a full-width target.
 */
const CHANNELS = [
  { name: "Instagram", href: INSTAGRAM },
  { name: "YouTube", href: YOUTUBE },
  { name: "TikTok", href: TIKTOK },
] as const;

export default function Follow() {
  return (
    <section id="follow" className="bg-linen py-[14vh] lg:py-[18vh]">
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <header className="reveal max-w-[52rem]">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-ink/70">
            Sígueme
          </p>
          <h2 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            Historias, hallazgos{" "}
            <span className="block italic">y comparativas.</span>
          </h2>
          <p className="mt-8 max-w-[38ch] text-[1.0625rem] leading-[1.65] text-ink/80">
            En vídeo, en foto y por escrito.
          </p>
        </header>

        {/* Bottom hairline on the list, not just tops: this is the last block
            on the page and an open-ended list would leave the final row
            hanging on whitespace with nothing closing it. */}
        <ul className="reveal mt-[10vh] border-b border-ink/15 lg:mt-[12vh]">
          {CHANNELS.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 border-t border-ink/15 py-7 transition-colors hover:border-oxblood hover:text-oxblood focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oxblood lg:py-9"
              >
                <span className="font-serif text-[clamp(1.75rem,3.6vw,3rem)] font-medium leading-none tracking-[-0.02em] text-ink transition-colors group-hover:text-oxblood">
                  {channel.name}
                </span>
                {/* The handle is the same on all three, so it is set once per
                    row as a quiet label rather than repeated at display size —
                    it confirms the account, it isn't the headline. */}
                <span className="flex items-baseline gap-3 text-[0.68rem] uppercase tracking-[0.26em] text-ink/70 transition-colors group-hover:text-oxblood">
                  <span className="hidden sm:inline">@almenos1minuto</span>
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
