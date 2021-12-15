import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: { body: "Poppins", heading: "Poppins" },
  colors: {
    primary: {
      red: "hsl(0, 100%, 74%)",
      green: "hsl(154, 59%, 51%)",
    },
    accent: { blue: "hsl(248, 32%, 49%)" },
    neutral: {
      darkBlue: "hsl(249, 10%, 26%)",
      grayishBlue: "hsl(246, 25%, 77%)",
    },
  },
  sizes: {
    desktop: "1440px",
    mobile: "375px",
  },
});

export default theme;
