import * as React from "react";
import ShowcaseContext, {
  ShowcaseContextDefaults,
  ShowcaseContextProps
} from "./ShowcaseContext";

import { ThemeProvider } from 'styled-components';
import useShowcaseTheme from "../hooks/useShowcaseTheme";

const ShowcaseProvider: React.FunctionComponent<
  ShowcaseContextProps
> = props => {

  const themeObject = useShowcaseTheme(props.theme);

  return (
    <ShowcaseContext.Provider value={{ ...ShowcaseContextDefaults, ...props }}>
      <ThemeProvider theme={themeObject}>
        {props.children}
      </ThemeProvider>
    </ShowcaseContext.Provider>
  );
};

export default ShowcaseProvider;
