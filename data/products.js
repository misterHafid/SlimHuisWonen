/**
 * EAN-codes voor bol.com knoppen:
 * Voeg per product toe: ean: "1234567890123"
 * EAN vind je op bol.com in de URL (/p/naam/EAN/) of in productspecificaties.
 * Laat het veld weg of zet "" als je de EAN nog niet weet → geen bol.com knop.
 */
export const products = [
  /* =========================
     SLIMME VERLICHTING
  ========================== */

  {
    slug: "philips-hue-white-ambiance-starterkit",
    ean: "8718696904503",
    brand: "Philips Hue",
    name: "Philips Hue White Ambiance Starterkit",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-white-ambiance.png",
    featured: true,
    description:
      "Complete starterkit met slimme lampen en bridge. Ideaal om te starten met slimme verlichting.",
    features: [
      "Bediening via app en spraak",
      "Werkt met Alexa, Google en Siri",
      "Uitbreidbaar met extra lampen",
    ],
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561477934&a=2855887&m=85161",
    rating: 4.7,
    priceHint: "€70 – €85",
    priceLastUpdated: "april 2026",
    pros: ["Volledig ecosysteem uitbreidbaar", "Stabiele Zigbee verbinding", "Werkt met alle grote platforms"],
    cons: ["Duurder dan wifi-alternatieven", "Bridge vereist voor volledige functionaliteit"],
    forWho: ["Voor wie serieus wil beginnen met slimme verlichting", "Voor Zigbee-gebruikers die willen uitbreiden"],
    personalNote: "De beste starterkit als je serieus een slim huis wilt bouwen. De bridge maakt automatiseringen zonder internet mogelijk.",
    youtubeUrl: "https://www.youtube.com/watch?v=wm9IsHKN-ZQ",
  },

  {
    slug: "philips-hue-white-e27",
    ean: "8719514288232",
    brand: "Philips Hue",
    name: "Philips Hue White E27 (losse lamp)",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-white.png",
    description:
      "Losse slimme E27 lamp met warm wit licht, dimbaar en app-gestuurd.",
    features: ["Warm wit licht", "Dimbaar", "Werkt met Hue Bridge"],
    affiliateUrl: "https://www.amazon.nl/dp/B09TCNXYXJ?tag=slimhuiswonen-21",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/iUsm0cBeMiA",
  },

  {
    slug: "philips-hue-color-ambiance-e27",
    ean: "8719514291171",
    brand: "Philips Hue",
    name: "Philips Hue Color Ambiance E27",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-color-ambiance.png",
    description:
      "Slimme lamp met wit én gekleurd licht, bedienbaar via Bluetooth of Hue Bridge.",
    features: ["16 miljoen kleuren", "Dimbaar", "Bluetooth & Bridge"],
    affiliateUrl: "https://www.amazon.nl/dp/B099P3CP1K?tag=slimhuiswonen-21",
    priceHint: "€35 – €45",
    priceLastUpdated: "april 2026",
    pros: ["16 miljoen kleuren", "Werkt via Bluetooth zonder bridge"],
    cons: ["Bridge nodig voor automatiseringen", "Duurder dan kleurlampen van andere merken"],
    forWho: ["Voor wie kleurverandering en sfeerverlichting wil", "Voor Hue-gebruikers die kleuren willen toevoegen"],
    personalNote: "Prima keuze als je al een Hue Bridge hebt. Via Bluetooth werkt hij ook solo, maar automatiseringen werken beter met bridge.",
    youtubeUrl: "https://www.youtube.com/shorts/mwye3iuxo7Q",
  },

  {
    slug: "philips-hue-lightstrip-plus",
    ean: "8721103087812",
    brand: "Philips Hue",
    name: "Philips Hue Lightstrip Plus",
    category: "slimme-verlichting",
    image: "/images/products/philips-lightstrip-plus.png",
    description:
      "Flexibele LED-strip voor indirecte verlichting, uitbreidbaar en dimbaar.",
    features: ["Uitbreidbaar", "Wit & kleur", "Hue ecosysteem"],
    affiliateUrl: "https://www.amazon.nl/dp/B088RX9CSZ?tag=slimhuiswonen-21",
    priceHint: "€55 – €70",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/b8WqkwpsRM8",
  },

  {
    slug: "govee-rgbic-ledstrip",
    ean: "6974316999911",
    brand: "Govee",
    name: "Govee RGBIC Pro LED Strip (5 m)",
    category: "slimme-verlichting",
    image: "/images/products/govee-rgbic-ledstrip.png",
    description:
      "Betaalbare RGBIC LED-strip met app-bediening en muzieksynchronisatie.",
    features: ["RGBIC", "Muzieksync", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B09BN2PSR8?tag=slimhuiswonen-21",
    priceHint: "€20 – €30",
    priceLastUpdated: "april 2026",
    pros: ["Betaalbaar", "Geen hub nodig", "Kleurverandering per segment (RGBIC)"],
    cons: ["Eigen Govee-app vereist", "Beperkte smart home integratie"],
    forWho: ["Voor wie sfeerverlichting wil zonder hoge kosten", "Voor gamers en decoratieve toepassingen"],
    personalNote: "Sterk in prijs-kwaliteit voor decoratieve toepassingen. Niet ideaal als je volledige smart home integratie wilt.",
    youtubeUrl: "https://www.youtube.com/shorts/h43CHLmeEXc",
  },

  {
    slug: "tapo-l530e",
    ean: "6935364006167",
    brand: "TP-Link Tapo",
    name: "Tapo L530E Slimme Wi-Fi Lamp (2-pack)",
    category: "slimme-verlichting",
    image: "/images/products/tp-link-tapo-l530e.png",
    description:
      "Slimme Wi-Fi lampen met kleur en wit licht, geen hub nodig.",
    features: ["Wi-Fi", "Kleur & wit", "Alexa & Google"],
    affiliateUrl: "https://www.amazon.nl/dp/B08QRQQ53T?tag=slimhuiswonen-21",
    priceHint: "€18 – €25",
    priceLastUpdated: "april 2026",
    pros: ["Kleur en wit licht", "Geen hub nodig", "Alexa & Google Home"],
    cons: ["Wifi-belasting bij veel lampen", "App minder uitgebreid dan Hue"],
    forWho: ["Voor starters die betaalbaar willen beginnen", "Voor wie kleur wil zonder Hue-investering"],
    personalNote: "Goede instapkeuze. Werkt prima voor eenvoudig gebruik, maar minder geschikt als basis voor een groter smart home.",
    youtubeUrl: "https://www.youtube.com/shorts/ISkg6oerWgE",
  },

  {
    slug: "innr-zigbee-e27",
    ean: "8718781555108",
    brand: "Innr",
    name: "Innr Zigbee E27 LED (4-pack)",
    category: "slimme-verlichting",
    image: "/images/products/innr-zigbee-e27.png",
    description:
      "Zigbee slimme lampen, compatibel met Philips Hue en SmartThings.",
    features: ["Zigbee", "Dimbaar", "Warm wit"],
    affiliateUrl: "https://www.amazon.nl/dp/B0CHJQDRSY?tag=slimhuiswonen-21",
    priceHint: "€40 – €55",
    priceLastUpdated: "april 2026",
    pros: ["Compatibel met Philips Hue Bridge", "Zigbee — stabiel en energiezuinig", "Warm wit licht"],
    cons: ["Geen kleuren", "Vereist een Zigbee hub"],
    forWho: ["Voor Hue-gebruikers die betaalbaar willen uitbreiden", "Voor Zigbee-enthousiastelingen"],
    personalNote: "Slimme keuze als je al een Hue Bridge of Zigbee hub hebt en wil uitbreiden zonder de Hue-prijs te betalen.",
    youtubeUrl: "https://www.youtube.com/shorts/VbaTma08sMc",
  },

  {
    slug: "tapo-l510e",
    ean: "6935364030988",
    brand: "TP-Link Tapo",
    name: "Tapo L510E Slimme Wi-Fi Lamp",
    category: "slimme-verlichting",
    image: "/images/products/tapo-l510e.png",
    description: "Dimbare slimme Wi-Fi lamp zonder hub.",
    features: ["Wi-Fi", "Dimbaar", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B087RZVBQW?tag=slimhuiswonen-21",
    priceHint: "€10 – €15",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/Up756rCbJkw",
  },

  /* =========================
     SENSOREN
  ========================== */

  {
    slug: "aqara-deur-raamsensor-p2",
    ean: "6970504219649",
    brand: "Aqara",
    name: "Aqara Deur- & Raamsensor",
    category: "sensoren",
    image: "/images/products/aqara-deur-en-raamsensor-p2.png",
    description: "Zigbee contactsensor voor deuren en ramen.",
    features: ["Zigbee", "Compact", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    pros: ["Compact en betrouwbaar", "Lage batterijverbruik", "Werkt met Homey, Home Assistant en HomeKit"],
    cons: ["Vereist Zigbee hub", "Geen wifi versie"],
    forWho: ["Voor wie automatisch wil weten of ramen/deuren open zijn", "Voor beveiligingsautomatiseringen"],
    personalNote: "Één van de meest gebruikte sensoren in mijn eigen smart home. Klein, stil en zeer betrouwbaar.",
    youtubeUrl: "https://www.youtube.com/shorts/j2NIXDy3yI8",
  },

  {
  slug: "eve-motion-matter-bewegingssensor",
  name: "Eve Motion (Matter)",
  brand: "Eve",
  category: "sensoren",
  image: "/images/products/eve-motion-matter-bewegingssensor.png",
  description:
    "Slimme bewegingssensor met Matter en Thread ondersteuning.",
  features: ["Bewegingsdetectie", "Matter", "Thread", "Automatisering"],
  affiliateUrl:
    "https://www.amazon.nl/Eve-Motion-Matter-bewegingssensor-automatische/dp/B0BZJLJZRM?tag=slimhuiswonen-21",
  priceHint: "€35 – €42",
  priceLastUpdated: "april 2026",
  pros: ["Matter + Thread: toekomstbestendig", "Volledig lokaal — geen cloud", "Werkt met Apple Home, Google Home, Home Assistant"],
  cons: ["Duurder dan wifi-alternatieven", "Thread vereist een Thread Border Router"],
  forWho: ["Voor Apple-gebruikers die maximale privacy willen", "Voor wie investeert in een toekomstbestendig smart home"],
  personalNote: "De beste keuze als je al een Matter-compatibele hub hebt. Matter + Thread zorgt voor ultralage latency en werkt zonder internet.",
  youtubeUrl: "https://www.youtube.com/watch?v=MwK6XCo_5JY",
},

  {
    slug: "aqara-fp2-aanwezigheidssensor",
  ean: "6970504219663",
    brand: "Aqara",
    name: "Aqara FP2 Aanwezigheidssensor",
    category: "sensoren",
    image: "/images/products/aqara-fp2.png",
    description:
      "Geavanceerde mmWave aanwezigheidssensor met zone-detectie.",
    features: ["mmWave radar", "Zone-detectie", "Zeer nauwkeurig"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BXWZMQJ3?tag=slimhuiswonen-21",
    priceHint: "€50 – €60",
    priceLastUpdated: "april 2026",
    pros: ["Zone-detectie: meerdere zones in één ruimte", "Detecteert aanwezigheid ook zonder beweging", "Zeer nauwkeurig (mmWave radar)"],
    cons: ["Duurder dan gewone bewegingssensoren", "Vereist Zigbee hub", "Configuratie vraagt meer kennis"],
    forWho: ["Voor wie nooit een lamp wil die onterecht uitgaat terwijl je er nog bent", "Voor geavanceerde automatiseringen met zone-detectie"],
    personalNote: "De Aqara FP2 is een gamechanger voor verlichting op basis van aanwezigheid. Normale sensoren detecteren alleen beweging — de FP2 detecteert of je er nog bent, ook als je stilzit.",
    youtubeUrl: "https://www.youtube.com/shorts/LPven_LKoT8",
  },

  {
    slug: "aqara-temperatuur-rv-t1",
    ean: "0192784001264",
    brand: "Aqara",
    name: "Aqara Temperatuur & RV Sensor T1",
    category: "sensoren",
    image: "/images/products/aqara-temperatuur-rv-sensor.png",
    description:
      "Temperatuur- en luchtvochtigheidssensor voor slimme automatiseringen.",
    features: ["Temperatuur", "Luchtvochtigheid", "Zigbee"],
    affiliateUrl: "https://www.amazon.nl/dp/B0DM23Q1VB?tag=slimhuiswonen-21",
    priceHint: "€14 – €18",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/2gnel7Aku3c",
  },

  {
    slug: "tapo-t110",
    ean: "4897098682951",
    brand: "TP-Link Tapo",
    name: "Tapo T110 Contactsensor",
    category: "sensoren",
    image: "/images/products/tapo-t100-contactsensor.png",
    description:
      "Contactsensor voor deuren en ramen binnen het Tapo ecosysteem.",
    features: ["Deur / raam detectie", "Slimme meldingen", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BF5MC9QX?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=44127004388&a=2855887&m=85161",
    priceHint: "€12 – €15",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/rUPcVT878V4",
  },

  {
    slug: "aqara-waterleksensor-t1",
    ean: "6975833352142",
    brand: "Aqara",
    name: "Aqara Waterleksensor T1",
    category: "sensoren",
    image: "/images/products/aqara-waterleksensor.png",
    description: "Detecteert waterlekken en waarschuwt direct via app.",
    features: ["Waterdetectie", "Zigbee", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0DWXHMFQS?tag=slimhuiswonen-21",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/sKgjw-64WVg",
  },

  {
    slug: "tapo-t315",
    ean: "4897098682401",
    brand: "TP-Link Tapo",
    name: "Tapo T315 Temperatuur & Luchtvochtigheid",
    category: "sensoren",
    image: "/images/products/tapo-t315-temperatuur-en-luchtvochtigheid.png",
    description:
      "Slimme temperatuur- en luchtvochtigheidsmeter met display.",
    features: ["Temperatuur", "Luchtvochtigheid", "Display"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BNYSVV3J?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38840443808&a=2855887&m=85161",
    priceHint: "€18 – €25",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/96W-aKT8vPk",
  },

  {
    slug: "aqara-vibratiesensor",
    ean: "6975833357789",
    brand: "Aqara",
    name: "Aqara Vibratiesensor",
    category: "sensoren",
    image: "/images/products/aqara-vibratie-sensor.png",
    description: "Detecteert trillingen, kantelen en schokken.",
    features: ["Trilling detectie", "Kantelen", "Schokken"],
    affiliateUrl: "https://www.amazon.nl/dp/B07PJT939B?tag=slimhuiswonen-21",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/dwRf4hPIUEM",
  },

    /* =========================
     SLIMME DEURBELLEN
  ========================== */

  {
    slug: "ring-video-deurbel",
    ean: "0840268997984",
    brand: "Ring",
    name: "Ring Video Deurbel (batterij)",
    category: "slimme-deurbellen",
    image: "/images/products/ring-videodeurbel-batterij.png",
    description: "Slimme videodeurbel met live beeld en meldingen.",
    features: ["Live beeld", "Meldingen", "Smartphone bediening"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BZWQP9Z1?tag=slimhuiswonen-21",
    priceHint: "€85 – €100",
    priceLastUpdated: "april 2026",
    pros: ["Grote naamsbekendheid", "Eenvoudige installatie", "Maandelijks gratis opslag inbegrepen"],
    cons: ["Cloudopslag na gratis periode betaald", "Beperkte smart home integratie buiten Ring/Amazon"],
    forWho: ["Voor wie geen bedrading wil aanpassen", "Voor Amazon Alexa gebruikers"],
    personalNote: "Goede keuze voor wie simpel wil beginnen. Wil je meer privacy of smart home integratie, kijk dan ook naar Aqara G410 of Reolink.",
    youtubeUrl: "https://www.youtube.com/shorts/_Oz6c6BiMjo",
  },

  /* =========================
     SLIMME THERMOSTATEN
  ========================== */

  {
    slug: "google-nest-thermostaat",
    brand: "Google Nest",
    name: "Google Nest Thermostaat",
    category: "slimme-thermostaten",
    image: "/images/products/google-thermostaat.png",
    description: "Slimme thermostaat die leert van je leefpatroon.",
    features: ["Zelflerend", "Energie besparen", "Google Home"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BXRYLMCC?tag=slimhuiswonen-21",
    priceHint: "€110 – €130",
    priceLastUpdated: "april 2026",
    pros: ["Leert van je schema en past zich aan", "Energierapport via app", "Werkt met Google Home, Alexa en HomeKit"],
    cons: ["Alleen interessant voor Google-gebruikers", "Niet compatibel met alle ketelmerken"],
    forWho: ["Voor Google Home gebruikers die energie willen besparen", "Voor wie een designthermostaat zoekt"],
    personalNote: "Strak design en slimme functies, maar controleer eerst of hij werkt met jouw ketel. Tado en Netatmo zijn bredere alternatieven.",
    youtubeUrl: "https://www.youtube.com/shorts/ddghtqKnuBw",
  },

  {
    slug: "slimme-thermostaat-combiketel",
    ean: "8721352852360",
    brand: "Universeel",
    name: "Slimme Thermostaat voor Combiketel",
    category: "slimme-thermostaten",
    image: "/images/products/slimme-thermostaat-combiketel.png",
    description: "Universele slimme thermostaat voor cv-ketels.",
    features: ["Geschikt voor combiketel", "Energie besparen", "Slim schema"],
    affiliateUrl: "https://www.amazon.nl/dp/B0FHWDBYTF?tag=slimhuiswonen-21",
    priceHint: "€55 – €75",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=-xF6Ok9YNsg",
  },

  {
    slug: "tapo-ke100-kit",
    ean: "4897098688588",
    brand: "TP-Link",
    name: "TP-Link KE100 KIT Radiatorknop",
    category: "slimme-thermostaten",
    image: "/images/products/tp-link-ke100-radiatorknop.png",
    description: "Slimme radiatorknoppen met hub voor energiebesparing.",
    features: ["Radiatorknoppen", "Hub inbegrepen", "Energie besparen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0CKWFVQZQ?tag=slimhuiswonen-21",
    priceHint: "€50 – €65",
    priceLastUpdated: "april 2026",
    pros: ["Hub inbegrepen", "Energiebesparing per radiator", "App-bediening"],
    cons: ["Vereist Tapo hub", "Minder uitgebreid dan Tado"],
    forWho: ["Voor wie per kamer wil regelen zonder dure installatie"],
    youtubeUrl: "https://www.youtube.com/shorts/G1OlrOdJsX0",
  },

  /* =========================
     SLIMME STEKKERS
  ========================== */

  {
    slug: "tapo-p115",
    ean: "4897098687406",
    brand: "TP-Link Tapo",
    name: "TP-Link Tapo P115 Slimme Stekker",
    category: "slimme-stekkers",
    image: "/images/products/tp-link-tapo-p115-stekker.png",
    description: "Compacte slimme stekker met energiemeting.",
    features: ["Energieverbruik inzicht", "Wi-Fi", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B09ZBGWYH9?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561532010&a=2855887&m=85161",
    rating: 4.6,
    priceHint: "€12 – €15",
    priceLastUpdated: "april 2026",
    pros: ["Realtime energiemeting", "Compact", "Geen hub nodig"],
    cons: ["Alleen binnen Tapo-app", "Energiemeting minder nauwkeurig dan Shelly"],
    forWho: ["Voor wie wil zien hoeveel een apparaat verbruikt", "Voor gebruik met timers en slimme schema's"],
    personalNote: "Mijn favoriete budget-stekker voor energiemeting. Voor €13 krijg je verrassend veel functionaliteit.",
    youtubeUrl: "https://www.youtube.com/shorts/l6WrOy4wRhU",
  },

  {
    slug: "tapo-p110",
    ean: "4897098682432",
    brand: "TP-Link Tapo",
    name: "TP-Link Tapo P110 Slimme Stekker",
    category: "slimme-stekkers",
    image: "/images/products/tapo-p110.png",
    description: "Populaire slimme stekker met realtime energiemeting.",
    features: ["Realtime energiemeting", "Timers", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B09BFT7NZJ?tag=slimhuiswonen-21",
    rating: 4.7,
    priceHint: "€10 – €14",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/L5fLN4e77m8",
  },

  {
    slug: "eve-energy",
    ean: "4260195392328",
    brand: "Eve",
    name: "Eve Energy (Matter / Thread)",
    category: "slimme-stekkers",
    image: "/images/products/eve-energy-matter-thread.png",
    description: "Premium slimme stekker met Matter en Thread.",
    features: ["Matter", "Thread", "Volledig lokaal"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BYTB11J3?tag=slimhuiswonen-21",
    rating: 4.5,
    priceHint: "€35 – €42",
    priceLastUpdated: "april 2026",
    pros: ["Matter + Thread: breed compatibel", "Volledig lokaal — geen cloud", "Nauwkeurige energiemeting"],
    cons: ["Duurder dan wifi-alternatieven", "Thread Border Router vereist voor Thread"],
    forWho: ["Voor wie toekomstbestendig wil werken met Matter", "Voor Apple Home en Home Assistant gebruikers"],
    personalNote: "De premium keuze in slimme stekkers. Als je al in Matter investeert, is Eve Energy de logische keuze — betrouwbaar en volledig lokaal.",
    youtubeUrl: "https://www.youtube.com/watch?v=ltf25fzyS0o",
  },

  {
    slug: "philips-hue-smart-plug",
    ean: "8719514342309",
    brand: "Philips Hue",
    name: "Philips Hue Smart Plug",
    category: "slimme-stekkers",
    image: "/images/products/philips-hue-smartplug.png",
    description: "Slimme stekker binnen het Hue ecosysteem.",
    features: ["Hue integratie", "Bluetooth", "Bridge optioneel"],
    affiliateUrl: "https://www.amazon.nl/dp/B09CV7QQKB?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561531997&a=2855887&m=85161",
    priceHint: "€25 – €32",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=SQ3ClKGRbq8",
  },

  {
    slug: "philips-hue-smart-plug-combipack",
    ean: "8719327502785",
    brand: "Philips Hue",
    name: "Philips Hue Smart Plug + Dimmer Switch",
    category: "slimme-stekkers",
    image: "/images/products/philips-hue-smart-plug-combipack.png",
    description: "Combipack met slimme stekker en dimmer.",
    features: ["Dimmer switch", "Hue ecosysteem"],
    affiliateUrl: "https://www.amazon.nl/dp/B09QP98F9W?tag=slimhuiswonen-21",
    priceHint: "€38 – €48",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=SQ3ClKGRbq8",
  },

  {
    slug: "innr-zigbee-outdoor-smart-plug",
    ean: "8718781556273",
    brand: "Innr",
    name: "Innr Zigbee Outdoor Smart Plug",
    category: "slimme-stekkers",
    image: "/images/products/innr-zigbee-smart-plug.png",
    description: "Slimme stekker voor buitengebruik.",
    features: ["IP54", "Zigbee repeater"],
    affiliateUrl: "https://www.amazon.nl/dp/B0FL83D4DS?tag=slimhuiswonen-21",
    priceHint: "€25 – €32",
    priceLastUpdated: "april 2026",
    pros: ["IP54 — geschikt voor buiten", "Zigbee repeater ingebouwd", "Hue Bridge compatibel"],
    cons: ["Vereist Zigbee hub", "Iets groter dan binnenmodellen"],
    forWho: ["Voor wie buiten slimme apparaten wil schakelen", "Voor kerstverlichting of tuinverlichting"],
    youtubeUrl: "https://www.youtube.com/watch?v=EZeoW8ZK2vs",
  },

  {
    slug: "switchbot-matter-plug-mini",
    ean: "0810150540291",
    brand: "SwitchBot",
    name: "SwitchBot Matter Plug Mini",
    category: "slimme-stekkers",
    image: "/images/products/switchbot-matter-plug-mini.png",
    description:
      "Matter slimme stekker met energiemonitoring en brede platformondersteuning.",
    features: ["Matter", "Energiemonitoring", "Wi-Fi & Bluetooth"],
    affiliateUrl:
      "https://www.amazon.nl/SwitchBot-Energiemonitoring-Bluetooth-Compatibel-HomeAssistant/dp/B0FFN2FKD6?tag=slimhuiswonen-21",
    priceHint: "€20 – €28",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=A7iH-PR5By4",
  },

  {
    slug: "aqara-smart-plug",
    ean: "6970504210646",
    brand: "Aqara",
    name: "Aqara Smart Plug",
    category: "slimme-stekkers",
    image: "/images/products/aqara-smart-plug.png",
    description:
      "Zeer stabiele Zigbee-stekker. Werkt via een Aqara hub en is perfect voor automatiseringen in HomeKit, Home Assistant of Homey.",
    features: ["Zigbee 3.0", "Vereist hub", "Automatiseringen"],
    affiliateUrl:
      "https://www.amazon.nl/Aqara-timerstand-spraakbediening-Assistant-SmartThings/dp/B087M8LF63?tag=slimhuiswonen-21",
    priceHint: "€20 – €28",
    priceLastUpdated: "april 2026",
    pros: ["Zeer stabiele Zigbee verbinding", "Werkt met HomeKit, Home Assistant en Homey", "Nauwkeurige energiemeting"],
    cons: ["Vereist Aqara hub of compatibele Zigbee hub", "Iets grotere steekplug"],
    forWho: ["Voor Zigbee-gebruikers die maximale stabiliteit willen", "Voor HomeKit gebruikers die Zigbee-stekker zoeken"],
    personalNote: "De meest stabiele Zigbee-stekker die ik heb gebruikt. Ideaal als je al een Aqara hub hebt.",
    youtubeUrl: "https://www.youtube.com/watch?v=eUS_OWHaJAs",
  },

  /* =========================
     EXTRA SLIMME DEURBELLEN
  ========================== */

  {
    slug: "aqara-doorbell-g410-grey",
    ean: "6975833358397",
    brand: "Aqara",
    name: "Aqara Video Doorbell G410 (Wit)",
    category: "slimme-deurbellen",
    image: "/images/products/aqara-doorbell-g410-grey.png",
    description:
      "Bedrade of draadloze slimme deurbel in het wit met 2K-beeld, ingebouwde Matter hub en HomeKit Secure Video.",
    features: ["2K", "Matter", "Bedraad / Accu"],
    affiliateUrl:
      "https://www.amazon.nl/Aqara-ingebouwde-Draadloos-Compatibel-Assistant/dp/B0F6CJF9M9?tag=slimhuiswonen-21",
    priceHint: "€95 – €115",
    priceLastUpdated: "april 2026",
    pros: ["2K beeldkwaliteit", "Matter hub ingebouwd", "HomeKit Secure Video, geen abonnement nodig"],
    cons: ["Premium prijs", "Installatie iets complexer dan Ring"],
    forWho: ["Apple HomeKit gebruikers die privacy belangrijk vinden", "Voor wie Matter-integratie wil"],
    personalNote: "De meest complete slimme deurbel voor smart home liefhebbers. De ingebouwde Matter hub is uniek op dit prijsniveau.",
    youtubeUrl: "https://www.youtube.com/shorts/uGFFXvbUAnU",
  },

  {
    slug: "aqara-doorbell-g410-black",
    ean: "6975833358380",
    brand: "Aqara",
    name: "Aqara Video Doorbell G410 (Zwart)",
    category: "slimme-deurbellen",
    image: "/images/products/aqara-doorbell-g410-black.png",
    description:
      "Slimme deurbel met sterke smart home integratie via Matter, geschikt voor Apple Home, Google en Home Assistant.",
    features: ["2K", "Matter", "Smart home"],
    affiliateUrl:
      "https://www.amazon.nl/Aqara-Ingebouwde-Draadloos-Compatibel-Assistant/dp/B0F6CJ93GS?tag=slimhuiswonen-21",
    priceHint: "€95 – €115",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/KVS6asoEDyM",
  },

  {
    slug: "tapo-d205",
    ean: "1210002607810",
    brand: "TP-Link",
    name: "Tapo D205",
    category: "slimme-deurbellen",
    image: "/images/products/tapo-d205.png",
    description:
      "Draadloze slimme deurbel op accu met scherpe 2K-beelden en eenvoudige installatie.",
    features: ["Accu", "2K", "Geen abonnement"],
    affiliateUrl:
      "https://www.amazon.nl/Tapo-D205-video-deurintercom-gezichtsveld-USB-C-aansluiting/dp/B0FHXVX9W9?tag=slimhuiswonen-21",
    priceHint: "€55 – €70",
    priceLastUpdated: "april 2026",
    pros: ["Geen abonnement vereist", "Accu", "Goede prijs-kwaliteit"],
    cons: ["Beperkte smart home integratie buiten Tapo"],
    forWho: ["Voor wie betaalbaar wil beginnen", "Voor Tapo-gebruikers"],
    youtubeUrl: "https://www.youtube.com/shorts/dsKyD2p0BUE",
  },

  {
    slug: "tapo-d235",
    ean: "4895252501254",
    brand: "TP-Link",
    name: "Tapo D235",
    category: "slimme-deurbellen",
    image: "/images/products/tapo-d235.png",
    description:
      "Slimme deurbel met kleurennachtzicht, brede kijkhoek en zonder verplichte abonnementskosten.",
    features: ["Geen abonnement", "Accu / Bedraad", "2K"],
    affiliateUrl:
      "https://www.amazon.nl/Tapo-D235-videodeurbel-gezichtsveld-niet-verwijderbare/dp/B0DDL95M8Z?tag=slimhuiswonen-21",
    priceHint: "€60 – €80",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/5wVHfrHFqwE",
  },

  {
    slug: "reolink-video-doorbell-wifi",
    ean: "6978285036684",
    brand: "Reolink",
    name: "Reolink Video Doorbell Wi-Fi",
    category: "slimme-deurbellen",
    image: "/images/products/reolink-video-doorbell-wifi.png",
    description:
      "Premium bedrade deurbel met hoofd-tot-teen beeld, lokale opslag en betrouwbare detectie.",
    features: ["Bedraad", "Lokale opslag", "Premium"],
    affiliateUrl:
      "https://www.amazon.nl/Reolink-Videodeurbel-Wi-Fi-camera-beltoon-Hoofd-aan-teen/dp/B0CN95V61Y?tag=slimhuiswonen-21",
    priceHint: "€75 – €95",
    priceLastUpdated: "april 2026",
    pros: ["Hoofd-tot-teen beeld — ook pakketten zichtbaar", "Lokale opslag via NVR", "Geen verplicht abonnement"],
    cons: ["Bedraad — vereist bestaande aansluiting", "Minder bekende naam dan Ring"],
    forWho: ["Voor wie de beste beeldkwaliteit wil", "Voor wie lokale opslag prefereert boven cloud"],
    personalNote: "De beste keuze als je al bekabelde aansluiting hebt. Het hoofd-tot-teen beeld is een groot voordeel tegenover concurrenten.",
    youtubeUrl: "https://www.youtube.com/shorts/chwqRQrgYyY",
  },
  
  /* =========================
     SLIMME CAMERA’S
  ========================== */

{
  slug: "eufy-indoor-cam",
  ean: "0194644176136",
  name: "Eufy Indoor Cam",
  brand: "Eufy",
  category: "slimme-cameras",
  image: "/images/products/eufy-indoor-cam.png",
  description:
    "Betaalbare binnencamera met lokale opslag en zonder abonnement.",
  features: ["Binnen", "Geen abonnement", "Lokale opslag"],
  affiliateUrl:
    "https://www.amazon.nl/eufy-Binnencamera-UHD-bewakingscamera-kleur-nachtzicht-auto-tracking/dp/B0FMRCM9D2?tag=slimhuiswonen-21",
  priceHint: "€35 – €50",
  priceLastUpdated: "april 2026",
  pros: ["Lokale opslag — geen abonnement", "Goede beeldkwaliteit voor de prijs", "Auto-tracking"],
  cons: ["Eufy-app vereist", "Beperkte smart home integratie (geen Zigbee of Matter)"],
  forWho: ["Voor wie een betrouwbare binnencamera wil zonder maandelijkse kosten", "Voor huisdieren of babybewaking"],
  personalNote: "De beste binnencamera voor wie gewoon wil dat het werkt. Geen abonnement, goede app en betrouwbare opslag.",
  youtubeUrl: "https://www.youtube.com/shorts/RQWhYv7T5CQ",
},

{
  slug: "tapo-c225",
  name: "TP-Link Tapo C225",
  brand: "TP-Link Tapo",
  category: "slimme-cameras",
  image: "/images/products/tapo-c225-beveiligingscamera.png",
  description:
    "Slimme 2K binnencamera met draaifunctie, bewegingsdetectie, tweeweg-audio en privacymodus. Ideaal om huisdieren in de gaten te houden wanneer je niet thuis bent.",
  features: ["2K", "Pan & tilt", "Tweeweg-audio"],
  affiliateUrl:
    "https://www.amazon.nl/Tapo-C225-Beveiligingscamera-Intelligente-Compatibel/dp/B0BN4BQ1DM?tag=slimhuiswonen-21",
  priceHint: "€30 – €40",
  coolblueUrl: "https://www.awin1.com/pclick.php?p=38561477674&a=2855887&m=85161",
    priceLastUpdated: "april 2026",
  pros: ["2K beeld", "Pan & tilt — volgt beweging", "Privacymodus (lens klapt weg)"],
  cons: ["Vereist Tapo-app", "Cloud voor geavanceerde functies"],
  forWho: ["Voor wie ook zijn huisdieren wil volgen via de camera", "Voor gebruik in woonkamer of babykamer"],
  youtubeUrl: "https://www.youtube.com/shorts/ldJrxLdBxfg",
},

{
  slug: "eufy-solo-outdoor-cam",
  ean: "0194644247546",
  name: "Eufy Solo Outdoor Cam",
  brand: "Eufy",
  category: "slimme-cameras",
  image: "/images/products/eufy-solo-outdoor.png",
  description:
    "Weerbestendige buitencamera met accu en lokale opslag.",
  features: ["Buiten", "Accu", "Geen abonnement"],
  affiliateUrl:
    "https://www.amazon.nl/eufy-Bewakingscamera-bewakingscamera-zonne-energie-beveiligingscamera/dp/B0DT6WMJD6?tag=slimhuiswonen-21",
  priceHint: "€70 – €90",
  priceLastUpdated: "april 2026",
  pros: ["Accu — geen kabel nodig", "Weerbestendig", "Lokale opslag, geen abonnement"],
  cons: ["Accuduur wisselend bij veel activiteit", "Minder stabiel dan PoE-alternatieven"],
  forWho: ["Voor wie flexibel buiten wil plaatsen zonder kabel", "Voor achtertuin, garage of schuur"],
  personalNote: "Goede keuze als je geen kabel wilt trekken. Lokale opslag is een groot voordeel tegenover Ring.",
  youtubeUrl: "https://www.youtube.com/shorts/r31OVIk5XCM",
},

{
  slug: "reolink-poe-camera",
  ean: "6976930225858",
  name: "Reolink PoE Camera",
  brand: "Reolink",
  category: "slimme-cameras",
  image: "/images/products/reolink-poe-camera.png",
  description:
    "Bekabelde PoE camera voor maximale stabiliteit en betrouwbaarheid.",
  features: ["PoE", "Bekabeld", "Lokale opslag"],
  affiliateUrl:
    "https://www.amazon.nl/PoE-vandaalbestendig-nachtzicht-Duo-2V/dp/B0D2XQV692?tag=slimhuiswonen-21",
  priceHint: "€55 – €75",
  priceLastUpdated: "april 2026",
  pros: ["Bekabeld = maximale stabiliteit", "Lokale opslag via NVR", "Geen accu — altijd online"],
  cons: ["Vereist netwerkkabel trekken", "Minder flexibel te verplaatsen"],
  forWho: ["Voor wie een permanente beveiligingsoplossing wil", "Voor vaste buitenlocaties met NVR setup"],
  personalNote: "De meest betrouwbare keuze voor buiten. Als je eenmaal de kabel trekt, heb je er nooit meer omkijken naar.",
  youtubeUrl: "https://www.youtube.com/shorts/61ERlRmhpbA",
},

{
  slug: "tapo-c200",
  ean: "6935364088095",
  name: "TP-Link Tapo C200",
  brand: "TP-Link",
  category: "slimme-cameras",
  image: "/images/products/tapo-c200.png",
  description:
    "Budget Wi-Fi camera voor binnen met verrassend veel functies.",
  features: ["Budget", "Wi-Fi", "Binnen"],
  affiliateUrl:
    "https://www.amazon.nl/Tapo-C200P2-bewakingscamera-nachtzicht-bewegingsdetectie/dp/B0CDCL38KZ?tag=slimhuiswonen-21",
  priceHint: "€22 – €32",
  priceLastUpdated: "april 2026",
  pros: ["Goedkoopste optie met pan & tilt", "Eenvoudige installatie", "Roteer-functie"],
  cons: ["Full HD (geen 2K)", "Cloud of SD-kaart vereist voor opslag"],
  forWho: ["Voor wie goedkoop wil beginnen", "Voor een extra camera in een minder kritieke ruimte"],
  personalNote: "Uitstekende waarde voor de prijs. Niet de scherpste camera, maar voor binnenbewaking meer dan genoeg.",
  youtubeUrl: "https://www.youtube.com/shorts/4hLvY_Fj8bg",
},

{
  slug: "eve-cam",
  ean: "4260195392427",
  name: "Eve Cam",
  brand: "Eve",
  category: "slimme-cameras",
  image: "/images/products/eve-cam.png",
  description:
    "Privacygerichte binnencamera met HomeKit Secure Video en lokale verwerking.",
  features: ["Privacy", "HomeKit", "Binnen"],
  affiliateUrl:
    "https://www.amazon.nl/Eve-Cam-beveiligingscamera-iPhone-meldingen-luidspreker/dp/B0CHJCZSJP?tag=slimhuiswonen-21",
  priceHint: "€110 – €130",
  priceLastUpdated: "april 2026",
  pros: ["HomeKit Secure Video — verwerking op iPhone/iPad", "Geen abonnement nodig", "Volledig privacygericht: geen cloud"],
  cons: ["Alleen voor Apple-gebruikers", "Duurste binnencamera in dit overzicht"],
  forWho: ["Voor Apple-gebruikers die privacy als prioriteit stellen", "Voor wie beelden uitsluitend lokaal wil verwerken"],
  personalNote: "De enige juiste keuze als je iPhone gebruikt en privacy bovenaan zet. Prijzig, maar je betaalt nooit abonnement en beelden verlaten je netwerk niet.",
  youtubeUrl: "https://www.youtube.com/shorts/8Kmoas7Ct30",
},

/* =========================
   EXTRA SENSOREN
========================== */

{
  slug: "aqara-motion-sensor",
  ean: "6970504219656",
  name: "Aqara Bewegingssensor",
  brand: "Aqara",
  category: "sensoren",
  image: "/images/products/aqara-motion-sensor.png",
  description:
    "Zeer betrouwbare Zigbee bewegingssensor voor automatiseringen.",
  features: ["Zigbee", "Beweging", "Automatiseringen"],
  affiliateUrl:
    "https://www.amazon.nl/Aqara-configureerbare-detectie-timeout-waarschuwingssysteem-automatiseringen/dp/B0B9XZ1D51?tag=slimhuiswonen-21",
  priceHint: "€15 – €20",
  priceLastUpdated: "april 2026",
  pros: ["Zeer betrouwbaar en snel", "Configureerbare detectie-timeout", "Werkt met Homey, Home Assistant en HomeKit"],
  cons: ["Vereist Zigbee hub"],
  forWho: ["Voor automatisch licht aan/uit bij beweging", "Voor beveiligingsautomatiseringen"],
  youtubeUrl: "https://www.youtube.com/shorts/dwRf4hPIUEM",
},

{
  slug: "eve-weather",
  name: "Eve Weather",
  brand: "Eve",
  category: "sensoren",
  image: "/images/products/eve-weather.png",
  description:
    "Slimme buitensensor voor temperatuur en luchtvochtigheid via Thread.",
  features: ["Klimaat", "Thread", "Privacy"],
  affiliateUrl:
    "https://www.amazon.nl/Weather-Matter-luchtvochtigheid-IPX4-waterbestendigheid-Siri-spraaktoegang/dp/B0D817K9TL?tag=slimhuiswonen-21",
  priceHint: "€60 – €70",
  priceLastUpdated: "april 2026",
  pros: ["IPX4 waterbestendig — geschikt voor buiten", "Thread = lage latency", "Privacygericht: geen cloud"],
  cons: ["Duurder dan Tapo-alternatieven", "Thread Border Router vereist"],
  forWho: ["Apple-gebruikers die klimaatdata in Apple Home willen", "Voor buitenplaatsing"],
  youtubeUrl: "https://www.youtube.com/shorts/89ofmY6aCdY",
},

{
  slug: "tapo-t100",
  name: "Tapo T100 Smart Motion Sensor",
  brand: "TP-Link",
  category: "sensoren",
  image: "/images/products/tapo-sensor.png",
  description:
    "Compacte bewegingssensor voor beveiliging en slimme automatiseringen.",
  features: ["Beweging", "Automatiseringen", "Slimme meldingen"],
  affiliateUrl:
    "https://www.amazon.nl/Tapo-0184500512-T100/dp/B0B7NDJW6J?tag=slimhuiswonen-21",
  priceHint: "€12 – €15",
  coolblueUrl: "https://www.awin1.com/pclick.php?p=38840441964&a=2855887&m=85161",
    priceLastUpdated: "april 2026",
  youtubeUrl: "https://www.youtube.com/shorts/dorW24Ba4oo",
},

{
  slug: "eve-door-window",
  name: "Eve Door & Window",
  brand: "Eve",
  category: "sensoren",
  image: "/images/products/eve-door-window.png",
  description:
    "Premium deur- en raamsensor met focus op privacy en lokale verwerking.",
  features: ["Privacy", "Thread", "Premium"],
  affiliateUrl:
    "https://www.amazon.nl/Door-Window-Matter-contactsensor-dicht-detectie/dp/B0BZ8YV5GW?tag=slimhuiswonen-21",
  priceHint: "€30 – €38",
  priceLastUpdated: "april 2026",
  pros: ["Matter + Thread: breed compatibel", "Volledig lokaal", "Apple Home, Google Home, Home Assistant"],
  cons: ["Duurder dan Zigbee-alternatieven", "Thread Border Router vereist"],
  forWho: ["Apple-gebruikers die de beste integratie willen", "Voor Matter smart homes"],
  youtubeUrl: "https://www.youtube.com/shorts/avnIXG9Z6O0",
},

/* =========================
   SMART HOME HUBS
========================== */

{
  slug: "samsung-smartthings-hub",
  brand: "Aeotec",
  name: "Aeotec Smart Home Hub (SmartThings)",
  category: "smart-home-hubs",
  image: "/images/products/samsung-smartthings-hub.png",
  description:
    "Werkt als SmartThings hub met ondersteuning voor Zigbee en Z-Wave.",
  features: ["SmartThings", "Zigbee", "Z-Wave"],
  affiliateUrl:
    "https://www.amazon.nl/Aeotec-Smart-Home-Hub-SmartThings/dp/B08NDH9NXN?tag=slimhuiswonen-21",
  priceHint: "€75 – €90",
  priceLastUpdated: "april 2026",
  pros: ["Ondersteunt Zigbee én Z-Wave", "SmartThings platform met grote community", "Breed compatibel"],
  cons: ["Samsung SmartThings cloud vereist", "Minder flexibel dan Home Assistant"],
  forWho: ["Voor wie Zigbee én Z-Wave in één hub wil combineren", "Voor SmartThings-gebruikers"],
  youtubeUrl: "https://www.youtube.com/shorts/ZjyfLL9m5Bw",
},

{
  slug: "homey-pro-early-2023",
  ean: "8719327218198",
  brand: "Homey",
  name: "Homey Pro (Early 2023)",
  category: "smart-home-hubs",
  image: "/images/products/homey-pro-early-2023.png",
  description:
    "Krachtige lokale smart home hub zonder cloud-afhankelijkheid.",
  features: ["Volledig lokaal", "Zigbee", "Z-Wave", "Matter"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B0C5R1JS91?tag=slimhuiswonen-21",
  priceHint: "€380 – €420",
  priceLastUpdated: "april 2026",
  pros: ["Volledig lokaal — geen cloud nodig", "Ondersteunt Zigbee, Z-Wave, Matter, BLE, 433MHz", "Intuïtieve flow-editor voor automatiseringen"],
  cons: ["Duurste hub in dit overzicht", "Minder flexibel dan Home Assistant voor geavanceerde gebruikers"],
  forWho: ["Voor wie maximale controle wil zonder technisch gedoe", "Voor gebruikers die bereid zijn te investeren in de beste gebruikservaring"],
  personalNote: "De beste plug-and-play smart home hub. Homey Pro heeft een superieure gebruikerservaring vergeleken met concurrenten. De hoge prijs is gerechtvaardigd als je een zorgeloos slim huis wilt.",
  youtubeUrl: "https://www.youtube.com/shorts/yIQxbRQHTRo",
},

{
  slug: "homey-bridge",
  ean: "8717953223487",
  brand: "Homey",
  name: "Homey Bridge",
  category: "smart-home-hubs",
  image: "/images/products/homey-smart-bridge.png",
  description: "Verbindt slimme apparaten met Homey Cloud.",
  features: ["Homey Cloud", "Uitbreiding Homey"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B08FRLQH75?tag=slimhuiswonen-21",
  priceHint: "€55 – €70",
  priceLastUpdated: "april 2026",
  pros: ["Goedkope instap in Homey", "Verbindt veel apparaten", "Eenvoudige installatie"],
  cons: ["Vereist Homey Cloud — cloud-afhankelijk", "Beperktere functionaliteit dan Homey Pro"],
  forWho: ["Voor wie wil kennismaken met Homey zonder grote investering"],
  youtubeUrl: "https://www.youtube.com/shorts/_fRsj0azjVI",
},

{
  slug: "philips-hue-bridge",
  ean: "8720169155114",
  brand: "Philips Hue",
  name: "Philips Hue Bridge",
  category: "smart-home-hubs",
  image: "/images/products/philips-bridge.png",
  description: "Centrale hub voor Philips Hue verlichting.",
  features: ["Hue ecosysteem", "Zigbee", "Lokale automatiseringen"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B09CV9F3KR?tag=slimhuiswonen-21",
  priceHint: "€48 – €58",
  priceLastUpdated: "april 2026",
  pros: ["Vereist voor volledige Hue automatiseringen", "Lokale verwerking zonder internet", "Stabiele Zigbee verbinding"],
  cons: ["Alleen voor Philips Hue producten", "Extra kosten bovenop de lampen"],
  forWho: ["Voor Hue-gebruikers die automatiseringen en timer willen", "Voor wie meer dan 10 Hue-lampen heeft"],
  personalNote: "Verplicht als je Hue serieus wilt gebruiken. Zonder bridge werkt Bluetooth, maar automatiseringen werken niet als je thuis bent.",
  youtubeUrl: "https://www.youtube.com/shorts/isaMt7n0Vhw",
},

{
  slug: "home-assistant-green",
  brand: "Home Assistant",
  name: "Home Assistant Green",
  category: "smart-home-hubs",
  image: "/images/products/home-assistant-green.png",
  description:
    "Officiële Home Assistant hub voor maximale lokale controle.",
  features: ["Home Assistant OS", "Volledig lokaal"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B0CXVKSG19?tag=slimhuiswonen-21",
  priceHint: "€90 – €105",
  priceLastUpdated: "april 2026",
  pros: ["Volledig lokaal en open source", "Enorme community en integraties", "Werkt met Zigbee, Z-Wave, Matter"],
  cons: ["Technisch — vereist kennis om goed in te stellen", "Minder intuïtief dan Homey"],
  forWho: ["Voor technisch ingestelde gebruikers die maximale controle willen", "Voor wie geen abonnement of cloud wil"],
  personalNote: "Home Assistant is de meest krachtige hub die er is — maar niet voor iedereen. Ben je bereid tijd te investeren, dan haal je er het meeste uit.",
  youtubeUrl: "https://www.youtube.com/shorts/u8sk6B8_Qkc",
},

/* ==========================
   SLIMME THERMOSTATEN
========================== */

{
  slug: "tado-smart-thermostat-v3",
  ean: "4260328611968",
  brand: "Tado",
  name: "Tado Slimme Thermostaat V3+",
  category: "slimme-thermostaten",
  image: "/images/products/tado-smart-thermostat-v3.png",
  description:
    "Populaire slimme thermostaat met geofencing en energiebesparing. Werkt met Homey, Alexa, Google Home en Apple HomeKit.",
  features: [
    "Geofencing: automatisch aan/uit bij vertrek",
    "Compatibel met Homey, Google, Alexa, HomeKit",
    "Energierapport per maand",
  ],
  affiliateUrl: "https://www.amazon.nl/dp/B07YCMD7ZW?tag=slimhuiswonen-21",
  priceHint: "€85 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Geofencing — automatisch aan/uit bij vertrek", "Werkt met Homey, Alexa, Google, HomeKit", "Uitgebreide energierapporten"],
  cons: ["Verplicht abonnement voor geavanceerde functies na 3 maanden", "Hogere prijs dan sommige alternatieven"],
  forWho: ["Voor wie automatisch wil regelen op basis van locatie", "Voor wie energiebesparing serieus neemt"],
  personalNote: "Tado's geofencing is de beste die ik ken. Wees je bewust van de abonnementsstructuur — de gratis functies zijn beperkt.",
},

{
  slug: "netatmo-slimme-thermostaat",
  ean: "3700730503853",
  brand: "Netatmo",
  name: "Netatmo Slimme Thermostaat",
  category: "slimme-thermostaten",
  image: "/images/products/netatmo-slimme-thermostaat.png",
  description:
    "Strakke slimme thermostaat zonder verplicht abonnement. Werkt met Apple HomeKit, Alexa en Google Home.",
  features: [
    "Geen verplicht abonnement",
    "Apple HomeKit ondersteuning",
    "Strak design, eenvoudige installatie",
  ],
  affiliateUrl: "https://www.amazon.nl/dp/B01DBJP2WO?tag=slimhuiswonen-21",
  priceHint: "€95 – €120",
  priceLastUpdated: "april 2026",
  pros: ["Geen verplicht abonnement", "Apple HomeKit ondersteuning", "Strak minimalistische design"],
  cons: ["Hogere aanschafprijs", "Minder functies dan Tado"],
  forWho: ["Apple-gebruikers die geen abonnement willen", "Voor wie design belangrijk vindt"],
},

/* ==========================
   MESH WIFI
========================== */

{
  slug: "tp-link-deco-xe75",
  ean: "0840030707148",
  brand: "TP-Link",
  name: "TP-Link Deco XE75 (WiFi 6E Mesh, 3-pack)",
  category: "mesh-wifi",
  image: "/images/products/tp-link-deco-xe75.png",
  description:
    "Krachtig WiFi 6E mesh-systeem in 3-pack voor een snel en stabiel netwerk in het hele huis. Dekt tot 750 m². Ideaal voor smart home met veel apparaten.",
  features: [
    "WiFi 6E (tri-band)",
    "3-pack — tot 750 m² dekking",
    "Eenvoudig uitbreidbaar",
  ],
  affiliateUrl: "https://www.amazon.nl/TP-Link-Deco-XE75-3-pack-Gigabit-poorten/dp/B09ZRY9YHB?tag=slimhuiswonen-21",
  priceHint: "€280 – €310",
  priceLastUpdated: "april 2026",
  pros: ["WiFi 6E — snelste standaard", "Tot 250 m² per punt", "Eenvoudig uitbreidbaar"],
  cons: ["Premium prijs", "WiFi 6E vereist ondersteunde apparaten"],
  forWho: ["Voor grote woningen met veel smart home apparaten", "Voor wie toekomstbestendig wil investeren"],
  personalNote: "De TP-Link Deco serie is de beste prijs-kwaliteitskeuze voor mesh wifi. De XE75 is een toekomstbestendige investering.",
  youtubeUrl: "https://www.youtube.com/shorts/NZ4NUioL4MQ",
},

{
  slug: "eero-pro-6e",
  brand: "Amazon",
  name: "Amazon Eero Pro 6E",
  category: "mesh-wifi",
  image: "/images/products/eero-pro-6e.png",
  description:
    "Gebruiksvriendelijk mesh-systeem met WiFi 6E en Alexa-integratie. Ideaal als je Amazon-producten combineert.",
  features: [
    "WiFi 6E",
    "Alexa ingebouwd",
    "Eenvoudige app-installatie",
  ],
  affiliateUrl: "https://www.amazon.nl/eero-6-/dp/B08ZK2T3GS?tag=slimhuiswonen-21",
  priceHint: "€190 – €230",
  priceLastUpdated: "april 2026",
  pros: ["Alexa ingebouwd", "Zeer eenvoudige app", "WiFi 6E"],
  cons: ["Amazon-ecosysteem afhankelijk", "Duurder dan TP-Link alternatieven"],
  forWho: ["Voor Amazon Alexa gebruikers", "Voor wie geen gedoe wil met configuratie"],
  youtubeUrl: "https://www.youtube.com/shorts/1H31syVYPus",
},

{
  slug: "google-nest-wifi-pro",
  ean: "0193575004563",
  brand: "Google",
  name: "Google Nest Wifi Pro",
  category: "mesh-wifi",
  image: "/images/products/google-nest-wifi-pro.png",
  description:
    "Google's krachtigste mesh-router met WiFi 6E en Matter-ondersteuning ingebouwd. Ideaal voor Google Home gebruikers.",
  features: [
    "WiFi 6E",
    "Matter hub ingebouwd",
    "Werkt naadloos met Google Home",
  ],
  affiliateUrl: "https://www.amazon.nl/Google-Nest-Wifi-Pro-2-pack/dp/B0BDKHRGV6?tag=slimhuiswonen-21",
  priceHint: "€210 – €250",
  priceLastUpdated: "april 2026",
  pros: ["Matter hub ingebouwd", "Werkt naadloos met Google Home", "WiFi 6E"],
  cons: ["Google-ecosysteem afhankelijk", "Duurder dan TP-Link"],
  forWho: ["Voor Google Home gebruikers die ook Matter willen", "Voor grotere woningen"],
  youtubeUrl: "https://www.youtube.com/shorts/BFTzcpo_0f0",
},

/* ==========================
   SLIMME SLOTEN
========================== */

{
  slug: "nuki-smart-lock-4-pro",
  ean: "6154545266286",
  brand: "Nuki",
  name: "Nuki Smart Lock 4 Pro",
  category: "slimme-sloten",
  image: "/images/products/nuki-smart-lock-4-pro.png",
  description:
    "Populairste slimme deurslot in Nederland. Monteert op bestaand slot, geen sleutelgat aanpassen.",
  features: [
    "Werkt met bestaand cilinderslot",
    "WiFi, Bluetooth en Matter",
    "Compatibel met Homey, Alexa, Google, HomeKit",
  ],
  affiliateUrl: "https://www.amazon.nl/Bluetooth-moeiteloze-integratie-elektronisch-vergrendelen/dp/B0DX2FPQFQ?tag=slimhuiswonen-21",
  priceHint: "€170 – €200",
  priceLastUpdated: "april 2026",
  pros: ["Werkt met bestaand cilinderslot", "WiFi, Bluetooth én Matter", "Compatibel met alle grote platforms"],
  cons: ["Premium prijs", "Batterijen vervangen (niet oplaadbaar)"],
  forWho: ["Voor wie zijn voordeur wil automatiseren zonder de deur aan te passen", "Voor Matter smart homes"],
  personalNote: "Het populairste slimme slot in Nederland. Matter-ondersteuning maakt het breed inzetbaar. Eenvoudige installatie — geen sleutelgat aanpassen.",
  youtubeUrl: "https://www.youtube.com/shorts/QlhX3U2cLyw",
},

{
  slug: "yale-linus-smart-lock",
  ean: "5052847179307",
  brand: "Yale",
  name: "Yale Linus Smart Lock",
  category: "slimme-sloten",
  image: "/images/products/yale-linus-smart-lock.png",
  description:
    "Compact slim deurslot van een vertrouwd merk. Werkt met de Yale Access app en integreert met Alexa en Google Home.",
  features: [
    "Compact design",
    "Werkt met bestaand slot",
    "Alexa en Google Home integratie",
  ],
  affiliateUrl: "https://www.amazon.nl/Yale-Sleutelloze-Eenvoudige-installatie-compatibel/dp/B0FTG1L89G?tag=slimhuiswonen-21",
  priceHint: "€120 – €150",
  priceLastUpdated: "april 2026",
  pros: ["Compact design", "Vertrouwd merk", "Alexa en Google Home"],
  cons: ["Beperktere integratie dan Nuki", "Geen Matter ondersteuning"],
  forWho: ["Voor wie een compacte oplossing wil van een vertrouwd slot-merk"],
  youtubeUrl: "https://www.youtube.com/shorts/m4qA0kb0dys",
},

{
  slug: "danalock-v3",
  brand: "Danalock",
  name: "Danalock V3",
  category: "slimme-sloten",
  image: "/images/products/danalock-v3.png",
  description:
    "Slim deurslot met Bluetooth, Z-Wave en Zigbee ondersteuning. Ideaal voor geavanceerde smart home setups.",
  features: [
    "Bluetooth, Z-Wave en Zigbee",
    "Werkt met Home Assistant en Homey",
    "Betrouwbare Europese fabrikant",
  ],
  affiliateUrl: "https://www.amazon.nl/Danalock-Bluettoth-Solution-batterijen-inbegrepen/dp/B0CV18ZTK2?tag=slimhuiswonen-21",
  priceHint: "€110 – €140",
  priceLastUpdated: "april 2026",
  pros: ["Bluetooth, Z-Wave én Zigbee", "Werkt met Home Assistant en Homey", "Europese fabrikant"],
  cons: ["Minder bekende naam", "Z-Wave module soms apart nodig"],
  forWho: ["Voor geavanceerde smart home gebruikers die Z-Wave of Zigbee prefereren", "Voor Home Assistant setups"],
  youtubeUrl: "https://www.youtube.com/shorts/RIDEaJa78hs",
},

/* ==========================
   ENERGIE MONITORS
========================== */

{
  slug: "frient-elektriciteitsmeter-interface-2-p1",
  brand: "frient",
  name: "frient Elektriciteitsmeter Interface 2, P1",
  category: "energie-monitors",
  image: "/images/products/homewizard-energy-p1-meter.png",
  description:
    "Eenvoudige P1-meter die je slimme meter uitleest en realtime energieverbruik toont in de app. Werkt met Home Assistant.",
  features: [
    "Realtime verbruik en teruglevering",
    "Werkt met Home Assistant en Homey",
    "Eenvoudig zelf installeren",
  ],
  priceHint: "€50 – €65",
  priceLastUpdated: "april 2026",
  pros: ["Werkt met Home Assistant en Homey", "Zigbee — stabiel en snel", "Realtime verbruik én teruglevering"],
  cons: ["Vereist Zigbee hub", "P1-kabel niet altijd inbegrepen"],
  forWho: ["Voor wie energieverbruik wil monitoren via Home Assistant of Homey", "Voor zonnepaneelhouders"],
  affiliateUrl: "https://www.amazon.nl/frient-Elektriciteitsmeter-energieverbruik-elektriciteitsmeters-SmartThings/dp/B0CYZWLX65?tag=slimhuiswonen-21",
  youtubeUrl: "https://www.youtube.com/watch?v=9HHH6RO3WG0",
},

{
  slug: "shelly-pro-3em",
  ean: "3800235268193",
  brand: "Shelly",
  name: "Shelly Pro 3EM",
  category: "energie-monitors",
  image: "/images/products/shelly-pro-3em.png",
  description:
    "Professionele 3-fase energiemeter voor montage in de meterkast. Ideaal voor wie zonnepanelen wil koppelen aan smart home.",
  features: [
    "3-fase meting",
    "Werkt met Home Assistant en Homey",
    "Zonnepanelen integratie mogelijk",
  ],
  affiliateUrl: "https://www.amazon.nl/Shelly-120A-Afstandsbediening-Fotovolta%C3%AFsche-Zonnestelsels/dp/B0BVKZ4NGM?tag=slimhuiswonen-21",
  priceHint: "€90 – €110",
  priceLastUpdated: "april 2026",
  pros: ["3-fase meting — volledig huisverbruik in één apparaat", "Integratie met Home Assistant en Homey", "Zonnepanelen monitoring"],
  cons: ["Montage in de meterkast — elektricien aanbevolen", "Complexere installatie"],
  forWho: ["Voor 3-fase aansluitingen", "Voor zonnepaneelhouders die alles willen monitoren"],
  personalNote: "De Shelly Pro 3EM is de beste keuze voor wie het volledige energieverbruik van het huis wil meten — inclusief teruglevering van zonnepanelen.",
  youtubeUrl: "https://www.youtube.com/shorts/zxPh7ekFqc4",
},

{
  slug: "brostrend-mini-ax900-wifi-6",
  brand: "BrosTrend",
  name: "BrosTrend Mini AX900 WiFi 6",
  category: "energie-monitors",
  image: "/images/products/homewizard-wifi-p1-dongle.png",
  description:
    "Compacte wifi-dongle die je slimme meter uitleest. Klein, goedkoop en snel ingesteld.",
  features: [
    "Direct op de P1-poort van je meter",
    "Realtime data via app",
    "Werkt met Home Assistant",
  ],
  affiliateUrl: "https://www.amazon.nl/BrosTrend-Mini-AX900-WiFi-USB/dp/B0CYZBT4GM?tag=slimhuiswonen-21",
  priceHint: "€35 – €50",
  priceLastUpdated: "april 2026",
  pros: ["Direct op P1-poort", "Klein en goedkoop", "Werkt met Home Assistant"],
  cons: ["Minder nauwkeurig dan frient Zigbee P1 meter", "Soms wifi-instabiliteit"],
  forWho: ["Voor starters die energieverbruik willen inzien via Home Assistant"],
  youtubeUrl: "https://www.youtube.com/shorts/8oT4Go7z_1w",
},

/* =========================
   SLIMME VERLICHTING — UITBREIDING
========================== */

{
  slug: "philips-hue-gu10-white-ambiance",
  ean: "8719514340145",
  brand: "Philips Hue",
  name: "Philips Hue GU10 White Ambiance (2-pack)",
  category: "slimme-verlichting",
  image: "/images/products/philips-hue-gu10-white-ambiance.png",
  description:
    "Slimme GU10-spots voor badkamer, keuken of hal. Instelbaar wit licht van warm tot koel daglicht, dimbaar via app of bridge.",
  features: ["GU10 fitting", "Instelbaar wit licht", "Dimbaar", "Zigbee & Bluetooth"],
  affiliateUrl: "https://www.amazon.nl/Philips-Hue-instelbaar-Bluetooth-compatibel-stembediening/dp/B0D6NLJHQ3?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38707440242&a=2855887&m=85161",
  priceHint: "€35 – €45",
  priceLastUpdated: "april 2026",
  pros: ["Dimbaar warm tot koel daglicht", "Past in elk standaard GU10-armatuur", "Werkt met Hue Bridge én Bluetooth"],
  cons: ["Geen kleuren — alleen wit licht", "Bridge nodig voor automatiseringen"],
  forWho: ["Voor wie spots in keuken, badkamer of hal slim wil maken", "Voor Hue-gebruikers die uitbreiden naar GU10-armaturen"],
  personalNote: "Logische volgende stap na E27-lampen. Als je spots hebt in de keuken of badkamer, zijn dit de meest betrouwbare slimme GU10-lampen.",
  youtubeUrl: "https://www.youtube.com/shorts/P-Lb6Wve-Gc",
},

{
  slug: "philips-hue-dimmer-switch-v2",
  ean: "8719514274617",
  brand: "Philips Hue",
  name: "Philips Hue Dimmer Switch V2",
  category: "slimme-verlichting",
  image: "/images/products/philips-hue-dimmer-switch-v2.png",
  description:
    "Draadloze dimschakelaar voor het Hue-systeem. Bevestig magnetisch aan de muur of gebruik als losse afstandsbediening.",
  features: ["Draadloos", "Magnetische muurbevestiging", "4 knoppen", "Zigbee"],
  affiliateUrl: "https://www.amazon.nl/dp/B08PKMT2DV?tag=slimhuiswonen-21",
  priceHint: "€25 – €30",
  priceLastUpdated: "april 2026",
  pros: ["Geen bedrading nodig", "Muurbevestiging met magneet — geen boren", "Werkt ook als losse afstandsbediening"],
  cons: ["Alleen voor Hue-lampen", "Geen touchscreen"],
  forWho: ["Voor Hue-gebruikers die een fysieke schakelaar willen", "Voor huisgenoten die geen app willen gebruiken"],
  personalNote: "Ideale aanvulling als je huisgenoten hebt die gewoon een schakelaar willen. Plak hem naast de deur en iedereen kan de lampen bedienen.",
  youtubeUrl: "https://www.youtube.com/shorts/w398sZur0Pw",
},

{
  slug: "philips-hue-motion-sensor",
  ean: "8719514342125",
  brand: "Philips Hue",
  name: "Philips Hue Motion Sensor (binnen)",
  category: "sensoren",
  image: "/images/products/philips-hue-motion-sensor.png",
  description:
    "Slimme bewegingssensor die automatisch Hue-lampen aan- en uitzet. Met ingebouwde lichtsensor — gaat alleen aan als het donker genoeg is.",
  features: ["Bewegingsdetectie", "Ingebouwde lichtsensor", "Zigbee", "Batterij"],
  affiliateUrl: "https://www.amazon.nl/Philips-Hue-Bewegingssensor-Ingebouwde-Lichtsensor/dp/B09CV78GV1?tag=slimhuiswonen-21",
  priceHint: "€35 – €45",
  priceLastUpdated: "april 2026",
  pros: ["Werkt naadloos met alle Hue-lampen", "Lichtsensor — gaat niet aan overdag", "Eenvoudige Hue-app configuratie"],
  cons: ["Alleen voor Hue-ecosysteem", "Detectiezone niet instelbaar"],
  forWho: ["Voor Hue-gebruikers die automatisch licht willen bij binnenkomst", "Voor hal, trap of badkamer"],
  personalNote: "De eenvoudigste manier om Hue-lampen automatisch te laten reageren op beweging. De lichtsensor zorgt dat je overdag nooit onnodig licht aan hebt.",
  youtubeUrl: "https://www.youtube.com/shorts/NKLJZ8mdIzU",
},

{
  slug: "tapo-l920-5-ledstrip",
  ean: "4897098682609",
  brand: "TP-Link Tapo",
  name: "Tapo L920-5 RGBIC LED Strip (5m)",
  category: "slimme-verlichting",
  image: "/images/products/tapo-l920-5-ledstrip.png",
  description:
    "Slimme RGBIC LED-strip van 5 meter met 50 individuele kleurzones, muzieksynchro en app-bediening. Geen hub nodig.",
  features: ["RGBIC — 50 kleurzones", "Muzieksynchro", "Wi-Fi", "Geen hub nodig"],
  affiliateUrl: "https://www.amazon.nl/dp/B09FSTVWFF?tag=slimhuiswonen-21",
  priceHint: "€30 – €40",
  priceLastUpdated: "april 2026",
  pros: ["50 individuele kleurzones", "Muzieksynchro via microfoon", "Geen hub nodig"],
  cons: ["Alleen binnen Tapo-app", "Beperkte smart home integratie"],
  forWho: ["Voor sfeerverlichting in woonkamer, gaming-setup of achter tv", "Voor Tapo-gebruikers die LED-strip willen toevoegen"],
  personalNote: "Sterk alternatief voor de Govee strip. Betaalbaar, veelzijdig en eenvoudig in gebruik. De 50 kleurzones geven mooie effecten.",
  youtubeUrl: "https://www.youtube.com/shorts/afJD-6I6zFc",
},

{
  slug: "govee-outdoor-ledstrip",
  ean: "6974316999430",
  brand: "Govee",
  name: "Govee Outdoor LED Strip (10m)",
  category: "slimme-verlichting",
  image: "/images/products/govee-outdoor-ledstrip.png",
  description:
    "Weerbestendige RGBIC LED-strip van 10 meter voor tuin, terras of gevel. IP65, app-gestuurd met segmentbediening.",
  features: ["IP65 weerbestendig", "10 meter", "RGBIC segmentbediening", "Muzieksynchro"],
  affiliateUrl: "https://www.amazon.nl/Govee-app-bediening-segmentcontrole-kleurverandering-muzieksynchronisatie/dp/B0BXKWTDC6?tag=slimhuiswonen-21",
  priceHint: "€40 – €60",
  priceLastUpdated: "april 2026",
  pros: ["IP65 — geschikt voor buiten", "10 meter — dekt grote oppervlakken", "Segmentbediening voor gevarieerde effecten"],
  cons: ["Govee-app vereist", "Minder smart home integratie"],
  forWho: ["Voor sfeerverlichting buiten: terras, gevel, pergola", "Voor seizoensgebonden decoratie"],
  personalNote: "De enige buitengeschikte LED-strip in dit overzicht. Ideaal voor sfeerverlichting op het terras of langs de dakgoot.",
  youtubeUrl: "https://www.youtube.com/shorts/15PpKHcLSs0",
},

/* =========================
   SMART HOME HUBS — UITBREIDING
========================== */

{
  slug: "tapo-h200-smart-hub",
  ean: "4897098689547",
  brand: "TP-Link Tapo",
  name: "Tapo H200 Smart Hub",
  category: "smart-home-hubs",
  image: "/images/products/tapo-h200-smart-hub.png",
  description:
    "Centrale hub voor het Tapo-ecosysteem. Koppelt tot 64 sensoren én 4 camera's. Werkt als deurbel-gong en heeft microSD-opslag voor camerabeelden.",
  features: ["Tot 64 sensoren", "microSD opslag", "Deurbel-gong", "Tapo ecosysteem"],
  affiliateUrl: "https://www.amazon.nl/Tapo-H200-batterijcameras-Tapo-cameramodellen-Kasa-thermostaat/dp/B0C8BJ9ZLB?tag=slimhuiswonen-21",
  priceHint: "€30 – €40",
  priceLastUpdated: "april 2026",
  pros: ["Betaalbaar instapmodel voor Tapo-ecosysteem", "microSD-opslag voor camera's", "Werkt als deurbel-gong"],
  cons: ["Alleen voor Tapo-apparaten", "Beperkte automatiseringslogica"],
  forWho: ["Voor wie al Tapo-sensoren en -camera's heeft", "Voor wie een centrale hub wil voor zijn Tapo-ecosystem"],
  personalNote: "De logische hub als je al meerdere Tapo-sensoren of een Tapo-deurbel hebt. Betaalbaar en eenvoudig te configureren.",
  youtubeUrl: "https://www.youtube.com/shorts/I9zLg6F3bYo",
},

{
  slug: "aqara-hub-m3",
  ean: "6975833351336",
  brand: "Aqara",
  name: "Aqara Hub M3",
  category: "smart-home-hubs",
  image: "/images/products/aqara-hub-m3.png",
  description:
    "Geavanceerde Matter/Thread/Zigbee hub voor het Aqara-ecosysteem. Werkt met HomeKit, Google Home, Alexa en Home Assistant. Lokale automatisering zonder cloud.",
  features: ["Matter", "Thread", "Zigbee 3.0", "Lokale automatisering"],
  affiliateUrl: "https://www.amazon.nl/Aqara-Controller-Bluetooth-ondersteunt-SmartThings/dp/B0CWLHSKYC?tag=slimhuiswonen-21",
  priceHint: "€80 – €100",
  priceLastUpdated: "april 2026",
  pros: ["Matter + Thread + Zigbee in één hub", "Werkt met alle grote platforms", "Volledig lokale automatisering"],
  cons: ["Hogere prijs dan instapmodellen", "Configuratie vraagt wat kennis"],
  forWho: ["Aqara-gebruikers die een centrale hub willen", "Voor wie Matter en Zigbee in één hub wil combineren"],
  personalNote: "De beste hub als je diep in het Aqara-ecosysteem zit. Matter én Thread én Zigbee in één apparaat is uniek op dit prijsniveau.",
  youtubeUrl: "https://www.youtube.com/shorts/mu-BDOW7KuI",
},

/* =========================
   SLIMME THERMOSTATEN — UITBREIDING
========================== */

{
  slug: "tado-smart-thermostat-v3-bedraad",
  ean: "4260328611968",
  brand: "tado°",
  name: "tado° Slimme Thermostaat V3+ (Bedraad)",
  category: "slimme-thermostaten",
  image: "/images/products/tado-smart-thermostat-v3-bedraad.png",
  description:
    "Bedrade versie van de populaire tado° slimme thermostaat met geofencing. Werkt met OpenTherm, Alexa, Google Home en Apple HomeKit. Geen abonnement vereist voor basisfuncties.",
  features: ["Geofencing", "OpenTherm", "Alexa, Google Home, HomeKit", "Geen verplicht abonnement"],
  affiliateUrl: "https://www.amazon.nl/tado%C2%B0-Bedrade-Slimme-Thermostaat-verwarmingsaansturing/dp/B01BWUH8W4?tag=slimhuiswonen-21",
  priceHint: "€80 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Geofencing: stookt alleen als er iemand thuis is", "OpenTherm voor maximale energiebesparing", "Breed compatibel: Alexa, Google, HomeKit, Homey"],
  cons: ["Geavanceerde functies vereisen betaald Auto-Assist abonnement", "Vereist internet-verbinding"],
  forWho: ["Voor wie geofencing wil: thermostaat reageert op je locatie", "Voor wie energie wil besparen op verwarming"],
  personalNote: "tado° is marktleider in Nederland voor slimme thermostaten en dat is niet voor niets. De geofencing werkt uitstekend in de praktijk.",
  youtubeUrl: "https://www.youtube.com/shorts/oCauDVeOGBg",
},

{
  slug: "tado-radiatorkraan-v3-plus",
  ean: "4260328612040",
  brand: "tado°",
  name: "tado° Slimme Radiatorkraan V3+",
  category: "slimme-thermostaten",
  image: "/images/products/tado-radiatorkraan-v3-plus.png",
  description:
    "Slimme radiatorkraan voor kamertemperatuurregeling per ruimte. Werkt met de tado° thermostaat of standalone via internet-bridge.",
  features: ["Per-kamer regeling", "Compatibel met tado° thermostaat", "Geofencing", "OpenWindowDetectie"],
  affiliateUrl: "https://www.amazon.nl/tado%C2%B0-Slimme-Radiatorknop-intelligente-verwarmingsaansturing/dp/B08LNX3SDN?tag=slimhuiswonen-21",
  priceHint: "€60 – €80",
  priceLastUpdated: "april 2026",
  pros: ["Per kamer regelen — slaapkamer kouder, woonkamer warmer", "Combineert met tado° thermostaat", "Open-raam detectie"],
  cons: ["Duurder per stuk bij meerdere kamers", "Internet bridge vereist bij standalone gebruik"],
  forWho: ["Voor wie elke kamer apart wil regelen", "Als aanvulling bij een tado° thermostaat"],
  personalNote: "Combineer met de tado° thermostaat voor volledige controle per kamer. Terugverdientijd via energiebesparing is realistisch.",
  youtubeUrl: "https://www.youtube.com/shorts/oCauDVeOGBg",
},

/* =========================
   SLIMME SLOTEN — UITBREIDING
========================== */

{
  slug: "nuki-smart-lock-3-pro",
  ean: "9120072083969",
  brand: "Nuki",
  name: "Nuki Smart Lock 3.0 Pro",
  category: "slimme-sloten",
  image: "/images/products/nuki-smart-lock-3-pro.png",
  description:
    "Slimme deurslot met ingebouwde WiFi en Matter-ondersteuning. Past op bestaand euro-cilinderslot. Auto Unlock en Auto Lock via geofencing.",
  features: ["WiFi ingebouwd", "Matter", "Auto Unlock & Auto Lock", "Geofencing"],
  affiliateUrl: "https://www.amazon.nl/Smart-Module-elektronisch-automatisch-digitaal/dp/B09MRWW6WZ?tag=slimhuiswonen-21",
  priceHint: "€280 – €310",
  priceLastUpdated: "april 2026",
  pros: ["WiFi ingebouwd — geen bridge nodig", "Auto Unlock: deur gaat open als je aankomt", "Matter: werkt met alle grote platforms"],
  cons: ["Hogere prijs dan V4 Pro zonder bridge", "Batterijen vervangen i.p.v. opladen"],
  forWho: ["Voor wie Auto Unlock wil zonder extra bridge te kopen", "Voor Matter smart home setups"],
  personalNote: "Als je de WiFi-versie wilt zonder extra brug, is de 3.0 Pro nog steeds een uitstekende keuze. De Auto Unlock functie is dagelijks gemak dat je niet meer wilt missen.",
},

{
  slug: "aqara-smart-lock-u200-lite",
  ean: "6970504219922",
  brand: "Aqara",
  name: "Aqara Smart Lock U200 Lite",
  category: "slimme-sloten",
  image: "/images/products/aqara-smart-lock-u200-lite.png",
  description:
    "Betaalbaar slim deurslot met Matter/Thread, vingerafdruksensor en NFC-kaartje. Werkt met HomeKit, Google Home, Alexa en Home Assistant.",
  features: ["Vingerafdruksensor", "NFC", "Matter & Thread", "HomeKit, Google, Alexa"],
  affiliateUrl: "https://www.amazon.nl/dp/B0D9Q1WPBT?tag=slimhuiswonen-21",
  priceHint: "€130 – €160",
  priceLastUpdated: "april 2026",
  pros: ["Betaalbaar alternatief voor Nuki", "Vingerafdruk + NFC ingebouwd", "Matter: breed compatibel"],
  cons: ["Minder bekende naam dan Nuki", "Volledig nieuw slot — bestaand cilinderslot vervangen"],
  forWho: ["Voor wie een nieuw slot zoekt met biometrie en Matter", "Aqara-gebruikers die alles in één ecosysteem willen"],
  personalNote: "Sterk alternatief voor Nuki, zeker als je al in het Aqara-ecosysteem zit. De vingerafdruksensor maakt het dagelijks gebruik heel prettig.",
  youtubeUrl: "https://www.youtube.com/shorts/nm5_od4Unkk",
},

/* =========================
   MESH WIFI — UITBREIDING
========================== */

{
  slug: "tp-link-deco-xe75-2pack",
  ean: "4897098684986",
  brand: "TP-Link",
  name: "TP-Link Deco XE75 (2-pack)",
  category: "mesh-wifi",
  image: "/images/products/tp-link-deco-xe75-2pack.png",
  description:
    "WiFi 6E mesh-systeem in een 2-pack voor woningen tot ca. 370 m². Ideaal als fundament voor een betrouwbaar smart home met veel apparaten.",
  features: ["WiFi 6E (tri-band)", "2-pack — tot 370 m²", "Eenvoudig uitbreidbaar"],
  affiliateUrl: "https://www.amazon.nl/dp/B09W9FZQKC?tag=slimhuiswonen-21",
  priceHint: "€150 – €200",
  priceLastUpdated: "april 2026",
  pros: ["WiFi 6E — snelste standaard", "Eenvoudige Deco-app", "Goede prijs-kwaliteit voor 2-pack"],
  cons: ["WiFi 6E-snelheid vereist ondersteunde apparaten", "Premium prijs"],
  forWho: ["Voor middelgrote woningen die stabiel mesh wifi willen", "Voor smart home setups met 20+ apparaten"],
  personalNote: "De 2-pack is ideaal voor de meeste woningen in Nederland. Goedkoper dan de 3-pack terwijl de dekking voor de gemiddelde woning ruim voldoende is.",
  youtubeUrl: "https://www.youtube.com/shorts/J-wW_HLFVoM",
},

/* =========================
   ENERGIE MONITORS — UITBREIDING
========================== */

{
  slug: "zendure-slimme-meter-p1",
  ean: "6976552197113",
  brand: "Zendure",
  name: "Zendure Slimme Meter P1",
  category: "energie-monitors",
  image: "/images/products/zendure-slimme-meter-p1.png",
  description:
    "Slimme P1-meter die je slimme meter uitleest en energieverbruik realtime doorgeeft. Werkt met Zendure SolarFlow en Home Assistant. Geen abonnement.",
  features: ["P1-poort aansluiting", "Realtime energieverbruik", "Home Assistant compatibel", "Geen abonnement"],
  affiliateUrl: "https://www.amazon.nl/Zendure-Slimme-Meter-P1/dp/B0FL2CQ56X?tag=slimhuiswonen-21",
  priceHint: "€90 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Plug-and-play op P1-poort", "Werkt met SolarFlow en Home Assistant", "Geen maandelijks abonnement"],
  cons: ["Hogere prijs dan eenvoudige P1-dongles", "Primair gericht op Zendure-ecosysteem"],
  forWho: ["Voor Zendure SolarFlow-gebruikers die verbruik willen koppelen", "Voor Home Assistant-gebruikers die P1-data willen"],
  youtubeUrl: "https://www.youtube.com/watch?v=3vy7SmFM-G8",
},

{
  slug: "shelly-em",
  ean: "3800235268100",
  brand: "Shelly",
  name: "Shelly EM Energiemeter",
  category: "energie-monitors",
  image: "/images/products/shelly-em.png",
  description:
    "Energiemeter voor in de meterkast die per fase het verbruik meet. Werkt met Home Assistant, Homey en de eigen Shelly-app. Geschikt voor gevorderde gebruikers.",
  features: ["Per-fase meting", "WiFi", "Home Assistant & Homey", "Meterkast montage"],
  affiliateUrl: "https://www.amazon.nl/Shelly-Bluetooth-Energiemeter-Schakelbesturing-Vermogensmeting%E2%94%82-Huisautomatisering%E2%94%82/dp/B0CH1JW2CW?tag=slimhuiswonen-21",
  priceHint: "€60 – €75",
  priceLastUpdated: "april 2026",
  pros: ["Per-fase meting", "Werkt met Home Assistant en Homey", "Goedkoper dan Shelly Pro 3EM"],
  cons: ["Montage in meterkast — elektricien aanbevolen", "Minder functies dan Pro 3EM"],
  forWho: ["Voor Home Assistant-gebruikers die energieverbruik per fase willen meten", "Als goedkoper alternatief voor Shelly Pro 3EM"],
  personalNote: "De Shelly EM is de betaalbaardere instapper voor energiemeting in de meterkast. Minder uitgebreid dan de Pro 3EM maar voor de meeste woningen meer dan genoeg.",
  youtubeUrl: "https://www.youtube.com/shorts/zxPh7ekFqc4",
},

/* =========================
   SENSOREN — UITBREIDING
========================== */

{
  slug: "aqara-rookmelder",
  brand: "Aqara",
  name: "Aqara Rookmelder (Zigbee)",
  category: "sensoren",
  image: "/images/products/aqara-rookmelder.png",
  description:
    "Slimme Zigbee rookmelder met app-meldingen en integratie in HomeKit, Alexa en Home Assistant. Werkt met de Aqara hub.",
  features: ["Zigbee", "App-meldingen bij rookdetectie", "HomeKit, Alexa, Home Assistant", "LED-indicator"],
  affiliateUrl: "https://www.amazon.nl/Aqara-Rookmelders-LED-indicator-Batterijduur-Ondersteunt/dp/B0DHZ7LK2M?tag=slimhuiswonen-21",
  priceHint: "€35 – €45",
  priceLastUpdated: "april 2026",
  pros: ["App-melding bij rookdetectie — ook op afstand", "Integratie in automatiseringen (bijv. lampen rood laten knipperen)", "Lange batterijduur"],
  cons: ["Vereist Zigbee hub", "Duurdere dan gewone rookmelders"],
  forWho: ["Voor wie rookmelding ook buiten huis wil ontvangen", "Voor slimme automatiseringen bij branddetectie"],
  personalNote: "De slimme rookmelder voegt echt waarde toe ten opzichte van een gewone: je krijgt een melding op je telefoon, ook als je er niet bij bent.",
  youtubeUrl: "https://www.youtube.com/shorts/a3T4mHfMRCQ",
},

{
  slug: "aqara-mini-switch-t1",
  ean: "6975833352166",
  brand: "Aqara",
  name: "Aqara Mini Switch T1",
  category: "sensoren",
  image: "/images/products/aqara-mini-switch-t1.png",
  description:
    "Draadloze Zigbee-knop voor het starten van automatiseringen. Ondersteunt druk-, dubbel- en houdklik. Bevestig aan de muur of gebruik als losse afstandsbediening.",
  features: ["Zigbee", "Druk / Dubbel / Houd klik", "Muurbevestiging", "Automatiseringen"],
  affiliateUrl: "https://www.amazon.nl/Aqara-Schakelaar-Zigbee-verbinding-Bedieningsknop-Home-apparaten/dp/B07D19YXND?tag=slimhuiswonen-21",
  priceHint: "€15 – €22",
  priceLastUpdated: "april 2026",
  pros: ["3 acties per knop (druk / dubbel / houd)", "Werkt met alle Aqara-hubs", "Goedkoop en veelzijdig"],
  cons: ["Vereist Aqara hub of compatibele Zigbee hub", "Geen display"],
  forWho: ["Voor wie een fysieke knop wil voor elke automatisering", "Voor Aqara/Home Assistant-gebruikers"],
  personalNote: "Een van de meest veelzijdige en goedkoopste toevoegingen aan een smart home. Één knop kan drie verschillende acties uitvoeren — denk aan licht aan/uit, scène wisselen en alles uitzetten.",
  youtubeUrl: "https://www.youtube.com/shorts/PnvBQ2v_fjs",
},

{
  slug: "tapo-t300-waterlekkagesensor",
  ean: "4897098682364",
  brand: "TP-Link Tapo",
  name: "Tapo T300 Waterlekkagesensor",
  category: "sensoren",
  image: "/images/products/tapo-t300-waterlekkagesensor.png",
  description:
    "Slimme waterlekkagesensor met alarm tot 90dB en directe app-melding. IP67 waterbestendig. Vereist Tapo Hub H100 of H200.",
  features: ["90dB alarm", "IP67 waterbestendig", "App-melding", "Vereist Tapo Hub"],
  affiliateUrl: "https://www.amazon.nl/Tapo-T300-waterlek-sensor-ingebouwde-instelbare/dp/B0CB8Q3X4N?tag=slimhuiswonen-21",
  priceHint: "€15 – €20",
  priceLastUpdated: "april 2026",
  pros: ["Luid alarm (90dB) + app-melding", "Goedkoop", "IP67 — bestand tegen water"],
  cons: ["Vereist Tapo Hub H100 of H200", "Alleen binnen Tapo-ecosysteem"],
  forWho: ["Voor Tapo-gebruikers die al een H100/H200 hub hebben", "Voor plaatsing onder wasmachine, vaatwasser of in kelder"],
  personalNote: "Het Tapo-equivalent van de Aqara waterleksensor. Als je al een Tapo hub hebt, is dit de logische keuze.",
  youtubeUrl: "https://www.youtube.com/shorts/sJRH_NO6iNY",
},


  {
    slug: "eufy-c30-2k-draadloze-video-deurbel-2k-fhd-accu-zw",
    brand: "eufy",
    name: "eufy C30 2K Draadloze Video Deurbel 2K FHD - Accu Zwart + SD card 64 GB - geen Homebase nodig - Bundel",
    category: "slimme-deurbellen",
    image: "/images/products/eufy-c30-2k-draadloze-video-deurbel-2k-fhd-accu-zw.jpg",
    description: "eufy C30 2K Draadloze Video Deurbel 2K FHD - Accu Zwart + SD card 64 GB - geen Homebase nodig - Bundel",
    features: [],
    affiliateUrl: "https://www.amazon.nl/eufy-Video-Doorbell-werkt-batterijen/dp/B0DHRYZ4JJ?tag=slimhuiswonen-21",
    priceHint: "€119,00",
    priceLastUpdated: "april 2026",
    rating: 4.2,
    pros: [],
    cons: [],
    forWho: [],
  },
];

/* =========================
   HELPERS
========================== */

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export default products;

