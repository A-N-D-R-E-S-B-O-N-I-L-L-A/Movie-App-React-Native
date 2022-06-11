import React, { createContext, useReducer } from "react";
import { GradientReducer } from "./GradientReducer";

export const gradientInitialState = {
    primaryColor: '',
    secondaryColor: ''
}

export const GradientContext = createContext({} as any);

export const GradientContextProvider = ({children}:any) => {

    const [colorsState, dispatch] = useReducer(GradientReducer, gradientInitialState);

    const setMainColors = (primaryColor:string, secondaryColor:string) => {
        dispatch({
            type: 'setColors',
            payload: {
                primaryColor,
                secondaryColor
            }
         });
    }

    return (
        <GradientContext.Provider value={{colorsState, setMainColors}}>
            {children}
        </GradientContext.Provider>
    )
}