import React from 'react';
import Header from './components/Header';
import { StoriesContainer } from './containers/StoriesContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getBestStoryIds, getTopStoryIds, getNewStoryIds } from './services/hackerNewsApi';

export const App = () => {
    return (
    <Router>
        <div>
        <Header />
        <Switch>
          <Route exact path="/top">
            <StoriesContainer storiesCall={getTopStoryIds} />
          </Route>
          <Route path="/best">
            <StoriesContainer storiesCall={getBestStoryIds} />
          </Route>
          <Route path="/new">
            <StoriesContainer storiesCall={getNewStoryIds}/>
          </Route>
        </Switch>
        </div>
    </Router> 
    );
};


