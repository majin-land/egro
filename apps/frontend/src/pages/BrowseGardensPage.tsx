import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { gardens } from "../data/gardens";

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
              <Heading as="h4" size="sm" mb={1}>
                {garden.country}
              </Heading>
              <Text>{garden.description}</Text>
              <Text>Posted: {garden.date}</Text>
              <Button
                colorScheme="green"
                variant="solid"
                as="a"
                href={`/garden/${garden.id}`}
              >
                Explore
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
