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
  sameAs: [
    "https://www.instagram.com/asclinic",
    "https://www.tiktok.com/@asclinic",
    "https://www.youtube.com/@asclinic"
  ],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
    { days: ["Saturday"], opens: "10:00", closes: "16:00" }
  ]
} as const;
