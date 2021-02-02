import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import { game } from './reducers/game';

import { LandingPage } from './pages/LandingPage';
import { MemoryPage } from './pages/MemoryPage';
import { DrawingsPage } from './pages/DrawingsPage';

//Create reducer
const reducer = combineReducers({ game: game.reducer });
//Create store
const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <LandingPage />
            </Route>
            <Route path="/memory">
              <MemoryPage />
            </Route>
            <Route path="/drawings">
              <DrawingsPage />
            </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
