/** German-language privacy notice (Datenschutzerklärung), supplied verbatim by
 *  the clinic. It is a legal document: the wording is not paraphrased, shortened
 *  or translated. Renders through src/pages/datenschutz.astro.
 */
import type { LegalSection } from "./legal";

export const PRIVACY_UPDATED = "Stand: September 2026";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "verantwortlicher",
    number: 1,
    heading: "Verantwortlicher",
    blocks: [
      { type: "p", text: "Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:" },
      { type: "address", lines: ["ASClinic – Zentrum für moderne Haartransplantation", "Alireza Simaee", "Kurfürstendamm 102", "10711 Berlin", "Deutschland"] },
      { type: "p", text: "Telefon: +49 179 3902489" },
      { type: "p", text: "E-Mail: info@asclinic.de" }
    ]
  },
  {
    id: "allgemeine-hinweise",
    number: 2,
    heading: "Allgemeine Hinweise zur Datenverarbeitung",
    blocks: [
      { type: "p", text: "Der Schutz Ihrer personenbezogenen Daten ist uns besonders wichtig." },
      { type: "p", text: "Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden datenschutzrechtlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), des Bundesdatenschutzgesetzes (BDSG) und des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG)." },
      { type: "p", text: "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen." },
      { type: "p", text: "Gesundheitsdaten gehören zu den besonderen Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO und werden von uns mit besonderer Sorgfalt verarbeitet." }
    ]
  },
  {
    id: "ssl-verschluesselung",
    number: 3,
    heading: "SSL-/TLS-Verschlüsselung",
    blocks: [
      { type: "p", text: "Diese Website nutzt eine SSL-/TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen." },
      { type: "p", text: "Eine verschlüsselte Verbindung erkennen Sie insbesondere daran, dass die Adresse der Website mit „https://“ beginnt." },
      { type: "p", text: "Trotz angemessener technischer und organisatorischer Sicherheitsmaßnahmen kann bei der Datenübertragung über das Internet kein absoluter Schutz garantiert werden." }
    ]
  },
  {
    id: "hosting",
    number: 4,
    heading: "Hosting durch STRATO",
    blocks: [
      { type: "p", text: "Diese Website wird bei folgendem Anbieter gehostet:" },
      { type: "address", lines: ["STRATO GmbH", "Otto-Ostrowski-Straße 7", "10249 Berlin", "Deutschland"] },
      { type: "p", text: "STRATO stellt insbesondere die technische Infrastruktur, den Webspace und die für den Betrieb der Website erforderlichen Hosting-Leistungen bereit." },
      { type: "p", text: "Im Rahmen des Websitebetriebs können insbesondere folgende Daten verarbeitet werden:" },
      { type: "ul", items: ["IP-Adresse", "Datum und Uhrzeit des Zugriffs", "aufgerufene Seite bzw. Datei", "Browsertyp und Browserversion", "Betriebssystem", "Referrer-URL", "technische Verbindungs- und Kommunikationsdaten"] },
      { type: "p", text: "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sicheren, stabilen und technisch fehlerfreien Bereitstellung unserer Website." },
      { type: "p", text: "STRATO verarbeitet Daten im Rahmen seiner Hosting-Leistungen als Auftragsverarbeiter gemäß Art. 28 DSGVO." }
    ]
  },
  {
    id: "server-logfiles",
    number: 5,
    heading: "Server-Logfiles",
    blocks: [
      { type: "p", text: "Beim Aufruf unserer Website werden technische Zugriffsdaten in Server-Logfiles verarbeitet." },
      { type: "p", text: "Die Speicherung dient insbesondere der Gewährleistung der technischen Sicherheit, der Erkennung und Abwehr von Angriffen sowie der Fehleranalyse." },
      { type: "p", text: "IP-Adressen werden für Sicherheitszwecke grundsätzlich höchstens sieben Tage gespeichert bzw. entsprechend den technischen Vorgaben des Hostinganbieters anonymisiert." },
      { type: "p", text: "Eine Auswertung der Server-Logfiles zu Werbe- oder Profilingzwecken erfolgt nicht." },
      { type: "p", text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO." }
    ]
  },
  {
    id: "email",
    number: 6,
    heading: "E-Mail-Hosting und E-Mail-Kommunikation",
    blocks: [
      { type: "p", text: "Unsere E-Mail-Kommunikation, insbesondere über info@asclinic.de, wird über STRATO Mail bereitgestellt." },
      { type: "p", text: "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage sowie zur weiteren Kommunikation mit Ihnen." },
      { type: "p", text: "Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche oder vertragliche Maßnahmen oder Art. 6 Abs. 1 lit. f DSGVO für sonstige Kommunikation." },
      { type: "p", text: "Soweit Gesundheitsdaten betroffen sind, gelten zusätzlich die besonderen Voraussetzungen des Art. 9 DSGVO." }
    ]
  },
  {
    id: "kontaktformular",
    number: 7,
    heading: "Kontakt- und Beratungsformular",
    blocks: [
      { type: "p", text: "Auf unserer Website steht ein Formular zur Kontaktaufnahme bzw. zur Anfrage einer Beratung zur Verfügung." },
      { type: "p", text: "Dabei werden insbesondere folgende Angaben verarbeitet:" },
      { type: "ul", items: ["Ihr Name", "Telefonnummer", "Interessensgebiet"] },
      { type: "p", text: "Als Interessensgebiete können insbesondere gewählt werden:" },
      { type: "ul", items: ["Injektionen", "Haartransplantation", "Chirurgie"] },
      { type: "p", text: "Die Angaben werden ausschließlich zur Bearbeitung der konkreten Kontakt- oder Beratungsanfrage verwendet." },
      { type: "p", text: "Die Daten werden nicht für Newsletter, Werbung oder sonstige Marketingmaßnahmen verwendet." },
      { type: "p", text: "Die über das Formular übermittelten Informationen werden an unsere E-Mail-Adresse info@asclinic.de übermittelt." },
      { type: "p", text: "Die technische Verarbeitung des Formulars erfolgt über eine eigene Anwendung innerhalb der Astro-basierten Website. Für die Übermittlung des Formulars wird kein externer Formulardienst wie Formspree oder ein vergleichbarer Drittanbieter eingesetzt." },
      { type: "p", text: "Rechtsgrundlage für die Verarbeitung allgemeiner Kontaktdaten ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf die Anbahnung oder Durchführung einer Behandlung bzw. Dienstleistung gerichtet ist." },
      { type: "p", text: "Soweit die Verarbeitung auf einer Einwilligung beruht, ist Art. 6 Abs. 1 lit. a DSGVO Rechtsgrundlage." }
    ]
  },
  {
    id: "fotos",
    number: 8,
    heading: "Hochladen von Fotos zur Beratung",
    blocks: [
      { type: "p", text: "Im Rahmen bestimmter Beratungsanfragen besteht die Möglichkeit, Fotos des Kopfes, der Haare oder des Gesichts zu übermitteln." },
      { type: "p", text: "Diese Bilder werden ausschließlich zur Bearbeitung der jeweiligen Beratungsanfrage verwendet." },
      { type: "p", text: "Da solche Fotos im Zusammenhang mit einer medizinischen oder ästhetischen Anfrage Rückschlüsse auf den Gesundheitszustand einer Person ermöglichen können, behandeln wir diese Daten mit einem besonders hohen Schutzniveau." },
      { type: "p", text: "Die Verarbeitung erfolgt aufgrund Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit Art. 9 Abs. 2 lit. a DSGVO." },
      { type: "p", text: "Vor der Übermittlung ist eine entsprechende Datenschutzeinwilligung erforderlich." },
      { type: "p", text: "Die Fotos werden an info@asclinic.de übermittelt und ausschließlich zur Bearbeitung der konkreten Beratungsanfrage verwendet." },
      { type: "p", text: "Sofern aus der Anfrage kein Behandlungsverhältnis entsteht, werden die Fotos und die ausschließlich zu diesem Zweck erhobenen Beratungsdaten grundsätzlich spätestens 30 Tage nach endgültiger Bearbeitung der Anfrage gelöscht, soweit keine gesetzlichen Gründe einer Löschung entgegenstehen." },
      { type: "p", text: "Entsteht anschließend ein Behandlungsverhältnis und werden bestimmte Informationen für die medizinische Dokumentation benötigt, können die erforderlichen Informationen in die Patientenakte übernommen werden." }
    ]
  },
  {
    id: "einwilligung",
    number: 9,
    heading: "Einwilligung bei der Übermittlung sensibler Daten",
    blocks: [
      { type: "p", text: "Vor der Übermittlung personenbezogener Daten und hochgeladener Fotos wird der Nutzer auf die Datenschutzerklärung hingewiesen." },
      { type: "p", text: "Soweit eine Einwilligung erforderlich ist, erfolgt diese ausdrücklich und aktiv." },
      { type: "p", text: "Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden." },
      { type: "p", text: "Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt hiervon unberührt." }
    ]
  },
  {
    id: "eingangsbestaetigung",
    number: 10,
    heading: "Automatische Eingangsbestätigung",
    blocks: [
      { type: "p", text: "Nach dem Absenden einer Beratungsanfrage kann eine automatische E-Mail zur Bestätigung des Eingangs der Anfrage versendet werden." },
      { type: "p", text: "Die Bestätigung dient ausschließlich dazu, den Eingang der Anfrage zu bestätigen." },
      { type: "p", text: "Eine Nutzung der Kontaktdaten für Werbe- oder Marketingzwecke erfolgt hierdurch nicht." }
    ]
  },
  {
    id: "pabau",
    number: 11,
    heading: "Online-Terminbuchung und Patientenverwaltung mit Pabau",
    blocks: [
      { type: "p", text: "Für die Online-Terminbuchung sowie für die Patientenverwaltung setzen wir das Praxis- und Klinikmanagementsystem Pabau ein." },
      { type: "p", text: "Anbieter ist:" },
      { type: "address", lines: ["Hambrand Technology Limited", "trading as Pabau", "27 St Cuthbert’s", "Bedford", "MK40", "United Kingdom"] },
      { type: "p", text: "Wenn Sie auf unserer Website auf „Termin buchen“ klicken, werden Sie zur Terminbuchung über Pabau weitergeleitet." },
      { type: "p", text: "Vor dem aktiven Anklicken des Links wird das Pabau-Buchungssystem nicht als eingebettetes Buchungsformular innerhalb unserer Website geladen." },
      { type: "p", text: "Im Rahmen der Nutzung von Pabau können insbesondere folgende Daten verarbeitet werden:" },
      { type: "ul", items: ["E-Mail-Adresse", "gewünschte Behandlung bzw. Behandlungsart", "Geburtsdatum", "Termin- und Buchungsdaten", "medizinische Angaben", "Behandlungsinformationen", "Daten der Patientenakte", "Behandlungsdokumentationen"] },
      { type: "p", text: "Pabau wird von uns nicht nur für die Terminverwaltung, sondern auch für die Verwaltung von Patientendaten, CRM-Funktionen und die medizinische Behandlungsdokumentation eingesetzt." },
      { type: "p", text: "Pabau verarbeitet die Daten in unserem Auftrag als Auftragsverarbeiter im Sinne des Art. 28 DSGVO." },
      { type: "p", text: "Rechtsgrundlage für allgemeine Termin-, Kontakt- und Vertragsdaten ist Art. 6 Abs. 1 lit. b DSGVO." },
      { type: "p", text: "Soweit Gesundheitsdaten verarbeitet werden, erfolgt die Verarbeitung – abhängig vom jeweiligen Verarbeitungsvorgang – insbesondere auf Grundlage von Art. 9 Abs. 2 lit. a DSGVO aufgrund einer ausdrücklichen Einwilligung oder Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit den einschlägigen deutschen Vorschriften zur medizinischen Versorgung und Behandlung." },
      { type: "p", text: "Pabau ist ein im Vereinigten Königreich ansässiger Anbieter. Soweit Daten in ein Land außerhalb des Europäischen Wirtschaftsraums übermittelt werden, erfolgt eine Übermittlung nur unter Einhaltung der Anforderungen der Art. 44 ff. DSGVO, insbesondere auf Grundlage eines Angemessenheitsbeschlusses oder geeigneter Garantien wie Standardvertragsklauseln." },
      { type: "p", text: "Pabau kann im Rahmen seiner technischen Infrastruktur weitere vertraglich gebundene Unterauftragsverarbeiter einsetzen." }
    ]
  },
  {
    id: "patientenakten",
    number: 12,
    heading: "Patientenakten und Behandlungsdokumentation",
    blocks: [
      { type: "p", text: "Soweit ein Behandlungsverhältnis entsteht, werden behandlungsrelevante Daten in einer Patientenakte dokumentiert." },
      { type: "p", text: "Dazu können insbesondere gehören:" },
      { type: "ul", items: ["Anamnese", "medizinische Angaben", "Diagnosen und Befunde", "Behandlungsplanung", "Behandlungsmaßnahmen", "Behandlungsergebnisse", "Einwilligungen und Aufklärungen", "behandlungsrelevante Fotos", "ärztliche Dokumentationen"] },
      { type: "p", text: "Die Verarbeitung erfolgt zur Durchführung und Dokumentation der medizinischen Behandlung." },
      { type: "p", text: "Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b und lit. c DSGVO sowie Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit den einschlägigen gesetzlichen und berufsrechtlichen Vorschriften." },
      { type: "p", text: "Behandlungsakten werden grundsätzlich für die gesetzlich vorgeschriebene Dauer von zehn Jahren nach Abschluss der Behandlung aufbewahrt, soweit nicht aufgrund anderer gesetzlicher Vorschriften eine längere Aufbewahrung erforderlich ist." }
    ]
  },
  {
    id: "whatsapp",
    number: 13,
    heading: "WhatsApp",
    blocks: [
      { type: "p", text: "Auf unserer Website befindet sich ein direkter Link zu WhatsApp." },
      { type: "p", text: "Der WhatsApp-Dienst wird angeboten durch:" },
      { type: "address", lines: ["WhatsApp Ireland Limited", "Merrion Road", "Dublin 4", "D04 X2K5", "Irland"] },
      { type: "p", text: "Eine Verbindung zu WhatsApp wird erst hergestellt, wenn Sie den entsprechenden WhatsApp-Link aktiv anklicken bzw. den Dienst aufrufen." },
      { type: "p", text: "Bei Nutzung von WhatsApp verarbeitet WhatsApp personenbezogene Daten eigenverantwortlich nach den für den Dienst geltenden Datenschutzbestimmungen." },
      { type: "p", text: "WhatsApp kann personenbezogene Daten auch im Rahmen seiner globalen Infrastruktur verarbeiten." },
      { type: "p", text: "Wir verwenden WhatsApp ausschließlich als zusätzliche Möglichkeit zur allgemeinen Kontaktaufnahme." },
      { type: "p", text: "Bitte übermitteln Sie uns über WhatsApp keine medizinischen Unterlagen, Gesundheitsdaten oder Fotos zu medizinischen Beratungszwecken. Nutzen Sie hierfür die dafür vorgesehenen Kommunikations- bzw. Buchungswege." },
      { type: "p", text: "Wenn Sie uns über WhatsApp freiwillig kontaktieren, erfolgt die Verarbeitung der Kommunikation bei uns grundsätzlich auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit es um eine konkrete Anfrage zu unseren Leistungen geht." }
    ]
  },
  {
    id: "cookies",
    number: 14,
    heading: "Cookies und Consent-Management",
    blocks: [
      { type: "p", text: "Unsere Website verwendet technisch notwendige Technologien sowie – nur nach Ihrer vorherigen Einwilligung – Dienste für Analyse, Werbung und externe Medien." },
      { type: "p", text: "Beim erstmaligen Besuch unserer Website können Sie über unseren Consent-Banner entscheiden, welchen nicht notwendigen Verarbeitungsvorgängen Sie zustimmen." },
      { type: "p", text: "Nicht notwendige Dienste werden grundsätzlich erst aktiviert, nachdem Sie die entsprechende Einwilligung erteilt haben." },
      { type: "p", text: "Dies betrifft insbesondere:" },
      { type: "ul", items: ["Google Analytics", "Google Ads Conversion Tracking", "Google Maps", "eingebettete YouTube-Inhalte"] },
      { type: "p", text: "Rechtsgrundlage für das Speichern von oder den Zugriff auf Informationen auf Ihrem Endgerät ist, soweit eine Einwilligung erforderlich ist, § 25 Abs. 1 TDDDG." },
      { type: "p", text: "Die anschließende Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO." },
      { type: "p", text: "Ihre Einwilligung ist freiwillig und jederzeit mit Wirkung für die Zukunft widerrufbar." },
      { type: "p", text: "Über die dauerhaft erreichbaren „Cookie-Einstellungen“ bzw. „Datenschutzeinstellungen“ können Sie Ihre Auswahl jederzeit ändern oder widerrufen." },
      { type: "p", text: "Die Ablehnung nicht notwendiger Cookies darf die Nutzung der grundlegenden Funktionen unserer Website nicht verhindern." }
    ]
  },
  {
    id: "google-tag-manager",
    number: 15,
    heading: "Google Tag Manager",
    blocks: [
      { type: "p", text: "Wir verwenden den Google Tag Manager." },
      { type: "p", text: "Anbieter für Nutzer im Europäischen Wirtschaftsraum ist grundsätzlich:" },
      { type: "address", lines: ["Google Ireland Limited", "Gordon House", "Barrow Street", "Dublin 4", "Irland"] },
      { type: "p", text: "Der Google Tag Manager dient der technischen Verwaltung und Aussteuerung von Website-Tags." },
      { type: "p", text: "Über den Tag Manager werden insbesondere Google Analytics und Google Ads entsprechend der von Ihnen erteilten Einwilligung gesteuert." },
      { type: "p", text: "Nicht notwendige Analyse- oder Marketing-Tags werden erst nach der entsprechenden Einwilligung aktiviert." },
      { type: "p", text: "Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG, soweit ein Zugriff auf Informationen in Ihrem Endgerät erfolgt." }
    ]
  },
  {
    id: "google-analytics",
    number: 16,
    heading: "Google Analytics",
    blocks: [
      { type: "p", text: "Wir verwenden Google Analytics zur statistischen Analyse der Nutzung unserer Website." },
      { type: "p", text: "Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland." },
      { type: "p", text: "Google Analytics wird ausschließlich nach Ihrer vorherigen Einwilligung aktiviert." },
      { type: "p", text: "Google Analytics kann insbesondere Informationen verarbeiten über:" },
      { type: "ul", items: ["aufgerufene Seiten", "Zeitpunkt und Dauer von Websitebesuchen", "Browser- und Geräteinformationen", "technische Nutzungsdaten", "ungefähre geografische Informationen", "Interaktionen mit unserer Website"] },
      { type: "p", text: "Die Daten dienen ausschließlich der Analyse und Optimierung unseres Webangebots." },
      { type: "p", text: "Google Signals, Remarketing-Funktionen und personalisierte Werbung werden von uns nicht eingesetzt." },
      { type: "p", text: "Die Aufbewahrungsdauer für Nutzer- und Ereignisdaten in Google Analytics ist auf zwei Monate eingestellt." },
      { type: "p", text: "Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TDDDG." },
      { type: "p", text: "Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen." }
    ]
  },
  {
    id: "google-ads",
    number: 17,
    heading: "Google Ads Conversion Tracking",
    blocks: [
      { type: "p", text: "Wir nutzen Google Ads und das dazugehörige Conversion Tracking." },
      { type: "p", text: "Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland." },
      { type: "p", text: "Das Conversion Tracking ermöglicht uns zu erkennen, ob bestimmte Aktionen auf unserer Website nach dem Anklicken einer Google-Anzeige durchgeführt wurden." },
      { type: "p", text: "Die Verarbeitung findet ausschließlich nach Ihrer Einwilligung statt." },
      { type: "p", text: "Wir verwenden Google Ads nicht für Remarketing oder personalisierte Werbung." },
      { type: "p", text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG." },
      { type: "p", text: "Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden." }
    ]
  },
  {
    id: "google-drittland",
    number: 18,
    heading: "Datenübermittlungen bei Google-Diensten",
    blocks: [
      { type: "p", text: "Bei der Nutzung von Google-Diensten kann eine Verarbeitung von Daten auch außerhalb des Europäischen Wirtschaftsraums, insbesondere in den USA, nicht vollständig ausgeschlossen werden." },
      { type: "p", text: "Soweit eine Drittlandübermittlung erfolgt, erfolgt diese auf Grundlage der gesetzlichen Voraussetzungen der Art. 44 ff. DSGVO." },
      { type: "p", text: "Google LLC nimmt am EU-U.S. Data Privacy Framework teil. Darüber hinaus können – soweit erforderlich – weitere geeignete Garantien wie Standardvertragsklauseln eingesetzt werden." }
    ]
  },
  {
    id: "google-maps",
    number: 19,
    heading: "Google Maps",
    blocks: [
      { type: "p", text: "Auf unserer Website kann Google Maps eingebunden werden, um unseren Standort darzustellen." },
      { type: "p", text: "Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland." },
      { type: "p", text: "Google Maps wird erst geladen, nachdem Sie der entsprechenden Kategorie im Consent-Banner zugestimmt haben." },
      { type: "p", text: "Beim Laden von Google Maps können insbesondere IP-Adresse, Geräteinformationen und technische Nutzungsdaten an Google übertragen werden." },
      { type: "p", text: "Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG." },
      { type: "p", text: "Wenn Sie keine Einwilligung erteilen, wird Google Maps nicht geladen." }
    ]
  },
  {
    id: "youtube",
    number: 20,
    heading: "YouTube",
    blocks: [
      { type: "p", text: "Auf unserer Website sind Videos des Dienstes YouTube eingebunden." },
      { type: "p", text: "YouTube gehört zur Google-Unternehmensgruppe." },
      { type: "p", text: "Anbieter für Nutzer im Europäischen Wirtschaftsraum ist grundsätzlich Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland." },
      { type: "p", text: "YouTube-Videos werden erst nach Ihrer Einwilligung geladen." },
      { type: "p", text: "Vor Erteilung Ihrer Einwilligung wird keine aktive YouTube-Einbettung geladen." },
      { type: "p", text: "Beim Aktivieren eines YouTube-Videos können insbesondere technische Daten, IP-Adresse, Geräteinformationen und Informationen über die Nutzung des Videos an Google bzw. YouTube übertragen werden." },
      { type: "p", text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG." },
      { type: "p", text: "Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen." }
    ]
  },
  {
    id: "schriftarten",
    number: 21,
    heading: "Lokal eingebundene Schriftarten",
    blocks: [
      { type: "p", text: "Die auf unserer Website eingesetzten Schriftarten werden lokal über unsere eigene Hosting-Infrastruktur bereitgestellt." },
      { type: "p", text: "Es findet beim Laden der Schriftarten keine Verbindung zu Google Fonts oder einem anderen externen Font-Anbieter statt." }
    ]
  },
  {
    id: "social-media",
    number: 22,
    heading: "Social-Media-Links",
    blocks: [
      { type: "p", text: "Unsere Website enthält Links zu unseren Profilen auf sozialen Netzwerken." },
      { type: "p", text: "Es handelt sich grundsätzlich um einfache Links." },
      { type: "p", text: "Beim bloßen Besuch unserer Website werden über diese Links keine Social-Media-Plugins oder Feeds automatisch geladen." },
      { type: "p", text: "Erst wenn Sie einen solchen Link anklicken, verlassen Sie unsere Website und es gelten die Datenschutzbestimmungen des jeweiligen sozialen Netzwerks." }
    ]
  },
  {
    id: "search-console",
    number: 23,
    heading: "Google Search Console",
    blocks: [
      { type: "p", text: "Zur technischen Überwachung und Suchmaschinenoptimierung unserer Website verwenden wir Google Search Console." },
      { type: "p", text: "Google Search Console dient uns insbesondere zur Auswertung technischer Informationen über die Auffindbarkeit unserer Website in der Google-Suche." },
      { type: "p", text: "Hierfür wird kein zusätzlicher Tracking-Code zur Beobachtung einzelner Besucher durch uns auf der Website eingesetzt." }
    ]
  },
  {
    id: "newsletter",
    number: 24,
    heading: "Kein Newsletter",
    blocks: [
      { type: "p", text: "Derzeit bieten wir über diese Website keinen Newsletterversand an." },
      { type: "p", text: "Sollte künftig ein Newsletter eingeführt werden, wird diese Datenschutzerklärung vor Aktivierung des Dienstes entsprechend ergänzt und die hierfür erforderliche Einwilligung eingeholt." }
    ]
  },
  {
    id: "online-zahlung",
    number: 25,
    heading: "Keine Online-Zahlung",
    blocks: [
      { type: "p", text: "Über unsere Website werden derzeit keine direkten Online-Zahlungen über Dienste wie PayPal, Stripe oder Klarna abgewickelt." }
    ]
  },
  {
    id: "meta-pixel",
    number: 26,
    heading: "Kein Meta-/Facebook-Pixel",
    blocks: [
      { type: "p", text: "Auf unserer Website wird derzeit kein Meta Pixel bzw. Facebook Pixel eingesetzt." }
    ]
  },
  {
    id: "session-recording",
    number: 27,
    heading: "Keine Session-Recording- oder Heatmap-Dienste",
    blocks: [
      { type: "p", text: "Wir setzen derzeit keine Dienste wie Hotjar, Microsoft Clarity, Mouseflow oder vergleichbare Tools zur Aufzeichnung einzelner Nutzersitzungen oder Erstellung von Heatmaps ein." }
    ]
  },
  {
    id: "chatbot",
    number: 28,
    heading: "Kein KI-Chatbot",
    blocks: [
      { type: "p", text: "Auf unserer Website wird derzeit kein KI-basierter Chatbot eingesetzt." },
      { type: "p", text: "Sollte ein solcher Dienst künftig eingeführt werden, wird diese Datenschutzerklärung vor dessen Aktivierung entsprechend aktualisiert." }
    ]
  },
  {
    id: "empfaenger",
    number: 29,
    heading: "Empfänger personenbezogener Daten",
    blocks: [
      { type: "p", text: "Personenbezogene Daten werden grundsätzlich nur an Empfänger weitergegeben, soweit dies für die in dieser Datenschutzerklärung beschriebenen Zwecke erforderlich ist." },
      { type: "p", text: "Hierzu können insbesondere gehören:" },
      { type: "ul", items: ["Hosting- und E-Mail-Dienstleister", "technische Auftragsverarbeiter", "Pabau als Praxis- und Patientenmanagementsystem", "Google-Dienste nach entsprechender Einwilligung", "gesetzlich oder behördlich berechtigte Empfänger"] },
      { type: "p", text: "Eine Weitergabe von Kontaktdaten für fremde Werbezwecke erfolgt nicht." }
    ]
  },
  {
    id: "speicherdauer",
    number: 30,
    heading: "Speicherdauer",
    blocks: [
      { type: "p", text: "Wir speichern personenbezogene Daten grundsätzlich nur so lange, wie dies für den jeweiligen Zweck erforderlich ist." },
      { type: "p", text: "Für einzelne Verarbeitungsvorgänge gelten insbesondere folgende Grundsätze:" },
      { type: "p", text: "Server-Logfiles: grundsätzlich maximal sieben Tage für Sicherheitszwecke." },
      { type: "p", text: "Allgemeine Beratungsanfragen und hochgeladene Fotos ohne anschließendes Behandlungsverhältnis: grundsätzlich Löschung spätestens 30 Tage nach endgültiger Bearbeitung der Anfrage." },
      { type: "p", text: "Google-Analytics-Nutzer- und Ereignisdaten: zwei Monate entsprechend unserer Konfiguration." },
      { type: "p", text: "Patientenakten und medizinische Behandlungsdokumentation: grundsätzlich zehn Jahre nach Abschluss der Behandlung, soweit keine längere gesetzliche Aufbewahrungsfrist besteht." },
      { type: "p", text: "Soweit gesetzliche handels-, steuer-, berufs- oder medizinrechtliche Aufbewahrungspflichten bestehen, erfolgt die Löschung erst nach Ablauf der jeweiligen Frist." }
    ]
  },
  {
    id: "rechtsgrundlagen",
    number: 31,
    heading: "Rechtsgrundlagen",
    blocks: [
      { type: "p", text: "Je nach Verarbeitungsvorgang stützen wir die Verarbeitung insbesondere auf folgende Rechtsgrundlagen:" },
      { type: "ul", items: [
        "Art. 6 Abs. 1 lit. a DSGVO — Einwilligung",
        "Art. 6 Abs. 1 lit. b DSGVO — Durchführung eines Vertrages oder vorvertraglicher Maßnahmen",
        "Art. 6 Abs. 1 lit. c DSGVO — Erfüllung gesetzlicher Verpflichtungen",
        "Art. 6 Abs. 1 lit. f DSGVO — Wahrung berechtigter Interessen",
        "Art. 9 Abs. 2 lit. a DSGVO — ausdrückliche Einwilligung zur Verarbeitung besonderer Kategorien personenbezogener Daten",
        "Art. 9 Abs. 2 lit. h DSGVO — Verarbeitung für Zwecke der Gesundheitsvorsorge, medizinischen Diagnostik oder Behandlung",
        "§ 22 BDSG — Verarbeitung besonderer Kategorien personenbezogener Daten im Gesundheitsbereich, soweit die gesetzlichen Voraussetzungen erfüllt sind."
      ] }
    ]
  },
  {
    id: "ihre-rechte",
    number: 32,
    heading: "Ihre Rechte",
    blocks: [
      { type: "p", text: "Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere folgende Rechte:" },
      { type: "ul", items: [
        "Recht auf Auskunft gemäß Art. 15 DSGVO",
        "Recht auf Berichtigung gemäß Art. 16 DSGVO",
        "Recht auf Löschung gemäß Art. 17 DSGVO",
        "Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO",
        "Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO",
        "Recht auf Widerspruch gemäß Art. 21 DSGVO",
        "Recht auf Widerruf einer erteilten Einwilligung gemäß Art. 7 Abs. 3 DSGVO"
      ] },
      { type: "p", text: "Ein Widerruf wirkt für die Zukunft. Die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung bleibt unberührt." },
      { type: "p", text: "Zur Ausübung Ihrer Rechte können Sie uns unter info@asclinic.de kontaktieren." }
    ]
  },
  {
    id: "widerspruchsrecht",
    number: 33,
    heading: "Widerspruchsrecht",
    blocks: [
      { type: "p", text: "Soweit personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen." },
      { type: "p", text: "Eine Verarbeitung zu Direktwerbezwecken auf Grundlage der über unsere Beratungsformulare erhobenen Daten findet derzeit nicht statt." }
    ]
  },
  {
    id: "beschwerderecht",
    number: 34,
    heading: "Beschwerderecht bei der Aufsichtsbehörde",
    blocks: [
      { type: "p", text: "Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren." },
      { type: "p", text: "Für einen in Berlin ansässigen Verantwortlichen ist insbesondere folgende Behörde zuständig:" },
      { type: "address", lines: ["Berliner Beauftragte für Datenschutz und Informationsfreiheit", "Alt-Moabit 59–61", "10555 Berlin", "Deutschland"] },
      { type: "p", text: "Telefon: +49 30 13889-0" },
      { type: "p", text: "E-Mail: mailbox@datenschutz-berlin.de" }
    ]
  },
  {
    id: "aenderungen",
    number: 35,
    heading: "Änderungen dieser Datenschutzerklärung",
    blocks: [
      { type: "p", text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich gesetzliche Vorgaben, unsere Website, eingesetzte Technologien oder unsere Datenverarbeitungsprozesse ändern." },
      { type: "p", text: "Es gilt die jeweils auf dieser Website veröffentlichte aktuelle Fassung." }
    ]
  }
];
