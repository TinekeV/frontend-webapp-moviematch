import './App.css';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import IntroPage from './pages/IntroPage/IntroPage';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import MoviePage from './pages/MoviePage/MoviePage';
import TvPage from './pages/TvPage/TvPage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import DiscoverTV from './pages/DiscoverTV/DiscoverTV';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
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
          <PrivateRoute path="/home">
              <Home />
          </PrivateRoute>
          <PrivateRoute path="/discover-movies">
              <DiscoverPage />
          </PrivateRoute>
          <PrivateRoute path="/discover-tv">
                <DiscoverTV />
          </PrivateRoute>
          <PrivateRoute path="/search-results">
            <SearchResultsPage/>
          </PrivateRoute>
          <PrivateRoute path="/movie/:id">
            <MoviePage />
          </PrivateRoute>
          <PrivateRoute path="/tv/:id">
              <TvPage />
          </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
