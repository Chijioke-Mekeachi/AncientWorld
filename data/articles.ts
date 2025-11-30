export interface Article {
  id: number;
  title: string;
  summary: string;
  content?: string; // only for internal articles
  author?: string;
  image?: string;
  externalUrl?: string; // if it's an external link
  category?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Greek Intellectuals & the Roman Empire",
    summary: "Exploring the influence of Greek thinkers on Roman society.",
    externalUrl: "https://antigonejournal.com/2023/11/greek-intellectuals-roman-empire/"
  },
  {
    id: 2,
    title: "CUNY Paper on Greek & Roman Studies",
    summary: "Research paper on Greek and Roman historical studies.",
    externalUrl: "https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=4469&context=gc_etds"
  },
  {
    id: 3,
    title: "Greek and Roman Collection — Triton Library",
    summary: "Collection of Greek and Roman resources available online.",
    externalUrl: "https://library.triton.edu/greekandroman"
  },
  {
    id: 4,
    title: "Difference Between Greek and Roman Mythology",
    summary: "Explore key differences in myths and legends between Greece and Rome.",
    externalUrl: "https://lpsonline.sas.upenn.edu/features/explore-difference-between-greek-and-roman-mythology"
  },
  {
    id: 5,
    title: "Influence of Babylon, Egypt, and Greece",
    summary: "The impact of ancient civilizations on each other.",
    externalUrl: "https://www.vision.org/influence-babylon-egypt-and-greece-796"
  },
  {
    id: 6,
    title: "'Polytheism' in Ancient World Religions",
    summary: "Study of polytheistic practices in Egyptian, Babylonian, Greek, and Roman religions.",
    externalUrl: "https://www.researchgate.net/publication/353996954_'Polytheism'_in_Ancient_World_Religions_Egyptian_Babylonian_Greek_and_Roman_Religions"
  },
  {
    id: 7,
    title: "Economy and Economics of Ancient Greece",
    summary: "Analysis of trade, commerce, and economic systems in Ancient Greece.",
    externalUrl: "https://www.researchgate.net/publication/297572849_Economy_and_Economics_of_Ancient_Greece"
  },
  {
    id: 8,
    title: "Trade and Commerce in Ancient World",
    summary: "Overview of trade and commerce across ancient civilizations.",
    externalUrl: "https://www.ebsco.com/research-starters/economics/trade-and-commerce-ancient-world"
  },
];
