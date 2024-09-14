import { Box, Button, Container, HStack, Image } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";
export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={4}
      h={"auto"}
      w={"full"}
      bg={"#d0e6bf"}
    >
      <Container
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        maxW={"container.xl"}
      >
        <HStack flex={1} justifyContent={"start"}>
          <Image src="/img/logo/logo-no-background.svg" height={50} />
        </HStack>

        {/* New Menu Options */}
        <HStack flex={2} spacing={6} justifyContent={"center"}>
          <Button variant="link">Home</Button>
          <Button variant="link">Challenges</Button>
          <Button variant="link">Browse Gardens</Button>
          <Button variant="link">My Garden</Button>
        </HStack>

        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Box>
  );
};
