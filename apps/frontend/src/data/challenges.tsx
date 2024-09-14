export const challenges = [
  {
    id: 1,
    image: "/img/challenges/most_popular.webp",
    title: "Most Popular Garden (September)",
    description: "Get the most likes on your garden to win.",
    bounty: "1000",
    start_date: "1/9/2024",
    end_date: "30/9/2024",
  },
  {
    id: 2,
    image: "/img/challenges/tomato.webp",
    title: "Largest Tomato",
    description: "Show off your green fingers with the largest tomato to win.",
    bounty: "500",
    start_date: "1/10/2024",
    end_date: "31/10/2024",
  },
  {
    id: 3,
    image: "/img/challenges/best.webp",
    title: "Best Balcony Garden",
    description: "Impress with a creative and sustainable balcony garden.",
    bounty: "800",
    start_date: "1/11/2024",
    end_date: "30/11/2024",
  },
  {
    id: 4,
    image: "/img/challenges/herb_garden.webp",
    title: "Best Herb Garden",
    description: "Show off the best collection of herbs grown in your garden.",
    bounty: "600",
    start_date: "1/12/2024",
    end_date: "31/12/2024",
  },
  {
    id: 5,
    image: "/img/challenges/rookie.webp",
    title: "Rookie of the Month",
    description: "New gardeners can win by sharing their progress.",
    bounty: "700",
    start_date: "1/9/2024",
    end_date: "30/9/2024",
  },
  {
    id: 6,
    image: "/img/challenges/vertical.webp",
    title: "Best Vertical Garden",
    description: "Show your creativity with a space-saving vertical garden.",
    bounty: "900",
    start_date: "1/10/2024",
    end_date: "31/10/2024",
  },
  {
    id: 7,
    image: "/img/challenges/creative.webp",
    title: "Most Creative Planters",
    description: "Get inventive with your garden planters to stand out.",
    bounty: "750",
    start_date: "1/11/2024",
    end_date: "30/11/2024",
  },
  {
    id: 8,
    image: "/img/challenges/tech.webp",
    title: "High Tech Challenge",
    description: "Science your garden to the moon.",
    bounty: "1200",
    start_date: "1/12/2024",
    end_date: "31/12/2024",
  },
  {
    id: 9,
    image: "/img/challenges/community.webp",
    title: "Best Community Garden",
    description: "Team up and grow together in a shared space to win.",
    bounty: "1500",
    start_date: "1/1/2025",
    end_date: "31/1/2025",
  },
];

export const challengesDataMap: { [key: string]: any } = challenges.reduce(
  (map, challenge) => {
    map[challenge.id] = challenge;
    return map;
  },
  {} as { [key: string]: any }
);
