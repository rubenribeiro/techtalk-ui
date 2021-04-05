import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import BookListItem from './BookListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const BookList = ({books}) => {
    const classes = useStyles();

    return(
            <List>
                {
                    books && books.map((book) => {
                        return (
                            <BookListItem key={book.id} book={book} />
                        )
                    })
                }
            </List>
        );
};

export default BookList;