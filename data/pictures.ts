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
  },{
    id: 6,
    title: "Ancient Greek Sculture",
    description: " ",
    image: "/photo4.png",
    year: "100 AD",
    location: "Greece",
    externalUrl: "https://en.wikipedia.org/wiki/Gladiator"
  },{
    id:7,
    title:'Ancient Greek Art & Architecture | Style & Examples',
    description:"Explore the rich heritage of Ancient Greek art and architecture, from iconic sculptures to majestic temples like the Parthenon. Discover how these masterpieces reflect the culture, religion, and values of ancient Greece, influencing Western art for centuries.",
    image:"/photo5.png",
    year:"500 BC",
    location:"Greece",
    externalUrl:"https://study.com/learn/lesson/ancient-greek-art-architecture-style-examples.html"
  },{
    id:7,
    title:'Roman pottery',
    description:"Roman pottery was a significant aspect of daily life in ancient Rome, serving both practical and decorative purposes. It included a variety of forms such as amphorae for storage, terra sigillata for fine dining, and utilitarian wares for everyday use. Roman pottery was often decorated with intricate designs, scenes from mythology, and everyday life, reflecting the culture and values of Roman society. The production techniques and styles evolved over time, influenced by interactions with other cultures within the vast Roman Empire.",
    image:"/photo6.png",
    year:"100 AD",
    location:"Rome",
    externalUrl:"https://share.google/images/kuo4ACw9kYgb1hbRM"
  },{
    id:8,
    title:'Roman pottery',
    description:"Ancient Roman architecture",
    image:"/photo7.png",
    year:"200 AD",
    location:"Rome",
    externalUrl:"https://share.google/images/BOzf3S6p64RPuTvls"
  },{
    id:9,
    title:'Ancient israeli pottery',
    description:"Ancient Israeli pottery",
    image:"/photo8.png",
    year:"300 AD",
    location:'isreal',
    externalUrl:"https://share.google/images/hWPHi6hVKEp7M9JYr"
  },{
    id:10,
    title:'Iron Age Jug 1200-925 B.C. – Discovered in the Holy Land',
    description:"Iron Age Jug 1200-925 B.C. – Discovered in the Holy Land",
    image:"/photo9.png",
    year:"925 BC",
    location:'isreal',
    externalUrl:"https://share.google/images/1gk3bX1pXJH6b2Fv5"
  },{
    id:11,
    title:'Jesus Time Cooking Pot',
    description:"Jesus Time Cooking Pot",
    image:"/photo10.png",
    year:"30 AD",
    location:'isreal',
    externalUrl:"https://zaksantiquities.com/shop/ancient-pottery/ancient-cooking-pots/jesus-time-cooking-pot/?srsltid=AfmBOoruqG-Qgxgy90QVenjIgDqfH3evwGeidmrUzUaSHJpXH1R1YjCx"
  },{
    id:12,
    title:'Ancient Israel oil lamp',
    description:"",
    image:"/photo11.png",
    year:"100 AD",
    location:'isreal',
    externalUrl:"https://www.istockphoto.com/photo/oil-lamp-gm136561886-1936278",
  },{
    id:13,
    title:'Old vases in Israel',
    description:'',
    image:"/photo12.png",
    year:"200 AD",
    location:'isreal',
    externalUrl:"https://www.istockphoto.com/photo/old-vases-in-israel-gm455662059-30691320",
  },{
    id:14,
    title:'Life in Ancient Israel',
    description:'',
    image:"/photo13.png",
    year:"300 AD",
    location:'isreal',
    externalUrl:"https://www.immanuel-tours.com/blog/life-in-ancient-israel/"
  }
  // Add more pictures similarly...
];
