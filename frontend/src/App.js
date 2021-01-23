import React from 'react';
import { Provider } from 'react-redux';
import { game } from './reducers/game';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
 
import { Memory } from './components/Memory';

export const App = () => {

  //Create reducer
	const reducer = combineReducers({ game: game.reducer });
	//Create store
	const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Memory/>
    </Provider>
  )
}
