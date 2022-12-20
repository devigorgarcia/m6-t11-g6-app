import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      4: "#EDEAFD",
      3: "#B0A6F0",
      2: "#5126EA",
      1: "#4529E6",
    },
    grey: {
      0: "#0B0D0D",
      1: "#212529",
      2: "#495057",
      3: "#868E96",
      4: "#ADB5BD",
      5: "#CED4DA",
      6: "#DEE2E6",
      7: "#E9ECEF",
      8: "#F1F3F5",
      9: "#F8F9FA",
      10: "#FDFDFD",
      11: "#FFFFFF",
      700: "#2C2C2C"
    },
    feedbacks: {
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      sucess1: "#18794E",
      sucess2: "#CCEBD7",
      sucess3: "#DDF3E4",
    },
    random: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#6100FF",
      12: "#30007D",
    },
  },
  textStyles: {
    h1: {
      fontSize: "44px",
      fontWeight: "700",
      fontFamily: "Lexend",
      lineHeight: "56px",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "600",
      fontFamily: "Lexend",
      lineHeight: "45px",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "500",
      fontFamily: "Lexend",
      lineHeight: "40px",
    },
    h4: {
      fontSize: "28px",
      fontWeight: "500",
      fontFamily: "Lexend",
      lineHeight: "35px",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "500",
      fontFamily: "Lexend",
      lineHeight: "30px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "500",
      fontFamily: "Lexend",
      lineHeight: "25px",
    },
    h7: {
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Lexend",
      lineHeight: "20px",
    },
  },
  components: {
    Button: {
      sizes: {
        md: {
          width: "146px",
          height: "48px",
        },
        sm: {
          width: "119px",
          height: "38px",
        },
      },
      variants: {
        grey1: {
          bg: "#0B0D0D",
          color: "#FFFFFF",
          border: "1.5px solid #0B0D0D",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#212529",
            border: "1.5px solid #212529",
            color: "#FFFFFF",
          },
        },
        negative: {
          bg: "#DEE2E6",
          color: "#495057",
          border: "1.5px solid #DEE2E6",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#CED4DA",
            border: "1.5px solid #CED4DA",
          },
        },
        disable: {
          bg: "#CED4DA",
          color: "#FFFFFF",
          border: "1.5px solid #CED4DA",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
        },
        brand1: {
          bg: "#4529E6",
          color: "#FFFFFF",
          border: "1.5px solid #4529E6",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#5126EA",
            border: "1.5px solid #5126EA",
          },
        },
        brandOpacity: {
          bg: "#EDEAFD",
          color: "#4529E6",
          border: "1.5px solid #EDEAFD",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
        },
        light: {
          bg: "#FDFDFD",
          color: "#212529",
          border: "1.5px solid #FDFDFD",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#FDFDFD",
            border: "1.5px solid #212529",
          },
        },
        outline1: {
          bg: "#FDFDFD",
          color: "#0B0D0D",
          border: "1.5px solid #0B0D0D",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#212529",
            border: "1.5px solid #212529",
            color: "#FDFDFD",
          },
        },
        outline2: {
          bg: "#4529E6",
          color: "#FFFFFF",
          border: "1.5px solid #4529E6",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#5126EA",
            border: "1.5px solid #5126EA",
          },
        },
        outlineBrand: {
          bg: "#EDEAFD",
          color: "#4529E6",
          border: "1.5px solid #EDEAFD",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#B0A6F0",
            border: "1.5px solid #B0A6F0",
          },
        },
        alert: {
          bg: "#FFE5E5",
          color: "#CD2B31",
          border: "1.5px solid #FFE5E5",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#FDD8D8",
            border: "1.5px solid #FDD8D8",
          },
        },
        success: {
          bg: "#DDF3E4",
          color: "##18794E",
          border: "1.5px solid #DDF3E4",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          _hover: {
            bg: "#CCEBD7",
            border: "1.5px solid #CCEBD7",
          },
        },
        brandDisable: {
          bg: "#B0A6F0",
          color: "##EDEAFD",
          border: "1.5px solid #B0A6F0",
          borderRadius: "4px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
        },
      },
    },
  },
});
