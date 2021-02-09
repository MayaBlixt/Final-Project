import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    gameoption: {
        level: null,
        
    },
    highscore: [],
    guestScore: 0,
    userName:localStorage.userName || "",
    score: localStorage.score || 0

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
        setUserName: (store, action) => {
            const { userName } = action.payload;
            store.userName = userName;
            localStorage.setItem("userName", userName);
          },
        setGuestScore: (store,action) => {
            const { score } = action.payload;
            console.log(`Guestscore in store:${score}`);
            store.guestScore= score;
        },
        setHighscore: (store,action) => {
            const { newScore } = action.payload;
            console.log(`Highscore in store:${newScore}`);
            store.highscore= newScore;
        },
        setScore: (store, action) => {
            const { score } = action.payload;
            store.score = score;
            localStorage.setItem("score", score);
          },
    }
});

export const fetchHighscore = () => {
    return (dispatch) => {
      fetch("")
        .then((res) => res.json())
        .then((highscore) => {
          dispatch(game.actions.setHighscore(highscore));
        });
    };
  };
  
  export const postHighscore = (name, score) => {
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, score: score }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  export const postScore = (userName, scoreNumber) => {
    return (dispatch) => {
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: userName, scoreNumber: scoreNumber }),
    })
      .then((res) => res.json())
      .then((score) => {
        console.log(score);
        dispatch(game.actions.setScore(score));
        
      });
    };
  };