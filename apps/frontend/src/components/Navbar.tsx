import { useState } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

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
        {/* Logo Section */}
        <HStack flex={1} justifyContent={"start"}>
          <RouterLink to="/">
            <Image src="/img/logo/logo-no-background.svg" height={50} />
          </RouterLink>
        </HStack>

        {/* Desktop Menu */}
        {!isMobile && (
          <HStack flex={2} spacing={6} justifyContent={"center"}>
            <Button as={RouterLink} variant="link" to="/">
              Home
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                variant="link"
                rightIcon={<ChevronDownIcon />}
              >
                Community
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/community/share-harvest">
                  Share Harvest
                </MenuItem>
                <MenuItem as={RouterLink} to="/community/learning">
                  Learning
                </MenuItem>
                <MenuItem as={RouterLink} to="/community/events">
                  Events
                </MenuItem>
              </MenuList>
            </Menu>
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
        )}

        {/* Mobile Menu - Hamburger Icon */}
        {isMobile && (
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            variant="outline"
          />
        )}

        {/* Connect Wallet Button */}
        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <ConnectWalletButton />
        </HStack>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} alignItems="start">
              <Button as={RouterLink} variant="link" to="/" onClick={onClose}>
                Home
              </Button>
              <Menu>
                <MenuButton as={Button} variant="link" onClick={onOpen}>
                  Community
                </MenuButton>
                <MenuList>
                  <MenuItem
                    as={RouterLink}
                    to="/community/share-harvest"
                    onClick={onClose}
                  >
                    Share Harvest
                  </MenuItem>
                  <MenuItem
                    as={RouterLink}
                    to="/community/learning"
                    onClick={onClose}
                  >
                    Learning
                  </MenuItem>
                  <MenuItem
                    as={RouterLink}
                    to="/community/events"
                    onClick={onClose}
                  >
                    Events
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                as={RouterLink}
                variant="link"
                to="/challenges"
                onClick={onClose}
              >
                Challenges
              </Button>
              <Button
                as={RouterLink}
                variant="link"
                to="/browse-gardens"
                onClick={onClose}
              >
                Browse Gardens
              </Button>
              <Button
                as={RouterLink}
                variant="link"
                to="/my-garden"
                onClick={onClose}
              >
                My Garden
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
