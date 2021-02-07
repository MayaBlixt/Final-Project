import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    gameoption: {
        level: null,
        clicks: null,
        username: null,
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
        setScore: (state,action) => {
            const { score } = action.payload;
            console.log(`Score in store:${score}`);
            state.gameoption.clicks= score;
        },
        setUser: (state,action) => {
            const { username } = action.payload;
            console.log(`Username in store:${username}`);
            state.gameoption.username= username;
        },
    }
});