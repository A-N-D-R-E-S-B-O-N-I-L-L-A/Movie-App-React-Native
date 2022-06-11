import React from 'react';

export const GradientReducer = (state:any, action:any) => {

    switch (action.type) {
        case 'setColors':
            return {
                ...state,
                primaryColor: action.payload.primaryColor,
                secondaryColor: action.payload.secondaryColor,
            };
        default:
            return state;
    }

}