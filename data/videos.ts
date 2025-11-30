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
    title:"Were the Ebionites Heretics? Or James Tabor: Our Best Witness to the Jesus Movement?",
    description:`The ancient group of Jesus followers referred to as the "Ebionites" were slandered, damned, and declared heretics by the mainstream Christian Orthodox Church Fathers. In this interview with Derek Lambert, host of @MythVisionPodcast, I argue that they might well be one of our main clues to recovering what the original followers of John the Baptist, Jesus, and his brother James were all about. I explore the various uses of the term "Ebionite" and try to problematize any quick and easy categorization of the diverse nature of the Jesus Movement in late 2nd Temple times. The use of dichotomous categories like "Jewish Christian" or "Judaeo-Christian," or even Nazarene and Ebonite--as they come to be used in later times by the Church Fathers--and even in modern descriptions, are all misleading. Here I offer a counter approach, and with a very few others, connect the Ebionites to the mother Jerusalem Church of James the Just and his followers--with Paul's relationship to the earliest moment left ambiguous due to his imminent apocalyptic expectations.`,
    youtubeUrl:"https://www.youtube.com/watch?v=HLQ97erL1gc",
    duration: '1:15:30',
    category: 'Documentary',
  },
  {
    id: 3,
    title: "Were the Ebionites Heretics? Or  Our Best Witness to the Jesus Movement?",
    description: `The ancient group of Jesus followers referred to as the "Ebionites" were slandered, damned, and declared heretics by the mainstream Christian Orthodox Church Fathers. In this interview with Derek Lambert, host of @MythVisionPodcast , I argue that they might well be one of our main clues to recovering what the original followers of John the Baptist, Jesus, and his brother James were all about. I explore the various uses of the term "Ebionite" and try to problematize any quick and easy categorization of the diverse nature of the Jesus Movement in late 2nd Temple times. The use of dichotomous categories like "Jewish Christian" or "Judaeo-Christian," or even Nazarene and Ebonite--as they come to be used in later times by the Church Fathers--and even in modern descriptions, are all misleading. Here I offer a counter approach, and with a very few others, connect the Ebionites to the mother Jerusalem Church of James the Just and his followers--with Paul's relationship to the earliest moment left ambiguous due to his imminent apocalyptic expectations.`,
    youtubeUrl: 'https://www.youtube.com/watch?v=HLQ97erL1gc',
    duration: '52:45',
    category: 'Greece',
  },{
    id: 4,
    title: "The Biblical Errors That Collapse the Jesus Story",
    description: `The credibility of the Jesus story depends on the Bible being consistent — yet it’s filled with errors that make the narrative impossible. This investigation exposes the historical mistakes, scientific impossibilities, timeline contradictions, duplicated myths, and conflicting accounts that undermine every major event in Jesus’ life. From incompatible genealogies to contradictory resurrection stories, the errors aren’t minor — they collapse the entire foundation. Discover the biblical errors that dismantle the Jesus story and reveal a myth built on contradictions, not history.`,
    youtubeUrl: 'https://youtu.be/vVrXrPgTgQA',
    duration: '1:20:15',
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
    title: "Roman Pagan Life and Worship",
    description: "A documentary exploring the discovery, treasures, and historical significance of King Tutankhamun’s tomb — shedding light on ancient Egypt’s burial practices.",
    youtubeUrl: 'https://youtu.be/Qw3CjmoB3oY',
    duration: '50:30',
    category: 'Rome',
  },
  {
    id: 7,
    title: "The Ancient World: From Mesopotamia to Rome – A Full Overview",
    description: "A sweeping chronicle of human civilization — from early Mesopotamia and Egypt, through Ancient India, China, Greece, and Rome — exploring how early societies evolved, fought, innovated, and laid the foundations of the modern world. Great for broad historical context.",
    youtubeUrl: 'https://www.youtube.com/watch?v=Xx0NzvZvAnI',
    duration: '3:10:25',  // approx length
    category: 'Rome',
  },{
    id: 8,
    title: "The Ancient Conspiracy of the Two Messiahs — And How It Transforms Jesus’ Story! | Dr. James Tabor",
    description: `In The Jesus Dynasty, biblical scholar James Tabor brings us closer than ever to the historical Jesus. He explains the crucial relationship between Jesus, a royal descendant of David, and his relative John the Baptizer, a priestly descendant of Aaron and Jesus' teacher. When John was killed, several of his followers -- including Jesus' four brothers -- joined with Jesus, who continued John's mission, preaching the same apocalyptic message. After Jesus confronted the Roman authorities in Jerusalem and was crucified, his brother James succeeded him as the leader of the Jesus dynasty.`,
    youtubeUrl: 'https://www.youtube.com/watch?v=wJgphCIByvA',
    duration: '50:30',
    category: 'Rome',
  },{
    id: 9,
    title: "Who Really Is the Antichrist? Rabbi Singer Reveals the Truth",
    description: `Who Really Is the Antichrist? Rabbi Singer Reveals the Truth
Tovia Singer`,
    youtubeUrl: 'https://www.youtube.com/watch?v=u-TfvvK_xbI',
    duration: '22:10',
    category: 'Documentary',
  },{
    id: 10,
    title: "The Shocking history of the early Church!",
    description: `Most Christians today don’t realize that the early church was entirely Jewish — Torah-observant believers worshiping in the Temple and celebrating the biblical feasts. But over the next few centuries, Christianity underwent a dramatic transformation into a predominantly Gentile religion stripped of its Jewish heritage. In this video, we trace the historical and theological journey from the first-century Jerusalem church to the Council of Nicaea and beyond. Learn how political upheaval, cultural tensions, and theological shifts led to this Great Separation — and why it matters today.`,
    youtubeUrl: 'https://www.youtube.com/watch?v=JIY-tLVJctY',
    duration: '50:30',
    category: 'Documentary',
  },{
    id: 11,
    title: "The 3,000 Bibles Constantine Tried to Erase Forever",
    description: `In 325 AD, Emperor Constantine faced a crisis: Christianity was tearing his empire apart. Different communities had different Gospels, different versions of Jesus, different truths. His solution? Gather 318 bishops at the Council of Nicaea and force them to agree on one version of Christianity—one creed, one canon, one Bible. But what books were left out? Which Gospels were banned? And who really decided what you read in your Bible today? This is the untold story of how Constantine shaped Christianity forever.`,
    youtubeUrl: 'https://www.youtube.com/watch?v=knTxJ3ISVHs',
    duration: '25:45',
    category: 'Documentary',
  },{
    id: 12,
    title: "Early Christian Persecution",
    description: `This video looks at the earliest Christian persecution under the Roman Empire.`,
    youtubeUrl: 'https://www.youtube.com/watch?v=hJR0A9phBc8',
    duration: '50:30',
    category: 'Rome',
  }
];
// https://youtu.be/Qw3CjmoB3oY