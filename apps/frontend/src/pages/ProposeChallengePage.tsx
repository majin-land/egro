import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
} from "@chakra-ui/react";

const ProposeChallengePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Clear form after submission
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <Container maxW="container.sm" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Propose Challenge
      </Heading>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the event title"
              />
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter the event description"
              />
            </FormControl>

            <FormControl id="startDate" isRequired>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="endDate" isRequired>
              <FormLabel>End Date</FormLabel>
              <Input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default ProposeChallengePage;
