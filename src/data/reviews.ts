export interface GoogleReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Relative time as shown by Google at the time this list was captured
   *  (2026-09-11) — Google does not expose an absolute date, and this is not
   *  re-fetched automatically, so it will read as slightly stale over time. */
  relativeTime: string;
  /** True where the original review was in German and this is Google's own
   *  translation — shown as-is, not re-translated by us. */
  translated?: boolean;
  /** The reviewer's own Google avatar (hosted on Google's CDN), captured from
   *  the same review on 2026-09-11 — the same image Google itself shows next
   *  to this review. Rendered with a letter-avatar fallback in case a photo
   *  is ever removed or fails to load. */
  avatarUrl: string;
}

/** The clinic's real, verified Google Business Profile rating, read directly
 *  from Google (Search knowledge panel and Maps) on 2026-09-11. Update this
 *  by hand if it's checked again — never estimate it. */
export const GOOGLE_RATING = {
  average: 5.0,
  count: 55
};

/** The 20 most recent Google reviews with actual review text, newest first,
 *  copied verbatim (including minor grammar/punctuation quirks) from the
 *  clinic's Google Business Profile on 2026-09-11. A handful of reviews in
 *  between these were skipped because they carried no text (a star rating
 *  only) or were a question rather than a testimonial. Long reviews are
 *  trimmed to their opening, unedited sentences rather than shown in full,
 *  to keep cards a consistent size — never reworded. */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  { author: "Mustafa Ahmadi", rating: 5, relativeTime: "2 weeks ago",
    text: "A very experienced and ethical team. I personally had PRP treatment done by them as well.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKHWtdN7HDvKk016rxvhNtAFsKf-kGBKN9CpBFfohmq5G7oaQ=w96-h96-p-rp-mo-br100" },
  { author: "Filip Cholewczyński", rating: 5, relativeTime: "3 weeks ago",
    text: "I had a very positive experience with AS Clinic Berlin and I'm extremely happy with the results of my hair transplant. The whole team was professional, friendly and genuinely caring throughout the entire process.",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVfrWZkCuKxtYrcbR2plfooSQJV6YrNOSS0fQadPNrB3X5BxM3e=w96-h96-p-rp-mo-br100" },
  { author: "Janbaz Wahedi", rating: 5, relativeTime: "3 weeks ago", translated: true,
    text: "An excellent experience! I am truly very satisfied with my hair transplant at the AS Clinic Berlin. From the initial consultation to the aftercare, everything was professional, friendly, and well-organized.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIZEwg5CNNANp7biCTKoLP3XHed5oIUGe4xtkm9nGW6W4iEjA=w96-h96-p-rp-mo-br100" },
  { author: "Waheedullah Muhammadi", rating: 5, relativeTime: "a month ago",
    text: "I did my hair transplantation here and how ever just 7 months past from surgery I am really happy with the result, thanks AS Clinic",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLJCMu4RePZH4gsdVUmljYARvpXFkvRtZ8RR3omvuYseW1CFA=w96-h96-p-rp-mo-br100" },
  { author: "Sahil Mirsade", rating: 5, relativeTime: "2 months ago", translated: true,
    text: "I had a hair transplant eight months ago and I'm very happy with the result. You can't tell at all that I've had a transplant – it looks completely natural. I was also very pleased with all the staff.",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUczj5zyhpO69ggS-ZsYu2wVVQSHwosa2Ha7RtPnrDHIiHmoe8=w96-h96-p-rp-mo-br100" },
  { author: "Omid Saed", rating: 5, relativeTime: "3 months ago", translated: true,
    text: "I am absolutely thrilled with my treatment at ASClinic. The work is incredibly precise and clean. I received very friendly advice and felt comfortable at all times. Thank you, ASClinic!",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIrgt0nHs00n_aXBuMgigGW2OmcKvcoGaswx7MQw14sc65v6A=w96-h96-p-rp-mo-br100" },
  { author: "Zabihullah Takal", rating: 5, relativeTime: "7 months ago",
    text: "It's very good clinic for hair transplant i do my hair transplant in this clinic and I'm very happy for the results it pass four months and the staff of this clinic very kindly and friendly thanks for all that's",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKONGnK6yMQ7ITBrRxQ4iLqfuEiGbnUSq5pfRNjK5hZaRkG9w=w96-h96-p-rp-mo-br100" },
  { author: "Ab Melden", rating: 5, relativeTime: "8 months ago", translated: true,
    text: "I had a hair transplant here about six months ago and I'm very happy with the results so far – although it's not the final result yet.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJrz_SgbnNoXixonuasZvv6W9yGKTCetF3z-3CR46OGqXYfKg=w96-h96-p-rp-mo-br100" },
  { author: "Nermin N", rating: 5, relativeTime: "8 months ago", translated: true,
    text: "I had my eyebrow transplant with Dr. Ali Reza Simaee in June 2025 and never imagined I would see such a perfect result. He truly saved my eyebrows and made the best of them.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKS0c5lf7tcxWbWeAP9h1UZmTRUYyI_WGk_nFguJHp6oVIMnw=w96-h96-p-rp-mo-br100" },
  { author: "Imad Awad", rating: 5, relativeTime: "9 months ago", translated: true,
    text: "Excellent service and very helpful",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJiRg-BEVZlhG7JlHkvkuCX4cXsHo3d6PD0k_MSHtbdvLL2gg=w96-h96-p-rp-mo-br100" },
  { author: "Alireza Jafari", rating: 5, relativeTime: "a year ago", translated: true,
    text: "I had a hair transplant at this clinic three months ago and I'm very satisfied with the results. The team is truly professional and very friendly. I wholeheartedly recommend this center.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIU47s-PlJG-1KSiKJz8yX0Fq31OId1oftfDsZKPBxz6Hoovg=w96-h96-p-rp-mo-br100" },
  { author: "Amir Ariya", rating: 5, relativeTime: "a year ago", translated: true,
    text: "The best ❤️",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXUKyKLns1byZurUkiI7WwLtJgh7UzWVJyLSoazsA4zPv7SKpm6=w96-h96-p-rp-mo-br100" },
  { author: "Rahmatullah Jafari", rating: 5, relativeTime: "a year ago", translated: true,
    text: "This was my second visit to Dr. Sara's practice. She had such a light touch; I didn't experience much pain during the injections in my head, and most importantly, I'm losing less hair.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJck5_97apFpM1vNjYOO-0GbgQFHc333E5J3VaE9VxM828bJA=w96-h96-p-rp-mo-br100" },
  { author: "Edris Noori", rating: 5, relativeTime: "a year ago", translated: true,
    text: "I've had PRP treatments three times already and have been very satisfied. The doctor and all the clinic staff are very polite and professional. I highly recommend them.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLnk_6KubB6e_9cxzsm5B9oSR5WzKNfr838Venr3wm3Qu4M7Q=w96-h96-p-rp-mo-br100" },
  { author: "Salar Yiktak", rating: 5, relativeTime: "a year ago", translated: true,
    text: "I had a hair transplant here 8 months ago. I'm extremely satisfied with the result and absolutely delighted. A professional and friendly team.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJNFYR5HZgm1kWgTN5tyWoo-5dBXyk0CsayfCb8uV5vXTceJw=w96-h96-p-rp-mo-br100" },
  { author: "mamali m", rating: 5, relativeTime: "a year ago", translated: true,
    text: "The best hair transplant center in Berlin",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLVbg0gRWIp75APYfCeNY15qvz26CAB4xQgtZ2vS51WGd6L4T8=w96-h96-p-rp-mo-br100" },
  { author: "Patricia Peroni", rating: 5, relativeTime: "a year ago", translated: true,
    text: "I'm already absolutely thrilled and happy, even though my treatment isn't until September. The doctor explained everything perfectly, and the price is right too.",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJeO715bJ0zsLYHoJZcH3-uyijgljNY0_XFNuijSHLL5QPrHQ=w96-h96-p-rp-mo-br100" },
  { author: "Farhad Zafari", rating: 5, relativeTime: "a year ago", translated: true,
    text: "I am very happy",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJFfDOcfJtAOwJpQYgIidEm1skhUe0P8gK1VlHCHhNRN_P3t9c=w96-h96-p-rp-mo-br100" },
  { author: "ramish karimi", rating: 5, relativeTime: "a year ago", translated: true,
    text: "Very good PRP treatment",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIiJVAmtBlKRAkqycyNBkX6-ZNyZ8DaF9MbaHCVStblg7jHEg=w96-h96-p-rp-mo-br100" },
  { author: "Shagha Sadat", rating: 5, relativeTime: "a year ago",
    text: "Nice clinic with very kind staff I did My Transplantation here and I am very happy so far.thanks As Clinic",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXoF4_CffNUnsUYEWlNayL4XdF6-X9WF0P6LBZWpuWy8IRTm34s=w96-h96-p-rp-mo-br100" }
];
