/** Copy for the paid-traffic hair-transplant landing page
 *  (/landing-haartransplantation-offer) and the thank-you page it hands off to
 *  (/danke). German only, so it lives here rather than in the shared `ui`
 *  dictionary — that one keeps an all-six-locales invariant a single-locale
 *  campaign page would break.
 *
 *  The landing page is the form and nothing else: no hero, no argument, no
 *  navigation, no footer. Everything here is either a field label, the consent
 *  wording, or the thank-you page.
 */

export const LANDING = {
  meta: {
    title: "Haartransplantation Berlin – persönliche Einschätzung anfragen | AS Clinic",
    description:
      "Senden Sie Ihre Fotos an die AS Clinic am Kurfürstendamm 102. Unsere Kolleginnen und Kollegen melden sich innerhalb von 24 Stunden mit einer ersten Einschätzung und einem Termin für das kostenlose 30-minütige Erstgespräch."
  },






  form: {
    eyebrow: "Ihre Anfrage",
    heading: "Fotos senden und Einschätzung erhalten",
    lead: "Ein Formular, ein Absenden — danach melden wir uns innerhalb von 24 Stunden bei Ihnen.",
    firstName: "Vorname",
    lastName: "Nachname",
    phone: "Telefonnummer",
    email: "E-Mail-Adresse",
    phoneHint: "Am besten mit Vorwahl, damit wir Sie direkt erreichen.",
    photosHeading: "Fotos hochladen",
    photosHint: "Bis zu vier Bilder, je bis 8 MB. Freiwillig, aber sehr hilfreich für die erste Einschätzung.",
    photoLabels: ["Foto 1 — von vorne", "Foto 2 — von oben", "Foto 3 — von der Seite", "Foto 4 — von hinten"],
    photoChoose: "Bild auswählen",
    photoRemove: "Entfernen",
    message: "Nachricht (optional)",
    messagePlaceholder:
      "Seit wann bemerken Sie den Haarausfall? Gab es Vorbehandlungen, Erkrankungen oder Medikamente, die wir kennen sollten?",
    consent:
      "Ich willige ein, dass AS Clinic meine Angaben und die hochgeladenen Fotos zur Bearbeitung meiner Beratungsanfrage verarbeitet. Fotos von Kopf und Haaren können Rückschlüsse auf meinen Gesundheitszustand zulassen; die Einwilligung umfasst ausdrücklich auch diese Gesundheitsdaten (Art. 9 Abs. 2 lit. a DSGVO). Ich kann sie jederzeit mit Wirkung für die Zukunft widerrufen.",
    consentLink: "Zur Datenschutzerklärung",
    submit: "Anfrage senden",
    submitting: "Wird gesendet …",
    required: "Pflichtfeld",
    optional: "optional",
    privacyNote:
      "Ihre Angaben werden ausschließlich zur Bearbeitung dieser Anfrage verwendet — nicht für Newsletter oder Werbung.",
    errorHeading: "Ihre Anfrage konnte nicht gesendet werden.",
    errorGeneric:
      "Bitte versuchen Sie es erneut oder rufen Sie uns an. Wenn es weiterhin nicht klappt, erreichen Sie uns telefonisch oder per E-Mail.",
    errors: {
      firstName: "Bitte geben Sie Ihren Vornamen an.",
      lastName: "Bitte geben Sie Ihren Nachnamen an.",
      phone: "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      consent: "Ohne Ihre Einwilligung dürfen wir die Anfrage nicht verarbeiten.",
      fileType: "Nur Bilddateien (JPG, PNG, WEBP oder HEIC) können hochgeladen werden.",
      fileSize: "Jedes Bild darf höchstens 8 MB groß sein.",
      totalSize: "Die Bilder sind zusammen zu groß. Bitte senden Sie kleinere Dateien.",
      send: "Die Anfrage konnte technisch nicht zugestellt werden. Bitte versuchen Sie es erneut."
    }
  },

  footer: {
    contactHeading: "Direkter Kontakt",
    hoursHeading: "Öffnungszeiten",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    rights: "Alle Rechte vorbehalten."
  },

  danke: {
    metaTitle: "Vielen Dank für Ihre Anfrage | AS Clinic Berlin",
    metaDescription: "Ihre Anfrage ist bei der AS Clinic Berlin eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    eyebrow: "Anfrage eingegangen",
    h1: "Vielen Dank für Ihre Anfrage.",
    lead:
      "Ihre Angaben und Ihre Fotos sind bei uns eingegangen. Unsere Kolleginnen und Kollegen melden sich innerhalb der nächsten 24 Stunden telefonisch oder per E-Mail bei Ihnen.",
    nextHeading: "Was als Nächstes passiert",
    next: [
      "Ihre Fotos werden in der Klinik gesichtet.",
      "Wir rufen Sie an oder schreiben Ihnen — innerhalb von 24 Stunden.",
      "Gemeinsam legen wir einen Termin für das kostenlose 30-minütige Erstgespräch fest."
    ],
    ctaHeading: "Für ästhetische Behandlungen und Terminbuchung",
    ctaBody:
      "Botox, Filler, Mesotherapie oder ein Termin in der Klinik: Sie können Ihren Wunschtermin direkt online buchen, unabhängig von dieser Anfrage.",
    ctaButton: "Hier klicken und Termin buchen",
    ctaSecondary: "Alle Behandlungen ansehen",
    urgentNote: "Etwas Dringendes? Rufen Sie uns während der Öffnungszeiten einfach an."
  }
} as const;
