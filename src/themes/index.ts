import { ShowcaseTheme } from "../types/ShowcaseTheme";
import ShowcaseThemePreset from "../types/ShowcaseThemePreset";
import styled from "styled-components";


type ThemeMap = {
    [key in ShowcaseThemePreset]: ShowcaseTheme
}


export default <ThemeMap>{
 "github-light": {
    colors: {
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f6f8fa",
      border: "#d1d5da",
      textPrimary: "#24292e",
      textSecondary: "#6a737d",
      textLink: ''
    },
    font: {
      baseSize: "14px",
      family: ` -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`
    },
    
    elements:{
      a: styled.a`
        text-decoration: none;
        color: #0366d6;
        :hover {
          text-decoration: underline;
        }
        :visited {
          color: #0366d6;
        }
      `
    }
  },
  'github-dark': {
    colors: {
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f6f8fa",
      border: "#d1d5da",
      textPrimary: "#24292e",
      textSecondary: "#6a737d",
      textLink: ''
    },
    font: {
      baseSize: "14px",
      family: ` -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`
    },
  }
};
