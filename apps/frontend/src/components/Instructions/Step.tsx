import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { Dropzone } from "../Dropzone";
import { FaPills } from "react-icons/fa6";

type Props = {
  icon: string;
  title: string;
  description: string;
  rewards: string;
  tag: string;
};

export const Step = ({ icon, title, description, rewards, tag }: Props) => {
  return (
    <Box mx={{ base: 0, md: 4 }} my={{ base: 2, md: 0 }}>
      <HStack>
        <Image src={icon} w={{ base: 20, md: 36 }} />
        <VStack align={"flex-start"}>
          <Text fontSize={{ base: "14", md: "20" }} fontWeight={700}>
            {title}
          </Text>
          <Text
            fontSize={{ base: "12", md: "16" }}
            fontWeight={400}
            color={"gray.500"}
          >
            {description}
          </Text>
        </VStack>
      </HStack>
      <VStack align={"flex-start"}>
        <Dropzone />
        <Text fontSize={{ base: "14", md: "20" }} fontWeight={700}>
          Rewards: {rewards} B3TR <Image src={"img/ico/token-icon_b3tr.webp"} height={8} display={"inline"} verticalAlign={"middle"} />
        </Text>
      </VStack>
    </Box>
  );
};
