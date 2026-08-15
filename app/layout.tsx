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

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
    siteName: "almenos1minuto",
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
