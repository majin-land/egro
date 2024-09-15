import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";

const gardens = [
  {
    id: 1,
    image: "/img/my-garden/1.webp",
    title: "Planting Season",
    description: "Preparing the soil for planting season.",
    date: "2024-06-01",
  },
  {
    id: 2,
    image: "/img/my-garden/2.webp",
    title: "Harvest Time!",
    description: "After 3 months of hard work, it's time to harvest!",
    date: "2024-09-01",
  },
  // Add more garden items as needed
];

export default function MyGardenPage() {
  return (
    <Box p={6} maxW={"container.xl"} mx={"auto"}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        My Garden
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
              <Text>Posted: {garden.date}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
