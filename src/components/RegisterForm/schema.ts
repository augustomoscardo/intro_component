import * as Yup from "yup";

// validar tipo cada input.  Dentro da função é passado a msg de erro
const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  email: Yup.string().email().required("Looks like this is not an email"),
  password: Yup.string().required("Password cannot be empty"),
});

export default schema;
