import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/img/steps/step1.webp",
    title: "Plant seeds",
    description: "Grow your favorite consumable greens.",
  },
  {
    icon: "/img/steps/step2.webp",
    title: "Upload photos",
    description: "Upload the growth stages photos for AI verification.",
  },
  {
    icon: "/img/steps/step3.webp",
    title: "Earn rewards",
    description: "Harvest your greens and Earn B3TR.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 4 }} w="100%" direction={{ base: "column", md: "row" }} bgColor={"#dfd3a0"}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
