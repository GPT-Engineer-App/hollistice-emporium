import React from "react";
import { ChakraProvider, Box, Flex, Text, VStack, Grid, GridItem, Image, Heading, Button, Icon, Link, Container, Spacer } from "@chakra-ui/react";
import { FaShoppingCart, FaLeaf, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Box>
        {/* Navigation */}
        <Flex as="nav" bg="green.500" color="white" p={4} justifyContent="space-between" alignItems="center">
          <Heading size="md" fontWeight="semibold">
            <Icon as={FaLeaf} w={6} h={6} mr={2} />
            Holistic Store
          </Heading>
          <Link href="#" p={2}>
            <Icon as={FaShoppingCart} w={6} h={6} />
          </Link>
        </Flex>

        {/* Hero Section */}
        <Box bg="green.100" py={10} textAlign="center">
          <Heading>Natural Remedies & Wellness Products</Heading>
          <Text mt={4} fontSize="lg">
            Discover the power of nature with our curated collection of holistic health products.
          </Text>
          <Button mt={6} colorScheme="green" size="lg">
            Shop Now
          </Button>
        </Box>

        {/* Products Grid */}
        <Container maxW="container.xl" py={10}>
          <Heading as="h2" size="xl" mb={10}>
            Featured Products
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {/* Repeat this GridItem for each product */}
            <GridItem w="100%" boxShadow="md" rounded="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1564278047230-a632a9d6acf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBwcm9kdWN0fGVufDB8fHx8MTcwODg4OTY3OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Herbal Product" />
              <VStack p={4} align="stretch">
                <Heading as="h3" size="md">
                  Herbal Tea
                </Heading>
                <Text>Relaxing blend of natural herbs.</Text>
                <Button colorScheme="green" rightIcon={<FaPlus />}>
                  Add to Cart
                </Button>
              </VStack>
            </GridItem>
            {/* ... other products */}
          </Grid>
        </Container>

        {/* Footer */}
        <Box as="footer" bg="green.600" color="white" p={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Holistic Store. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
