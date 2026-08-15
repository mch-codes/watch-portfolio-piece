// Every outbound link on the site funnels through here. All four are real and
// come straight from DATOS.md — nothing on this site links anywhere else.
export const INSTAGRAM = "https://www.instagram.com/almenos1minuto";
export const YOUTUBE = "https://www.youtube.com/@almenos1minuto";
export const TIKTOK = "https://www.tiktok.com/@almenos1minuto";
export const VINTED = "https://www.vinted.es/member/27331330-nomeel";

/** Press, verbatim from DATOS.md. Two items is the whole list — there is no
 *  third, and inventing one is the exact thing the brief forbids. */
export const PRESS = [
  {
    outlet: "Cultura de Relojes",
    title:
      "SEIKOMATIC: la antesala de Grand Seiko y de la relojería de lujo japonesa",
    note: "Historias — el Seikomatic 6218-8971 y su linaje hasta el calibre 62GS de Grand Seiko.",
    byline: "@almenos1minuto",
    href: "https://culturaderelojes.com/seikomatic-la-antesala-de-grand-seiko-y-de-la-relojeria-de-lujo-japonesa/",
  },
  {
    outlet: "World Watch Museum",
    title: "Tissot, Seiko, Orient o Hamilton, ¿cuál elijo?",
    note: "Comparativa a fondo: PRX Powermatic 80, Seiko 5 Sports, Orient Bambino y Khaki Field Murph.",
    byline: "@almenos1minuto — Colaboradora",
    href: "https://worldwatchmuseum.com/en/revista/tengo-una-buena-noticia-el-mercado-relojero-esta-volviendo-y-ademas-extendiendose-enormemente-entre-la-juventud/",
  },
] as const;
