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
      `,
      topicTag: styled.a`
        text-decoration: none;
        background-color: #f1f8ff;
        color: #0366d6;
        border-radius: 3px;
        padding-bottom: 3.6px;
        padding-left: 10.6px;
        padding-right: 10.8px;
        padding-top: 3.6px;
        margin-right:6px;
        margin-bottom: 6px;

        :hover{
          outline-width: 0;
          background: #def;
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
