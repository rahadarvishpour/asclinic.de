export type Locale = "en" | "de" | "es" | "ru" | "fa" | "ar";

export interface LocaleMeta {
  code: Locale;
  label: string;
  native: string;
  dir: "ltr" | "rtl";
  hreflang: string;
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English", native: "English", dir: "ltr", hreflang: "en" },
  { code: "de", label: "German", native: "Deutsch", dir: "ltr", hreflang: "de" },
  { code: "es", label: "Spanish", native: "Español", dir: "ltr", hreflang: "es" },
  { code: "ru", label: "Russian", native: "Русский", dir: "ltr", hreflang: "ru" },
  { code: "fa", label: "Persian", native: "فارسی", dir: "rtl", hreflang: "fa" },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl", hreflang: "ar" }
];

export const DEFAULT_LOCALE: Locale = "en";

export function localePath(locale: Locale, path = "") {
  const base = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${base}${path}` || "/";
}

const NON_DEFAULT_CODES = LOCALES.map((l) => l.code).filter((c) => c !== DEFAULT_LOCALE);

/** Strips a locale prefix (e.g. "/de/treatments/x" -> "/treatments/x", "/de" -> "/") so the
 *  remainder can be re-prefixed for another locale via localePath(). Paths with no locale
 *  prefix (the default-locale/English paths) are returned unchanged. */
export function stripLocalePrefix(pathname: string): string {
  for (const code of NON_DEFAULT_CODES) {
    if (pathname === `/${code}`) return "/";
    if (pathname.startsWith(`/${code}/`)) return pathname.slice(code.length + 1) || "/";
  }
  return pathname || "/";
}

/** Given the CURRENT pathname (any locale) and a target locale, returns the equivalent path
 *  in that locale — same page, different locale prefix — instead of always the homepage. */
export function localizedPathFor(currentPathname: string, target: Locale): string {
  const stripped = stripLocalePrefix(currentPathname);
  return localePath(target, stripped === "/" ? "" : stripped);
}

export function getLocaleMeta(locale: Locale): LocaleMeta {
  return LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
}

// Full English source strings + faithful per-locale translations for every
// section header, nav item and micro-copy string. Long-form treatment
// descriptions and the FAQ answers stay English-only across locales (no
// verified medical-translation source exists for those yet), matching the
// scope of the original design's i18n dictionary.
export const ui = {
  en: {
    "meta.title": "AS Clinic Berlin — Hair Transplant & Aesthetic Medicine",
    "meta.description": "AS Clinic on Kurfürstendamm, Berlin: specialist-led hair transplantation, injectables and aesthetic surgery. Free consultation, 4,200+ procedures a year, 98% satisfaction.",
    "top.1": "Berlin's finest clinic for hair transplant & aesthetic medicine",
    "top.2": "Treated by Berlin's most advanced specialist surgeons",
    "top.3": "Free 3D consultation this month — limited appointments",
    "nav.inject": "Injectables", "nav.hair": "Hair Restoration", "nav.surgery": "Surgery",
    "nav.results": "Results", "nav.faq": "FAQ", "nav.cta": "Book a visit",
    "nav.menu": "Menu",
    "hero.eyebrow": "Aesthetics & Medicine",
    "hero.title": "AS Clinic",
    "hero.accent": "Hair Transplant & Aesthetic Medicine",
    "hero.lead": "Specialist-led injectables, hair restoration and aesthetic surgery planned millimetre by millimetre, delivered with medical precision.",
    "hero.cta": "Book a consultation", "hero.cta2": "View treatments",
    "hero.stat1": "Procedures a year", "hero.stat2": "Specialists",
    "hero.badge": "Next available slot today, 16:30 · Kurfürstendamm",
    "hero.rating": "5 · Google",
    "feat.1": "Specialist-led", "feat.2": "Certified products", "feat.3": "3D planning",
    "feat.4": "Aftercare included", "feat.5": "Multilingual team",
    "s1.eyebrow": "Section 01", "s1.title": "Aesthetics & specialist injections",
    "s1.lead": "Fillers, neuromodulators, biostimulators and mesotherapy — dosed to anatomy, not to trend.",
    "s2.eyebrow": "Section 02", "s2.title": "Hair transplant & specialist services",
    "s2.lead": "Scalp, eyebrow and beard transplantation by follicular unit extraction, with a hairline drawn to your proportions.",
    "s3.eyebrow": "Section 03", "s3.title": "Cosmetic procedures & surgery",
    "s3.lead": "Surgical precision for the eyelid, midface and contour — in our own accredited theatre.",
    "s3.cta": "Request a surgical consultation",
    "hair.check1": "Trichoscopy and graft count at consultation",
    "hair.check2": "PRP and Hair Meso support included for 12 months",
    "hair.check3": "Density audited at month 12, touch-up at no cost",
    "hair.link1": "Plan my grafts", "hair.link2": "Design my brows", "hair.link3": "Map my beard",
    "stats.1": "Years in practice", "stats.2": "Guests treated", "stats.3": "Satisfaction", "stats.4": "Languages",
    "faq.eyebrow": "Questions", "faq.title": "Frequently asked",
    "faq.lead": "Twenty answers per specialty, written by our physicians.",
    "faq.tab1": "Injectables", "faq.tab2": "Hair restoration", "faq.tab3": "Surgery",
    "faq.note": "Answers below are provided in English by our physicians.",
    "sl.eyebrow": "Gallery", "sl.title": "Results in motion",
    "sl.lead": "Drag, scroll or wait — the gallery moves on its own.",
    "sl.prev": "Previous slide", "sl.next": "Next slide",
    "cta.eyebrow": "Appointments", "cta.title": "Let's start with a conversation.",
    "cta.lead": "A complimentary thirty-minute consultation, with no obligation.",
    "cta.name": "Your name", "cta.phone": "Phone", "cta.service": "Area of interest", "cta.submit": "Request an appointment",
    "ft.explore": "Explore", "ft.hours": "Opening hours", "ft.clinic": "Clinic", "ft.follow": "Follow",
    "ft.rights": "All rights reserved.", "ft.tagline": "AS Clinic Berlin on Kurfürstendamm — over 4,000 procedures to German medical standards, hair transplantation and aesthetic medicine under one roof.",
    "ft.hours1": "Mon – Fri · 10:00 – 19:00", "ft.hours2": "Saturday · 10:00 – 16:00", "ft.hours3": "Sunday · Closed",
    "lang.label": "Language", "lang.switch": "Change language",
    "skip.content": "Skip to content",
    "breadcrumb.home": "Home",
    "treat.ready": "Ready to talk about {title}?",
    "treat.faqHeading": "{title} — frequently asked",
    "treat.faqLead": "Twenty answers written by our physicians.",
    "treat.viewAll": "View all {category}"
  },
  de: {
    "meta.title": "AS Clinic Berlin — Haartransplantation & Ästhetische Medizin",
    "meta.description": "AS Clinic am Kurfürstendamm, Berlin: fachärztlich geleitete Haartransplantation, Injektionen und ästhetische Chirurgie. Kostenlose Beratung, über 4.200 Eingriffe pro Jahr, 98% Zufriedenheit.",
    "top.1": "Berlins führende Klinik für Haartransplantation & Ästhetik",
    "top.2": "Behandlung durch Berlins fortschrittlichste Fachärzte",
    "top.3": "Diesen Monat kostenlose 3D-Beratung — begrenzte Termine",
    "nav.inject": "Injektionen", "nav.hair": "Haartransplantation", "nav.surgery": "Chirurgie",
    "nav.results": "Ergebnisse", "nav.faq": "FAQ", "nav.cta": "Termin buchen",
    "nav.menu": "Menü",
    "hero.eyebrow": "Ästhetik & Medizin",
    "hero.title": "AS Clinic",
    "hero.accent": "Haartransplantation & Ästhetische Medizin",
    "hero.lead": "Fachärztlich geführte Injektionen, Haartransplantation und ästhetische Chirurgie — geplant Millimeter für Millimeter, ausgeführt mit medizinischer Präzision.",
    "hero.cta": "Beratung buchen", "hero.cta2": "Behandlungen ansehen",
    "hero.stat1": "Eingriffe pro Jahr", "hero.stat2": "Fachärzte",
    "hero.badge": "Nächster freier Termin heute, 16:30 · Kurfürstendamm",
    "hero.rating": "5 · Google",
    "feat.1": "Fachärztlich geleitet", "feat.2": "Zertifizierte Präparate", "feat.3": "3D-Planung",
    "feat.4": "Nachsorge inklusive", "feat.5": "Mehrsprachiges Team",
    "s1.eyebrow": "Abschnitt 01", "s1.title": "Ästhetik & Fachinjektionen",
    "s1.lead": "Filler, Neuromodulatoren, Biostimulatoren und Mesotherapie — dosiert nach Anatomie, nicht nach Trend.",
    "s2.eyebrow": "Abschnitt 02", "s2.title": "Haartransplantation & Fachleistungen",
    "s2.lead": "Haar-, Augenbrauen- und Barttransplantation mit Einzelfollikel-Technik und natürlichem Haaransatz.",
    "s3.eyebrow": "Abschnitt 03", "s3.title": "Ästhetische Eingriffe & Chirurgie",
    "s3.lead": "Chirurgische Präzision für Lid, Mittelgesicht und Kontur — im eigenen zertifizierten OP.",
    "s3.cta": "Chirurgische Beratung anfragen",
    "hair.check1": "Trichoskopie und Graft-Anzahl bei der Beratung",
    "hair.check2": "PRP- und Hair-Meso-Nachsorge für 12 Monate inklusive",
    "hair.check3": "Dichteprüfung nach 12 Monaten, kostenlose Nachbesserung",
    "hair.link1": "Meine Grafts planen", "hair.link2": "Meine Augenbrauen gestalten", "hair.link3": "Meinen Bart planen",
    "stats.1": "Jahre Erfahrung", "stats.2": "Behandelte Gäste", "stats.3": "Zufriedenheit", "stats.4": "Sprachen",
    "faq.eyebrow": "Fragen", "faq.title": "Häufige Fragen",
    "faq.lead": "Zwanzig Antworten pro Fachbereich — geschrieben von unseren Ärzten.",
    "faq.tab1": "Injektionen", "faq.tab2": "Haartransplantation", "faq.tab3": "Chirurgie",
    "faq.note": "Die Antworten werden von unseren Ärzten auf Englisch bereitgestellt.",
    "sl.eyebrow": "Galerie", "sl.title": "Ergebnisse in Bewegung",
    "sl.lead": "Ziehen, scrollen oder warten — die Galerie bewegt sich von selbst.",
    "sl.prev": "Vorheriges Bild", "sl.next": "Nächstes Bild",
    "cta.eyebrow": "Termin", "cta.title": "Beginnen wir mit einem Gespräch.",
    "cta.lead": "Kostenlose 30-minütige Beratung, ohne Verpflichtung.",
    "cta.name": "Ihr Name", "cta.phone": "Telefon", "cta.service": "Interessensgebiet", "cta.submit": "Termin anfragen",
    "ft.explore": "Entdecken", "ft.hours": "Öffnungszeiten", "ft.clinic": "Klinik", "ft.follow": "Folgen",
    "ft.rights": "Alle Rechte vorbehalten.", "ft.tagline": "AS Clinic Berlin am Kurfürstendamm — über 4.000 Eingriffe nach deutschem medizinischen Standard, Haartransplantation und ästhetische Medizin unter einem Dach.",
    "ft.hours1": "Mo – Fr · 10:00 – 19:00", "ft.hours2": "Samstag · 10:00 – 16:00", "ft.hours3": "Sonntag · Geschlossen",
    "lang.label": "Sprache", "lang.switch": "Sprache ändern",
    "skip.content": "Zum Inhalt springen",
    "breadcrumb.home": "Startseite",
    "treat.ready": "Bereit, über {title} zu sprechen?",
    "treat.faqHeading": "{title} — häufig gestellte Fragen",
    "treat.faqLead": "Zwanzig Antworten, verfasst von unseren Ärzten.",
    "treat.viewAll": "Alle {category} ansehen"
  },
  es: {
    "meta.title": "AS Clinic Berlín — Injerto Capilar y Medicina Estética",
    "meta.description": "AS Clinic en Kurfürstendamm, Berlín: injerto capilar, inyectables y cirugía estética dirigidos por especialistas. Consulta gratuita, más de 4.200 procedimientos al año, 98% de satisfacción.",
    "top.1": "La mejor clínica de Berlín en injerto capilar y medicina estética",
    "top.2": "Tratado por los especialistas más avanzados de Berlín",
    "top.3": "Consulta 3D gratuita este mes — plazas limitadas",
    "nav.inject": "Inyectables", "nav.hair": "Injerto capilar", "nav.surgery": "Cirugía",
    "nav.results": "Resultados", "nav.faq": "Preguntas", "nav.cta": "Reservar cita",
    "nav.menu": "Menú",
    "hero.eyebrow": "Estética y medicina",
    "hero.title": "AS Clinic",
    "hero.accent": "Trasplante Capilar y Medicina Estética",
    "hero.lead": "Inyectables, injerto capilar y cirugía estética dirigidos por especialistas — planificados milímetro a milímetro y ejecutados con precisión médica.",
    "hero.cta": "Reservar consulta", "hero.cta2": "Ver tratamientos",
    "hero.stat1": "Procedimientos al año", "hero.stat2": "Especialistas",
    "hero.badge": "Próxima cita hoy, 16:30 · Kurfürstendamm",
    "hero.rating": "5 · Google",
    "feat.1": "Dirigido por especialistas", "feat.2": "Productos certificados", "feat.3": "Planificación 3D",
    "feat.4": "Seguimiento incluido", "feat.5": "Equipo multilingüe",
    "s1.eyebrow": "Sección 01", "s1.title": "Estética e inyectables especializados",
    "s1.lead": "Rellenos, neuromoduladores, bioestimuladores y mesoterapia — dosificados según la anatomía, no según la moda.",
    "s2.eyebrow": "Sección 02", "s2.title": "Injerto capilar y servicios especializados",
    "s2.lead": "Injerto de cabello, cejas y barba con técnica folicular unitaria y línea frontal natural.",
    "s3.eyebrow": "Sección 03", "s3.title": "Procedimientos estéticos y cirugía",
    "s3.lead": "Precisión quirúrgica para párpados, tercio medio y contorno — en nuestro quirófano acreditado.",
    "s3.cta": "Solicitar consulta quirúrgica",
    "hair.check1": "Tricoscopia y recuento de injertos en la consulta",
    "hair.check2": "Soporte PRP y Hair Meso incluido durante 12 meses",
    "hair.check3": "Densidad auditada al mes 12, retoque sin coste",
    "hair.link1": "Planificar mis injertos", "hair.link2": "Diseñar mis cejas", "hair.link3": "Planificar mi barba",
    "stats.1": "Años de práctica", "stats.2": "Pacientes atendidos", "stats.3": "Satisfacción", "stats.4": "Idiomas",
    "faq.eyebrow": "Dudas", "faq.title": "Preguntas frecuentes",
    "faq.lead": "Veinte respuestas por especialidad, escritas por nuestros médicos.",
    "faq.tab1": "Inyectables", "faq.tab2": "Injerto capilar", "faq.tab3": "Cirugía",
    "faq.note": "Las respuestas las ofrecen nuestros médicos en inglés.",
    "sl.eyebrow": "Galería", "sl.title": "Resultados en movimiento",
    "sl.lead": "Arrastra, desplaza o espera — la galería se mueve sola.",
    "sl.prev": "Diapositiva anterior", "sl.next": "Siguiente diapositiva",
    "cta.eyebrow": "Citas", "cta.title": "Empecemos con una conversación.",
    "cta.lead": "Consulta gratuita de 30 minutos, sin compromiso.",
    "cta.name": "Tu nombre", "cta.phone": "Teléfono", "cta.service": "Área de interés", "cta.submit": "Solicitar cita",
    "ft.explore": "Explorar", "ft.hours": "Horario", "ft.clinic": "Clínica", "ft.follow": "Síguenos",
    "ft.rights": "Todos los derechos reservados.", "ft.tagline": "AS Clinic Berlín en Kurfürstendamm — más de 4.000 procedimientos según estándares médicos alemanes, trasplante capilar y medicina estética bajo un mismo techo.",
    "ft.hours1": "Lun – Vie · 10:00 – 19:00", "ft.hours2": "Sábado · 10:00 – 16:00", "ft.hours3": "Domingo · Cerrado",
    "lang.label": "Idioma", "lang.switch": "Cambiar idioma",
    "skip.content": "Saltar al contenido",
    "breadcrumb.home": "Inicio",
    "treat.ready": "¿Listo para hablar de {title}?",
    "treat.faqHeading": "{title} — preguntas frecuentes",
    "treat.faqLead": "Veinte respuestas escritas por nuestros médicos.",
    "treat.viewAll": "Ver todo: {category}"
  },
  ru: {
    "meta.title": "AS Clinic Берлин — Пересадка волос и эстетическая медицина",
    "meta.description": "AS Clinic на Курфюрстендамм, Берлин: пересадка волос, инъекционные методики и эстетическая хирургия под руководством специалистов. Бесплатная консультация, более 4200 процедур в год, 98% удовлетворённости.",
    "top.1": "Лучшая клиника Берлина: пересадка волос и эстетическая медицина",
    "top.2": "Вас ведут самые продвинутые специалисты Берлина",
    "top.3": "Бесплатная 3D-консультация в этом месяце — мест мало",
    "nav.inject": "Инъекции", "nav.hair": "Пересадка волос", "nav.surgery": "Хирургия",
    "nav.results": "Результаты", "nav.faq": "Вопросы", "nav.cta": "Записаться",
    "nav.menu": "Меню",
    "hero.eyebrow": "Эстетика и медицина",
    "hero.title": "AS Clinic",
    "hero.accent": "Пересадка волос и эстетическая медицина",
    "hero.lead": "Инъекционные методики, пересадка волос и эстетическая хирургия под руководством специалистов — план до миллиметра, исполнение с медицинской точностью.",
    "hero.cta": "Записаться на консультацию", "hero.cta2": "Смотреть процедуры",
    "hero.stat1": "Процедур в год", "hero.stat2": "Специалистов",
    "hero.badge": "Ближайшее окно сегодня, 16:30 · Kurfürstendamm",
    "hero.rating": "5 · Google",
    "feat.1": "Под контролем врачей", "feat.2": "Сертифицированные препараты", "feat.3": "3D-планирование",
    "feat.4": "Наблюдение включено", "feat.5": "Многоязычная команда",
    "s1.eyebrow": "Раздел 01", "s1.title": "Эстетика и специальные инъекции",
    "s1.lead": "Филлеры, нейромодуляторы, биостимуляторы и мезотерапия — дозировка по анатомии, а не по тренду.",
    "s2.eyebrow": "Раздел 02", "s2.title": "Пересадка волос и специальные услуги",
    "s2.lead": "Пересадка волос, бровей и бороды по методике фолликулярных единиц с естественной линией роста.",
    "s3.eyebrow": "Раздел 03", "s3.title": "Эстетические процедуры и хирургия",
    "s3.lead": "Хирургическая точность для век, средней зоны лица и контура — в собственной аккредитованной операционной.",
    "s3.cta": "Записаться на хирургическую консультацию",
    "hair.check1": "Трихоскопия и расчёт графтов на консультации",
    "hair.check2": "PRP и Hair Meso поддержка включены на 12 месяцев",
    "hair.check3": "Проверка густоты через 12 месяцев, доработка бесплатно",
    "hair.link1": "Спланировать графты", "hair.link2": "Оформить брови", "hair.link3": "Спланировать бороду",
    "stats.1": "Лет практики", "stats.2": "Пациентов", "stats.3": "Удовлетворённость", "stats.4": "Языков",
    "faq.eyebrow": "Вопросы", "faq.title": "Частые вопросы",
    "faq.lead": "Двадцать ответов по каждому направлению — от наших врачей.",
    "faq.tab1": "Инъекции", "faq.tab2": "Пересадка волос", "faq.tab3": "Хирургия",
    "faq.note": "Ответы предоставлены нашими врачами на английском языке.",
    "sl.eyebrow": "Галерея", "sl.title": "Результаты в движении",
    "sl.lead": "Тяните, прокручивайте или просто смотрите — галерея движется сама.",
    "sl.prev": "Предыдущий слайд", "sl.next": "Следующий слайд",
    "cta.eyebrow": "Запись", "cta.title": "Начнём с разговора.",
    "cta.lead": "Бесплатная 30-минутная консультация без обязательств.",
    "cta.name": "Ваше имя", "cta.phone": "Телефон", "cta.service": "Интересующая область", "cta.submit": "Запросить визит",
    "ft.explore": "Разделы", "ft.hours": "Часы работы", "ft.clinic": "Клиника", "ft.follow": "Соцсети",
    "ft.rights": "Все права защищены.", "ft.tagline": "AS Clinic Берлин на Курфюрстендамм — более 4000 процедур по немецким медицинским стандартам, пересадка волос и эстетическая медицина под одной крышей.",
    "ft.hours1": "Пн – Пт · 10:00 – 19:00", "ft.hours2": "Суббота · 10:00 – 16:00", "ft.hours3": "Воскресенье · Закрыто",
    "lang.label": "Язык", "lang.switch": "Изменить язык",
    "skip.content": "Перейти к содержимому",
    "breadcrumb.home": "Главная",
    "treat.ready": "Готовы обсудить {title}?",
    "treat.faqHeading": "{title} — часто задаваемые вопросы",
    "treat.faqLead": "Двадцать ответов, написанных нашими врачами.",
    "treat.viewAll": "Смотреть все: {category}"
  },
  fa: {
    "meta.title": "AS Clinic برلین — کاشت مو و پزشکی زیبایی",
    "meta.description": "AS Clinic در کورفورستن‌دام، برلین: کاشت مو، تزریقات و جراحی زیبایی زیر نظر متخصص. مشاوره رایگان، بیش از ۴۲۰۰ پروسه در سال، ۹۸ درصد رضایت.",
    "top.1": "بهترین کلینیک برلین در کاشت مو و پزشکی زیبایی",
    "top.2": "زیر نظر پیشرفته‌ترین پزشکان متخصص برلین",
    "top.3": "مشاوره سه‌بعدی رایگان در این ماه — ظرفیت محدود",
    "nav.inject": "تزریقات", "nav.hair": "کاشت مو", "nav.surgery": "جراحی",
    "nav.results": "نتایج", "nav.faq": "سؤالات", "nav.cta": "رزرو نوبت",
    "nav.menu": "منو",
    "hero.eyebrow": "زیبایی و پزشکی",
    "hero.title": "AS Clinic",
    "hero.accent": "کاشت مو و پزشکی زیبایی",
    "hero.lead": "تزریقات تخصصی، کاشت مو و جراحی زیبایی زیر نظر متخصص — طراحی میلیمتری و اجرای با دقت پزشکی.",
    "hero.cta": "رزرو مشاوره", "hero.cta2": "مشاهده خدمات",
    "hero.stat1": "پروسه در سال", "hero.stat2": "متخصص",
    "hero.badge": "نزدیک‌ترین نوبت امروز، ۱۶:۳۰ · Kurfürstendamm",
    "hero.rating": "5 · گوگل",
    "feat.1": "زیر نظر متخصص", "feat.2": "متریال دارای تأییدیه", "feat.3": "طراحی سه‌بعدی",
    "feat.4": "پیگیری پس از درمان", "feat.5": "تیم چندزبانه",
    "s1.eyebrow": "بخش ۰۱", "s1.title": "بخش زیبایی و تزریقات تخصصی",
    "s1.lead": "فیلر، بوتاکس، بیواستیمولاتور و مزوتراپی — دوز بر اساس آناتومی، نه بر اساس مد روز.",
    "s2.eyebrow": "بخش ۰۲", "s2.title": "کاشت مو و خدمات تخصصی",
    "s2.lead": "کاشت مو، ابرو و ریش با تکنیک فولیکولی و خط رویش طبیعی.",
    "s3.eyebrow": "بخش ۰۳", "s3.title": "اقدامات زیبایی و جراحی‌ها",
    "s3.lead": "دقت جراحی برای پلک، میان‌صورت و کنتور — در اتاق عمل مجهز کلینیک.",
    "s3.cta": "درخواست مشاوره جراحی",
    "hair.check1": "تریکوسکوپی و شمارش گرافت در جلسه مشاوره",
    "hair.check2": "پشتیبانی PRP و مزوی مو تا ۱۲ ماه شامل می‌شود",
    "hair.check3": "بررسی تراکم در ماه دوازدهم، اصلاح رایگان",
    "hair.link1": "برنامه‌ریزی گرافت‌های من", "hair.link2": "طراحی ابروهای من", "hair.link3": "طرح‌ریزی ریش من",
    "stats.1": "سال تجربه", "stats.2": "مراجع", "stats.3": "رضایت", "stats.4": "زبان",
    "faq.eyebrow": "پرسش‌ها", "faq.title": "سؤالات متداول",
    "faq.lead": "بیست پاسخ برای هر بخش، نوشته پزشکان ما.",
    "faq.tab1": "تزریقات", "faq.tab2": "کاشت مو", "faq.tab3": "جراحی",
    "faq.note": "پاسخ‌ها توسط پزشکان ما به زبان انگلیسی ارائه شده‌اند.",
    "sl.eyebrow": "گالری", "sl.title": "نتایج در حرکت",
    "sl.lead": "بکشید، اسکرول کنید یا صبر کنید — گالری خودش حرکت می‌کند.",
    "sl.prev": "اسلاید قبلی", "sl.next": "اسلاید بعدی",
    "cta.eyebrow": "نوبت‌دهی", "cta.title": "با یک گفت‌وگو شروع کنیم.",
    "cta.lead": "مشاوره رایگان سی دقیقه‌ای، بدون تعهد.",
    "cta.name": "نام شما", "cta.phone": "تلفن", "cta.service": "حوزه مورد نظر", "cta.submit": "درخواست نوبت",
    "ft.explore": "بخش‌ها", "ft.hours": "ساعات کاری", "ft.clinic": "کلینیک", "ft.follow": "ما را دنبال کنید",
    "ft.rights": "تمامی حقوق محفوظ است.", "ft.tagline": "AS Clinic برلین در کورفورستن‌دام — بیش از ۴۰۰۰ پروسه مطابق استانداردهای پزشکی آلمان، کاشت مو و پزشکی زیبایی زیر یک سقف.",
    "ft.hours1": "دوشنبه تا جمعه · ۱۰:۰۰ – ۱۹:۰۰", "ft.hours2": "شنبه · ۱۰:۰۰ – ۱۶:۰۰", "ft.hours3": "یکشنبه · تعطیل",
    "lang.label": "زبان", "lang.switch": "تغییر زبان",
    "skip.content": "رفتن به محتوا",
    "breadcrumb.home": "خانه",
    "treat.ready": "آماده صحبت درباره {title} هستید؟",
    "treat.faqHeading": "{title} — سؤالات متداول",
    "treat.faqLead": "بیست پاسخ نوشته‌شده توسط پزشکان ما.",
    "treat.viewAll": "مشاهده همه {category}"
  },
  ar: {
    "meta.title": "AS Clinic برلين — زراعة الشعر وطب التجميل",
    "meta.description": "AS Clinic في كورفورستندام، برلين: زراعة الشعر والحقن والجراحة التجميلية بإشراف اختصاصيين. استشارة مجانية، أكثر من 4200 إجراء سنويًا، رضا 98%.",
    "top.1": "أفضل عيادة في برلين لزراعة الشعر وطب التجميل",
    "top.2": "على يد أكثر الأطباء تطورًا في برلين",
    "top.3": "استشارة ثلاثية الأبعاد مجانية هذا الشهر — مقاعد محدودة",
    "nav.inject": "الحقن", "nav.hair": "زراعة الشعر", "nav.surgery": "الجراحة",
    "nav.results": "النتائج", "nav.faq": "الأسئلة", "nav.cta": "احجز موعدًا",
    "nav.menu": "القائمة",
    "hero.eyebrow": "جمال وطب",
    "hero.title": "AS Clinic",
    "hero.accent": "زراعة الشعر وطب التجميل",
    "hero.lead": "حقن تجميلية وزراعة شعر وجراحات تجميل بإشراف اختصاصيين — تخطيط بالمليمتر وتنفيذ بدقة طبية.",
    "hero.cta": "احجز استشارة", "hero.cta2": "استعرض الخدمات",
    "hero.stat1": "إجراء سنويًا", "hero.stat2": "اختصاصيًا",
    "hero.badge": "أقرب موعد اليوم، 16:30 · Kurfürstendamm",
    "hero.rating": "5 · جوجل",
    "feat.1": "بإشراف اختصاصيين", "feat.2": "مستحضرات معتمدة", "feat.3": "تخطيط ثلاثي الأبعاد",
    "feat.4": "متابعة بعد العلاج", "feat.5": "فريق متعدد اللغات",
    "s1.eyebrow": "القسم ٠١", "s1.title": "قسم التجميل والحقن التخصصية",
    "s1.lead": "فيلر، بوتوكس، محفّزات حيوية وميزوثيرابي — جرعات تتبع التشريح لا الموضة.",
    "s2.eyebrow": "القسم ٠٢", "s2.title": "زراعة الشعر والخدمات التخصصية",
    "s2.lead": "زراعة الشعر والحواجب واللحية بتقنية الوحدات البصيلية وخط أمامي طبيعي.",
    "s3.eyebrow": "القسم ٠٣", "s3.title": "الإجراءات التجميلية والجراحات",
    "s3.lead": "دقة جراحية للجفون ومنتصف الوجه والقوام — في غرفة عمليات معتمدة داخل العيادة.",
    "s3.cta": "طلب استشارة جراحية",
    "hair.check1": "فحص الشعر بالمجهر وحساب عدد الطعوم عند الاستشارة",
    "hair.check2": "دعم PRP وميزو الشعر مشمول لمدة 12 شهرًا",
    "hair.check3": "مراجعة الكثافة في الشهر 12، وتصحيح مجاني",
    "hair.link1": "خطّط لطعومي", "hair.link2": "صمّم حاجبيّ", "hair.link3": "خطّط للحيتي",
    "stats.1": "سنة خبرة", "stats.2": "مراجعًا", "stats.3": "رضا", "stats.4": "لغات",
    "faq.eyebrow": "أسئلة", "faq.title": "الأسئلة الشائعة",
    "faq.lead": "عشرون إجابة لكل قسم، بقلم أطبائنا.",
    "faq.tab1": "الحقن", "faq.tab2": "زراعة الشعر", "faq.tab3": "الجراحة",
    "faq.note": "الإجابات مقدمة من أطبائنا باللغة الإنجليزية.",
    "sl.eyebrow": "المعرض", "sl.title": "نتائج في حركة",
    "sl.lead": "اسحب أو مرّر أو انتظر — المعرض يتحرك من تلقاء نفسه.",
    "sl.prev": "الشريحة السابقة", "sl.next": "الشريحة التالية",
    "cta.eyebrow": "المواعيد", "cta.title": "لنبدأ بمحادثة.",
    "cta.lead": "استشارة مجانية لثلاثين دقيقة، بدون التزام.",
    "cta.name": "الاسم", "cta.phone": "الهاتف", "cta.service": "مجال الاهتمام", "cta.submit": "اطلب موعدًا",
    "ft.explore": "استكشف", "ft.hours": "ساعات العمل", "ft.clinic": "العيادة", "ft.follow": "تابعنا",
    "ft.rights": "جميع الحقوق محفوظة.", "ft.tagline": "AS Clinic برلين في كورفورستندام — أكثر من 4000 إجراء وفق المعايير الطبية الألمانية، زراعة الشعر وطب التجميل تحت سقف واحد.",
    "ft.hours1": "الإثنين – الجمعة · 10:00 – 19:00", "ft.hours2": "السبت · 10:00 – 16:00", "ft.hours3": "الأحد · مغلق",
    "lang.label": "اللغة", "lang.switch": "تغيير اللغة",
    "skip.content": "الانتقال إلى المحتوى",
    "breadcrumb.home": "الرئيسية",
    "treat.ready": "هل أنت مستعد للحديث عن {title}؟",
    "treat.faqHeading": "{title} — الأسئلة الشائعة",
    "treat.faqLead": "عشرون إجابة كتبها أطباؤنا.",
    "treat.viewAll": "عرض كل {category}"
  }
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)["en"];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale]?.[key] ?? ui.en[key];
}

/** t() with {placeholder} interpolation, e.g. ti(locale, "treat.ready", { title: "Lip Filler" }). */
export function ti(locale: Locale, key: UiKey, vars: Record<string, string>): string {
  let out = t(locale, key);
  for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, v);
  return out;
}
