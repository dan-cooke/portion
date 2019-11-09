import * as React from "react";
import ShowcaseContext, {
  ShowcaseContextDefaults,
  ShowcaseContextProps
} from "./ShowcaseContext";

const ShowcaseProvider: React.FunctionComponent<
  ShowcaseContextProps
> = props => {
  return (
    <ShowcaseContext.Provider value={{ ...ShowcaseContextDefaults, ...props }}>
      {props.children}
    </ShowcaseContext.Provider>
  );
};

export default ShowcaseProvider;
