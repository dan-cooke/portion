import ShowcaseTheme from "../types/ShowcaseTheme";
import ShowcaseThemePreset from "../types/ShowcaseThemePreset";
import themes from '../themes';
import { ShowcaseThemeError } from "../error/ShowcaseThemeError";
const useShowcaseTheme = (themePreset: ShowcaseThemePreset) : ShowcaseTheme => {
    try {
        const theme = themes[themePreset];
        if (!theme) {
            throw new ShowcaseThemeError(`No theme preset found for '${themePreset}'`);
        }
        return theme;
    } catch (e) {
        throw new ShowcaseThemeError(e.message);
    }
}

export default useShowcaseTheme;