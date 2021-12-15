import { Text, Heading, Stack } from "@chakra-ui/react";

export function Introduction() {
  return (
    <Stack
      textAlign={["center", "center", "initial"]}
      justifyContent="center"
      color="white"
      spacing={6}
      my={[16, 16, 0]}
    >
      <Heading size={"xl"}>Learn to code by watching others</Heading>
      <Text fontWeight="500" fontSize={["sm", "md", "lg"]} lineHeight={7}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </Text>
    </Stack>
  );
}
