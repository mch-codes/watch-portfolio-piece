/**
 * The mark — a dial, one hand, one molten pivot.
 *
 * The wordmark already carries the name; this is the same idea drawn instead
 * of set. The hand sits at roughly ten-to-two, the angle catalogue photography
 * has used for a century because it leaves the dial legible, and the pivot is
 * the only coloured element — the same accent that picks the "1" out of the
 * handle in the h1, so the two lockups agree.
 *
 * Dial and hand inherit currentColor, so the mark works on paper and on ink
 * without a second copy. Stroke weights are proportional to the viewBox, so it
 * scales cleanly from the 80px hero lockup down to the 32px favicon.
 */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
      <line
        x1="50"
        y1="50"
        x2="33"
        y2="15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="5" fill="var(--color-brass)" />
    </svg>
  );
}
