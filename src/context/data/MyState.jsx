import React from 'react';
import MyContext from './MyContext';



const MyState = ({children}) => {

    const state = {
        name: 'kamal hasan',
        id: 14
    }

    return (
        <MyContext.Provider value={state}>
                {children}
        </MyContext.Provider>
    );
};

export default MyState;