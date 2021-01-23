import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    gameoption: {
        level: null,
      
    },
};

export const game = createSlice ({
    name:'game',
    initialState: initialState,
    reducers: {
        setGameLevel: (state,action) => {
            const { level } = action.payload;
            console.log(`Choosen gamelevel :${level}`);
            state.gameoption.level= level;
        },
    }
});