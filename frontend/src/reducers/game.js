import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    gameoption: {
        level: null,
        
    },
    highscore: [],
    guestScore: 0,
    username:localStorage.username || "",
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
        setusername: (store, action) => {
            const { user } = action.payload;
            store.username = user;
            console.log(`Username in store:${user}`);
            localStorage.setItem("username", user);
        
          },
        setGuestScore: (store,action) => {
            const { score } = action.payload;
            console.log(`Guestscore in store:${score}`);
            store.guestScore= score;
        },
        setHighscore: (store,action) => {
           store.highscore = action.payload;
           console.log("Highscore");
            
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
      fetch('https://august-clowen-fanpage.herokuapp.com/highscore')
        .then((res) => res.json())
        .then((highscore) => {
          dispatch(game.actions.setHighscore(highscore));
        });
    };
  };
  
  export const postHighscore = (name, score) => {
    fetch('https://august-clowen-fanpage.herokuapp.com/highscore', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name, score: score }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  export const postScore = (username, scoreNumber) => {
    return (dispatch) => {
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, score: scoreNumber }),
    })
      .then((res) => res.json())
      .then((score) => {
        console.log(score);
        dispatch(game.actions.setScore(score));
        
      });
    };
  };