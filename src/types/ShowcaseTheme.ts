export interface ShowcaseThemeColors {
    backgroundPrimary: string;
    backgroundSecondary: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    textAccent: string;
}

export interface ShowcaseThemeFont {
    baseSize: string;
    family: string;
}
export interface ShowcaseTheme {
    colors: ShowcaseThemeColors;
    font: ShowcaseThemeFont;
}

export default ShowcaseTheme;