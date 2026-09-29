/** German-language imprint (Impressum) under § 5 DDG and § 18 Abs. 2 MStV,
 *  supplied verbatim by the clinic. It is a legal document: the wording is not
 *  paraphrased, shortened or translated. Renders through src/pages/impressum.astro.
 */
import type { LegalSection } from "./legal";

export const IMPRINT_SECTIONS: LegalSection[] = [
  {
    id: "angaben",
    heading: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)",
    blocks: [
      { type: "p", text: "ASClinic – Zentrum für moderne Haartransplantation" },
      { type: "p", text: "Diensteanbieter:" },
      { type: "address", lines: ["Alireza Simaee", "Kurfürstendamm 102", "10711 Berlin", "Deutschland"] }
    ]
  },
  {
    id: "kontakt",
    heading: "Kontakt",
    blocks: [
      { type: "p", text: "Telefon: +49 179 3902489" },
      { type: "p", text: "E-Mail: info@asclinic.de" }
    ]
  },
  {
    id: "umsatzsteuer-id",
    heading: "Umsatzsteuer-ID",
    blocks: [
      { type: "p", text: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:" },
      { type: "p", text: "DE365724523" }
    ]
  },
  {
    id: "redaktionell",
    heading: "Verantwortlich für journalistisch-redaktionelle Inhalte",
    blocks: [
      { type: "p", text: "Soweit auf dieser Website journalistisch-redaktionell gestaltete Inhalte im Sinne des § 18 Abs. 2 Medienstaatsvertrag (MStV) angeboten werden:" },
      { type: "address", lines: ["Alireza Simaee", "Kurfürstendamm 102", "10711 Berlin", "Deutschland"] }
    ]
  },
  {
    id: "verbraucherstreitbeilegung",
    heading: "Verbraucherstreitbeilegung",
    blocks: [
      { type: "p", text: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." }
    ]
  }
];
