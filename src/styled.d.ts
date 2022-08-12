import { string } from "prop-types";
import "styled-components";

interface IPalette {
  backdround: string;
  main: string;
  titleText: string;
  activeText: string;
  completedText: string;
  infoText: string;
  placeholderText: string;
  activeToggleColor: string;
  borderColor: string;
  borderBottom: string;
  borderColorUlHover: string;
  borderColorUlActive: string;
  buttonColorDestroy: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      font: {
        family: string;
        sizeTitle: string;
        sizeMain: string;
        sizeFooter: string;
        sizeToggle: string;
        sizeButton: string;
        weight: string;
      };
      lightTheme: IPalette;
      // darkTheme: IPalette;
    };
  }
}
