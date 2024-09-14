import { Box, Image, Text, HStack, Flex, VStack, Card } from "@chakra-ui/react";
import { Instructions } from "../components";

export default function HomePage() {
    return (
        <>
            <Card w={"full"}>
                <Box p={3}>
                    <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
                        <Box
                            position="relative"
                            width="100%"
                            paddingTop="36.25%"  // aspect ratio
                            borderRadius={16}
                            overflow="hidden"
                        >
                            <Image
                                src="/img/bg/bg_home.webp"
                                objectFit="cover"
                                position="absolute"
                                top={0}
                                left={0}
                                width="100%"
                                height="100%"
                            />
                        </Box>

                        <Flex
                            w={"full"}
                            justifyContent={"center"} // Center horizontally
                            alignItems={"center"}      // Center vertically
                            direction={{ base: "column", md: "row" }}
                        >
                            <HStack>
                                <Text fontSize={24} fontWeight={800} textAlign="center">
                                    Green Cities, Sustainable Rewards
                                </Text>
                            </HStack>
                        </Flex>
                    </VStack>
                </Box>
            </Card>
            <Instructions />
        </>
    );
}
