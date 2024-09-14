import { Box, Button, Container, HStack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
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
          <RouterLink to="/">
            <Image src="/img/logo/logo-no-background.svg" height={50} />
          </RouterLink>
        </HStack>

        {/* New Menu Options */}
        <HStack flex={2} spacing={6} justifyContent={"center"}>
          <Button as={RouterLink} variant="link" to="/">Home</Button>
          <Button as={RouterLink} to="/challenges" variant="link">
            Challenges
          </Button>
          <Button as={RouterLink} to="/browse-gardens" variant="link">
            Browse Gardens
          </Button>
          <Button as={RouterLink} to="/my-garden" variant="link">
            My Garden
          </Button>
        </HStack>

        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Box>
  );
};
