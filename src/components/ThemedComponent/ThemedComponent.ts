
import * as React from 'react';
import { ThemeContext } from "styled-components";

export interface ThemedComponentProps {
    elementName: string;
    innerProps: any;
}
const ThemedComponent : React.FunctionComponent<ThemedComponentProps>= (props)  => {
    const { elements } = React.useContext(ThemeContext);
    console.log(elements[props.elementName])
    return elements[props.elementName].render({...props.innerProps, children: props.children});
}

export default ThemedComponent;