import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useTheme,
  useToast,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { darken, lighten } from "polished";
import schema from "./schema";
import { MdError } from "react-icons/md";

const fields = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

export function FormFields() {
  const theme = useTheme();
  const toast = useToast();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            toast({
              status: "success",
              title: `Thanks, ${values.firstName}!`,
              description: `An email has been sent to ${values.email}. Happy coding!`,
              duration: 5000,
              isClosable: true,
            });
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={4}>
              {fields.map((fieldItem) => (
                <Field key={fieldItem.name} name={fieldItem.name}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors[fieldItem.name] &&
                        form.touched[fieldItem.name]
                      }
                    >
                      <InputGroup>
                        <Input
                          {...field}
                          id={fieldItem.name}
                          _placeholder={{
                            color: "gray.500",
                          }}
                          type={fieldItem.type}
                          placeholder={fieldItem.placeholder}
                          fontSize={["sm", "sm"]}
                          px={5}
                          py={6}
                          fontWeight="semibold"
                          _focus={{
                            borderWidth: "1px",
                            borderColor: theme.colors.blackAlpha[700],
                          }}
                        />
                        <InputRightElement
                          children={
                            <Icon
                              as={MdError}
                              color="primary.red"
                              width={[4, 6]}
                              height={[4, 6]}
                              mt={["5px", "10px"]}
                              opacity={
                                form.errors[fieldItem.name] &&
                                form.touched[fieldItem.name]
                                  ? 1
                                  : 0
                              }
                              transition="opacity 0.2s ease-out"
                            />
                          }
                        />
                      </InputGroup>
                      <FormErrorMessage
                        fontStyle="italic"
                        fontSize="xs"
                        justifyContent="flex-end"
                      >
                        <Text>{form.errors[fieldItem.name]}</Text>
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              ))}
            </Stack>
            <Button
              _hover={{ background: lighten(0.15, theme.colors.primary.green) }}
              type="submit"
              isLoading={isSubmitting}
              background="primary.green"
              color="white"
              textTransform="uppercase"
              fontSize={["sm", "md", "lg"]}
              padding={7}
              mt={[4, 4, 5]}
              width="100%"
              boxShadow={`0 4px 0 ${darken(0.1, theme.colors.primary.green)}`}
            >
              Claim Your Free Trial
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
