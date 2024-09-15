import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { gardensDataMap } from "../data/gardens";
import { useParams } from "react-router-dom";

export default function GardenPage() {
  const { gardenId } = useParams<{ gardenId: any }>();

  const garden = gardensDataMap[gardenId || ""];
  console.log(garden, gardenId);

  if (!garden) {
    return <div>Garden not found.</div>;
  }

  return (
    <Box p={6} maxW={"container.xl"} mx={"auto"}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Garden: {garden.title}
      </Heading>
      <Heading as="h2" size="l" mb={6} textAlign="center">
        Date: {garden.date}
      </Heading>
      <Box
        position="relative"
        width="100%"
        paddingTop="100%" // aspect ratio
        borderRadius={16}
        overflow="hidden"
      >
        <Image
          src={garden.image}
          objectFit="cover"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        />
      </Box>
      <Text>{garden.description}</Text>
      <Button
        colorScheme="green"
        variant="solid"
        as="a"
        target="_blank"
        href={`https://explore-testnet.vechain.org/accounts/${garden.wallet}/txs`}
      >
        View on VeChain Explorer
      </Button>
      <Heading as="h2" size="xl" mb={6} textAlign="center" mt={5}>
        Gallery
      </Heading>
    </Box>
  );
}
