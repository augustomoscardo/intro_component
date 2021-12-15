import { Box, Stack, Text, Link } from "@chakra-ui/react";
import { FormFields } from "./FormFields";

export function RegisterForm() {
  return (
    <Stack justifyContent="center" spacing={6}>
      <Box
        color="white"
        background="accent.blue"
        padding={[2, 2, 5]}
        rounded="md"
        fontSize={["sm", "md", "lg"]}
        textAlign="center"
        boxShadow="0 6px 0 rgba(0, 0, 0, .15)"
      >
        <Text>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </Text>
      </Box>
      <Stack
        background="white"
        padding={[4, 4, 9]}
        rounded="lg"
        spacing={[2, 2, 4]}
        boxShadow="0 6px 0 rgba(0, 0, 0, .15)"
      >
        <FormFields />
        <Text
          color="gray.400"
          fontSize={["8px", "8px", "12px"]}
          textAlign="center"
          padding={2}
        >
          By clicking the button, you are agreeing to our{" "}
          <Link href="#" fontWeight="bold" color="primary.red">
            Terms and Services
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
}
