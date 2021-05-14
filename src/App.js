import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignIn from "./pages/SignIn/SignIn";
import IntroPage from "./pages/IntroPage/IntroPage";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import TvPage from "./pages/TvPage/TvPage";
import Profile from "./pages/Profile/Profile";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import DiscoverTV from "./pages/DiscoverTV/DiscoverTV";

function App() {
  return (
    <>
    {/*  Hier komt de routing voor alle pages*/}
      <Switch>
          <Route exact path="/">
              <IntroPage />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
             <SignUp />
          </Route>
          <Route path="/home">
              <Home />
          </Route>
          <Route path="/discover-movies">
              <DiscoverPage />
          </Route>
          <Route path="/discover-tv">
                <DiscoverTV />
          </Route>
          <Route path="/search-results">
            <SearchResultsPage/>
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route path="/tv/:id">
              <TvPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
