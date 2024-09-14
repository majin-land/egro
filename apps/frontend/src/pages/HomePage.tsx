import { Box, Image, Text, HStack, Flex, VStack, Card } from "@chakra-ui/react";
import { Instructions } from "../components";

export default function HomePage() {
    return (
        <>
            <Card w={"full"}>
                <Box p={3}>
                    <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
                        <Image src="/img/bg/bg_home.webp" borderRadius={16} />
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
