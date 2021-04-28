import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Chip from '@material-ui/core/Chip';
import {
    DETAILS_ROUTE
} from '../../const/routes';

const useStyles = makeStyles((theme) => ({
    bookImage: {
        width: theme.spacing(8),
        height: theme.spacing(12),
        marginRight: theme.spacing(2),
        border: `3px solid #e3e3e3 !important`
    },
    bookDescription: {
        paddingRight: theme.spacing(8)
    },
    upVotes: {
        marginRight: theme.spacing(3),
    },
    voteText: {
        color: `${theme.palette.primary.dark}!important`
    },
    metadata :{
        marginTop: theme.spacing(2)
    },
    metadataItem: {
        margin: theme.spacing(1)
    },
    commentButton: {
        height: theme.spacing(3),
        marginRight: theme.spacing(1),
        borderRadius: theme.spacing(3)
    }

}));

const BookList = ({book, lastItem}) => {

    const MAXIMUM_DESCRIPTION_LENGTH = 500;
    const classes = useStyles();
    const theme = useTheme();
    const [shortDescription, setShortDescription] = useState('');
    const [vote, setVote] = useState(0);
    const [thumbnailURL, setThumbnailURL] = useState('https://via.placeholder.com/58x90')

    const updateBookDescription = () => {
        if (book.volumeInfo.description !== undefined) {
            if (book.volumeInfo.description.length > MAXIMUM_DESCRIPTION_LENGTH) {
                setShortDescription(book.volumeInfo.description.substring(0, MAXIMUM_DESCRIPTION_LENGTH) + '...[Read More].');
            } else {
                setShortDescription(book.volumeInfo.description);
            }
        }

        try {
            setThumbnailURL(book.volumeInfo.imageLinks.smallThumbnail);
        } catch {
            setThumbnailURL('https://via.placeholder.com/58x90');
        }

    }

    const incrementVote = () => setVote(vote + 1);

    const decrementVote = () => setVote(vote - 1);

    useEffect(() => {
        updateBookDescription();
    }, []);

    return(
        <ListItem
            alignItems="flex-start"
            divider={lastItem? false : true}
            button component={Link} to={`${DETAILS_ROUTE}/${book.id}`}>
            <ListItemAvatar>
                {
                    thumbnailURL &&
                    <Avatar
                        border={1}
                        className={classes.bookImage}
                        variant="square" alt={book.volumeInfo.title}
                        src={thumbnailURL}
                    />
                }
            </ListItemAvatar>
            <ListItemText
                className={classes.bookDescription}
                primary={<Typography color="primary"  variant="subtitle2" component="h6">{book.volumeInfo.title}</Typography>}
                secondary={
                    <Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {shortDescription}
                        </Typography>
                        <div className={classes.metadata} >
                            <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                className={`${classes.button} ${classes.metadataItem}`}
                                startIcon={<CommentIcon />}
                                className={classes.commentButton}
                            >
                                20
                            </Button>
                            <Chip
                                avatar={<Avatar>T</Avatar>}
                                label="React"
                                color="primary"
                                variant="contained"
                                clickable
                                size="small"
                            />
                        </div>

                    </Fragment>
                }
            />
            <ListItemSecondaryAction className={classes.upVotes}>
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="Vote button group"
                    variant="text"
                    size="small"
                >
                    <IconButton onClick={incrementVote}>
                        <KeyboardArrowUpIcon />
                    </IconButton>
                    <Button className={classes.voteText} disabled>{vote === 0? 'VOTE' : vote}</Button>
                    <IconButton onClick={decrementVote} disabled>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </ButtonGroup>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default BookList;