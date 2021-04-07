import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
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

const Home = () => {
    const classes = useStyles();
    const { title } = useParams();

    const [books, setBooks] = useState([]);

    const findBooks = () => {
        bookService.findTechBooks()
            .then ((techBooks) => {
                setBooks(techBooks.items);
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

export default Home;