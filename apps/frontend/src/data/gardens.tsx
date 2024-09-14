//TODO: Plug in to data source

export const gardens = [
  {
    id: 1,
    image: "/img/gardens/garden1.webp",
    title: "Rooftop Garden",
    description: "A beautiful rooftop garden with fresh vegetables.",
    countryCode: "AU",
    country: "Australia",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
    date: "14/9/2024",
  },
  {
    id: 2,
    image: "/img/gardens/garden2.webp",
    title: "My Rooftop Garden",
    description: "A sustainable garden in the heart of the city.",
    countryCode: "SG",
    country: "Singapore",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
    date: "11/9/2024",
  },
  {
    id: 3,
    image: "/img/gardens/garden3.webp",
    title: "Car Park Rooftop Garden",
    description: "Rooftop garden built on top of a multi-storey carpark.",
    countryCode: "SG",
    country: "Singapore",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
    date: "10/9/2024",
  },
  {
    id: 4,
    image: "/img/gardens/garden4.webp",
    title: "Cozy Balcony Garden",
    description: "A garden on a cozy balcony with a view of the city.",
    countryCode: "SG",
    country: "Singapore",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
    date: "1/9/2024",
  },
  {
    id: 5,
    image: "/img/gardens/garden5.webp",
    title: "Balcony Garden",
    description: "Nice balcony garden with art pieces.",
    countryCode: "UK",
    country: "United Kingdom",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
    date: "31/8/2024",
  },
  {
    id: 6,
    image: "/img/gardens/garden6.webp",
    title: "Hillside View Balcony Garden",
    description: "A balcony garden with various vegetables.",
    countryCode: "SG",
    country: "Singapore",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
    date: "1/8/2024",
  },
];

export const gardensDataMap: { [key: string]: any } = gardens.reduce(
  (map, garden) => {
    map[garden.id] = garden;
    return map;
  },
  {} as { [key: string]: any }
);
