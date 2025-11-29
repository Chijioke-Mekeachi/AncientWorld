// /data/videos.ts

export interface Video {
  id: number;
  title: string;
  description: string;
  // CHANGED: Now stores the full YouTube URL
  youtubeUrl: string;
  duration: string;
  category: 'Egypt' | 'Rome' | 'Greece' | 'Documentary';
}

export const videos: Video[] = [
  {
    id: 1,
    title: "The Pharaohs' Secrets: Unveiling the Great Pyramid",
    description: "A deep‑dive documentary exploring the construction and mysteries surrounding Khufu's Great Pyramid of Giza. Featuring CGI recreations and expert archaeology insights.",
    youtubeUrl: 'https://youtu.be/4WgPtUrUA04',
    duration: '45:12',
    category: 'Egypt',
  },
  {
    id: 2,
    title: "Rise and Fall of the Roman Empire: A 10‑Minute Summary",
    description: "A fast‑paced overview of Rome's evolution from a republic to a mighty empire, concluding with its eventual decline.",
    youtubeUrl: 'https://youtu.be/oNynx9vY924',
    duration: '10:05',
    category: 'Rome',
  },
  {
    id: 3,
    title: "Philosophy of Socrates: Understanding Ancient Greek Thought",
    description: "Explore the life and key philosophical ideas of Socrates, Plato, and Aristotle and their lasting impact on Western civilization.",
    youtubeUrl: 'https://www.youtube.com/watch?v=F-u1U9k03_Y',
    duration: '22:40',
    category: 'Greece',
  },
  {
    id: 4,
    title: "Lost Civilizations: The Kingdom of Aksum",
    description: "Traveling to modern‑day Ethiopia to uncover the hidden treasures and unique architecture of the ancient Kingdom of Aksum.",
    youtubeUrl: 'https://youtu.be/o-z72Dk-G2c', 
    duration: '35:00',
    category: 'Documentary',
  },
  {
    id: 5,
    title: "The Gladiatorial Games: Brutality and Spectacle",
    description: "A look at the training, life, and legacy of Rome's most famous fighters, focusing on the Colosseum events.",
    youtubeUrl: 'https://www.youtube.com/watch?v=7Q1Y9vP9iKk',
    duration: '18:55',
    category: 'Rome',
  },
  {
    id: 6,
    title: "The Secrets of Tutankhamun’s Tomb",
    description: "A documentary exploring the discovery, treasures, and historical significance of King Tutankhamun’s tomb — shedding light on ancient Egypt’s burial practices.",
    youtubeUrl: 'https://youtu.be/Qw3CjmoB3oY',
    duration: '50:30',
    category: 'Egypt',
  },
  {
    id: 7,
    title: "The Ancient World: From Mesopotamia to Rome – A Full Overview",
    description: "A sweeping chronicle of human civilization — from early Mesopotamia and Egypt, through Ancient India, China, Greece, and Rome — exploring how early societies evolved, fought, innovated, and laid the foundations of the modern world. Great for broad historical context.",
    youtubeUrl: 'https://www.youtube.com/watch?v=Xx0NzvZvAnI',
    duration: '3:10:25',  // approx length
    category: 'Documentary',
  },
];
