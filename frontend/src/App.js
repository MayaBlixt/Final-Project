import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
 
import { game } from './reducers/game';

import { LandingPage } from './pages/LandingPage';
import { MemoryPage } from './pages/MemoryPage';
import { DrawingsPage } from './pages/DrawingsPage';
import { PageNotFound } from './pages/PageNotFound';
import { HighscorePage } from './pages/HighscorePage';
import { BooksPage } from './pages/BooksPage';


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
            <Route path="/highscore">
              <HighscorePage />
            </Route>
            <Route path="/books">
              <BooksPage />
            </Route>
            <Route path="/404">
					<PageNotFound />
				</Route>
				<Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Provider>
    
  );
};
