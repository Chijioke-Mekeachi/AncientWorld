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
  },
  // Add more pictures similarly...
];
