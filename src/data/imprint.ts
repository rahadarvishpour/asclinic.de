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
    id: "aerztliche-angaben",
    heading: "Ärztliche Angaben",
    blocks: [
      { type: "p", text: "Nader Farahwaschy" },
      { type: "p", text: "Facharzt für Chirurgie" },
      { type: "p", text: "Gesetzliche Berufsbezeichnung: Arzt" },
      { type: "p", text: "Staat, in dem die Berufsbezeichnung verliehen wurde: Bundesrepublik Deutschland" },
      { type: "p", text: "Die Approbation als Arzt wurde durch das Landesamt für Gesundheit und Soziales Berlin erteilt." },
      { type: "p", text: "Die Facharztbezeichnung „Facharzt für Chirurgie“ wurde durch die Ärztekammer Berlin anerkannt." }
    ]
  },
  {
    id: "kammer",
    heading: "Zuständige Kammer",
    blocks: [
      { type: "address", lines: ["Ärztekammer Berlin", "Friedrichstraße 16", "10969 Berlin", "Deutschland"] },
      { type: "p", text: "Telefon: +49 30 40806-0" }
    ]
  },
  {
    id: "aufsichtsbehoerde",
    heading: "Zuständige Aufsichtsbehörde",
    blocks: [
      { type: "address", lines: ["Landesamt für Gesundheit und Soziales Berlin (LAGeSo)", "Landesprüfungsamt für Gesundheitsberufe", "Turmstraße 21 / Haus A", "10559 Berlin", "Deutschland"] },
      { type: "p", text: "Postanschrift:" },
      { type: "address", lines: ["Postfach 31 09 29", "10639 Berlin"] },
      { type: "p", text: "Telefon: +49 30 90229-0" }
    ]
  },
  {
    id: "berufsrecht",
    heading: "Berufsrechtliche Regelungen",
    blocks: [
      { type: "p", text: "Für die ärztliche Tätigkeit gelten insbesondere:" },
      { type: "ul", items: ["Bundesärzteordnung (BÄO)", "Berliner Heilberufekammergesetz (BlnHKG)", "Berufsordnung der Ärztekammer Berlin"] },
      { type: "p", text: "Die jeweils geltenden berufsrechtlichen Regelungen sind über die Website der Ärztekammer Berlin sowie über die offiziellen Gesetzesportale des Bundes und des Landes Berlin abrufbar." }
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
