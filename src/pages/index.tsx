import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";

import { Introduction } from "../components/Introduction";
import { RegisterForm } from "../components/RegisterForm";

export default function Home() {
  return (
    <Box
      height={["100%", "100vh"]}
      width={"100%"}
      background="primary.red"
      backgroundImage="url('/images/bg-intro-desktop.png')"
      p={[1, 0]}
    >
      <Container maxWidth={["mobile", "desktop"]} width="100%" height="100%">
        <VStack justifyContent="center" width="100%" height="100%">
          <SimpleGrid columns={[1, 1, 2]} gap={[0, 2, 16]} height="100%">
            <Introduction />
            <RegisterForm />
          </SimpleGrid>
          <Flex
            maxWidth="xl"
            width="100%"
            justifyContent="space-between"
            color="white"
            py={12}
            direction={["column", "column", "row"]}
          >
            <Text textAlign="center">
              Challenge by{" "}
              <Link
                _hover={{ color: "accent.blue" }}
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                <strong>Frontend Mentor</strong>
              </Link>
            </Text>
            <Text textAlign="center" marginTop={[4, 4, 0]}>
              Coded by{" "}
              <Link
                _hover={{ color: "accent.blue" }}
                href="https://github.com/augustomoscardo"
                target="_blank"
              >
                <strong>Augusto Moscardo</strong>
              </Link>
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
