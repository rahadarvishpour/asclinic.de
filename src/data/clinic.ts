export const CLINIC = {
  name: "AS Clinic",
  legalName: "AS Hair Clinic — Hair Transplant & Aesthetic Medicine",
  url: "https://asclinic-berlin.de",
  telephone: "+491793902489",
  telephoneDisplay: "+49 179 390 2489",
  streetAddress: "Kurfürstendamm 102",
  postalCode: "10711",
  addressLocality: "Berlin",
  addressRegion: "Berlin",
  addressCountry: "DE",
  district: "Charlottenburg",
  latitude: 52.5019,
  longitude: 13.3078,
  priceRange: "€€€",
  /** Click-to-chat number, supplied by the clinic. Deliberately NOT derived from
   *  `telephone` above — WhatsApp runs on a different line. */
  whatsapp: "https://wa.me/491778025944",
  /** Google Business Profile. `googleMaps` feeds schema.org hasMap; `googleReviews`
   *  is a link only — no AggregateRating is emitted, because the rating value and
   *  review count are not recorded here and must not be guessed. */
  googleMaps: "https://maps.app.goo.gl/xhv7yLf7VaFuCFBS8",
  googleReviews: "https://maps.app.goo.gl/QkRaCpXUWwJq5avVA",
  social: {
    instagram: "https://www.instagram.com/asclinic.de/",
    tiktok: "https://www.tiktok.com/@as_clinic",
    telegram: "https://t.me/AShairclinic"
  },
  /** Verified profiles only — these feed schema.org sameAs, so an unconfirmed
   *  URL here would be an invented entity claim. */
  sameAs: [
    "https://www.instagram.com/asclinic.de/",
    "https://www.tiktok.com/@as_clinic",
    "https://t.me/AShairclinic"
  ],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
    { days: ["Saturday"], opens: "10:00", closes: "16:00" }
  ]
} as const;
