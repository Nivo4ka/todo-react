import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "0px",
  palette: {
    font: {
      family: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      sizeTitle: "100px",
      sizeMain: "24px",
      sizeFooter: "14px",
      sizeToggle: "22px",
      sizeButton: "30px",
      weight: "100",
    },
    lightTheme: {
      backdround: "#f5f5f5",
      main: "#fefefe",
      activeText: "#4d4d4d",
      titleText: "#af2f2f26",
      completedText: "#d9d9d9",
      infoText: "#777",
      placeholderText: "#e6e6e6",
      activeToggleColor: "#737373",
      borderColor: "#e6e6e6",
      borderBottom: "#ededed",
      borderColorUlHover: "#af2f2f1a",
      borderColorUlActive: "#af2f2f33",
      buttonColorDestroy: "#cc9a9a",
    },
    // darkTheme: {
    //   backdround: "",
    //   main: "#709fb0",
    //   contrastText: "#ffffff",
    // },
  },
};
