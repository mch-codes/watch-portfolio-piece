import type { Metadata } from "next";
import { Cormorant, Josefin_Sans, Work_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Cormorant, at Marcin's direction, replacing Newsreader. It is a Garamond
// revival drawn for display: very high stroke contrast, small x-height, long
// extenders. That is a different animal from the newsprint face it replaces —
// it gets more elegant as it gets bigger and thinner as it gets smaller, so the
// wordmark gains and the 17px body copy would lose. Body stays on Work Sans,
// which it already was; Cormorant is only ever set at 20px and up here.
//
// No opsz axis to request — Cormorant's variable font carries weight only, so
// the size compensation Newsreader did automatically is done by hand instead:
// display sizes take 500/600 rather than 400, which is what keeps the hairlines
// from disappearing at 8rem. Real italics ship, and the pull quotes lean on them.
const cormorant = Cormorant({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

// Josefin Sans, for the hero wordmark only — Marcin's call. It is a geometric
// sans with a small x-height and long ascenders, which is the opposite of what
// the rest of the page is set in, and that is the point: the logo stops being
// "the headline font, bigger" and becomes its own mark. Everything else stays
// on Cormorant (editorial) and Work Sans (body).
//
// Its variable font carries a wght axis of 100–700, so unlike Cormorant it can
// actually hold the 200 that was asked for earlier.
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const title = "almenos1minuto — Relojería vintage";
const description =
  "Maquinitas de todo el mundo. Relojería vintage: búsqueda, historia y divulgación bajo la firma almenos1minuto.";

// TODO(Marcin): set this to the real domain before launch. Crawlers need an
// absolute URL for og:image, and Next builds that URL from metadataBase — with
// it unset the card would point at localhost and every share would render
// blank. It is a placeholder, not a decision.
const SITE_URL = "https://almenos1minuto.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  // icon.svg, apple-icon.png and opengraph-image.png sit next to this file and
  // are picked up by convention — Next emits the <link> and <meta> tags and
  // appends the content hash, so no manual wiring here. The card image is a
  // static render of the wordmark rather than a photograph: the gallery shots
  // are 4:5 and square, and none of them crops to 1.91:1 without losing a dial.
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
    siteName: "almenos1minuto",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${cormorant.variable} ${josefin.variable} ${workSans.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
