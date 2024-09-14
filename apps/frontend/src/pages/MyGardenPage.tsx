import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";

const gardens = [
    {
        id: 1,
        image: "/path/to/garden1.jpg",
        title: "Urban Garden #1",
        description: "A beautiful rooftop garden with fresh vegetables.",
    },
    {
        id: 2,
        image: "/path/to/garden2.jpg",
        title: "Urban Garden #2",
        description: "A sustainable garden in the heart of the city.",
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
                    <Box key={garden.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src={garden.image} alt={garden.title} />
                        <Box p={6}>
                            <Heading as="h3" size="md" mb={2}>
                                {garden.title}
                            </Heading>
                            <Text>{garden.description}</Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}
