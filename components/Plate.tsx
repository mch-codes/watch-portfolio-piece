/**
 * An image well that reserves its box whether or not there is a photo in it.
 *
 * The gallery photographs have landed; the hero portrait has not, so `src` is
 * still nullable and `src={null}` renders a marked placeholder instead of a
 * broken <img>. Marked, not blank: a client looking at this in a pitch has to
 * be able to tell "photo pending" from "photo missing", and a silent grey
 * rectangle reads as the second one. When the file lands, pass `src` and this
 * becomes a plain image with no other change to the caller.
 */
export default function Plate({
  src,
  alt,
  ratio,
  label,
  className = "",
  priority = false,
}: {
  src: string | null;
  alt: string;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]" — set on the wrapper so the
   *  box exists before the file does and nothing shifts on load. */
  ratio: string;
  /** What this frame is meant to hold, shown only in the placeholder state. */
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`${ratio} relative overflow-hidden bg-linen ${className}`}>
      {src ? (
        /* eslint-disable-next-line @next/next/no-img-element -- static export, no image CDN */
        <img
          src={src}
          alt={alt}
          decoding="async"
          {...(priority
            ? { fetchPriority: "high" as const }
            : { loading: "lazy" as const })}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          /* Not aria-hidden: a screen reader should hear that something is
             pending here too, not silently skip a third of the page. */
          role="img"
          aria-label={`Pendiente: ${label}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center"
        >
          {/* The hairline cross is what makes it read as a reserved plate
              rather than a failed load — a printer's registration mark, not an
              error state. */}
          <span
            aria-hidden="true"
            className="absolute inset-4 border border-dashed border-ink/15"
          />
          {/* Same micro-label token as the hero masthead and the finds status
              line — 10.88px at 4.83:1. It reads as decorative chrome that will
              vanish when the photos land, but until they do it is the only text
              in the box, and it is what a client is reading in a pitch. */}
          <span className="relative text-[0.68rem] uppercase tracking-[0.26em] text-ash">
            Foto pendiente
          </span>
          <span className="relative max-w-[22ch] font-serif text-sm italic leading-snug text-ink/40">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
