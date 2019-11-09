import * as React from "react";
import ShowcaseThemePreset from '../types/ShowcaseThemePreset';

export interface ShowcaseContextProps {
  auth: string;
  endpoint: string;
  theme: ShowcaseThemePreset;
}

export const ShowcaseContextDefaults: ShowcaseContextProps = {
  auth: undefined,
  endpoint: "https://api.github.com/graphql",
  theme: "github-light"
};

export default React.createContext<ShowcaseContextProps>(
  ShowcaseContextDefaults
);
