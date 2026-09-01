import type { TreatmentPage } from "./types";

/** Published in German and English only, like the other two transplant pages —
 *  the four remaining locales have no hair-transplant page rather than an
 *  English one under their own lang tag.
 *
 *  Every figure here (graft ranges, the day's length, the growth timeline, the
 *  month-12 density audit) restates what the clinic already publishes in the
 *  hair FAQ and the homepage hair section; nothing is added that the site does
 *  not already state. */
export const HAIR_TRANSPLANT: TreatmentPage = {
  slug: "hair-transplant",
  category: { categoryLabelKey: "nav.hair", categoryAnchorId: "hair" },
  content: {
    en: {
      article: {
        h1: "Hair transplant in Berlin – follicular unit extraction at AS Clinic",
        heroIntro: "A hair transplant moves your own hair follicles from a donor zone that is genetically resistant to hormonal thinning into the areas where hair has become sparse. At AS Clinic Berlin on Kurfürstendamm this is done by follicular unit extraction (FUE): follicle by follicle, punch by punch, without a linear scar.",
        heroBody: [
          "What decides whether a result looks natural is not the number of grafts alone. It is where the hairline is drawn, at which angle and direction each follicle is placed, and how single-hair and multi-hair grafts are distributed between the front row and the zones behind it.",
          "Just as important is what a transplant cannot do: it does not stop your own pattern of loss. The native hair around the transplanted area continues to follow its own course, which is why the donor zone, your age and the likely progression of thinning are assessed before any graft number is agreed."
        ],
        updated: "2026-09-01",
        directAnswer: {
          heading: "What is a hair transplant?",
          body: "A hair transplant is a procedure in which your own hair follicles are taken from a donor zone — usually the back and sides of the head — and placed into thinning or bald areas. At AS Clinic the extraction is done by FUE, meaning each follicular unit is removed individually with a fine punch rather than as a strip of skin. The transplanted follicles keep the properties of the donor zone, so they behave like donor hair for life; the surrounding native hair does not."
        },
        glanceHeading: "Hair transplant in Berlin – the key facts at a glance",
        glance: [
          { label: "Technique", value: "Follicular unit extraction (FUE), punch by punch" },
          { label: "Typical graft count", value: "1,800–2,500 for a receding hairline; 3,000–4,500 for a full crown restoration" },
          { label: "Determining your number", value: "Trichoscopy and graft count at the consultation" },
          { label: "Anaesthesia", value: "Local anaesthetic — you stay awake" },
          { label: "Length of the day", value: "About six to nine hours including breaks and lunch, depending on graft count" },
          { label: "Scarring", value: "Hundreds of punctate healing points under 1 mm; no linear scar" },
          { label: "Back to office work", value: "Often from day 3–4 with a loose cap" },
          { label: "Growth timeline", value: "Shedding weeks 2–6, first growth month 3–4, meaningful density month 8, final result month 12–15" },
          { label: "Aftercare included", value: "PRP and Hair Meso support for 12 months" },
          { label: "Density audit", value: "Reviewed at month 12; a shortfall against the agreed plan is corrected at no cost" },
          { label: "Location", value: "AS Clinic, Kurfürstendamm 102, 10711 Berlin-Charlottenburg" }
        ],
        sections: [
          {
            heading: "FUE or FUT – which technique is used?",
            body: "AS Clinic works with follicular unit extraction. Each follicular unit is removed individually with a fine punch instead of a strip of skin being cut from the back of the head. That leaves no linear scar and lets you keep your hair short afterwards. What FUE requires in return is patience: the extraction of several thousand units is the part of the day that takes the longest.",
            points: [
              "No linear donor scar — short haircuts stay possible",
              "Healing points under 1 mm, invisible from conversational distance within about a month",
              "Diffuse extraction, so donor density drops evenly rather than in a patch",
              "The number that can be taken safely is limited by your donor zone, not by your wishes"
            ],
            links: [
              { label: "Hair treatments in Berlin", anchor: "hair" }
            ]
          },
          {
            heading: "How many grafts will I need?",
            body: "The honest answer only exists after trichoscopy. As a guide, a receding hairline is typically 1,800–2,500 grafts and a full crown restoration 3,000–4,500. What that number has to cover is decided together with you, because the donor zone is a finite resource that also has to serve any future session.",
            points: [
              "Density of the donor zone and hair thickness per follicular unit",
              "Size of the area to be covered and the contrast between hair and scalp",
              "How far the loss is likely to progress in the coming years",
              "Whether the front hairline, the crown or both are the priority",
              "Whether a second session should be kept in reserve"
            ]
          },
          {
            heading: "How is a natural hairline designed?",
            body: "A hairline is drawn to your facial proportions and to how your forehead actually moves, not to a template or to the hairline you had at twenty. It is deliberately placed where it will still look plausible in fifteen years. Single hairs go into the front row and multi-hair grafts behind them, so the transition is soft rather than a hard line. A slight irregularity is part of the design: a perfectly straight hairline reads as artificial.",
            points: [
              "Facial proportions and forehead movement decide the height",
              "Single-hair grafts in the front row, multi-hair grafts behind",
              "Angle and direction of growth follow the existing hair",
              "Temple recessions are shaped rather than filled in completely",
              "Age and expected progression are built into the design"
            ]
          },
          {
            heading: "Am I too young for a hair transplant?",
            body: "Under 25 the loss is usually stabilised medically first and transplanted afterwards. The reason is arithmetic rather than caution: if the donor zone is spent chasing a hairline that is still moving, there may be too little left for the areas that thin later. That does not rule out a transplant at a younger age — it means the plan has to account for where the loss is heading.",
            links: [
              { label: "Hair mesotherapy in Berlin — strengthening existing follicles", slug: "hair-meso" }
            ]
          },
          {
            heading: "Do women have hair transplants here?",
            body: "Yes — for frontal recession, a widened parting and scars after surgery. In most cases the recipient area does not have to be shaved. What matters beforehand is the cause: diffuse thinning has many possible reasons, and not all of them are treated by transplantation. Where a medical cause is likely, it is clarified first."
          },
          {
            heading: "Hair transplant, Hair Meso or PRP – what is the difference?",
            body: "Transplantation moves follicles; mesotherapy and PRP work on the follicles you still have. They address different problems, which is why they are combined rather than weighed against each other.",
            compare: {
              headings: ["Hair transplant", "Hair Meso / PRP"],
              rows: [
                ["Moves your own follicles into thinning areas", "Treats the follicles already present"],
                ["Creates density where nothing grows any more", "Supports and strengthens existing hair"],
                ["One surgical day under local anaesthetic", "Several short sessions, then maintenance"],
                ["Result over 12–15 months", "Effect while treatment is continued"],
                ["Does not stop your own pattern of loss", "Does not replace a transplant where hair is gone"]
              ]
            },
            links: [
              { label: "PRP hair mesotherapy in Berlin", slug: "prp-meso-hair" }
            ]
          },
          {
            heading: "Can a previous transplant be corrected?",
            body: "Often yes. Older or poorly planned work can be improved by redistributing the front row, excising visible plug grafts and adding density behind them. What such a correction needs is a longer plan and a realistic view of the remaining donor zone, because part of it has already been used."
          },
          {
            heading: "Will I still need medication afterwards?",
            body: "Usually yes, to protect the native hair around the grafts. The transplant does not stop your original pattern of loss: transplanted follicles keep the properties of the donor zone, while the surrounding hair continues to follow its own course. Which medication is appropriate, and whether it is appropriate for you at all, is a medical decision made individually — never one to start or stop on your own."
          }
        ],
        process: {
          heading: "How a hair transplant works at AS Clinic Berlin",
          steps: [
            { heading: "Consultation and trichoscopy", body: "The scalp is examined under magnification. Donor density, hair thickness, the pattern and probable progression of loss, previous treatments, illnesses and medication are assessed — and from that comes your graft count rather than a round number quoted in advance." },
            { heading: "Hairline design", body: "The hairline is drawn to your facial proportions and forehead movement, and reviewed with you in the mirror before anything else happens. Height, temple shape and the distribution of density across the areas to be covered are agreed at this point." },
            { heading: "Local anaesthetic", body: "The donor and recipient areas are anaesthetised locally. You stay awake through the day, watching a film or sleeping; the day is long, but the procedure itself is not painful." },
            { heading: "Extraction, punch by punch", body: "The follicular units are removed individually from the donor zone in a diffuse pattern, so that the density there decreases evenly and invisibly rather than leaving a thinned patch." },
            { heading: "Placement", body: "The grafts are placed at the angle and direction of growth that match the surrounding hair: single hairs in the front row, multi-hair grafts behind. This step decides how natural the result reads far more than the graft number does." },
            { heading: "Aftercare and follow-up", body: "You leave with washing instructions and a clear plan for the first days. PRP and Hair Meso support is included for 12 months, and density is audited at month 12 against the plan agreed at the start." }
          ]
        },
        sectionsAfterProcess: [
          {
            heading: "What happens in the first days and weeks?",
            body: "Small crusts form around each graft and fall away over roughly the first one to two weeks. Redness in the recipient area fades gradually. The donor zone is fully covered again after about two weeks. Then, between weeks 2 and 6, the transplanted hairs shed — this is expected and is not a failure of the graft: the follicle stays, the shaft is what falls out."
          },
          {
            heading: "When can I work or exercise again?",
            body: "Office work is often possible from day 3–4 with a loose cap; client-facing days are more comfortable from about day 10, once the redness has settled. For exercise: walking from day 3, light training from day 10, heavy lifting and swimming from week 4. Direct pressure, friction and sun on the fresh grafts are what should be avoided in the meantime."
          },
          {
            heading: "When will I see the result?",
            body: "The timeline is slow and it is worth knowing it in advance: shedding at weeks 2–6, first growth at month 3–4, meaningful density at month 8 and the final result at month 12–15. Judging the outcome at month 4 tells you very little — density is still building, and the hairs that have come through are finer than they will be."
          },
          {
            heading: "Is the result permanent?",
            body: "The transplanted follicles come from the donor zone, which is genetically resistant to hormonal thinning, so they behave like donor hair for life. Your native hair around them does not: it continues to follow your original pattern of loss, which is why protecting it is part of the plan rather than an afterthought."
          },
          {
            heading: "Are there scars?",
            body: "FUE leaves hundreds of punctate healing points under 1 mm rather than one line. Within about a month these are invisible from conversational distance, and short haircuts remain possible. How conspicuous they are depends on skin type, healing and how much has been extracted."
          },
          {
            heading: "Risks and possible complications",
            body: "A hair transplant is a surgical procedure and is not free of risk. Alongside the general risks of surgery, the donor zone, graft survival and the design of the result are what matter most. Possible risks include:",
            points: [
              "Swelling of the forehead in the first days",
              "Redness, crusting and temporary tenderness",
              "Infection or folliculitis around individual grafts",
              "Temporary numbness or altered sensation in the donor or recipient area",
              "Shock loss of native hair around the grafts, usually temporary",
              "Visible thinning of the donor zone if too much is extracted",
              "Individual grafts that do not take",
              "An unnatural result where angle, direction or hairline design were wrong",
              "The need for a further session"
            ]
          },
          {
            heading: "Which symptoms should be checked afterwards?",
            body: "Severe or rapidly increasing pain, spreading redness, pus, fever, marked one-sided swelling or persistent bleeding should be assessed without delay. Ordinary crusting, mild swelling and the shedding phase between weeks 2 and 6 are expected and are not warning signs."
          },
          {
            heading: "Who is a hair transplant suitable for?",
            body: "It can be an option for adults with a sufficient donor zone, a stable or medically stabilised pattern of loss and realistic expectations about coverage and timeline. Taken into account when assessing suitability:",
            points: [
              "Donor density and hair thickness",
              "Extent of the area to be covered",
              "Age and likely progression of the loss",
              "Cause of the thinning, where it is not clearly hereditary",
              "Pre-existing conditions, medication and wound-healing risks",
              "Willingness to protect the native hair afterwards",
              "Realistic expectations of density and of the 12–15 month timeline"
            ]
          },
          {
            heading: "When might a transplant not be the right step?",
            body: "Where the donor zone is insufficient for the area to be covered, where loss is advancing rapidly and has not been stabilised, or where the thinning has a cause that transplantation does not treat, another approach makes more sense. Acute scalp conditions, uncontrolled medical risks or unfavourable wound-healing conditions can postpone or rule out surgery. Prescribed medication must never be stopped or paused on your own initiative for an aesthetic procedure."
          },
          {
            heading: "What does a hair transplant cost in Berlin?",
            body: "The cost depends on the graft count, and therefore on the area to be covered and your donor density. Because the graft number comes from trichoscopy rather than from a phone call, the specific price is discussed after the personal examination and before the procedure."
          }
        ],
        local: {
          heading: "Hair transplant on Kurfürstendamm in Berlin-Charlottenburg",
          body: "AS Clinic Berlin is located on Kurfürstendamm in Berlin-Charlottenburg. If you are looking for a hair transplant in Berlin, an FUE procedure or a correction of earlier work, the first step is trichoscopy and an honest assessment of what your donor zone allows. AS Clinic Berlin, Kurfürstendamm 102, 10711 Berlin-Charlottenburg. Phone: +49 179 390 2489. Opening hours: Monday–Friday 10:00–19:00, Saturday 10:00–16:00, Sunday closed.",
          links: [
            { label: "AS Clinic Berlin on Kurfürstendamm — location and directions", path: "/location" }
          ]
        },
        why: {
          heading: "Why choose AS Clinic for a hair transplant in Berlin?",
          points: [
            { heading: "Your graft count comes from trichoscopy", body: "The number is measured at the consultation rather than quoted in advance. Donor density and hair thickness decide what is realistically possible — not a package." },
            { heading: "The donor zone is treated as finite", body: "Extraction is diffuse, and the plan accounts for the fact that a later session may still need donor hair. Taking the maximum today is not automatically the better outcome." },
            { heading: "The hairline is drawn for the next fifteen years", body: "Height and shape are planned to your proportions and to how the loss is likely to progress, so the result still looks plausible as you age." },
            { heading: "Aftercare is part of the treatment", body: "PRP and Hair Meso support is included for 12 months, because protecting the native hair around the grafts is what keeps the overall result stable." },
            { heading: "Density is audited at month 12", body: "The result is reviewed against the plan agreed at the start. Any shortfall is corrected in a touch-up session at no cost." },
            { heading: "Medical qualification", body: "Nader Farahwaschy – specialist in surgery. Medical licence since 2004; specialist recognition in surgery from the Berlin Medical Association since 2011. Individual suitability is assessed at the personal consultation." }
          ]
        },
        faqHeading: "Frequently asked questions about hair transplants in Berlin",
        faqs: [
          { q: "What is a hair transplant?", a: "Your own hair follicles are moved from a donor zone at the back and sides of the head into thinning or bald areas. The transplanted follicles keep the donor zone's resistance to hormonal thinning." },
          { q: "FUE or FUT — which do you do?", a: "Follicular unit extraction, punch by punch. It leaves no linear scar and lets you keep your hair short." },
          { q: "How many grafts will I need?", a: "A receding hairline is typically 1,800–2,500; a full crown restoration 3,000–4,500. Trichoscopy at the consultation gives your number." },
          { q: "Am I too young for a hair transplant?", a: "Under 25 we usually stabilise the loss medically first and transplant afterwards — otherwise the donor zone is spent chasing a hairline that is still moving." },
          { q: "Will the new hairline look natural?", a: "It is drawn to your facial proportions and forehead movement, with single hairs in the front row and multi-hair grafts behind them." },
          { q: "How long does the day take?", a: "Six to nine hours including breaks and lunch, depending on the graft count." },
          { q: "Is the procedure painful?", a: "It is done under local anaesthetic; you stay awake, watching a film or sleeping. Tenderness on the first two nights is usual and manageable with simple painkillers." },
          { q: "Do I have to shave my head?", a: "That depends on the technique, the area and your hair length, and is agreed at the consultation. For women the recipient area usually does not have to be shaved." },
          { q: "When can I go back to work?", a: "Office work from about day 3–4 with a loose cap. Client-facing days are more comfortable from day 10, once the redness settles." },
          { q: "When can I train again?", a: "Walking from day 3, light training from day 10, heavy lifting and swimming from week 4." },
          { q: "When will I see hair?", a: "Shedding at weeks 2–6, first growth at month 3–4, meaningful density at month 8, final result at month 12–15." },
          { q: "Why does the transplanted hair fall out first?", a: "The shaft sheds while the follicle stays in place. This phase between weeks 2 and 6 is expected and is not a sign that the graft has failed." },
          { q: "Is the result permanent?", a: "The transplanted follicles come from a donor zone that is genetically resistant to hormonal thinning, so they behave like donor hair for life." },
          { q: "Will I need a second session?", a: "Sometimes — for a larger area, for further loss over the years, or when part of the donor zone is deliberately kept in reserve. It is planned rather than improvised." },
          { q: "What happens to my donor zone?", a: "It is harvested in a diffuse pattern so density decreases evenly and invisibly. It is fully covered again after about two weeks." },
          { q: "Are there scars?", a: "Hundreds of punctate healing points under 1 mm, invisible from conversational distance within about a month. There is no linear scar." },
          { q: "Can you fix a previous bad transplant?", a: "Often yes — by redistributing the front row, excising plug grafts and adding density behind. It needs a longer plan and a realistic view of the remaining donor hair." },
          { q: "Do women get hair transplants here?", a: "Yes — for frontal recession, a widened parting and post-surgical scars, usually without shaving the recipient area." },
          { q: "Will I still need medication after surgery?", a: "Usually yes, to protect the native hair around the grafts. The transplant does not stop your original pattern of loss." },
          { q: "What is Hair Meso?", a: "A vitamin, peptide and growth-factor treatment delivered to the scalp to strengthen existing follicles. It complements a transplant, it does not replace one." },
          { q: "What is PRP hair mesotherapy?", a: "Your own platelet-rich plasma, prepared in the clinic and injected into the scalp. Typically three sessions a month apart, then maintenance." },
          { q: "Is aftercare included?", a: "PRP and Hair Meso support is included for 12 months after the procedure." },
          { q: "What if a graft does not take?", a: "Density is audited at month 12. Any shortfall against the agreed plan is corrected in a touch-up session at no cost." },
          { q: "What are the risks?", a: "Possible risks include swelling, redness, crusting, infection or folliculitis, temporary numbness, temporary shock loss of native hair, individual grafts that do not take and, where too much is extracted, visible thinning of the donor zone." },
          { q: "Can a hair transplant treat every kind of hair loss?", a: "No. It treats areas where follicles are gone but the donor zone is intact. Diffuse thinning with a medical cause is clarified first, because transplantation does not treat the cause." },
          { q: "Which anaesthesia is used?", a: "Local anaesthetic. You are awake throughout, and the day is long rather than painful." },
          { q: "What does a hair transplant cost at AS Clinic Berlin?", a: "The cost depends on the graft count, which comes from trichoscopy. The specific price is discussed after the personal examination and before the procedure." },
          { q: "Where can I have a hair transplant in Berlin?", a: "AS Clinic performs FUE hair transplants at Kurfürstendamm 102 in Berlin-Charlottenburg. Donor zone, graft count, hairline design, alternatives and individual risks are assessed beforehand." }
        ],
        relatedHeading: "Related treatments at AS Clinic Berlin",
        related: [
          { slug: "eyebrow-transplant", blurb: "Eyebrow transplant in Berlin: single hairs laid almost flat, following each brow section." },
          { slug: "beard-transplant", blurb: "Beard transplant in Berlin: finer punches, steeper angles, density planned per zone." },
          { slug: "hair-meso", blurb: "Hair mesotherapy in Berlin: strengthening the follicles you still have." },
          { slug: "prp-meso-hair", blurb: "PRP hair mesotherapy in Berlin: your own platelet-rich plasma for the scalp." }
        ],
        ctaHeading: "Hair transplant consultation in Berlin",
        ctaBody: "Would you like to know how many grafts your donor zone actually allows, where a hairline could realistically sit and what the twelve months after the procedure look like? Arrange a personal consultation at AS Clinic Berlin on Kurfürstendamm. Trichoscopy, graft count, hairline design, alternatives, aftercare and individual risks are assessed together.",
        disclaimer: {
          heading: "Medical note",
          body: "The information on this page serves as general information about hair transplantation and does not replace a personal examination, individual planning or a risk consultation. Graft counts, timelines and recovery figures are guide values from our own practice; the number that applies to you comes from trichoscopy. Where hair loss may have a medical cause, that cause should be clarified before an aesthetic procedure is planned."
        }
      },
      title: "Hair Transplant",
      metaTitle: "Hair Transplant Berlin: FUE at AS Clinic | Kurfürstendamm",
      metaDescription: "FUE hair transplant in Berlin at AS Clinic on Kurfürstendamm: 1,800–4,500 grafts, no linear scar, 12 months of PRP and Hair Meso aftercare. Book a consultation.",
      heroKicker: "Hair · FUE transplantation",
      heroLead: "Single-follicle extraction and placement, with a hairline drawn to your proportions and a donor zone treated as finite.",
      imageAlt: "A patient's hairline being marked out before a hair transplant at AS Clinic Berlin",
      chip: "1,800–4,500 grafts · 6–9 hours · local anaesthetic",
      sections: [
        { heading: "What it is", body: "Follicular unit extraction: your own follicles are moved punch by punch from a donor zone resistant to hormonal thinning into the areas where hair has become sparse." },
        { heading: "Who it suits", body: "Adults with a sufficient donor zone and a stable or medically stabilised pattern of loss, who accept a result that builds over 12–15 months." },
        { heading: "Your appointment", body: "Trichoscopy and graft count, hairline design reviewed in the mirror, local anaesthetic, then extraction and placement across a day of about six to nine hours." },
        { heading: "Result & healing", body: "Crusts fall away in the first weeks, the transplanted hairs shed at weeks 2–6, first growth follows at month 3–4 and the final result at month 12–15." }
      ],
      faqs: [
        { q: "FUE or FUT?", a: "Follicular unit extraction, punch by punch — no linear scar, and short haircuts stay possible." },
        { q: "How many grafts will I need?", a: "Typically 1,800–2,500 for a receding hairline and 3,000–4,500 for a full crown restoration; trichoscopy gives your number." },
        { q: "When will I see hair?", a: "Shedding weeks 2–6, first growth month 3–4, meaningful density month 8, final result month 12–15." },
        { q: "What if a graft does not take?", a: "Density is audited at month 12 and any shortfall against the agreed plan is corrected at no cost." }
      ]
    },
    de: {
      article: {
        h1: "Haartransplantation in Berlin – FUE-Einzelfollikeltechnik bei AS Clinic",
        heroIntro: "Bei einer Haartransplantation werden eigene Haarfollikel aus einer Spenderzone, die genetisch gegen hormonelle Ausdünnung resistent ist, in die schütter gewordenen Bereiche verpflanzt. In der AS Clinic Berlin am Kurfürstendamm geschieht das mit der Follicular Unit Extraction (FUE): Follikel für Follikel, Punch für Punch, ohne lineare Narbe.",
        heroBody: [
          "Ob ein Ergebnis natürlich wirkt, entscheidet nicht die Graftzahl allein. Entscheidend sind die Lage des Haaransatzes, Winkel und Wuchsrichtung jedes einzelnen Follikels und die Verteilung von Einzelhaar- und Mehrhaar-Grafts zwischen vorderster Reihe und den Zonen dahinter.",
          "Ebenso wichtig ist, was eine Transplantation nicht leistet: Sie stoppt Ihr eigenes Ausfallmuster nicht. Das Eigenhaar rund um das transplantierte Areal folgt weiterhin seinem eigenen Verlauf. Deshalb werden Spenderzone, Alter und der wahrscheinliche Fortgang der Ausdünnung beurteilt, bevor eine Graftzahl vereinbart wird."
        ],
        updated: "2026-09-01",
        directAnswer: {
          heading: "Was ist eine Haartransplantation?",
          body: "Eine Haartransplantation ist ein Eingriff, bei dem eigene Haarfollikel aus einer Spenderzone – meist Hinterkopf und Seiten – entnommen und in schüttere oder kahle Bereiche eingesetzt werden. Bei AS Clinic erfolgt die Entnahme per FUE: Jede Follikeleinheit wird einzeln mit einem feinen Punch entnommen, nicht als Hautstreifen. Die transplantierten Follikel behalten die Eigenschaften der Spenderzone und verhalten sich lebenslang wie Spenderhaar; das umliegende Eigenhaar tut das nicht."
        },
        glanceHeading: "Haartransplantation in Berlin – die wichtigsten Informationen auf einen Blick",
        glance: [
          { label: "Technik", value: "Follicular Unit Extraction (FUE), Punch für Punch" },
          { label: "Typische Graftzahl", value: "1.800–2.500 bei zurückweichendem Haaransatz; 3.000–4.500 bei vollständiger Tonsurauffüllung" },
          { label: "Ermittlung Ihrer Zahl", value: "Trichoskopie und Graft-Anzahl bei der Beratung" },
          { label: "Betäubung", value: "Örtliche Betäubung — Sie bleiben wach" },
          { label: "Dauer des Tages", value: "Etwa sechs bis neun Stunden inklusive Pausen und Mittagessen, je nach Graftzahl" },
          { label: "Narben", value: "Hunderte punktförmige Heilungsstellen unter 1 mm; keine lineare Narbe" },
          { label: "Zurück ins Büro", value: "Häufig ab Tag 3–4 mit lockerer Kappe" },
          { label: "Zeitverlauf", value: "Ausfall Woche 2–6, erstes Wachstum Monat 3–4, spürbare Dichte Monat 8, Endergebnis Monat 12–15" },
          { label: "Nachsorge inklusive", value: "PRP- und Hair-Meso-Begleitung für 12 Monate" },
          { label: "Dichteprüfung", value: "Kontrolle in Monat 12; Abweichungen vom vereinbarten Plan werden kostenfrei nachgebessert" },
          { label: "Standort", value: "AS Clinic, Kurfürstendamm 102, 10711 Berlin-Charlottenburg" }
        ],
        sections: [
          {
            heading: "FUE oder FUT – welche Technik wird verwendet?",
            body: "Die AS Clinic arbeitet mit der Follicular Unit Extraction. Jede Follikeleinheit wird einzeln mit einem feinen Punch entnommen, statt einen Hautstreifen vom Hinterkopf zu entnehmen. Das hinterlässt keine lineare Narbe und erlaubt weiterhin kurze Haare. Dafür braucht FUE Geduld: Die Entnahme mehrerer Tausend Einheiten ist der längste Teil des Tages.",
            points: [
              "Keine lineare Spendernarbe — kurze Frisuren bleiben möglich",
              "Heilungsstellen unter 1 mm, aus Gesprächsdistanz innerhalb etwa eines Monats unsichtbar",
              "Diffuse Entnahme, damit die Spenderdichte gleichmäßig statt fleckig abnimmt",
              "Wie viel sicher entnommen werden kann, begrenzt Ihre Spenderzone — nicht der Wunsch"
            ],
            links: [
              { label: "Haarbehandlungen in Berlin", anchor: "hair" }
            ]
          },
          {
            heading: "Wie viele Grafts brauche ich?",
            body: "Eine belastbare Antwort gibt es erst nach der Trichoskopie. Als Orientierung benötigt ein zurückweichender Haaransatz typischerweise 1.800–2.500 Grafts, eine vollständige Tonsurauffüllung 3.000–4.500. Was diese Zahl abdecken soll, wird gemeinsam entschieden, denn die Spenderzone ist eine begrenzte Ressource, die auch für eine spätere Sitzung reichen muss.",
            points: [
              "Dichte der Spenderzone und Haardicke pro Follikeleinheit",
              "Größe des zu deckenden Areals und Kontrast zwischen Haar und Kopfhaut",
              "Wie weit der Verlust in den kommenden Jahren voraussichtlich fortschreitet",
              "Ob der vordere Haaransatz, die Tonsur oder beides im Vordergrund steht",
              "Ob eine zweite Sitzung bewusst in Reserve bleiben soll"
            ]
          },
          {
            heading: "Wie entsteht ein natürlicher Haaransatz?",
            body: "Der Haaransatz wird nach Ihren Gesichtsproportionen und der tatsächlichen Stirnbewegung gezeichnet – nicht nach einer Schablone und nicht nach dem Haaransatz mit zwanzig. Er wird bewusst dort platziert, wo er auch in fünfzehn Jahren noch plausibel wirkt. Einzelhaare kommen in die vorderste Reihe, Mehrhaar-Grafts dahinter, damit der Übergang weich statt als harte Linie erscheint. Eine leichte Unregelmäßigkeit gehört zur Planung: Ein perfekt gerader Haaransatz wirkt künstlich.",
            points: [
              "Gesichtsproportionen und Stirnbewegung bestimmen die Höhe",
              "Einzelhaar-Grafts in der vordersten Reihe, Mehrhaar-Grafts dahinter",
              "Winkel und Wuchsrichtung folgen dem vorhandenen Haar",
              "Geheimratsecken werden geformt, nicht vollständig aufgefüllt",
              "Alter und zu erwartender Fortgang fließen in das Design ein"
            ]
          },
          {
            heading: "Bin ich zu jung für eine Haartransplantation?",
            body: "Unter 25 wird der Verlust meist zuerst medikamentös stabilisiert und danach transplantiert. Der Grund ist rechnerisch, nicht übervorsichtig: Wird die Spenderzone für einen noch wandernden Haaransatz verbraucht, bleibt womöglich zu wenig für die Bereiche, die später ausdünnen. Das schließt einen Eingriff in jüngeren Jahren nicht aus – es bedeutet, dass die Planung den weiteren Verlauf berücksichtigen muss.",
            links: [
              { label: "Haar-Mesotherapie in Berlin — vorhandene Follikel stärken", slug: "hair-meso" }
            ]
          },
          {
            heading: "Lassen Frauen hier Haare transplantieren?",
            body: "Ja — bei frontalem Rückgang, verbreitertem Scheitel und Narben nach Operationen. Meist muss das Empfängerareal dafür nicht rasiert werden. Entscheidend ist vorab die Ursache: Diffuse Ausdünnung hat viele mögliche Gründe, und nicht jeder davon wird durch eine Transplantation behandelt. Wo eine medizinische Ursache wahrscheinlich ist, wird sie zuerst abgeklärt."
          },
          {
            heading: "Haartransplantation, Hair Meso oder PRP – was ist der Unterschied?",
            body: "Die Transplantation verpflanzt Follikel; Mesotherapie und PRP wirken auf die Follikel, die noch vorhanden sind. Sie behandeln unterschiedliche Probleme und werden deshalb kombiniert statt gegeneinander abgewogen.",
            compare: {
              headings: ["Haartransplantation", "Hair Meso / PRP"],
              rows: [
                ["Verpflanzt eigene Follikel in schüttere Areale", "Behandelt die bereits vorhandenen Follikel"],
                ["Schafft Dichte, wo nichts mehr wächst", "Unterstützt und stärkt vorhandenes Haar"],
                ["Ein Operationstag in örtlicher Betäubung", "Mehrere kurze Sitzungen, danach Erhaltung"],
                ["Ergebnis über 12–15 Monate", "Wirkung, solange die Behandlung fortgeführt wird"],
                ["Stoppt das eigene Ausfallmuster nicht", "Ersetzt keine Transplantation, wo Haar fehlt"]
              ]
            },
            links: [
              { label: "PRP Haar-Mesotherapie in Berlin", slug: "prp-meso-hair" }
            ]
          },
          {
            heading: "Kann eine frühere Transplantation korrigiert werden?",
            body: "Oft ja. Ältere oder schlecht geplante Ergebnisse lassen sich durch Umverteilung der vordersten Reihe, Entfernen sichtbarer Plug-Grafts und zusätzliche Dichte dahinter verbessern. Eine solche Korrektur braucht einen längeren Plan und eine realistische Einschätzung der verbliebenen Spenderzone, da ein Teil bereits verbraucht ist."
          },
          {
            heading: "Brauche ich danach weiterhin Medikamente?",
            body: "Meist ja, um das Eigenhaar rund um die Grafts zu schützen. Die Transplantation stoppt Ihr ursprüngliches Ausfallmuster nicht: Transplantierte Follikel behalten die Eigenschaften der Spenderzone, während das umliegende Haar seinem eigenen Verlauf folgt. Welche Medikation sinnvoll ist – und ob sie für Sie überhaupt sinnvoll ist – wird individuell ärztlich entschieden und nie eigenständig begonnen oder abgesetzt."
          }
        ],
        process: {
          heading: "Wie läuft eine Haartransplantation bei AS Clinic Berlin ab?",
          steps: [
            { heading: "Beratung und Trichoskopie", body: "Die Kopfhaut wird unter Vergrößerung untersucht. Spenderdichte, Haardicke, Muster und wahrscheinlicher Fortgang des Verlusts, frühere Behandlungen, Erkrankungen und Medikamente werden beurteilt — daraus ergibt sich Ihre Graftzahl, statt vorab eine runde Zahl zu nennen." },
            { heading: "Design des Haaransatzes", body: "Der Haaransatz wird nach Gesichtsproportionen und Stirnbewegung gezeichnet und mit Ihnen im Spiegel abgestimmt, bevor irgendetwas anderes geschieht. Höhe, Form der Geheimratsecken und Verteilung der Dichte werden hier festgelegt." },
            { heading: "Örtliche Betäubung", body: "Spender- und Empfängerareal werden lokal betäubt. Sie bleiben den Tag über wach, sehen einen Film oder schlafen; der Tag ist lang, der Eingriff selbst aber nicht schmerzhaft." },
            { heading: "Entnahme, Punch für Punch", body: "Die Follikeleinheiten werden einzeln und in diffusem Muster aus der Spenderzone entnommen, damit die Dichte dort gleichmäßig und unsichtbar abnimmt statt einen ausgedünnten Fleck zu hinterlassen." },
            { heading: "Einsetzen der Grafts", body: "Die Grafts werden in Winkel und Wuchsrichtung des umliegenden Haars gesetzt: Einzelhaare in die vorderste Reihe, Mehrhaar-Grafts dahinter. Dieser Schritt entscheidet über die Natürlichkeit weit stärker als die Graftzahl." },
            { heading: "Nachsorge und Kontrollen", body: "Sie gehen mit Waschanleitung und einem klaren Plan für die ersten Tage nach Hause. PRP- und Hair-Meso-Begleitung ist für 12 Monate inklusive, die Dichte wird in Monat 12 gegen den anfangs vereinbarten Plan geprüft." }
          ]
        },
        sectionsAfterProcess: [
          {
            heading: "Was passiert in den ersten Tagen und Wochen?",
            body: "Um jedes Graft bilden sich kleine Krusten, die in etwa den ersten ein bis zwei Wochen abfallen. Die Rötung im Empfängerareal klingt schrittweise ab. Die Spenderzone ist nach rund zwei Wochen wieder vollständig bedeckt. Zwischen Woche 2 und 6 fallen die transplantierten Haare aus — das ist erwartet und kein Zeichen eines misslungenen Grafts: Der Follikel bleibt, ausfallen tut der Haarschaft."
          },
          {
            heading: "Wann kann ich wieder arbeiten oder trainieren?",
            body: "Bürotätigkeit ist häufig ab Tag 3–4 mit lockerer Kappe möglich; Termine mit Kundenkontakt sind ab etwa Tag 10 angenehmer, sobald die Rötung nachlässt. Beim Sport gilt: Spazieren ab Tag 3, leichtes Training ab Tag 10, schweres Heben und Schwimmen ab Woche 4. Zu vermeiden sind in der Zwischenzeit direkter Druck, Reibung und Sonne auf den frischen Grafts."
          },
          {
            heading: "Wann sieht man das Ergebnis?",
            body: "Der Zeitverlauf ist langsam, und es lohnt sich, ihn vorher zu kennen: Ausfall in Woche 2–6, erstes Wachstum in Monat 3–4, spürbare Dichte in Monat 8 und das Endergebnis in Monat 12–15. Eine Beurteilung in Monat 4 sagt wenig aus — die Dichte baut sich noch auf, und die durchgekommenen Haare sind feiner, als sie werden."
          },
          {
            heading: "Ist das Ergebnis dauerhaft?",
            body: "Die transplantierten Follikel stammen aus der Spenderzone, die genetisch gegen hormonelle Ausdünnung resistent ist, und verhalten sich lebenslang wie Spenderhaar. Ihr Eigenhaar ringsum tut das nicht: Es folgt weiterhin dem ursprünglichen Ausfallmuster. Dessen Schutz ist deshalb Teil des Plans und kein Nachgedanke."
          },
          {
            heading: "Bleiben Narben zurück?",
            body: "FUE hinterlässt hunderte punktförmige Heilungsstellen unter 1 mm statt einer Linie. Innerhalb etwa eines Monats sind sie aus Gesprächsdistanz unsichtbar, kurze Frisuren bleiben möglich. Wie auffällig sie sind, hängt von Hauttyp, Heilung und Entnahmemenge ab."
          },
          {
            heading: "Risiken und mögliche Komplikationen",
            body: "Eine Haartransplantation ist ein chirurgischer Eingriff und nicht risikofrei. Neben allgemeinen Operationsrisiken sind vor allem Spenderzone, Anwachsrate und die Gestaltung des Ergebnisses relevant. Mögliche Risiken sind unter anderem:",
            points: [
              "Schwellung der Stirn in den ersten Tagen",
              "Rötung, Krustenbildung und vorübergehende Berührungsempfindlichkeit",
              "Infektion oder Follikulitis an einzelnen Grafts",
              "Vorübergehende Taubheit oder Missempfindungen im Spender- oder Empfängerareal",
              "Vorübergehender Schockverlust von Eigenhaar rund um die Grafts",
              "Sichtbare Ausdünnung der Spenderzone bei zu großer Entnahme",
              "Einzelne Grafts, die nicht anwachsen",
              "Unnatürliches Ergebnis bei falschem Winkel, falscher Richtung oder falschem Haaransatz",
              "Notwendigkeit einer weiteren Sitzung"
            ]
          },
          {
            heading: "Welche Beschwerden sollten abgeklärt werden?",
            body: "Starke oder rasch zunehmende Schmerzen, sich ausbreitende Rötung, Eiter, Fieber, deutlich einseitige Schwellung oder anhaltende Blutung sollten umgehend abgeklärt werden. Übliche Krustenbildung, leichte Schwellung und die Ausfallphase zwischen Woche 2 und 6 sind erwartet und kein Warnzeichen."
          },
          {
            heading: "Für wen ist eine Haartransplantation geeignet?",
            body: "Sie kann für Erwachsene infrage kommen, deren Spenderzone ausreicht, deren Ausfallmuster stabil oder medikamentös stabilisiert ist und die realistische Erwartungen an Deckung und Zeitverlauf haben. Bei der Eignung werden unter anderem berücksichtigt:",
            points: [
              "Spenderdichte und Haardicke",
              "Ausdehnung des zu deckenden Areals",
              "Alter und wahrscheinlicher Fortgang des Verlusts",
              "Ursache der Ausdünnung, wenn sie nicht eindeutig anlagebedingt ist",
              "Vorerkrankungen, Medikamente und Wundheilungsrisiken",
              "Bereitschaft, das Eigenhaar danach zu schützen",
              "Realistische Erwartungen an Dichte und an den Zeitraum von 12–15 Monaten"
            ]
          },
          {
            heading: "Wann ist eine Transplantation möglicherweise nicht der richtige Schritt?",
            body: "Wenn die Spenderzone für das zu deckende Areal nicht ausreicht, der Verlust rasch fortschreitet und nicht stabilisiert ist oder die Ausdünnung eine Ursache hat, die eine Transplantation nicht behandelt, ist ein anderer Ansatz sinnvoller. Akute Kopfhauterkrankungen, nicht ausreichend kontrollierte medizinische Risiken oder ungünstige Wundheilungsbedingungen können den Eingriff verschieben oder ausschließen. Verschriebene Medikamente dürfen niemals eigenständig für einen ästhetischen Eingriff abgesetzt oder pausiert werden."
          },
          {
            heading: "Was kostet eine Haartransplantation in Berlin?",
            body: "Die Kosten hängen von der Graftzahl ab und damit vom zu deckenden Areal und Ihrer Spenderdichte. Da die Graftzahl aus der Trichoskopie stammt und nicht aus einem Telefonat, wird der konkrete Preis nach der persönlichen Untersuchung und vor dem Eingriff besprochen."
          }
        ],
        local: {
          heading: "Haartransplantation am Kurfürstendamm in Berlin-Charlottenburg",
          body: "Die AS Clinic Berlin befindet sich am Kurfürstendamm in Berlin-Charlottenburg. Wenn Sie nach einer Haartransplantation in Berlin, einem FUE-Eingriff oder der Korrektur einer früheren Behandlung suchen, stehen zuerst die Trichoskopie und eine ehrliche Einschätzung dessen, was Ihre Spenderzone zulässt. AS Clinic Berlin, Kurfürstendamm 102, 10711 Berlin-Charlottenburg. Telefon: +49 179 390 2489. Öffnungszeiten: Montag–Freitag 10:00–19:00 Uhr, Samstag 10:00–16:00 Uhr, Sonntag geschlossen.",
          links: [
            { label: "AS Clinic Berlin am Kurfürstendamm — Anfahrt und Lage", path: "/location" }
          ]
        },
        why: {
          heading: "Warum AS Clinic für Haartransplantation in Berlin?",
          points: [
            { heading: "Ihre Graftzahl stammt aus der Trichoskopie", body: "Die Zahl wird in der Beratung gemessen, nicht vorab genannt. Spenderdichte und Haardicke entscheiden, was realistisch möglich ist — kein Paket." },
            { heading: "Die Spenderzone wird als begrenzt behandelt", body: "Die Entnahme erfolgt diffus, und die Planung berücksichtigt, dass eine spätere Sitzung noch Spenderhaar benötigen kann. Heute das Maximum zu entnehmen ist nicht automatisch das bessere Ergebnis." },
            { heading: "Der Haaransatz wird für die nächsten fünfzehn Jahre gezeichnet", body: "Höhe und Form richten sich nach Ihren Proportionen und dem wahrscheinlichen Fortgang des Verlusts, damit das Ergebnis auch mit den Jahren plausibel bleibt." },
            { heading: "Nachsorge gehört zur Behandlung", body: "PRP- und Hair-Meso-Begleitung ist für 12 Monate inklusive, denn der Schutz des Eigenhaars rund um die Grafts hält das Gesamtergebnis stabil." },
            { heading: "Dichteprüfung in Monat 12", body: "Das Ergebnis wird gegen den anfangs vereinbarten Plan geprüft. Jede Abweichung wird in einer Nachbesserung kostenfrei korrigiert." },
            { heading: "Fachärztliche Qualifikation", body: "Nader Farahwaschy – Facharzt für Chirurgie. Approbation als Arzt seit 2004; Facharztanerkennung für Chirurgie durch die Ärztekammer Berlin seit 2011. Die individuelle Eignung wird im persönlichen Beratungsgespräch beurteilt." }
          ]
        },
        faqHeading: "Häufige Fragen zur Haartransplantation in Berlin",
        faqs: [
          { q: "Was ist eine Haartransplantation?", a: "Eigene Haarfollikel werden aus einer Spenderzone an Hinterkopf und Seiten in schüttere oder kahle Bereiche verpflanzt. Die transplantierten Follikel behalten die Widerstandsfähigkeit der Spenderzone gegen hormonelle Ausdünnung." },
          { q: "FUE oder FUT — was machen Sie?", a: "Follicular Unit Extraction, Punch für Punch. Sie hinterlässt keine lineare Narbe und erlaubt weiterhin kurze Haare." },
          { q: "Wie viele Grafts brauche ich?", a: "Ein zurückweichender Haaransatz benötigt typischerweise 1.800–2.500, eine vollständige Tonsurauffüllung 3.000–4.500. Die Trichoskopie in der Beratung ergibt Ihre Zahl." },
          { q: "Bin ich zu jung für eine Haartransplantation?", a: "Unter 25 stabilisieren wir den Verlust meist zuerst medikamentös und transplantieren danach — sonst wird die Spenderzone für einen noch wandernden Haaransatz verbraucht." },
          { q: "Sieht der neue Haaransatz natürlich aus?", a: "Er wird nach Ihren Gesichtsproportionen und der Stirnbewegung gezeichnet, mit Einzelhaaren in der vordersten Reihe und Doppelgrafts dahinter." },
          { q: "Wie lange dauert der Tag?", a: "Sechs bis neun Stunden inklusive Pausen und Mittagessen, je nach Graftzahl." },
          { q: "Ist der Eingriff schmerzhaft?", a: "Er erfolgt in örtlicher Betäubung. Sie sind wach, sehen einen Film oder schlafen. In den ersten beiden Nächten Wundgefühl, das mit einfachen Schmerzmitteln gut beherrschbar ist." },
          { q: "Muss ich mir den Kopf rasieren?", a: "Das hängt von Technik, Areal und Haarlänge ab und wird in der Beratung festgelegt. Bei Frauen muss das Empfängerareal meist nicht rasiert werden." },
          { q: "Wann kann ich wieder arbeiten?", a: "Bürotätigkeit ab Tag 3–4 mit lockerer Kappe. Kundenkontakt ist ab Tag 10 angenehm, sobald die Rötung nachlässt." },
          { q: "Wann darf ich wieder trainieren?", a: "Spazieren ab Tag 3, leichtes Training ab Tag 10, schweres Heben und Schwimmen ab Woche 4." },
          { q: "Wann sehe ich Haare?", a: "Ausfall in Woche 2–6, erstes Wachstum in Monat 3–4, spürbare Dichte in Monat 8, Endergebnis in Monat 12–15." },
          { q: "Warum fallen die transplantierten Haare zuerst aus?", a: "Der Haarschaft fällt aus, der Follikel bleibt an Ort und Stelle. Diese Phase zwischen Woche 2 und 6 ist erwartet und kein Zeichen eines misslungenen Grafts." },
          { q: "Ist das Ergebnis dauerhaft?", a: "Die transplantierten Follikel stammen aus einer Spenderzone, die genetisch gegen hormonelle Ausdünnung resistent ist, und verhalten sich lebenslang wie Spenderhaar." },
          { q: "Brauche ich eine zweite Sitzung?", a: "Manchmal — bei größerem Areal, bei weiterem Verlust über die Jahre oder wenn ein Teil der Spenderzone bewusst in Reserve bleibt. Das wird geplant, nicht improvisiert." },
          { q: "Was passiert mit meiner Spenderzone?", a: "Sie wird in einem diffusen Muster entnommen, sodass die Dichte gleichmäßig und unsichtbar abnimmt. Nach zwei Wochen ist sie wieder vollständig bedeckt." },
          { q: "Bleiben Narben zurück?", a: "Hunderte punktförmige Heilungsstellen unter 1 mm, die innerhalb eines Monats aus Gesprächsdistanz unsichtbar sind. Eine lineare Narbe entsteht nicht." },
          { q: "Können Sie eine misslungene Transplantation korrigieren?", a: "Oft ja — durch Umverteilung der vordersten Reihe, Entfernen von Plug-Grafts und zusätzliche Dichte dahinter. Das braucht einen längeren Plan und eine realistische Einschätzung des verbliebenen Spenderhaars." },
          { q: "Lassen Frauen hier Haare transplantieren?", a: "Ja — bei frontalem Rückgang, verbreitertem Scheitel und Narben nach Operationen, meist ohne das Empfängerareal zu rasieren." },
          { q: "Brauche ich nach der OP weiterhin Medikamente?", a: "Meist ja, um das Eigenhaar rund um die Grafts zu schützen. Die Transplantation stoppt Ihr ursprüngliches Ausfallmuster nicht." },
          { q: "Was ist Haar-Mesotherapie?", a: "Eine Behandlung mit Vitaminen, Peptiden und Wachstumsfaktoren für die Kopfhaut, die vorhandene Follikel stärkt. Sie ergänzt die Transplantation, ersetzt sie nicht." },
          { q: "Was ist PRP Haar-Mesotherapie?", a: "Ihr eigenes plättchenreiches Plasma, in der Klinik aufbereitet und in die Kopfhaut injiziert. Typischerweise drei Sitzungen im Monatsabstand, danach Erhaltung." },
          { q: "Ist die Nachsorge inklusive?", a: "PRP- und Hair-Meso-Begleitung ist für 12 Monate nach dem Eingriff inklusive." },
          { q: "Was, wenn ein Graft nicht anwächst?", a: "Wir prüfen die Dichte in Monat 12. Jede Abweichung vom vereinbarten Plan wird in einer Nachbesserung kostenfrei korrigiert." },
          { q: "Welche Risiken gibt es?", a: "Möglich sind unter anderem Schwellung, Rötung, Krustenbildung, Infektion oder Follikulitis, vorübergehende Taubheit, vorübergehender Schockverlust von Eigenhaar, einzelne nicht anwachsende Grafts und – bei zu großer Entnahme – sichtbare Ausdünnung der Spenderzone." },
          { q: "Hilft eine Transplantation bei jeder Form von Haarausfall?", a: "Nein. Sie behandelt Areale, in denen Follikel fehlen, während die Spenderzone intakt ist. Diffuse Ausdünnung mit medizinischer Ursache wird zuerst abgeklärt, da die Transplantation die Ursache nicht behandelt." },
          { q: "Welche Betäubung wird verwendet?", a: "Örtliche Betäubung. Sie sind durchgehend wach; der Tag ist lang, aber nicht schmerzhaft." },
          { q: "Was kostet eine Haartransplantation bei AS Clinic Berlin?", a: "Die Kosten hängen von der Graftzahl ab, die aus der Trichoskopie stammt. Der konkrete Preis wird nach der persönlichen Untersuchung und vor dem Eingriff besprochen." },
          { q: "Wo kann ich eine Haartransplantation in Berlin durchführen lassen?", a: "AS Clinic führt FUE-Haartransplantationen am Kurfürstendamm 102 in Berlin-Charlottenburg durch. Vorab werden Spenderzone, Graftzahl, Haaransatz, Alternativen und individuelle Risiken beurteilt." }
        ],
        relatedHeading: "Passende Behandlungen in der AS Clinic Berlin",
        related: [
          { slug: "eyebrow-transplant", blurb: "Augenbrauentransplantation in Berlin: Einzelhaare, fast flach gesetzt, entlang jedes Brauenabschnitts." },
          { slug: "beard-transplant", blurb: "Barttransplantation in Berlin: feinere Punches, steilere Winkel, Dichte je Zone geplant." },
          { slug: "hair-meso", blurb: "Haar-Mesotherapie in Berlin: stärkt die Follikel, die noch vorhanden sind." },
          { slug: "prp-meso-hair", blurb: "PRP Haar-Mesotherapie in Berlin: eigenes plättchenreiches Plasma für die Kopfhaut." }
        ],
        ctaHeading: "Beratung zur Haartransplantation in Berlin",
        ctaBody: "Sie möchten wissen, wie viele Grafts Ihre Spenderzone tatsächlich zulässt, wo ein Haaransatz realistisch liegen kann und wie die zwölf Monate nach dem Eingriff aussehen? Vereinbaren Sie ein persönliches Beratungsgespräch bei der AS Clinic Berlin am Kurfürstendamm. Trichoskopie, Graftzahl, Design des Haaransatzes, Alternativen, Nachsorge und individuelle Risiken werden gemeinsam beurteilt.",
        disclaimer: {
          heading: "Medizinischer Hinweis",
          body: "Die Informationen auf dieser Seite dienen der allgemeinen Information über Haartransplantationen und ersetzen keine persönliche Untersuchung, individuelle Planung oder Risikoaufklärung. Graftzahlen, Zeitangaben und Erholungswerte sind Erfahrungswerte aus unserer Praxis; die für Sie geltende Zahl ergibt sich aus der Trichoskopie. Wenn ein Haarausfall eine medizinische Ursache haben kann, sollte diese vor der Planung eines ästhetischen Eingriffs abgeklärt werden."
        }
      },
      title: "Haartransplantation",
      metaTitle: "Haartransplantation Berlin: FUE bei AS Clinic | Kurfürstendamm",
      metaDescription: "FUE-Haartransplantation in Berlin bei AS Clinic am Kurfürstendamm: 1.800–4.500 Grafts, keine lineare Narbe, 12 Monate PRP- und Hair-Meso-Nachsorge. Beratung buchen.",
      heroKicker: "Haar · FUE-Transplantation",
      heroLead: "Einzelfollikel-Entnahme und -Einsetzung, mit einem Haaransatz nach Ihren Proportionen und einer Spenderzone, die als begrenzt behandelt wird.",
      imageAlt: "Der Haaransatz einer Patientin wird vor der Haartransplantation bei AS Clinic Berlin angezeichnet",
      chip: "1.800–4.500 Grafts · 6–9 Std. · örtliche Betäubung",
      sections: [
        { heading: "Was es ist", body: "Follicular Unit Extraction: Eigene Follikel werden Punch für Punch aus einer gegen hormonelle Ausdünnung resistenten Spenderzone in die schütter gewordenen Areale verpflanzt." },
        { heading: "Für wen es geeignet ist", body: "Erwachsene mit ausreichender Spenderzone und stabilem oder medikamentös stabilisiertem Ausfallmuster, die ein Ergebnis über 12–15 Monate akzeptieren." },
        { heading: "Ihr Behandlungstermin", body: "Trichoskopie und Graftzahl, Design des Haaransatzes im Spiegel abgestimmt, örtliche Betäubung, anschließend Entnahme und Einsetzen über einen Tag von etwa sechs bis neun Stunden." },
        { heading: "Ergebnis & Heilung", body: "Krusten fallen in den ersten Wochen ab, die transplantierten Haare fallen in Woche 2–6 aus, erstes Wachstum folgt in Monat 3–4, das Endergebnis in Monat 12–15." }
      ],
      faqs: [
        { q: "FUE oder FUT?", a: "Follicular Unit Extraction, Punch für Punch — keine lineare Narbe, kurze Frisuren bleiben möglich." },
        { q: "Wie viele Grafts brauche ich?", a: "Typischerweise 1.800–2.500 bei zurückweichendem Haaransatz und 3.000–4.500 bei vollständiger Tonsurauffüllung; die Trichoskopie ergibt Ihre Zahl." },
        { q: "Wann sehe ich Haare?", a: "Ausfall Woche 2–6, erstes Wachstum Monat 3–4, spürbare Dichte Monat 8, Endergebnis Monat 12–15." },
        { q: "Was, wenn ein Graft nicht anwächst?", a: "Die Dichte wird in Monat 12 geprüft; jede Abweichung vom vereinbarten Plan wird kostenfrei nachgebessert." }
      ]
    }
  }
};
