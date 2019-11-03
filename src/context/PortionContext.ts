import * as React from 'react';

export interface PortionContextProps {
    auth: string
    endpoint: string
}

export const PortionContextDefaults: PortionContextProps = {
    auth: undefined,
    endpoint: 'https://api.github.com/graphql'
}

export default React.createContext<PortionContextProps>(PortionContextDefaults)