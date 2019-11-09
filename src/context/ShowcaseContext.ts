import * as React from "react";

export interface ShowcaseContextProps {
  auth: string;
  endpoint: string;
}

export const ShowcaseContextDefaults: ShowcaseContextProps = {
  auth: undefined,
  endpoint: "https://api.github.com/graphql"
};

export default React.createContext<ShowcaseContextProps>(
  ShowcaseContextDefaults
);
