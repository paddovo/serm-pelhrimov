export const siteConfig = {
  name: "Škola historického šermu Pelhřimov",
  shortName: "ŠHŠ Pelhřimov",
  domain: "www.sermpelhrimov.cz",
  url: "https://www.sermpelhrimov.cz",
  description: "Moderní škola bojového umění s historickým charakterem. Poznej šerm, nauč se bojovat, poznej historii.",

  contact: {
    email: "info@sermpelhrimov.cz", // Easy configurable placeholder
    phone: "+420 123 456 789", // Easy configurable placeholder
    address: "Pelhřimovská sportovní hala, Pelhřimov",
    venueDetails: "Sportovní hala Pelhřimov, Nádražní ulice",
  },

  socials: {
    facebook: "https://www.facebook.com/shspelhrimov.cz",
    instagram: "https://www.instagram.com/shspelhrimov", // Configurable
    youtube: "https://www.youtube.com/@shspelhrimov", // Configurable
  },

  parentOrganization: {
    name: "Aurinko Félag",
    url: "https://www.aurinkofelag.cz",
  },

  pricing: {
    semester: 2500,
    currency: "Kč",
    periodLabel: "Jeden kurz / semestr",
    note: "Pravidelný trénink pod vedením zkušených lektorů, možnost zapůjčení základního vybavení pro začátečníky.",
  },

  schedules: [
    {
      id: "tesak-utery",
      day: "ÚTERÝ",
      time: "19:00–20:00",
      title: "Šerm tesákem",
      weapon: "Tesák (Messer)",
      level: "Všechny úrovně",
      location: "Pelhřimovská sportovní hala",
      maxCapacity: 20,
      description: "Trénink dynamického šermu jednoručním tesákem. Základy krytů, seků a práce na krátkou vzdálenost.",
    },
    {
      id: "dlouhy-mec-pokracovaci",
      day: "PÁTEK",
      time: "19:00–20:30",
      title: "Šerm dlouhým mečem – pokročilejší",
      weapon: "Dlouhý meč (Fechtbuch)",
      level: "Pokročilí",
      location: "Pelhřimovská sportovní hala",
      maxCapacity: 20,
      description: "Prohlubování technik dle německé a italské školy, vopressing, volný šerm (sparr) s ochranným vybavením.",
    },
    {
      id: "dlouhy-mec-zacatecnici",
      day: "PÁTEK",
      time: "20:30–21:30",
      title: "Šerm dlouhým mečem – začátečníci",
      weapon: "Dlouhý meč",
      level: "Začátečníci",
      location: "Pelhřimovská sportovní hala",
      maxCapacity: 20,
      description: "Základní postoj, kroky, držení meče, základní seky a kryty. Není nutné mít vlastní vybavení.",
    },
  ],

  weapons: [
    {
      id: "dlouhy-mec",
      name: "Dlouhý meč",
      subtitle: "Královská zbraň evropského středověku",
      description: "Obouruční meč tvořící základ evropského historického bojového umění. Využívá páku, vzdálenost a cit v vazbě.",
      image: "/images/weapons/dlouhy-mec.jpg",
    },
    {
      id: "tesak",
      name: "Tesák (Messer)",
      subtitle: "Jednoruční zbraň měšťanů a vojáků",
      description: "Rychlá a nemilosrdná jednoruční zbraň s záštitným trnem. Výborná pro výuku krytů, odzbrojení a práce zblízka.",
      image: "/images/weapons/tesak.jpg",
    },
    {
      id: "dyka",
      name: "Dýka a Zápas (Ringen)",
      subtitle: "Boj zblízka a osobní obrana",
      description: "Základy středověkého zápasu a obranatých technik s dýkou. Rozvíjí stabilitu, tělesnou koordinaci a reakční čas.",
      image: "/images/weapons/dyka.jpg",
    },
    {
      id: "tycove-zbrane",
      name: "Tyčové zbrane a sekera",
      subtitle: "Bojové náčiní bojišť",
      description: "Dřevcové zbraně, doplňkové semináře a výuka historického vojenského výcviku.",
      image: "/images/weapons/polearm.jpg",
    },
  ],

  events: [
    {
      id: "1",
      title: "Nábor do nového semestru 2025",
      date: "2025-09-15",
      time: "19:00",
      category: "Trénink",
      location: "Pelhřimovská sportovní hala",
      description: "Otevřený trénink pro všechny nové zájemce o historický šerm dlouhým mečem a tesákem.",
    },
    {
      id: "2",
      title: "Seminář šermu tesákem",
      date: "2025-10-20",
      time: "10:00 - 16:00",
      category: "Seminář",
      location: "Pelhřimovská sportovní hala",
      description: "Intenzivní jednodenní seminář zaměřený na historické prameny Meistera Hansa Lecküchnera.",
    },
  ],
};
