// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inter/800.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/karla/800.css";
import "@fontsource/karla/700.css";
import "@fontsource/karla/400.css";
// import "@fontsource/ibm-plex-mono/800.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/ibm-plex-mono/400.css";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: "poppins, sans-serif",
    body: "poppins, sans-serif",
  },
  colors: {
    gray: {
      50: "#f3f2f8",
      100: "#dad7da",
      200: "#bfbcc0",
      300: "#a6a3a7",
      400: "#8b888d",
      500: "#726f74",
      600: "#58565a",
      700: "#3f3d41",
      800: "#1e1d1f",
      900: "#100a10",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "whiteAlpha.900",
      },
      sizes: {
        "2xs": {
          lineHeight: "140%",
          fontSize: {
            base: "sm",
            md: "sm",
          },
          color: "whiteAlpha.900",
        },
        xs: {
          lineHeight: "140%",
          fontSize: {
            base: "xs",
            md: "md",
          },
          color: "whiteAlpha.900",
        },
        sm: {
          lineHeight: "140%",
          fontSize: {
            base: "sm",
            md: "lg",
          },
          color: "whiteAlpha.900",
        },
        md: {
          lineHeight: "140%",
          fontSize: {
            base: "md",
            md: "xl",
          },
          color: "whiteAlpha.900",
        },
        lg: {
          lineHeight: "140%",
          fontSize: {
            base: "xl",
            md: "2xl",
          },
          color: "whiteAlpha.900",
        },
        xl: {
          lineHeight: "140%",
          letterSpacing: ".05em",
          fontSize: {
            base: "xl",
            md: "3xl",
          },
          color: "whiteAlpha.900",
        },
        "2xl": {
          lineHeight: "110%",
          letterSpacing: ".05em",
          fontSize: {
            base: "2xl",
            md: "4xl",
          },
          color: "whiteAlpha.900",
        },
        "3xl": {
          lineHeight: "110%",
          letterSpacing: ".05em",
          fontSize: {
            base: "3xl",
            md: "5xl",
          },
          color: "whiteAlpha.900",
        },
        "4xl": {
          lineHeight: "110%",
          letterSpacing: ".05em",
          fontSize: {
            base: "4xl",
            md: "6xl",
          },
          color: "whiteAlpha.900",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    Text: {
      baseStyle: {
        color: "whiteAlpha.700",
        fontSize: "sm",
      },
      sizes: {
        xs: {
          lineHeight: "200%",
          color: "whiteAlpha.700",
          fontSize: "xs",
        },
        sm: {
          lineHeight: "200%",
          color: "whiteAlpha.700",
          fontSize: "sm",
        },
        md: {
          lineHeight: "200%",
          color: "whiteAlpha.700",
          fontSize: "md",
        },
        lg: {
          lineHeight: "200%",
          color: "whiteAlpha.700",
          fontSize: "lg",
        },
        xl: {
          lineHeight: "200%",
          color: "whiteAlpha.700",
          fontSize: "xl",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "whiteAlpha.700",
        fontSize: "sm",
      },
      sizes: {
        xs: {
          fontSize: "xs",
        },
        sm: {
          fontSize: "sm",
        },
        md: {
          fontSize: "md",
        },
        lg: {
          fontSize: "lg",
        },
        xl: {
          fontSize: "xl",
        },
      },
    },
  },
});

export default theme;
