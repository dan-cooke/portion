import { ShowcaseTheme } from "../types/ShowcaseTheme";
import ShowcaseThemePreset from "../types/ShowcaseThemePreset";

type ThemeMap = {
    [key in ShowcaseThemePreset]: ShowcaseTheme
}
export default <ThemeMap>{
 "github-light": {
    colors: {
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f6f8fa",
      borderColor: "#d1d5da",
      textPrimary: "#24292e",
      textSecondary: "#6a737d",
      textAccent: "#0366d6"
    },
    font: {
      baseSize: "14px",
      family: ` -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`
    }
  }
};
