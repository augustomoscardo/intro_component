import { Text, Heading, Stack } from "@chakra-ui/react";

export function Introduction() {
  return (
    <Stack
      textAlign={["center", "center", "initial"]}
      justifyContent="center"
      color="white"
      spacing={6}
      my={[16, 16, 0]}
      maxW={"xl"}
    >
      <Heading
        as="h1"
        fontSize={["2xl", 54]}
        maxW={["xs", "inherit"]}
        width="100%"
        letterSpacing={["inherit", "wide"]}
      >
        Learn to code by watching others
      </Heading>
      <Text
        fontWeight="400"
        fontSize={["1rem", "lg"]}
        color="gray.200"
        lineHeight={7}
        maxW={[96, "inherit"]}
        letterSpacing={["wide", "inherit"]}
      >
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </Text>
    </Stack>
  );
}
