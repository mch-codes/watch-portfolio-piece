import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Newsreader over the Fraunces used on Hebras: it is a newsprint face, not a
// fashion one — slightly coarse, high-contrast, and warmer at display sizes,
// which is the register this brand wants. Variable with the opsz axis
// requested, so the wordmark at 8rem is a different drawing from a 1rem
// standfirst; real italics ship too, and the pull quotes lean on them.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
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
  // icon.png, apple-icon.png and opengraph-image.png sit next to this file and
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
      className={`scroll-smooth ${newsreader.variable} ${workSans.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
