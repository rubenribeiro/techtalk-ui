import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar';
import BookList from '../BookList';
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
    paperMain: {
        paddingTop: 0,
    },
    searchFilter: {
        marginBottom: theme.spacing(2)
    },
}));



const Search = () => {
    const classes = useStyles();
    const { title } = useParams();

    const [books, setBooks] = useState([]);

    const findBooks = () => {
        console.log(title);
        if (title !== undefined) {
            bookService.findBooksBySearchTerms(title)
                .then ((techBooks) => {
                    setBooks(techBooks.items);
                });

        } else {
            bookService.findTechBooks()
                .then ((techBooks) => {
                    setBooks(techBooks.items);
                });
        }
    }

    useEffect(() => {
        findBooks();
    }, [title]);

    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="subtitle2" component="h6">Search Results</Typography>
                <Paper className={ `${classes.paper} ${classes.searchFilter}`}>Search Filter Goes Here</Paper>
                <Paper className={`${classes.paper} ${classes.paperMain}`}>
                    <BookList books={books} />
                </Paper>
            </Grid>
            <Sidebar />
        </Grid>
    );
};

export default Search;