import React from 'react';
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
import {
    ROOT_ROUTE,
    HOME_ROUTE,
    HOME_BY_PAGE_ROUTE,
    DISCUSSIONS_ROUTE,
    SEARCH_ROUTE,
    SEARCH_BY_TITLE,
    DETAILS_BY_DID_ROUTE
} from './const/routes';

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
          <CssBaseline />
        <BrowserRouter>
          <div className="container">
            <AppBar />
          </div>
            <Container maxWidth="lg">
                <Box component="div" className={classes.appContainer} p={3}>
                    <Switch>
                        <Route exact path={ROOT_ROUTE} render={() => <Redirect to="/home/1" />} />
                        <Route path={HOME_ROUTE} component={Home} />
                        <Route path={HOME_BY_PAGE_ROUTE} component={Home} />
                        <Route path={DISCUSSIONS_ROUTE} component={Discussions} />
                        <Route exact path={[SEARCH_BY_TITLE, SEARCH_ROUTE]} component={Search} />
                        <Route path={DETAILS_BY_DID_ROUTE} component={Details} />
                    </Switch>
                </Box>
            </Container>
            <Footer />


          {/*<Switch>*/}
          {/*    <Route exact path="/" render={() => <Redirect to="/home/1" />} />*/}
          {/*    <Route path="/home" component={Home} />*/}
          {/*    <Route path="/home/:page" component={Home} />*/}
          {/*    <Route path="/search" component={Search} />*/}
          {/*    <Route path="/login" component={Home} />*/}
          {/*    <Route path="/profile" component={Home} />*/}
          {/*    <Route path="/details" component={Home} />*/}
          {/*</Switch>*/}

        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
