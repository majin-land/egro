import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { challenges, challengesDataMap } from "../data/challenges";
import { useParams } from "react-router-dom";
import { Dropzone } from "../components/Dropzone";

export default function ChallengePage() {
  const { challengeId } = useParams<{ challengeId: any }>();

  const challenge = challengesDataMap[challengeId || ""];
  console.log(challenge, challengeId);

  if (!challenge) {
    return <div>Challenge not found.</div>;
  }

  return (
    <Box p={6} maxW={"container.xl"} mx={"auto"}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Challenge: {challenge.title}
      </Heading>
      <Heading as="h2" size="l" mb={6} textAlign="center">
        Date: {challenge.start_date} - {challenge.end_date}
      </Heading>
      <Text>{challenge.description}</Text>
      <Dropzone />
    </Box>
  );
}
