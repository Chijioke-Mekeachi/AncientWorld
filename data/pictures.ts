export interface Picture {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  location: string;
  externalUrl?: string; // Link to the source or external site
}

export const pictures: Picture[] = [
  {
    id: 1,
    title: "Ruins of Babylon",
    description: "Ancient Mesopotamian ruins preserved through centuries.",
    image: "/face-of-roman-god-jupiter.png",
    year: "1800 BC",
    location: "Rome",
    externalUrl: "https://en.wikipedia.org/wiki/Babylon"
  },
  {
    id: 2,
    title: "Egyptian Wall Carvings",
    description: "Carvings illustrating life along the Nile.",
    image: "/Giove,_I_sec_dc,_con_parti_simulanti_il_bronzo_moderne_02.JPG",
    year: "1450 BC",
    location: "Egypt",
    externalUrl: "https://en.wikipedia.org/wiki/Ancient_Egyptian_art"
  },{
    id: 3,
    title: "Roman Army Weapons",
    description: "The iconic temple dedicated to Athena in Athens.",
    image: "/photo1.png",
    year: "432 BC",
    location: "Roman Empire",
    externalUrl: "https://imperiumromanum.pl/en/roman-army/equipment-of-roman-legionary/#google_vignette"
  },{
    id: 4,
    title: "The Etruscan Inheritance",
    description: `When Rome appeared as a city-state in the Tiber valley some time in the middle of the eighth century bce, its first army differed little from those of other small communities in Latium. It is believed Rome’s first military organization was based on the tribal system, reflecting the three original Roman tribes (the Ramnes, the Tities, and the Luceres). Each tribe provided 1,000 infantry towards the army, made up of ten centuries consisting of 100 men. The tribal contingent was under the command of a tribunus or tribal officer. Together, these 3,000 men made up a legio or levy. This infantry force was supplemented by a small body of 300 equites or ‘knights’, aristocratic cavalry drawn equally from the three tribes.`,
    image: "/photo2.png",
    year: "432 BC",
    location: "Rome",
    externalUrl: "https://warhistory.org/@msw/article/rome-at-war"
  },{
    id: 5,
    title: "Top 9 Most Important Weapons of the Roman Legionary",
    description: "Intricately designed pottery showcasing Greek mythology.",
    image: "/photo3.png",
    year: "500 BC",
    location: "Roman Empire",
    externalUrl: "https://imperiumromanum.pl/en/roman-army/equipment-of-roman-legionary/#google_vignette"
  }
  // Add more pictures similarly...
];
