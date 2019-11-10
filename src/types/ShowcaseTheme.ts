import { ThemedStyledFunction, ThemedBaseStyledInterface } from "styled-components";

export interface ShowcaseThemeColors {
    backgroundPrimary: string;
    backgroundSecondary: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    textLink: string;
}


export interface ShowcaseThemableElements {
    // TODO: find out how to use ThemedStyledFunction<'a', any, {}, never> here
    a: any;
    topicTag: any;
}
export interface ShowcaseThemeFont {
    baseSize: string;
    family: string;
}
export interface ShowcaseTheme {
    colors: ShowcaseThemeColors;
    font: ShowcaseThemeFont;
    elements?: ShowcaseThemableElements
}


export default ShowcaseTheme;