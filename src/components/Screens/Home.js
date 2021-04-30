import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from 'react-router-dom';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Sidebar from '../Sidebar';
import BookList from '../BookList';
import NavTabs from '../NavTabs';
import PaginationLink from '../PaginationLink';
import bookService from '../../services/book-service';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

const Home = ({resources = [], findTechBooks}) => {
    const classes = useStyles();
    const { title } = useParams();

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const findBooks = () => {
        bookService.findTechBooks()
            .then ((techBooks) => {
                setBooks(techBooks.items);
                setLoading(false);

            });
    }

    useEffect(() => {
        findBooks();
    }, []);

    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="subtitle2" component="h6">Latest Resources</Typography>
                <Paper className={`${classes.paper} ${classes.paperMain}`}>
                    <NavTabs />
                    {
                        loading &&
                            <Box pt={3} pb={1}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} align="center">
                                        <CircularProgress />
                                    </Grid>
                                </Grid>
                            </Box>
                    }
                    <BookList books={books} />
                </Paper>
            </Grid>
            <Sidebar />
            <Grid item xs={9} container justify="center">
                <PaginationLink />
            </Grid>
        </Grid>
    );
};

const stateToPropsMapper = (state) => {
    return {
        resources: state.resourceReducer.resources
    }
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        findTechBooks: () => {
            bookService.findTechBooks()
                .then(resources => {
                    let newResources = resources;
                    dispatch({
                        type: "FIND_RESOURCES",
                        newResources
                    });
                });
        },

    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(Home);