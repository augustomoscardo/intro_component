import { Box, Stack, Text, Link, Flex } from "@chakra-ui/react";
import { FormFields } from "./FormFields";

export function RegisterForm() {
  return (
    <Stack justifyContent="center" spacing={6}>
      <Flex
        color="white"
        background="accent.blue"
        padding={5}
        rounded="lg"
        fontSize={"md"}
        textAlign="center"
        boxShadow="0 8px 0 rgba(0, 0, 0, .2)"
        justifyContent={"center"}
      >
        <Text maxW={[48, "full"]} fontWeight={"thin"}>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </Text>
      </Flex>
      <Stack
        background="white"
        padding={[6, 6, 9]}
        rounded="lg"
        spacing={[2, 2, 4]}
        boxShadow="0 8px 0 rgba(0, 0, 0, .2)"
      >
        <FormFields />
        <Text color="gray.400" fontSize={"xs"} textAlign="center" padding={2}>
          By clicking the button, you are agreeing to our{" "}
          <Link href="#" fontWeight="bold" color="primary.red">
            Terms and Services
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
}
