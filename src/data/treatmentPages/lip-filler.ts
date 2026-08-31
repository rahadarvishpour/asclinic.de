import type { TreatmentPage } from "./types";

export const LIP_FILLER: TreatmentPage = {
  slug: "lip-filler",
  category: { categoryLabelKey: "nav.inject", categoryAnchorId: "injectables" },
  content: {
    en: {
      article: {
        h1: "Lip Filler in Berlin",
        heroIntro: "Hyaluronic acid lip filler at AS Clinic on Kurfürstendamm, dosed to your own lip proportions and reviewed two weeks later before anything more is added.",
        updated: "2026-08-31",
        directAnswer: {
          heading: "What is lip filler?",
          body: "Lip filler is an injectable treatment that uses cross-linked hyaluronic acid — a gel based on a substance the body produces naturally — to add volume, definition or symmetry to the lips. At AS Clinic in Berlin the gel is placed into the lip border, the lip body, or both, by a physician or specialist nurse. The effect is visible immediately, settles over about two weeks, and is temporary: the body breaks the gel down gradually. Because it is hyaluronic acid, the result can also be dissolved if you are unhappy with it."
        },
        glanceHeading: "Lip filler at a glance",
        glance: [
          { label: "Treatment", value: "Lip filler with cross-linked hyaluronic acid" },
          { label: "Clinic", value: "AS Clinic, Kurfürstendamm 102, Berlin-Charlottenburg" },
          { label: "Treatment time", value: "30–45 minutes, including numbing time" },
          { label: "Anaesthesia", value: "Topical numbing cream; most fillers also contain lidocaine" },
          { label: "First consultation", value: "Free, approximately 30 minutes, no obligation" },
          { label: "Downtime", value: "Most people return to normal activities the same day" },
          { label: "Results visible", value: "Immediately; final shape at about two weeks" },
          { label: "Review appointment", value: "Two weeks after treatment" },
          { label: "Reversible", value: "Yes — hyaluronic acid can be dissolved with hyaluronidase" }
        ],
        sections: [
          {
            heading: "What can lip filler be used for?",
            body: "Lip filler is used to change the volume, outline or balance of the lips, and to soften fine vertical lines around the mouth. It is a shaping treatment rather than a skin treatment — it will not change skin texture or pigmentation. The most common reasons people ask for it at AS Clinic are:",
            points: [
              "Adding volume to lips that are naturally thin, or that have lost fullness over time",
              "Defining the vermilion border so lipstick no longer bleeds into fine lines",
              "Correcting an asymmetry between the left and right side, or between upper and lower lip",
              "Improving the shape of the Cupid’s bow or the central height of the upper lip",
              "Softening the vertical lines above the upper lip"
            ]
          },
          {
            heading: "Will my lips look natural?",
            body: "That depends far more on dose and technique than on the product itself. Our protocol is to keep the first session small, follow the outline your lips already have rather than impose a template, and review the result at two weeks before adding anything further. An overfilled look is almost always the result of too much product placed too quickly, not of hyaluronic acid itself. If you want a visibly fuller result, we build towards it across sessions instead of in one appointment."
          },
          {
            heading: "Who may be suitable for lip filler?",
            body: "Most healthy adults over 18 are suitable candidates. Suitability is confirmed in person at your consultation, not by an online form, because it depends on your lip anatomy and medical history as much as on what you would like changed.",
            points: [
              "You are over 18",
              "You are in good general health",
              "You have realistic expectations about what a temporary gel can change",
              "You have no active infection or cold sore on or near the lips",
              "You are not pregnant or breastfeeding"
            ]
          },
          {
            heading: "When may lip filler not be appropriate?",
            body: "We will decline or postpone treatment where the risk is not justified. This is a normal part of a medical consultation and does not mean you can never be treated — in several of these cases treatment can simply happen later.",
            points: [
              "Active cold sores, or an infection or inflamed skin at the injection site",
              "Pregnancy and breastfeeding",
              "Known allergy to hyaluronic acid products or to lidocaine",
              "Certain autoimmune conditions, or an active flare of one",
              "Blood-clotting disorders, or anticoagulant medication that cannot be paused safely",
              "Expectations that cannot be met safely with a temporary filler"
            ]
          },
          {
            heading: "Risks and possible side effects",
            body: "Every injectable treatment carries risk, and lip filler is no exception. Swelling, tenderness and small bruises are expected rather than unusual, and settle within a few days. Less common are lumps or unevenness, which can often be massaged or dissolved, and infection. The most serious risk is vascular occlusion, where filler is inadvertently placed into or compresses a blood vessel — this is rare, and it is the specific reason treatment should only be carried out by someone trained in facial anatomy who has hyaluronidase available on site. All risks are explained in the consent form you read and sign at your consultation, before anything is injected."
          },
          {
            heading: "Lip filler aftercare",
            body: "There is no complicated aftercare, but the first 24 hours matter. Ice can be used for short periods to limit swelling.",
            points: [
              "Leave the injection sites alone for about 12 hours before applying lip products",
              "Avoid strenuous exercise, saunas and sunbeds for 24 hours",
              "Avoid alcohol for 24 hours, as it increases swelling and bruising",
              "Sleep with your head slightly elevated on the first night",
              "Contact the clinic immediately if you notice severe or increasing pain, blanching or unusual discolouration"
            ]
          },
          {
            heading: "When will I see results?",
            body: "You will see added volume immediately, but that is not your result. Swelling peaks in the first 24 to 72 hours and can make the lips look considerably larger and less even than they will be. The true shape is visible at around two weeks, which is why the review appointment is scheduled then rather than earlier. Judging the outcome — or deciding you want more — before that point is judging the swelling."
          },
          {
            heading: "How long does lip filler last?",
            body: "Hyaluronic acid lip filler typically lasts around 8 to 12 months, though this varies considerably between individuals. The lips are one of the most mobile areas of the face, so filler placed there tends to metabolise faster than filler placed against bone in the cheek or jaw. A fast metabolism, smoking and frequent intense exercise all shorten it. Most guests return every 9 to 12 months, and we assess the lips at each visit rather than working to a fixed schedule."
          }
        ],
        process: {
          heading: "How does lip filler work at AS Clinic?",
          steps: [
            { heading: "Consultation", body: "A free, no-obligation appointment of about 30 minutes. We discuss what you would like changed, look at what your lip anatomy will realistically support, and go through the risks and the consent form. Nothing is injected at this appointment unless you want to proceed and are happy to." },
            { heading: "Assessment and planning", body: "We assess your lips at rest and while you speak and smile, note any existing asymmetry, and photograph the starting point. The plan covers where the product goes and how much — usually 0.5 to 1 ml for a first session." },
            { heading: "Preparation", body: "Topical anaesthetic cream is applied and left to work for around 20 minutes. The lips are then cleaned and disinfected." },
            { heading: "Treatment", body: "The filler is injected with a fine needle or a cannula, in small increments, over roughly 10 to 20 minutes. Most fillers contain lidocaine, so the area becomes progressively more numb as the treatment proceeds. Ice is applied afterwards." },
            { heading: "Review at two weeks", body: "You return once the swelling has fully resolved. We compare against the starting photographs and, if the agreed plan calls for it, add a small top-up at no additional charge." }
          ]
        },
        local: {
          heading: "Lip filler in Berlin at AS Clinic",
          body: "AS Clinic is on Kurfürstendamm in Berlin-Charlottenburg, and lip filler is carried out at the clinic by a physician or a specialist nurse trained in facial anatomy. Consultations are available in English, German, Spanish, Russian, Persian and Arabic. The first consultation is free and carries no obligation to book treatment."
        },
        why: {
          heading: "Why choose AS Clinic for lip filler in Berlin?",
          points: [
            { heading: "Conservative first dose", body: "First sessions are capped at a small volume and reviewed before more is added. It is far easier to add filler than to correct an overfilled lip." },
            { heading: "A review built into the treatment", body: "A two-week review is part of the treatment, not an upsell. Any top-up agreed in your original plan is included." },
            { heading: "CE-marked product, shown to you", body: "We use cross-linked hyaluronic acid from CE-marked European manufacturers, and you see the sealed box and batch label before it is opened." },
            { heading: "Medically staffed", body: "Only physicians and specialist nurses trained in facial anatomy inject at this clinic, with hyaluronidase available on site." },
            { heading: "Treated in your own language", body: "Consultation and aftercare in six languages, so nothing about risk or consent is lost in translation." },
            { heading: "Reversible by design", body: "Because the treatment uses hyaluronic acid, an unsatisfactory result can be dissolved rather than waited out." }
          ]
        },
        faqHeading: "Lip filler in Berlin — frequently asked questions",
        faqs: [
          { q: "How much does lip filler cost at AS Clinic?", a: "Pricing is discussed at your free consultation, once we know how much product your plan actually needs. Cost depends primarily on the volume used — a first session typically uses 0.5 to 1 ml — and we confirm the figure with you before any treatment goes ahead. There is no charge for the consultation itself and no obligation to book." },
          { q: "Does lip filler hurt?", a: "Most people describe it as uncomfortable rather than painful. Topical anaesthetic cream is applied for about 20 minutes beforehand, and most fillers contain lidocaine, so the lips become progressively number during treatment. Guests typically rate the discomfort at 2 to 4 out of 10. Ice afterwards helps with both sensation and swelling." },
          { q: "How long does lip filler last?", a: "Typically 8 to 12 months, though this varies. The lips move constantly, so filler there breaks down faster than filler placed against bone elsewhere in the face. Metabolism, smoking and heavy exercise shorten it; conservative dosing and good aftercare extend it." },
          { q: "How much filler will I need?", a: "Most first sessions use 0.5 to 1 ml. We deliberately start at the lower end and review at two weeks, because adding a little more is straightforward while correcting an overfilled lip is not. If you want a fuller result, we build towards it across sessions." },
          { q: "How long does the swelling last?", a: "Swelling peaks within the first 24 to 72 hours and mostly settles within three to five days. Some minor unevenness can persist for up to two weeks. Plan any photographs, events or filming for at least a week after your appointment." },
          { q: "Can lip filler be dissolved?", a: "Yes. Hyaluronic acid filler can be broken down with an enzyme called hyaluronidase, usually within a day of the dissolving appointment. This is one of the main safety advantages of hyaluronic acid over permanent fillers, and it is also the emergency treatment for a vascular complication." },
          { q: "When can I exercise after lip filler?", a: "Avoid strenuous exercise for 24 hours. Raised blood pressure and body temperature increase both swelling and the chance of bruising. Walking and normal daily activity are fine straight away." },
          { q: "Can I have lip filler if I get cold sores?", a: "Yes, but not during an active outbreak, and tell us at consultation. Injecting the lips can trigger a recurrence in people prone to them, so your doctor may recommend antiviral medication before treatment as a precaution." },
          { q: "Is lip filler safe?", a: "Hyaluronic acid lip filler is a well-established treatment with a good safety record when performed by appropriately trained medical staff, but it is not risk-free. Swelling and bruising are common; lumps and infection are uncommon; vascular occlusion is rare but serious. Risk is minimised by correct technique, correct depth, and having hyaluronidase available on site." },
          { q: "Who will perform my treatment?", a: "A physician or a specialist nurse trained in facial anatomy. Nobody injects at AS Clinic without a medical licence on file. You will meet the person carrying out your treatment at the consultation, before you commit to anything." },
          { q: "Can lip filler be combined with other treatments?", a: "Often, yes. Lip filler is frequently planned alongside treatment of the lower face. Some combinations are deliberately staged across separate appointments so that swelling from one does not make it harder to assess the other." },
          { q: "What if I do not like the result?", a: "Tell us at the two-week review. If the shape is not what you agreed, options include a small adjustment, or dissolving the filler with hyaluronidase and starting again. Because the treatment is temporary and reversible, an unwanted result does not have to be permanent." }
        ],
        relatedHeading: "Related treatments",
        related: [
          { slug: "cheek-filler", blurb: "Restores midface volume, which supports the lower face and softens the nasolabial fold." },
          { slug: "jawline-filler", blurb: "Defines the jaw border and angle for a sharper lower-face profile." },
          { slug: "fillart", blurb: "A layered micro-bolus technique that softens the whole face rather than one feature." },
          { slug: "skin-booster", blurb: "Hydration placed in the dermis — changes skin quality rather than shape." }
        ],
        ctaHeading: "Book a lip filler consultation in Berlin",
        ctaBody: "A free, no-obligation 30-minute consultation at AS Clinic on Kurfürstendamm. We will assess your lips, explain what is realistic, and answer your questions — with no pressure to book treatment."
      },
      title: "Lip Filler",
      metaTitle: "Lip Filler in Berlin — Natural Results | AS Clinic",
      metaDescription: "Physician-led lip filler at AS Clinic, Berlin: CE-marked hyaluronic acid, dosed to your natural lip shape. Free consultation, results last 8–12 months.",
      heroKicker: "Injectables · Lip Filler",
      heroLead: "Volume and definition built up in small, reversible steps — so the shape reads as yours, not obviously done.",
      imageAlt: "Close-up of a lip filler injection being administered at AS Clinic",
      chip: "30–45 min · Local numbing",
      sections: [
        { heading: "What it is", body: "Cross-linked hyaluronic acid gel, injected into the lip border and body to add volume, definition or symmetry. We use CE-marked product from European manufacturers, dosed by a physician or specialist nurse to your natural lip proportions rather than a fixed template." },
        { heading: "Who it's for", body: "Most adults who want more volume, a sharper border, better symmetry, or softer vertical lip lines are candidates — provided they're over 18, not pregnant or breastfeeding, and have no active cold sore or skin infection at the injection site." },
        { heading: "What happens at your appointment", body: "We start with a short consultation and photos, then apply a topical anaesthetic for around 20 minutes. Injection with a fine needle or cannula takes 10–20 minutes, followed by ice. Most appointments run about 45 minutes start to finish." },
        { heading: "Results & recovery", body: "Swelling is normal for 24–72 hours and can make lips look temporarily larger than the final result. The true shape settles by around two weeks, when we review and offer a small top-up at no charge if the agreed plan calls for it." }
      ],
      faqs: [
        { q: "Am I a good candidate for lip filler?", a: "Most adults over 18 are candidates if they're not pregnant or breastfeeding and have no active cold sore or skin infection on or near the lips. We confirm suitability at your consultation before any injection." },
        { q: "What type of filler do you use?", a: "Cross-linked hyaluronic acid from CE-marked European manufacturers — the same product family used for cheek and jawline filler, adjusted in thickness for the lip." },
        { q: "How much filler do I need for a natural result?", a: "Most first sessions use 0.5–1 ml. We start conservatively and review at two weeks, since it's easier to add a little more than to correct an overfilled lip." },
        { q: "Does it hurt?", a: "Topical anaesthetic sits on the lips for about 20 minutes beforehand, and most fillers already contain lidocaine. Guests typically rate the discomfort 2–4 out of 10." },
        { q: "How long does the appointment take?", a: "Around 45 minutes including consultation, numbing time and the injection itself." },
        { q: "Will my lips look overfilled or fake?", a: "Not with our protocol — small first-session volumes, injected to follow your natural lip shape and reviewed before any further product is added." },
        { q: "How soon will I see the final result?", a: "You'll see volume immediately, but swelling inflates the shape for 24–72 hours. The true result is visible at around two weeks, once swelling fully resolves." },
        { q: "How long does lip filler last?", a: "Typically 8–12 months. Metabolism, smoking and high activity levels shorten it; conservative dosing and good aftercare extend it." },
        { q: "Can lip filler correct asymmetry?", a: "Yes — dosing can be adjusted side to side to even out a naturally asymmetric lip, though perfect symmetry isn't a realistic or necessary goal." },
        { q: "What are the side effects?", a: "Temporary swelling, tenderness and small bruises are common. Lumps, infection and vascular complications are rare and are covered in the consent you review at consultation." },
        { q: "What is the downtime?", a: "Most guests return to normal activities the same day. Visible swelling or bruising can last 2–5 days, so plan photos or events for at least a week after." },
        { q: "Can I wear lipstick or lip products afterward?", a: "Wait at least 12 hours to let the injection sites close, then normal lip products are fine unless you have visible bruising you'd rather let heal first." },
        { q: "When can I kiss or exercise again?", a: "Light affection is fine once numbness wears off, usually within a couple of hours. We ask you to avoid strenuous exercise for 24 hours to limit swelling and bruising." },
        { q: "Can lip filler be dissolved if I don't like the result?", a: "Yes — hyaluronic acid filler can be dissolved with hyaluronidase, usually within a day of the dissolving appointment if you're unhappy with the shape." },
        { q: "Is lip filler safe for a first-time patient?", a: "Yes, when dosed conservatively. Your first session is treated as a starting point, not a final shape, so we can adjust gradually to what suits your face." },
        { q: "How do you avoid lumps or a blue-grey tint under the skin?", a: "By injecting at the correct depth for the product and layering it in small increments rather than large boluses — the most common causes of both issues." },
        { q: "Can lip filler be combined with other treatments in the same visit?", a: "Often yes — for example alongside a lower-face filler plan — though we sequence some combinations across separate appointments for safety and easier swelling assessment." },
        { q: "How often should I return for touch-ups?", a: "Most guests return every 9–12 months as filler metabolises. We assess your lips at each review rather than working to a fixed schedule." },
        { q: "What would disqualify someone from treatment?", a: "Active cold sores or skin infection at the injection site, pregnancy or breastfeeding, a known allergy to hyaluronic acid products, or expectations we can't safely meet." },
        { q: "Do you offer a specific look like the \"Russian lip\" technique?", a: "Yes — flatter volume distribution with a more defined border and central height can be requested, and is discussed and mapped out at your consultation." }
      ]
    },
    de: {
      article: {
        h1: "Lippen aufspritzen in Berlin",
        heroIntro: "Lippenunterspritzung mit Hyaluronsäure in der AS Clinic am Kurfürstendamm — dosiert nach Ihren eigenen Lippenproportionen und nach zwei Wochen kontrolliert, bevor mehr gesetzt wird.",
        updated: "2026-08-31",
        directAnswer: {
          heading: "Was ist eine Lippenunterspritzung?",
          body: "Bei der Lippenunterspritzung wird quervernetzte Hyaluronsäure in die Lippen injiziert — ein Gel auf Basis eines körpereigenen Stoffes. Es gibt Volumen, zeichnet die Lippenkontur nach oder gleicht Asymmetrien aus. In der AS Clinic in Berlin setzt eine Ärztin oder eine Fachpflegekraft das Gel in Lippenrand, Lippenkörper oder beides. Das Ergebnis ist sofort sichtbar, setzt sich über etwa zwei Wochen und ist vorübergehend, da der Körper das Gel nach und nach abbaut. Da es sich um Hyaluronsäure handelt, lässt sich das Ergebnis bei Bedarf auch wieder auflösen."
        },
        glanceHeading: "Lippenunterspritzung auf einen Blick",
        glance: [
          { label: "Behandlung", value: "Lippenunterspritzung mit quervernetzter Hyaluronsäure" },
          { label: "Klinik", value: "AS Clinic, Kurfürstendamm 102, Berlin-Charlottenburg" },
          { label: "Behandlungsdauer", value: "30–45 Minuten inklusive Einwirkzeit" },
          { label: "Betäubung", value: "Betäubungscreme; die meisten Filler enthalten zusätzlich Lidocain" },
          { label: "Erstgespräch", value: "Kostenlos, etwa 30 Minuten, unverbindlich" },
          { label: "Ausfallzeit", value: "Die meisten gehen noch am selben Tag ihrem Alltag nach" },
          { label: "Ergebnis sichtbar", value: "Sofort; endgültige Form nach etwa zwei Wochen" },
          { label: "Kontrolltermin", value: "Zwei Wochen nach der Behandlung" },
          { label: "Umkehrbar", value: "Ja — Hyaluronsäure lässt sich mit Hyaluronidase auflösen" }
        ],
        sections: [
          {
            heading: "Wofür eignet sich eine Lippenunterspritzung?",
            body: "Die Lippenunterspritzung verändert Volumen, Kontur und Balance der Lippen und mildert feine Fältchen oberhalb der Oberlippe. Sie formt, sie behandelt aber nicht die Hautqualität: An Pigmentierung oder Hautstruktur ändert sie nichts. Am häufigsten wird sie in der AS Clinic aus diesen Gründen gewünscht:",
            points: [
              "Mehr Volumen bei von Natur aus schmalen Lippen oder nach altersbedingtem Volumenverlust",
              "Eine klarere Lippenkontur, damit Lippenstift nicht mehr in feine Fältchen ausläuft",
              "Ausgleich einer Asymmetrie zwischen links und rechts oder zwischen Ober- und Unterlippe",
              "Betonung des Amorbogens oder mehr Höhe in der Mitte der Oberlippe",
              "Glättung der senkrechten Fältchen über der Oberlippe"
            ]
          },
          {
            heading: "Sehen die Lippen danach natürlich aus?",
            body: "Das hängt weit mehr von Dosis und Technik ab als vom Präparat. Unser Vorgehen: in der ersten Sitzung wenig Material, entlang der Kontur, die Ihre Lippen ohnehin haben, statt nach Schema — und Kontrolle nach zwei Wochen, bevor etwas ergänzt wird. Ein überfüllter Eindruck entsteht praktisch immer durch zu viel Material in zu kurzer Zeit, nicht durch die Hyaluronsäure selbst. Wenn Sie ein deutlich volleres Ergebnis möchten, bauen wir es über mehrere Sitzungen auf."
          },
          {
            heading: "Für wen ist eine Lippenunterspritzung geeignet?",
            body: "Geeignet sind in der Regel gesunde Erwachsene ab 18 Jahren. Die Eignung klären wir persönlich im Beratungsgespräch und nicht über ein Online-Formular, denn sie hängt ebenso von Ihrer Lippenanatomie und Krankengeschichte ab wie von Ihrem Wunsch.",
            points: [
              "Sie sind über 18 Jahre alt",
              "Sie sind allgemein gesund",
              "Sie haben realistische Erwartungen an ein vorübergehendes Gel",
              "Sie haben keine akute Infektion und keinen Herpes an oder nahe den Lippen",
              "Sie sind nicht schwanger und stillen nicht"
            ]
          },
          {
            heading: "Wann ist eine Lippenunterspritzung nicht sinnvoll?",
            body: "Wir behandeln nicht oder verschieben, wenn das Risiko nicht vertretbar ist. Das gehört zu einem ärztlichen Gespräch dazu und heißt in vielen Fällen nur, dass die Behandlung später stattfindet.",
            points: [
              "Akuter Lippenherpes, Infektion oder entzündete Haut an der Einstichstelle",
              "Schwangerschaft und Stillzeit",
              "Bekannte Allergie gegen Hyaluronsäurepräparate oder gegen Lidocain",
              "Bestimmte Autoimmunerkrankungen oder ein akuter Schub",
              "Gerinnungsstörungen oder blutverdünnende Medikamente, die nicht sicher pausiert werden können",
              "Erwartungen, die sich mit einem temporären Filler nicht sicher erfüllen lassen"
            ]
          },
          {
            heading: "Risiken und mögliche Nebenwirkungen",
            body: "Jede Injektionsbehandlung hat Risiken, auch die Lippenunterspritzung. Schwellung, Druckempfindlichkeit und kleine Blutergüsse sind zu erwarten und klingen innerhalb weniger Tage ab. Seltener sind Knötchen oder Unebenheiten, die sich oft massieren oder auflösen lassen, sowie Infektionen. Das schwerwiegendste Risiko ist der Gefäßverschluss, bei dem Filler in ein Blutgefäß gelangt oder es komprimiert. Er ist selten — und genau deshalb sollte nur behandeln, wer in Gesichtsanatomie geschult ist und Hyaluronidase vor Ort vorhält. Alle Risiken stehen in der Aufklärung, die Sie vor der Behandlung lesen und unterschreiben."
          },
          {
            heading: "Nachsorge nach der Lippenunterspritzung",
            body: "Die Nachsorge ist unkompliziert, die ersten 24 Stunden sind aber entscheidend. Kurzes Kühlen begrenzt die Schwellung.",
            points: [
              "Die Einstichstellen etwa 12 Stunden in Ruhe lassen, bevor Lippenprodukte aufgetragen werden",
              "24 Stunden auf anstrengenden Sport, Sauna und Solarium verzichten",
              "24 Stunden keinen Alkohol, da er Schwellung und Blutergüsse verstärkt",
              "In der ersten Nacht mit leicht erhöhtem Kopf schlafen",
              "Bei starken oder zunehmenden Schmerzen, Abblassen der Haut oder ungewöhnlicher Verfärbung sofort die Klinik kontaktieren"
            ]
          },
          {
            heading: "Wann sehe ich das Ergebnis?",
            body: "Volumen sehen Sie sofort — aber das ist noch nicht Ihr Ergebnis. Die Schwellung erreicht ihren Höhepunkt in den ersten 24 bis 72 Stunden und lässt die Lippen deutlich größer und ungleichmäßiger wirken, als sie werden. Die endgültige Form zeigt sich nach etwa zwei Wochen. Genau deshalb liegt der Kontrolltermin dort und nicht früher: Wer vorher beurteilt, beurteilt die Schwellung."
          },
          {
            heading: "Wie lange hält eine Lippenunterspritzung?",
            body: "In der Regel etwa 8 bis 12 Monate, mit deutlichen individuellen Unterschieden. Die Lippen gehören zu den beweglichsten Bereichen des Gesichts, daher wird Filler dort schneller abgebaut als am Knochen von Wange oder Kiefer. Ein schneller Stoffwechsel, Rauchen und häufiger intensiver Sport verkürzen die Haltbarkeit. Die meisten Gäste kommen alle 9 bis 12 Monate; wir beurteilen die Lippen bei jedem Termin neu, statt nach festem Zeitplan zu arbeiten."
          }
        ],
        process: {
          heading: "Wie läuft die Lippenunterspritzung in der AS Clinic ab?",
          steps: [
            { heading: "Beratungsgespräch", body: "Ein kostenloses, unverbindliches Gespräch von etwa 30 Minuten. Wir besprechen Ihren Wunsch, prüfen, was Ihre Lippenanatomie realistisch trägt, und gehen Risiken und Aufklärung durch. In diesem Termin wird nichts injiziert, außer Sie möchten es ausdrücklich." },
            { heading: "Befund und Planung", body: "Wir beurteilen die Lippen in Ruhe sowie beim Sprechen und Lächeln, halten vorhandene Asymmetrien fest und fotografieren den Ausgangsbefund. Der Plan legt fest, wo wie viel Material gesetzt wird — meist 0,5 bis 1 ml in der ersten Sitzung." },
            { heading: "Vorbereitung", body: "Die Betäubungscreme wirkt etwa 20 Minuten ein. Anschließend werden die Lippen gereinigt und desinfiziert." },
            { heading: "Behandlung", body: "Der Filler wird mit feiner Nadel oder Kanüle in kleinen Schritten gesetzt, über etwa 10 bis 20 Minuten. Da die meisten Filler Lidocain enthalten, wird der Bereich während der Behandlung zunehmend taub. Danach wird gekühlt." },
            { heading: "Kontrolle nach zwei Wochen", body: "Sie kommen wieder, sobald die Schwellung vollständig abgeklungen ist. Wir vergleichen mit den Ausgangsfotos und ergänzen kostenfrei eine kleine Menge, wenn der vereinbarte Plan es vorsieht." }
          ]
        },
        local: {
          heading: "Lippen aufspritzen in Berlin — AS Clinic am Kurfürstendamm",
          body: "Die AS Clinic liegt am Kurfürstendamm in Berlin-Charlottenburg. Die Lippenunterspritzung führt eine Ärztin oder eine in Gesichtsanatomie geschulte Fachpflegekraft in der Klinik durch. Beratung ist auf Deutsch, Englisch, Spanisch, Russisch, Persisch und Arabisch möglich. Das Erstgespräch ist kostenlos und verpflichtet zu nichts."
        },
        why: {
          heading: "Warum die AS Clinic für die Lippenunterspritzung in Berlin?",
          points: [
            { heading: "Zurückhaltende erste Dosis", body: "Die erste Sitzung ist auf eine kleine Menge begrenzt und wird kontrolliert, bevor mehr folgt. Nachlegen ist deutlich einfacher, als eine überfüllte Lippe zu korrigieren." },
            { heading: "Kontrolltermin gehört dazu", body: "Die Kontrolle nach zwei Wochen ist Teil der Behandlung und kein Zusatzverkauf. Eine im Plan vereinbarte Nachbesserung ist enthalten." },
            { heading: "CE-zertifiziertes Präparat, sichtbar für Sie", body: "Wir verwenden quervernetzte Hyaluronsäure CE-zertifizierter europäischer Hersteller. Sie sehen die versiegelte Packung und das Chargenetikett, bevor sie geöffnet wird." },
            { heading: "Medizinisch besetzt", body: "In dieser Klinik injizieren ausschließlich Ärztinnen, Ärzte und Fachpflegekräfte mit Ausbildung in Gesichtsanatomie — Hyaluronidase ist vor Ort verfügbar." },
            { heading: "Behandlung in Ihrer Sprache", body: "Beratung und Nachsorge in sechs Sprachen, damit bei Risiken und Aufklärung nichts an der Sprache scheitert." },
            { heading: "Bewusst umkehrbar", body: "Weil mit Hyaluronsäure gearbeitet wird, lässt sich ein unbefriedigendes Ergebnis auflösen, statt es aussitzen zu müssen." }
          ]
        },
        faqHeading: "Lippen aufspritzen in Berlin — häufige Fragen",
        faqs: [
          { q: "Was kostet eine Lippenunterspritzung in der AS Clinic?", a: "Die Kosten besprechen wir im kostenlosen Erstgespräch, sobald feststeht, wie viel Material Ihr Plan tatsächlich benötigt. Ausschlaggebend ist vor allem die verwendete Menge — in einer ersten Sitzung meist 0,5 bis 1 ml. Den Betrag bestätigen wir Ihnen, bevor behandelt wird. Das Beratungsgespräch selbst ist kostenfrei und unverbindlich." },
          { q: "Tut die Lippenunterspritzung weh?", a: "Die meisten empfinden sie als unangenehm, nicht als schmerzhaft. Etwa 20 Minuten vorher wirkt eine Betäubungscreme, und die meisten Filler enthalten Lidocain, sodass die Lippen währenddessen zunehmend taub werden. Gäste bewerten das Empfinden typischerweise mit 2 bis 4 von 10. Kühlen im Anschluss hilft gegen Empfindlichkeit und Schwellung." },
          { q: "Wie lange hält das Ergebnis?", a: "Typischerweise 8 bis 12 Monate, individuell verschieden. Die Lippen sind ständig in Bewegung, daher wird Filler dort schneller abgebaut als an anderen Stellen des Gesichts. Stoffwechsel, Rauchen und intensiver Sport verkürzen die Haltbarkeit, zurückhaltende Dosierung und gute Nachsorge verlängern sie." },
          { q: "Wie viel Filler brauche ich?", a: "In der ersten Sitzung meist 0,5 bis 1 ml. Wir beginnen bewusst am unteren Ende und kontrollieren nach zwei Wochen, denn nachlegen ist unkompliziert, eine überfüllte Lippe zu korrigieren nicht. Für ein volleres Ergebnis bauen wir über mehrere Sitzungen auf." },
          { q: "Wie lange bleiben die Lippen geschwollen?", a: "Die Schwellung erreicht ihren Höhepunkt in den ersten 24 bis 72 Stunden und klingt überwiegend innerhalb von drei bis fünf Tagen ab. Leichte Unebenheiten können bis zu zwei Wochen bestehen. Planen Sie Fotos, Anlässe oder Dreharbeiten frühestens eine Woche nach dem Termin." },
          { q: "Kann man Lippenfiller wieder auflösen?", a: "Ja. Hyaluronsäure lässt sich mit dem Enzym Hyaluronidase abbauen, in der Regel innerhalb eines Tages nach dem Auflösungstermin. Das ist einer der wesentlichen Sicherheitsvorteile gegenüber permanenten Fillern und zugleich die Notfallbehandlung bei einer Gefäßkomplikation." },
          { q: "Wann darf ich nach der Behandlung wieder Sport machen?", a: "Verzichten Sie 24 Stunden auf anstrengenden Sport. Erhöhter Blutdruck und Körpertemperatur verstärken Schwellung und Blutergüsse. Spazierengehen und normaler Alltag sind sofort möglich." },
          { q: "Kann ich mich behandeln lassen, wenn ich zu Lippenherpes neige?", a: "Ja, aber nicht während eines akuten Ausbruchs — bitte sprechen Sie uns im Beratungsgespräch darauf an. Eine Injektion in die Lippen kann bei entsprechender Veranlagung einen Ausbruch auslösen, daher kann Ihre Ärztin vorbeugend ein antivirales Medikament empfehlen." },
          { q: "Ist eine Lippenunterspritzung sicher?", a: "Die Lippenunterspritzung mit Hyaluronsäure ist ein etabliertes Verfahren mit guter Sicherheitsbilanz, wenn medizinisch geschultes Personal behandelt — risikofrei ist sie nicht. Schwellung und Blutergüsse sind häufig, Knötchen und Infektionen selten, ein Gefäßverschluss ist sehr selten, aber ernst. Korrekte Technik, korrekte Tiefe und verfügbare Hyaluronidase minimieren das Risiko." },
          { q: "Wer führt die Behandlung durch?", a: "Eine Ärztin, ein Arzt oder eine Fachpflegekraft mit Ausbildung in Gesichtsanatomie. In der AS Clinic injiziert niemand ohne hinterlegte medizinische Zulassung. Die behandelnde Person lernen Sie bereits im Beratungsgespräch kennen, bevor Sie sich festlegen." },
          { q: "Lässt sich die Behandlung mit anderen kombinieren?", a: "Häufig ja. Die Lippenunterspritzung wird oft zusammen mit einer Behandlung der unteren Gesichtshälfte geplant. Manche Kombinationen verteilen wir bewusst auf getrennte Termine, damit die Schwellung der einen die Beurteilung der anderen nicht erschwert." },
          { q: "Was passiert, wenn mir das Ergebnis nicht gefällt?", a: "Sprechen Sie es beim Kontrolltermin nach zwei Wochen an. Entspricht die Form nicht dem Vereinbarten, kommen eine kleine Korrektur oder das Auflösen mit Hyaluronidase und ein Neubeginn infrage. Da die Behandlung vorübergehend und umkehrbar ist, muss ein unerwünschtes Ergebnis nicht bleiben." }
        ],
        relatedHeading: "Passende Behandlungen",
        related: [
          { slug: "cheek-filler", blurb: "Stellt Volumen im Mittelgesicht wieder her und stützt so die untere Gesichtshälfte." },
          { slug: "jawline-filler", blurb: "Definiert Kieferkante und -winkel für ein klareres Profil." },
          { slug: "fillart", blurb: "Geschichtete Mikro-Boli, die das ganze Gesicht weichzeichnen statt ein einzelnes Merkmal." },
          { slug: "skin-booster", blurb: "Feuchtigkeit in der Dermis — verändert die Hautqualität, nicht die Form." }
        ],
        ctaHeading: "Beratungstermin für die Lippenunterspritzung in Berlin",
        ctaBody: "Ein kostenloses, unverbindliches Gespräch von 30 Minuten in der AS Clinic am Kurfürstendamm. Wir beurteilen Ihre Lippen, sagen Ihnen, was realistisch ist, und beantworten Ihre Fragen — ohne Druck, einen Termin zu buchen."
      },
      title: "Lippenfiller",
      metaTitle: "Lippenfiller in Berlin — natürliche Ergebnisse | AS Clinic",
      metaDescription: "Ärztlich geführte Lippenunterspritzung in der AS Clinic Berlin: CE-zertifizierte Hyaluronsäure, dosiert auf Ihre natürliche Lippenform. Kostenlose Beratung, Ergebnis hält 8–12 Monate.",
      heroKicker: "Injektionen · Lippenfiller",
      heroLead: "Volumen und Kontur in kleinen, reversiblen Schritten aufgebaut — damit die Form nach Ihnen aussieht und nicht nach Behandlung.",
      imageAlt: "Nahaufnahme einer Lippenunterspritzung in der AS Clinic",
      chip: "30–45 Min. · Lokale Betäubung",
      sections: [
        { heading: "Was es ist", body: "Quervernetztes Hyaluronsäure-Gel, das in Lippenrand und Lippenkörper injiziert wird, um Volumen, Kontur oder Symmetrie zu geben. Wir verwenden CE-zertifizierte Präparate europäischer Hersteller, dosiert von Ärztin oder Fachpflegekraft nach Ihren natürlichen Lippenproportionen — nicht nach Schema." },
        { heading: "Für wen es geeignet ist", body: "Die meisten Erwachsenen, die mehr Volumen, eine klarere Kontur, bessere Symmetrie oder weichere Lippenfältchen wünschen, sind geeignet — sofern sie über 18 sind, nicht schwanger sind oder stillen und keine aktive Herpesinfektion oder Hautinfektion an der Einstichstelle haben." },
        { heading: "Ihr Behandlungstermin", body: "Wir beginnen mit einer kurzen Beratung und Fotos, danach wirkt eine Oberflächenanästhesie etwa 20 Minuten. Die Injektion mit feiner Nadel oder Kanüle dauert 10–20 Minuten, anschließend wird gekühlt. Die meisten Termine dauern insgesamt rund 45 Minuten." },
        { heading: "Ergebnis & Heilung", body: "Eine Schwellung über 24–72 Stunden ist normal und lässt die Lippen vorübergehend voller wirken als das Endergebnis. Die endgültige Form zeigt sich nach etwa zwei Wochen — dann kontrollieren wir und bessern kostenfrei nach, wenn der vereinbarte Plan es vorsieht." }
      ],
      faqs: [
        { q: "Bin ich für Lippenfiller geeignet?", a: "Die meisten Erwachsenen über 18 sind geeignet, sofern sie nicht schwanger sind oder stillen und keine aktive Herpes- oder Hautinfektion an oder nahe den Lippen haben. Die Eignung klären wir vor jeder Injektion im Beratungsgespräch." },
        { q: "Welchen Filler verwenden Sie?", a: "Quervernetzte Hyaluronsäure CE-zertifizierter europäischer Hersteller — dieselbe Produktfamilie wie bei Wangen- und Kieferfiller, in der Konsistenz für die Lippe angepasst." },
        { q: "Wie viel Filler brauche ich für ein natürliches Ergebnis?", a: "Die meisten Erstbehandlungen verwenden 0,5–1 ml. Wir beginnen zurückhaltend und kontrollieren nach zwei Wochen, denn nachlegen ist einfacher als eine überfüllte Lippe korrigieren." },
        { q: "Tut es weh?", a: "Eine Betäubungscreme wirkt etwa 20 Minuten vorher, und die meisten Filler enthalten bereits Lidocain. Unsere Gäste bewerten das Empfinden meist mit 2–4 von 10." },
        { q: "Wie lange dauert der Termin?", a: "Rund 45 Minuten inklusive Beratung, Einwirkzeit der Betäubung und der Injektion selbst." },
        { q: "Sehen meine Lippen überfüllt oder künstlich aus?", a: "Nicht mit unserem Protokoll — kleine Mengen in der Erstsitzung, entlang Ihrer natürlichen Lippenform injiziert und kontrolliert, bevor weiteres Material folgt." },
        { q: "Wann sehe ich das Endergebnis?", a: "Volumen sehen Sie sofort, doch die Schwellung vergrößert die Form für 24–72 Stunden. Das echte Ergebnis zeigt sich nach etwa zwei Wochen, wenn die Schwellung vollständig abgeklungen ist." },
        { q: "Wie lange hält Lippenfiller?", a: "Typischerweise 8–12 Monate. Stoffwechsel, Rauchen und intensiver Sport verkürzen die Haltbarkeit; zurückhaltende Dosierung und gute Nachsorge verlängern sie." },
        { q: "Kann Lippenfiller Asymmetrien ausgleichen?", a: "Ja — die Dosis lässt sich seitenweise anpassen, um eine natürlich asymmetrische Lippe auszugleichen. Perfekte Symmetrie ist dabei weder realistisch noch nötig." },
        { q: "Welche Nebenwirkungen gibt es?", a: "Vorübergehende Schwellung, Druckempfindlichkeit und kleine Blutergüsse sind häufig. Knötchen, Infektionen und Gefäßkomplikationen sind selten und werden in der Aufklärung vor der Behandlung besprochen." },
        { q: "Wie lange ist die Ausfallzeit?", a: "Die meisten Gäste gehen noch am selben Tag ihrem Alltag nach. Sichtbare Schwellung oder Blutergüsse können 2–5 Tage anhalten — planen Sie Fotos oder Anlässe frühestens eine Woche später." },
        { q: "Darf ich danach Lippenstift benutzen?", a: "Warten Sie mindestens 12 Stunden, bis sich die Einstichstellen geschlossen haben. Danach sind Lippenprodukte unbedenklich, sofern kein sichtbarer Bluterguss erst abheilen soll." },
        { q: "Wann darf ich wieder küssen oder Sport treiben?", a: "Zärtlichkeit ist unbedenklich, sobald die Betäubung nachlässt — meist nach ein bis zwei Stunden. Auf anstrengenden Sport sollten Sie 24 Stunden verzichten, um Schwellung und Blutergüsse zu begrenzen." },
        { q: "Kann Lippenfiller wieder aufgelöst werden?", a: "Ja — Hyaluronsäure-Filler lässt sich mit Hyaluronidase auflösen, in der Regel innerhalb eines Tages nach dem Auflösungstermin, falls Ihnen die Form nicht gefällt." },
        { q: "Ist Lippenfiller beim ersten Mal sicher?", a: "Ja, bei zurückhaltender Dosierung. Wir behandeln Ihre erste Sitzung als Ausgangspunkt, nicht als Endform, und passen schrittweise an, was zu Ihrem Gesicht passt." },
        { q: "Wie vermeiden Sie Knötchen oder einen bläulichen Schimmer?", a: "Durch Injektion in der für das Produkt korrekten Tiefe und schichtweises Vorgehen in kleinen Mengen statt großer Depots — beides sind die häufigsten Ursachen dieser Probleme." },
        { q: "Kann ich Lippenfiller mit anderen Behandlungen kombinieren?", a: "Oft ja — zum Beispiel gemeinsam mit einem Filler-Plan für die untere Gesichtshälfte. Manche Kombinationen verteilen wir jedoch auf getrennte Termine, um Sicherheit und Schwellungsbeurteilung zu erleichtern." },
        { q: "Wie oft sollte ich zur Auffrischung kommen?", a: "Die meisten Gäste kommen alle 9–12 Monate, wenn der Filler abgebaut ist. Wir beurteilen Ihre Lippen bei jeder Kontrolle neu, statt nach festem Zeitplan zu arbeiten." },
        { q: "Was spricht gegen eine Behandlung?", a: "Aktive Herpesbläschen oder eine Hautinfektion an der Einstichstelle, Schwangerschaft oder Stillzeit, eine bekannte Allergie gegen Hyaluronsäureprodukte — oder Erwartungen, die wir nicht sicher erfüllen können." },
        { q: "Bieten Sie bestimmte Techniken wie die \"Russian Lip\" an?", a: "Ja — eine flachere Volumenverteilung mit klarerer Kontur und mehr Höhe in der Lippenmitte ist möglich und wird in der Beratung besprochen und geplant." }
      ]
    },
    es: {
      title: "Relleno de labios",
      metaTitle: "Relleno de labios en Berlín — resultados naturales | AS Clinic",
      metaDescription: "Relleno de labios dirigido por médicos en AS Clinic, Berlín: ácido hialurónico con marcado CE, dosificado según la forma natural de tus labios. Consulta gratuita, dura 8–12 meses.",
      heroKicker: "Inyectables · Relleno de labios",
      heroLead: "Volumen y definición construidos en pasos pequeños y reversibles, para que la forma se lea como tuya y no como un tratamiento.",
      imageAlt: "Primer plano de una infiltración de relleno de labios en AS Clinic",
      chip: "30–45 min · Anestesia local",
      sections: [
        { heading: "Qué es", body: "Gel de ácido hialurónico reticulado, inyectado en el borde y el cuerpo del labio para aportar volumen, definición o simetría. Usamos producto con marcado CE de fabricantes europeos, dosificado por un médico o enfermera especialista según tus proporciones naturales, no según una plantilla fija." },
        { heading: "Para quién es", body: "La mayoría de adultos que buscan más volumen, un borde más definido, mejor simetría o suavizar el código de barras son candidatos — siempre que sean mayores de 18 años, no estén embarazadas ni en lactancia y no tengan herpes activo ni infección cutánea en la zona de inyección." },
        { heading: "Cómo es tu cita", body: "Empezamos con una breve consulta y fotografías, y aplicamos anestesia tópica durante unos 20 minutos. La infiltración con aguja fina o cánula dura 10–20 minutos, seguida de frío local. La mayoría de citas duran unos 45 minutos en total." },
        { heading: "Resultados y recuperación", body: "La inflamación es normal durante 24–72 horas y puede hacer que los labios parezcan más grandes que el resultado final. La forma real se asienta hacia las dos semanas, cuando revisamos y ofrecemos un pequeño retoque sin coste si el plan acordado lo requiere." }
      ],
      faqs: [
        { q: "¿Soy buen candidato para relleno de labios?", a: "La mayoría de adultos mayores de 18 años lo son si no están embarazadas ni en lactancia y no tienen herpes activo ni infección cutánea en los labios o cerca de ellos. Confirmamos la idoneidad en la consulta antes de cualquier inyección." },
        { q: "¿Qué tipo de relleno utilizáis?", a: "Ácido hialurónico reticulado de fabricantes europeos con marcado CE — la misma familia de producto que usamos en pómulos y mandíbula, con una densidad adaptada al labio." },
        { q: "¿Cuánto producto necesito para un resultado natural?", a: "La mayoría de primeras sesiones usan 0,5–1 ml. Empezamos de forma conservadora y revisamos a las dos semanas, porque es más fácil añadir un poco más que corregir un labio sobrecargado." },
        { q: "¿Duele?", a: "La anestesia tópica actúa unos 20 minutos antes y la mayoría de rellenos ya contienen lidocaína. Nuestros pacientes suelen puntuar la molestia entre 2 y 4 sobre 10." },
        { q: "¿Cuánto dura la cita?", a: "Unos 45 minutos incluyendo consulta, tiempo de anestesia y la propia infiltración." },
        { q: "¿Se me verán los labios sobrecargados o artificiales?", a: "No con nuestro protocolo: volúmenes pequeños en la primera sesión, inyectados siguiendo tu forma natural y revisados antes de añadir más producto." },
        { q: "¿Cuándo veré el resultado final?", a: "Verás volumen de inmediato, pero la inflamación aumenta la forma durante 24–72 horas. El resultado real se aprecia hacia las dos semanas, cuando la inflamación desaparece por completo." },
        { q: "¿Cuánto dura el relleno de labios?", a: "Normalmente entre 8 y 12 meses. El metabolismo, el tabaco y la actividad física intensa lo acortan; una dosificación conservadora y buenos cuidados lo alargan." },
        { q: "¿Puede corregir una asimetría?", a: "Sí — la dosis se ajusta lado a lado para compensar un labio naturalmente asimétrico, aunque la simetría perfecta no es un objetivo realista ni necesario." },
        { q: "¿Cuáles son los efectos secundarios?", a: "La inflamación temporal, la sensibilidad y pequeños hematomas son frecuentes. Los nódulos, la infección y las complicaciones vasculares son raros y se explican en el consentimiento que revisas en consulta." },
        { q: "¿Cuál es el tiempo de recuperación?", a: "La mayoría retoma su actividad normal el mismo día. La inflamación o los hematomas visibles pueden durar de 2 a 5 días, así que planifica fotos o eventos al menos una semana después." },
        { q: "¿Puedo usar pintalabios después?", a: "Espera al menos 12 horas a que se cierren los puntos de inyección; después los productos labiales son seguros, salvo que prefieras dejar cicatrizar un hematoma visible." },
        { q: "¿Cuándo puedo besar o hacer ejercicio?", a: "Los besos suaves son seguros en cuanto pasa la anestesia, normalmente en un par de horas. Pedimos evitar ejercicio intenso durante 24 horas para limitar inflamación y hematomas." },
        { q: "¿Se puede disolver si no me gusta?", a: "Sí — el relleno de ácido hialurónico se disuelve con hialuronidasa, normalmente en un día desde la cita de disolución, si no estás conforme con la forma." },
        { q: "¿Es seguro si es mi primera vez?", a: "Sí, con una dosificación conservadora. Tratamos tu primera sesión como punto de partida, no como forma definitiva, para ajustar gradualmente lo que favorece a tu rostro." },
        { q: "¿Cómo evitáis nódulos o un tono azulado bajo la piel?", a: "Inyectando a la profundidad correcta para cada producto y por capas en pequeños incrementos en lugar de grandes bolos: son las dos causas más habituales de ambos problemas." },
        { q: "¿Se puede combinar con otros tratamientos el mismo día?", a: "A menudo sí — por ejemplo junto a un plan de relleno del tercio inferior — aunque algunas combinaciones las repartimos en citas distintas por seguridad y para valorar mejor la inflamación." },
        { q: "¿Cada cuánto debo retocarlo?", a: "La mayoría vuelve cada 9–12 meses, a medida que el relleno se metaboliza. Valoramos tus labios en cada revisión en lugar de seguir un calendario fijo." },
        { q: "¿Qué descartaría el tratamiento?", a: "Herpes activo o infección cutánea en la zona de inyección, embarazo o lactancia, alergia conocida a productos de ácido hialurónico, o expectativas que no podamos cumplir con seguridad." },
        { q: "¿Hacéis técnicas concretas como el \"labio ruso\"?", a: "Sí — una distribución de volumen más plana con borde definido y más altura central puede solicitarse, y se comenta y planifica en tu consulta." }
      ]
    },
    ru: {
      title: "Филлер губ",
      metaTitle: "Филлер губ в Берлине — естественный результат | AS Clinic",
      metaDescription: "Увеличение губ под контролем врача в AS Clinic, Берлин: гиалуроновая кислота с маркировкой CE, дозировка под вашу естественную форму губ. Бесплатная консультация, результат 8–12 месяцев.",
      heroKicker: "Инъекции · Филлер губ",
      heroLead: "Объём и контур, выстроенные малыми обратимыми шагами — чтобы форма читалась как ваша, а не как процедура.",
      imageAlt: "Крупный план введения филлера в губы в клинике AS Clinic",
      chip: "30–45 мин · Местная анестезия",
      sections: [
        { heading: "Что это", body: "Гель сшитой гиалуроновой кислоты, вводимый в контур и тело губы для объёма, чёткости или симметрии. Мы используем препараты с маркировкой CE от европейских производителей, дозировку подбирает врач или специализированная медсестра под ваши естественные пропорции, а не по шаблону." },
        { heading: "Кому подходит", body: "Большинству взрослых, которым нужен объём, более чёткий контур, симметрия или смягчение вертикальных морщин — при условии, что вам исполнилось 18, вы не беременны и не кормите грудью, а в зоне инъекции нет активного герпеса или инфекции кожи." },
        { heading: "Как проходит приём", body: "Начинаем с короткой консультации и фотографий, затем наносим аппликационную анестезию примерно на 20 минут. Введение тонкой иглой или канюлей занимает 10–20 минут, после чего прикладывается холод. Приём в целом длится около 45 минут." },
        { heading: "Результат и восстановление", body: "Отёк в течение 24–72 часов — норма, губы временно выглядят объёмнее итогового результата. Настоящая форма проявляется примерно через две недели: тогда мы проводим осмотр и при необходимости бесплатно добавляем небольшую коррекцию по согласованному плану." }
      ],
      faqs: [
        { q: "Подхожу ли я для филлера губ?", a: "Подходит большинство взрослых старше 18 лет, если нет беременности и грудного вскармливания, активного герпеса или инфекции кожи на губах и рядом с ними. Пригодность мы подтверждаем на консультации до любой инъекции." },
        { q: "Какие филлеры вы используете?", a: "Сшитую гиалуроновую кислоту европейских производителей с маркировкой CE — то же семейство препаратов, что для скул и линии челюсти, с плотностью, подобранной для губ." },
        { q: "Сколько препарата нужно для естественного результата?", a: "В первой процедуре обычно 0,5–1 мл. Мы начинаем сдержанно и оцениваем результат через две недели: добавить немного проще, чем исправлять перекачанную губу." },
        { q: "Это больно?", a: "Аппликационная анестезия действует около 20 минут, а большинство филлеров уже содержит лидокаин. Гости обычно оценивают ощущения на 2–4 из 10." },
        { q: "Сколько длится приём?", a: "Около 45 минут вместе с консультацией, временем анестезии и самой инъекцией." },
        { q: "Не будут ли губы выглядеть перекачанными?", a: "Не по нашему протоколу: малый объём в первой сессии, введение вдоль вашей естественной формы и обязательный осмотр до добавления препарата." },
        { q: "Когда виден финальный результат?", a: "Объём заметен сразу, но отёк увеличивает форму на 24–72 часа. Истинный результат виден примерно через две недели, когда отёк полностью спадает." },
        { q: "Сколько держится филлер губ?", a: "Обычно 8–12 месяцев. Обмен веществ, курение и высокая физическая нагрузка сокращают срок; сдержанная дозировка и хороший уход продлевают его." },
        { q: "Можно ли исправить асимметрию?", a: "Да — дозировку можно менять по сторонам, чтобы выровнять природную асимметрию, хотя идеальная симметрия не является реалистичной или необходимой целью." },
        { q: "Какие бывают побочные эффекты?", a: "Часто встречаются временный отёк, чувствительность и небольшие синяки. Узелки, инфекция и сосудистые осложнения редки и описаны в информированном согласии, которое вы читаете на консультации." },
        { q: "Какой период восстановления?", a: "Большинство возвращается к обычным делам в тот же день. Заметный отёк или синяки держатся 2–5 дней, поэтому съёмки и мероприятия планируйте не раньше чем через неделю." },
        { q: "Можно ли пользоваться помадой после?", a: "Подождите минимум 12 часов, пока закроются места вколов, затем обычные средства для губ безопасны — если только вы не предпочтёте сначала дать зажить синяку." },
        { q: "Когда можно целоваться и тренироваться?", a: "Лёгкие поцелуи допустимы, как только пройдёт онемение — обычно через пару часов. Интенсивных тренировок стоит избегать сутки, чтобы уменьшить отёк и синяки." },
        { q: "Можно ли растворить филлер, если не понравится?", a: "Да — филлер на гиалуроновой кислоте растворяется гиалуронидазой, обычно в течение суток после процедуры растворения, если форма вас не устраивает." },
        { q: "Безопасно ли это в первый раз?", a: "Да, при сдержанной дозировке. Первую сессию мы рассматриваем как отправную точку, а не как финальную форму, и подстраиваемся под ваше лицо постепенно." },
        { q: "Как вы избегаете узелков и синеватого оттенка кожи?", a: "Вводим препарат на правильной для него глубине и наслаиваем малыми порциями вместо крупных депо — именно это чаще всего и вызывает обе проблемы." },
        { q: "Можно ли совместить с другими процедурами за один визит?", a: "Часто да — например, вместе с планом филлеров нижней трети лица, — но некоторые сочетания мы разносим по разным визитам ради безопасности и удобства оценки отёка." },
        { q: "Как часто нужна коррекция?", a: "Большинство возвращается каждые 9–12 месяцев по мере рассасывания препарата. На каждом осмотре мы оцениваем губы заново, а не работаем по жёсткому графику." },
        { q: "Что является противопоказанием?", a: "Активный герпес или инфекция кожи в зоне инъекции, беременность и грудное вскармливание, известная аллергия на препараты гиалуроновой кислоты или ожидания, которые мы не можем выполнить безопасно." },
        { q: "Делаете ли вы технику «русские губы»?", a: "Да — более плоское распределение объёма с чётким контуром и высотой по центру возможно; мы обсуждаем и планируем это на консультации." }
      ]
    },
    fa: {
      title: "فیلر لب",
      metaTitle: "فیلر لب در برلین — نتیجه طبیعی | AS Clinic",
      metaDescription: "تزریق فیلر لب زیر نظر پزشک در AS Clinic برلین: اسید هیالورونیک دارای نشان CE، با دوز متناسب با فرم طبیعی لب شما. مشاوره رایگان، ماندگاری ۸ تا ۱۲ ماه.",
      heroKicker: "تزریقات · فیلر لب",
      heroLead: "حجم و فرم که در گام‌های کوچک و برگشت‌پذیر ساخته می‌شود — تا لب شبیه خودتان باشد، نه شبیه یک عمل زیبایی.",
      imageAlt: "نمای نزدیک از تزریق فیلر لب در کلینیک AS Clinic",
      chip: "۳۰ تا ۴۵ دقیقه · بی‌حسی موضعی",
      sections: [
        { heading: "این درمان چیست", body: "ژل اسید هیالورونیک شبکه‌ای که در خط لب و بدنه لب تزریق می‌شود تا حجم، فرم یا تقارن ایجاد کند. ما از محصولات دارای نشان CE ساخت اروپا استفاده می‌کنیم و دوز آن را پزشک یا پرستار متخصص بر اساس تناسبات طبیعی لب شما تعیین می‌کند، نه بر اساس یک الگوی ثابت." },
        { heading: "مناسب چه کسانی است", body: "بیشتر بزرگسالانی که حجم بیشتر، خط لب واضح‌تر، تقارن بهتر یا کاهش چین‌های عمودی لب می‌خواهند مناسب هستند — به شرط داشتن سن بالای ۱۸ سال، نبودن در دوران بارداری یا شیردهی و نداشتن تبخال فعال یا عفونت پوستی در محل تزریق." },
        { heading: "روند جلسه درمان", body: "با یک مشاوره کوتاه و عکس‌برداری شروع می‌کنیم، سپس کرم بی‌حسی حدود ۲۰ دقیقه اثر می‌کند. تزریق با سوزن ظریف یا کانولا ۱۰ تا ۲۰ دقیقه طول می‌کشد و در پایان کمپرس سرد گذاشته می‌شود. بیشتر جلسات در مجموع حدود ۴۵ دقیقه است." },
        { heading: "نتیجه و دوره بهبود", body: "تورم طی ۲۴ تا ۷۲ ساعت طبیعی است و ممکن است لب‌ها را موقتاً بزرگ‌تر از نتیجه نهایی نشان دهد. فرم واقعی حدود دو هفته بعد تثبیت می‌شود؛ در همان زمان معاینه می‌کنیم و در صورت نیاز طبق برنامه توافق‌شده، اصلاح جزئی را بدون هزینه انجام می‌دهیم." }
      ],
      faqs: [
        { q: "آیا من گزینه مناسبی برای فیلر لب هستم؟", a: "بیشتر بزرگسالان بالای ۱۸ سال مناسب هستند، به شرط آنکه باردار یا شیرده نباشند و تبخال فعال یا عفونت پوستی روی لب یا نزدیک آن نداشته باشند. تناسب درمان را پیش از هر تزریق در جلسه مشاوره تأیید می‌کنیم." },
        { q: "چه نوع فیلری استفاده می‌کنید؟", a: "اسید هیالورونیک شبکه‌ای از تولیدکنندگان اروپایی دارای نشان CE — همان خانواده محصولی که برای گونه و خط فک استفاده می‌شود، با غلظتی متناسب با بافت لب." },
        { q: "برای نتیجه طبیعی چقدر فیلر لازم است؟", a: "بیشتر جلسات اول ۰٫۵ تا ۱ سی‌سی مصرف می‌کنند. محافظه‌کارانه شروع می‌کنیم و پس از دو هفته بررسی می‌کنیم، چون افزودن کمی بیشتر ساده‌تر از اصلاح لب پرحجم است." },
        { q: "آیا درد دارد؟", a: "کرم بی‌حسی حدود ۲۰ دقیقه پیش از تزریق روی لب می‌ماند و بیشتر فیلرها خودشان لیدوکائین دارند. مراجعان معمولاً میزان ناراحتی را ۲ تا ۴ از ۱۰ ارزیابی می‌کنند." },
        { q: "جلسه چقدر طول می‌کشد؟", a: "حدود ۴۵ دقیقه شامل مشاوره، زمان اثر بی‌حسی و خود تزریق." },
        { q: "آیا لب‌هایم پرحجم یا غیرطبیعی می‌شود؟", a: "با پروتکل ما خیر — حجم کم در جلسه اول، تزریق در امتداد فرم طبیعی لب شما و بررسی نتیجه پیش از افزودن هر مقدار بیشتر." },
        { q: "نتیجه نهایی کی دیده می‌شود؟", a: "حجم را بلافاصله می‌بینید، اما تورم فرم را ۲۴ تا ۷۲ ساعت بزرگ‌تر نشان می‌دهد. نتیجه واقعی حدود دو هفته بعد و پس از فروکش کامل تورم مشخص می‌شود." },
        { q: "ماندگاری فیلر لب چقدر است؟", a: "معمولاً ۸ تا ۱۲ ماه. سوخت‌وساز بدن، سیگار و فعالیت بدنی شدید آن را کوتاه‌تر و دوز محافظه‌کارانه و مراقبت خوب آن را طولانی‌تر می‌کند." },
        { q: "آیا فیلر عدم تقارن را اصلاح می‌کند؟", a: "بله — دوز را می‌توان در هر سمت جداگانه تنظیم کرد تا لب نامتقارن متعادل شود، هرچند تقارن کامل نه واقع‌بینانه است و نه ضروری." },
        { q: "عوارض جانبی چیست؟", a: "تورم موقت، حساسیت و کبودی‌های کوچک شایع‌اند. توده، عفونت و عوارض عروقی نادر هستند و در رضایت‌نامه‌ای که در مشاوره می‌خوانید توضیح داده می‌شوند." },
        { q: "دوره نقاهت چقدر است؟", a: "بیشتر مراجعان همان روز به فعالیت عادی برمی‌گردند. تورم یا کبودی قابل مشاهده می‌تواند ۲ تا ۵ روز بماند، پس عکاسی یا مراسم را دست‌کم یک هفته بعد برنامه‌ریزی کنید." },
        { q: "بعد از تزریق می‌توانم رژ لب بزنم؟", a: "دست‌کم ۱۲ ساعت صبر کنید تا محل‌های تزریق بسته شوند؛ پس از آن محصولات لب مشکلی ندارند، مگر کبودی مشخصی داشته باشید که ترجیح می‌دهید ابتدا بهبود یابد." },
        { q: "کی می‌توانم ببوسم یا ورزش کنم؟", a: "بوسه ملایم پس از رفع بی‌حسی، معمولاً طی یکی دو ساعت، مانعی ندارد. از ورزش سنگین تا ۲۴ ساعت پرهیز کنید تا تورم و کبودی کمتر شود." },
        { q: "اگر نتیجه را نپسندم می‌توان فیلر را حل کرد؟", a: "بله — فیلر اسید هیالورونیک با آنزیم هیالورونیداز حل می‌شود، معمولاً ظرف یک روز پس از جلسه تخلیه، اگر از فرم راضی نباشید." },
        { q: "آیا برای بار اول ایمن است؟", a: "بله، با دوز محافظه‌کارانه. جلسه اول را نقطه شروع می‌دانیم نه فرم نهایی، تا به‌تدریج به چیزی برسیم که با چهره شما هماهنگ است." },
        { q: "چطور از ایجاد توده یا رنگ آبی‌خاکستری زیر پوست جلوگیری می‌کنید؟", a: "با تزریق در عمق درست برای هر محصول و لایه‌لایه در مقادیر کم به‌جای دپوی بزرگ — که شایع‌ترین علت هر دو مشکل است." },
        { q: "آیا می‌توان آن را با درمان‌های دیگر در یک جلسه ترکیب کرد؟", a: "اغلب بله — مثلاً همراه با برنامه فیلر یک‌سوم پایین صورت — هرچند برخی ترکیب‌ها را برای ایمنی و ارزیابی بهتر تورم به جلسات جداگانه تقسیم می‌کنیم." },
        { q: "هر چند وقت باید ترمیم انجام دهم؟", a: "بیشتر مراجعان هر ۹ تا ۱۲ ماه یک‌بار مراجعه می‌کنند، وقتی فیلر جذب شده است. در هر ویزیت لب‌ها را دوباره ارزیابی می‌کنیم و برنامه ثابتی تحمیل نمی‌کنیم." },
        { q: "چه چیزی مانع انجام درمان می‌شود؟", a: "تبخال فعال یا عفونت پوستی در محل تزریق، بارداری یا شیردهی، آلرژی شناخته‌شده به فرآورده‌های اسید هیالورونیک، یا انتظاراتی که نمی‌توانیم با ایمنی برآورده کنیم." },
        { q: "آیا تکنیک‌های خاصی مانند «لب روسی» انجام می‌دهید؟", a: "بله — توزیع صاف‌تر حجم با خط لب واضح‌تر و ارتفاع بیشتر در مرکز قابل درخواست است و در جلسه مشاوره بررسی و طراحی می‌شود." }
      ]
    },
    ar: {
      title: "فيلر الشفاه",
      metaTitle: "فيلر الشفاه في برلين — نتائج طبيعية | AS Clinic",
      metaDescription: "فيلر شفاه بإشراف طبي في AS Clinic ببرلين: حمض هيالورونيك بعلامة CE، بجرعة تناسب الشكل الطبيعي لشفتيك. استشارة مجانية، ونتيجة تدوم 8–12 شهرًا.",
      heroKicker: "الحقن · فيلر الشفاه",
      heroLead: "حجم وتحديد يُبنيان بخطوات صغيرة قابلة للعكس — ليبدو الشكل شكلك أنت، لا نتيجة إجراء واضح.",
      imageAlt: "لقطة قريبة لحقن فيلر الشفاه في AS Clinic",
      chip: "30–45 دقيقة · تخدير موضعي",
      sections: [
        { heading: "ما هو الإجراء", body: "جل حمض هيالورونيك متشابك يُحقن في حدّ الشفة وجسمها لإضافة حجم أو تحديد أو تناسق. نستخدم مستحضرات بعلامة CE من مصنّعين أوروبيين، ويحدد الطبيب أو الممرضة الاختصاصية الجرعة وفق نسب شفتيك الطبيعية لا وفق قالب جاهز." },
        { heading: "لمن يناسب", body: "يناسب معظم البالغين الراغبين في حجم أكبر أو حدّ أوضح أو تناسق أفضل أو تخفيف الخطوط العمودية — شرط تجاوز الثامنة عشرة، وعدم الحمل أو الرضاعة، وخلو موضع الحقن من قرحة الهربس النشطة أو أي التهاب جلدي." },
        { heading: "ماذا يحدث في موعدك", body: "نبدأ باستشارة قصيرة وصور، ثم نضع مخدرًا موضعيًا لنحو 20 دقيقة. يستغرق الحقن بإبرة دقيقة أو كانيولا 10–20 دقيقة يليه تبريد. تستغرق معظم المواعيد نحو 45 دقيقة من البداية إلى النهاية." },
        { heading: "النتيجة والتعافي", body: "التورم طبيعي خلال 24–72 ساعة وقد يجعل الشفتين تبدوان أكبر مؤقتًا من النتيجة النهائية. يستقر الشكل الحقيقي بعد أسبوعين تقريبًا، وعندها نراجع النتيجة ونضيف لمسة بسيطة دون رسوم إذا اقتضت الخطة المتفق عليها." }
      ],
      faqs: [
        { q: "هل أنا مرشّح مناسب لفيلر الشفاه؟", a: "معظم البالغين فوق 18 عامًا مرشحون إن لم يكنّ حوامل أو مرضعات ولم تكن هناك قرحة هربس نشطة أو التهاب جلدي على الشفتين أو قربهما. نؤكد الملاءمة في الاستشارة قبل أي حقن." },
        { q: "ما نوع الفيلر الذي تستخدمونه؟", a: "حمض هيالورونيك متشابك من مصنّعين أوروبيين بعلامة CE — العائلة نفسها المستخدمة لفيلر الخدود والفك، بقوام مُعدّل ليناسب الشفة." },
        { q: "كم أحتاج من الفيلر لنتيجة طبيعية؟", a: "تستخدم معظم الجلسات الأولى 0.5–1 مل. نبدأ بتحفّظ ونراجع بعد أسبوعين، فإضافة القليل أسهل من تصحيح شفة ممتلئة أكثر من اللازم." },
        { q: "هل الإجراء مؤلم؟", a: "يوضع المخدر الموضعي على الشفتين نحو 20 دقيقة مسبقًا، ومعظم أنواع الفيلر تحتوي أصلًا على ليدوكايين. يقيّم الضيوف الانزعاج عادةً بـ2–4 من 10." },
        { q: "كم يستغرق الموعد؟", a: "نحو 45 دقيقة تشمل الاستشارة ووقت التخدير والحقن نفسه." },
        { q: "هل ستبدو شفتاي ممتلئتين أو مصطنعتين؟", a: "ليس مع بروتوكولنا — أحجام صغيرة في الجلسة الأولى تُحقن باتباع شكل شفتيك الطبيعي وتُراجع قبل إضافة أي كمية أخرى." },
        { q: "متى أرى النتيجة النهائية؟", a: "سترين الحجم فورًا، لكن التورم يضخّم الشكل لمدة 24–72 ساعة. النتيجة الحقيقية تظهر بعد أسبوعين تقريبًا حين يزول التورم تمامًا." },
        { q: "كم تدوم نتيجة فيلر الشفاه؟", a: "عادةً 8–12 شهرًا. يقصّرها التمثيل الغذائي والتدخين والنشاط البدني العالي، وتطيلها الجرعة المتحفظة والعناية الجيدة بعد الجلسة." },
        { q: "هل يصحّح الفيلر عدم التناسق؟", a: "نعم — يمكن تعديل الجرعة لكل جانب لموازنة شفة غير متناسقة طبيعيًا، مع أن التناسق المثالي ليس هدفًا واقعيًا ولا ضروريًا." },
        { q: "ما الآثار الجانبية؟", a: "التورم المؤقت والإيلام والكدمات الصغيرة شائعة. أما التكتلات والعدوى والمضاعفات الوعائية فنادرة وتُشرح في إقرار الموافقة الذي تطّلع عليه في الاستشارة." },
        { q: "ما مدة فترة التعافي؟", a: "يعود معظم الضيوف إلى نشاطهم المعتاد في اليوم نفسه. قد يستمر التورم أو الكدمات الظاهرة 2–5 أيام، لذا خطّط لأي تصوير أو مناسبة بعد أسبوع على الأقل." },
        { q: "هل يمكنني وضع أحمر الشفاه بعدها؟", a: "انتظر 12 ساعة على الأقل حتى تنغلق مواضع الحقن، ثم لا مانع من مستحضرات الشفاه ما لم تفضّل ترك كدمة ظاهرة تلتئم أولًا." },
        { q: "متى أستطيع التقبيل أو ممارسة الرياضة؟", a: "لا مانع من التقبيل الخفيف بعد زوال التخدير، عادةً خلال ساعتين. ونطلب تجنّب الرياضة العنيفة 24 ساعة للحد من التورم والكدمات." },
        { q: "هل يمكن إذابة الفيلر إذا لم تعجبني النتيجة؟", a: "نعم — يُذاب فيلر حمض الهيالورونيك بإنزيم الهيالورونيداز، عادةً خلال يوم من موعد الإذابة، إن لم تكن راضيًا عن الشكل." },
        { q: "هل هو آمن في التجربة الأولى؟", a: "نعم مع جرعة متحفظة. نتعامل مع جلستك الأولى كنقطة بداية لا كشكل نهائي، لنعدّل تدريجيًا بما يناسب ملامحك." },
        { q: "كيف تتجنّبون التكتلات أو اللون المزرقّ تحت الجلد؟", a: "بالحقن في العمق الصحيح لكل مستحضر وبطبقات صغيرة متتالية بدل الكميات الكبيرة الدفعة الواحدة — وهما السببان الأكثر شيوعًا للمشكلتين." },
        { q: "هل يمكن دمجه مع علاجات أخرى في الزيارة نفسها؟", a: "غالبًا نعم — مثل خطة فيلر للثلث السفلي من الوجه — لكننا نوزّع بعض التركيبات على مواعيد منفصلة للسلامة ولتقييم التورم بصورة أوضح." },
        { q: "كم مرة أحتاج إلى جلسة تجديد؟", a: "يعود معظم الضيوف كل 9–12 شهرًا مع تحلل الفيلر. نقيّم الشفتين في كل مراجعة بدل الالتزام بجدول ثابت." },
        { q: "ما الذي يمنع إجراء العلاج؟", a: "قرحة الهربس النشطة أو التهاب الجلد في موضع الحقن، الحمل أو الرضاعة، حساسية معروفة تجاه مستحضرات حمض الهيالورونيك، أو توقعات لا يمكننا تحقيقها بأمان." },
        { q: "هل تقدمون تقنيات محددة مثل «الشفة الروسية»؟", a: "نعم — يمكن طلب توزيع أكثر انبساطًا للحجم مع حدّ أوضح وارتفاع أكبر في المنتصف، ويُناقش ويُخطَّط له في استشارتك." }
      ]
    }
  }
};
