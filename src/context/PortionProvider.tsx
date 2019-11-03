import * as React from 'react';
import PortionContext, { PortionContextProps, PortionContextDefaults } from './PortionContext';

const PortionProvider: React.FunctionComponent<PortionContextProps> = (props) => {
    return (
        <PortionContext.Provider value={{...PortionContextDefaults, ...props}}>
            {props.children}
        </PortionContext.Provider>
    )

}

export default PortionProvider;