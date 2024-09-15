import { Box, Image, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { gardensDataMap } from "../data/gardens";
import { useParams } from "react-router-dom";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { gallery } from "../data/gallery";

export default function GardenPage() {
  const { gardenId } = useParams<{ gardenId: any }>();

  const garden = gardensDataMap[gardenId || ""];
  console.log(garden, gardenId);

  if (!garden) {
    return <div>Garden not found.</div>;
  }

  return (
    <Box p={6} maxW={"container.xl"} mx={"auto"} textAlign="center">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Garden: {garden.title}
      </Heading>
      <Heading as="h2" size="l" mb={6} textAlign="center">
        Last Updated: {garden.date}
      </Heading>
      <Box
        position="relative"
        width="50%"
        paddingTop="50%" // aspect ratio
        borderRadius={16}
        overflow="hidden"
        margin={"auto"}
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

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {gallery.map((gallery: { image: string | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
          <Box
            key={garden.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={gallery.image} />
            <Box p={6}>
              <Text>
                {gallery.date}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
