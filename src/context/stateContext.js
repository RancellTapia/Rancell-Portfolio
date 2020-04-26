import{ createContext } from 'react';

const stateContext = createContext({

    view: {
        about: true,
        contact: false,
        stackt: false,
        pricing: false
    },
    setView: () => {}
    
});

export default stateContext;