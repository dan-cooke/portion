import * as React from 'react';
import { ThemeContext } from "styled-components";

interface StyledLinkProps {
    href: string;
}
const StyledLink : React.FunctionComponent<StyledLinkProps>= ({href, children})  => {
    const { elements } = React.useContext(ThemeContext);
    console.log(elements.a);
    return elements.a.render({href, children});
}

export default StyledLink;