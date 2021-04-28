import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import theme from './components/Theme';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Home from './components/Screens/Home';
import Discussions from "./components/Screens/Discussions";
import Search from "./components/Screens/Search";
import Details from "./components/Screens/Details";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";
import Admin from "./components/Screens/Admin";
import resourceReducer from "./reducers/resource-reducer";
import {
    ROOT_ROUTE,
    HOME_ROUTE,
    HOME_BY_PAGE_ROUTE,
    DISCUSSIONS_ROUTE,
    SEARCH_ROUTE,
    SEARCH_BY_TITLE,
    DETAILS_BY_DID_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE,
    PROFILE_ROUTE,
    ADMIN_ROUTE
} from './const/routes';

const reducer = combineReducers({
    resourceReducer
});

const store = createStore(reducer);

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appContainer: {
        backgroundColor: '#eef0f1',
        minHeight: '100vh',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2)
    },
}));

const App = () => {
    const classes = useStyles();
  return (

      <ThemeProvider theme={theme}>
          <Provider store={store}>
          <CssBaseline />
        <BrowserRouter>
          <div className="container">
            <AppBar />
          </div>
            <Container maxWidth="lg">
                <Box component="div" className={classes.appContainer} p={3}>
                    <Switch>
                        <Route exact path={ROOT_ROUTE} render={() => <Redirect to="/home/1" />} />
                        <Route exact path={HOME_ROUTE} component={Home} />
                        <Route exact path={HOME_BY_PAGE_ROUTE} component={Home} />
                        <Route exact path={DISCUSSIONS_ROUTE} component={Discussions} />
                        <Route exact path={[SEARCH_BY_TITLE, SEARCH_ROUTE]} component={Search} />
                        <Route exact path={DETAILS_BY_DID_ROUTE} component={Details} />
                        <Route exact path={LOGIN_ROUTE} component={Login} />
                        <Route exact path={REGISTER_ROUTE} component={Register} />
                        <Route exact path={PROFILE_ROUTE} component={Profile} />
                        <Route exact path={ADMIN_ROUTE} component={Admin} />
                    </Switch>
                </Box>
            </Container>
            <Footer />
        </BrowserRouter>
        </Provider>
      </ThemeProvider>

  );
}

export default App;
