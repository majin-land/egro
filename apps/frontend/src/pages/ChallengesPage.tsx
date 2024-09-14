import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { challenges } from "../data/challenges";

export default function ChallengesPage() {
  return (
    <Box p={6} maxW={"container.xl"} mx={"auto"}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Challenges
      </Heading>
      <Button colorScheme="green" variant="solid" size="lg" mb={6}>
        Propose a Challenge
      </Button>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {challenges.map((challenge) => (
          <Box
            key={challenge.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={challenge.image} alt={challenge.title} />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                {challenge.title}
              </Heading>
              <Text>{challenge.description}</Text>
              <Box
                display="inline-flex"
                alignItems="center"
                bg="teal.500"
                color="white"
                px={3}
                py={2}
                borderRadius="5"
                verticalAlign={"middle"}
              >
                <Image
                  src={"img/ico/token-icon_b3tr.webp"}
                  height={6}
                  display={"inline"}
                  verticalAlign={"middle"}
                />
                &nbsp; Bounty: {challenge.bounty} B3TR
              </Box>
              <Button
                ml={2}
                colorScheme="green"
                variant="solid"
                as="a"
                href={`/challenge/${challenge.id}`}
              >
                Join
              </Button>
              <Text>
                {challenge.start_date} - {challenge.end_date}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
