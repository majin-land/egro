import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const gardens = [
  {
    id: 1,
    image: "/img/gardens/garden1.webp",
    title: "Urban Garden #1",
    description: "A beautiful rooftop garden with fresh vegetables.",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
  },
  {
    id: 2,
    image: "/img/gardens/garden2.webp",
    title: "Urban Garden #2",
    description: "A sustainable garden in the heart of the city.",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
  },
  {
    id: 3,
    image: "/img/gardens/garden3.webp",
    title: "Urban Garden #1",
    description: "A beautiful rooftop garden with fresh vegetables.",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
  },
  {
    id: 4,
    image: "/img/gardens/garden4.webp",
    title: "Urban Garden #1",
    description: "A beautiful rooftop garden with fresh vegetables.",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
  },
  {
    id: 5,
    image: "/img/gardens/garden5.webp",
    title: "Urban Garden #1",
    description: "A beautiful rooftop garden with fresh vegetables.",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
  },
  {
    id: 6,
    image: "/img/gardens/garden6.webp",
    title: "Urban Garden #1",
    description: "A beautiful rooftop garden with fresh vegetables.",
    wallet: "0xaC3824073E9ddA5c676D131457FeDbF2799409aB",
  },
];

export default function BrowseGardens() {
  return (
    <Box p={6} maxW={"container.xl"} mx={"auto"}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Browse Gardens
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {gardens.map((garden) => (
          <Box
            key={garden.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={garden.image} alt={garden.title} />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                {garden.title}
              </Heading>
              <Text>{garden.description}</Text>
              <Link
                to={`https://explore-testnet.vechain.org/accounts/${garden.wallet}`}
                target="_blank"
              >
                Verify
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
