/** Copy for the standalone contact page, which is published in German and English
 *  only (see CONTACT_LOCALES in ./ui). It lives here rather than in the shared `ui`
 *  dictionary so that dictionary keeps its all-six-locales invariant — a missing
 *  translation there is a type error, and that check is worth keeping.
 */
import type { Locale } from "./ui";

export type ContactLocale = Extract<Locale, "de" | "en">;

const contactUi = {
  en: {
    "ct.metaTitle": "Contact AS Clinic Berlin — Phone, E-mail & WhatsApp | AS Clinic",
    "ct.metaDescription": "Contact AS Clinic in Berlin-Charlottenburg: phone, e-mail, WhatsApp and Telegram, opening hours, address on Kurfürstendamm 102 and a request form for a free first consultation.",
    "ct.h1": "Contact the clinic",
    "ct.intro": "Call us, write to us, or send a request through the form below. Every enquiry is read by our medical team, and we reply in six languages.",
    "ct.callCta": "Call the clinic",
    "ct.emailCta": "Write an e-mail",
    "ct.channelsHeading": "Ways to reach us",
    "ct.channelsBody": "Choose whichever is easiest — all of these reach the same team at the clinic.",
    "ct.phoneLabel": "Phone",
    "ct.phoneNote": "During opening hours, in German, English, Persian, Arabic, Russian and Spanish.",
    "ct.emailLabel": "E-mail",
    "ct.emailNote": "For questions, documents and appointment requests.",
    "ct.whatsappNote": "Quick questions and voice messages. Please do not send medical documents or photos here.",
    "ct.telegramNote": "An alternative to WhatsApp, same team.",
    "ct.instagramNote": "Results, clinic updates and direct messages.",
    "ct.responseHeading": "When to expect an answer",
    "ct.responseBody": "We usually reply within one working day. For anything urgent after a procedure, please call the clinic directly rather than writing.",
    "ct.visitHeading": "Visit us",
    "ct.visitBody": "AS Clinic is at Kurfürstendamm 102 in Berlin-Charlottenburg. Consultations are by appointment, so please book ahead rather than dropping in.",
    "ct.directionsCta": "Directions and getting here",
    "ct.privacyNote": "Data you send us is processed only to answer your enquiry. See our privacy notice for details.",
    "ct.privacyCta": "Read the privacy notice"
  },
  de: {
    "ct.metaTitle": "Kontakt zur AS Clinic Berlin — Telefon, E-Mail & WhatsApp | AS Clinic",
    "ct.metaDescription": "Kontakt zur AS Clinic in Berlin-Charlottenburg: Telefon, E-Mail, WhatsApp und Telegram, Öffnungszeiten, Adresse am Kurfürstendamm 102 und Anfrageformular für ein kostenloses Erstgespräch.",
    "ct.h1": "Kontakt zur Klinik",
    "ct.intro": "Rufen Sie uns an, schreiben Sie uns oder senden Sie eine Anfrage über das Formular unten. Jede Anfrage wird von unserem medizinischen Team gelesen — wir antworten in sechs Sprachen.",
    "ct.callCta": "Klinik anrufen",
    "ct.emailCta": "E-Mail schreiben",
    "ct.channelsHeading": "So erreichen Sie uns",
    "ct.channelsBody": "Wählen Sie den für Sie einfachsten Weg — alle führen zum selben Team in der Klinik.",
    "ct.phoneLabel": "Telefon",
    "ct.phoneNote": "Während der Öffnungszeiten, auf Deutsch, Englisch, Persisch, Arabisch, Russisch und Spanisch.",
    "ct.emailLabel": "E-Mail",
    "ct.emailNote": "Für Fragen, Unterlagen und Terminanfragen.",
    "ct.whatsappNote": "Für kurze Fragen und Sprachnachrichten. Bitte senden Sie hierüber keine medizinischen Unterlagen oder Fotos.",
    "ct.telegramNote": "Alternative zu WhatsApp, gleiches Team.",
    "ct.instagramNote": "Ergebnisse, Neues aus der Klinik und Direktnachrichten.",
    "ct.responseHeading": "Wann Sie eine Antwort erhalten",
    "ct.responseBody": "In der Regel antworten wir innerhalb eines Werktages. Bei dringenden Anliegen nach einem Eingriff rufen Sie uns bitte direkt an, statt zu schreiben.",
    "ct.visitHeading": "Besuchen Sie uns",
    "ct.visitBody": "Die AS Clinic finden Sie am Kurfürstendamm 102 in Berlin-Charlottenburg. Beratungen finden nach Termin statt — bitte vereinbaren Sie vorab einen Termin.",
    "ct.directionsCta": "Anfahrt und Wegbeschreibung",
    "ct.privacyNote": "Ihre Angaben werden ausschließlich zur Beantwortung Ihrer Anfrage verarbeitet. Einzelheiten finden Sie in unserer Datenschutzerklärung.",
    "ct.privacyCta": "Datenschutzerklärung lesen"
  }
} as const satisfies Record<ContactLocale, Record<string, string>>;

export type ContactKey = keyof (typeof contactUi)["en"];

export function tc(locale: ContactLocale, key: ContactKey): string {
  return contactUi[locale][key];
}
