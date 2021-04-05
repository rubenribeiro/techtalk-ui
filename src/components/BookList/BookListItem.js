import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    bookImage: {
        width: theme.spacing(14),
        height: theme.spacing(20),
        marginRight: theme.spacing(2),
    },
    bookDescription: {
        paddingRight: theme.spacing(8)
    },
    upVotes: {
        marginRight: theme.spacing(3),
    },
    metadata :{
        marginTop: theme.spacing(2)
    },
    metadataItem: {
        margin: theme.spacing(1)
    }

}));

const BookList = ({book}) => {
    const classes = useStyles();
    const MAXIMUM_DESCRIPTION_LENGTH = 60;


    return(
        <ListItem alignItems="flex-start" divider="true" button>
            <ListItemAvatar>
                <Avatar
                    className={classes.bookImage}
                    variant="square" alt={book.volumeInfo.title}
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                />
            </ListItemAvatar>
            <ListItemText
                className={classes.bookDescription}
                primary={<Typography variant="h5" component="h5">{book.volumeInfo.title}</Typography>}
                secondary={
                    <Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {book.volumeInfo.description}
                        </Typography>
                        <div className={classes.metadata} >
                            <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<CommentIcon />}
                                className={classes.metadataItem}
                            >
                                20
                            </Button>
                            <Chip
                                avatar={<Avatar>T</Avatar>}
                                label="React"
                                color="primary"
                                variant="contained"
                                clickable
                                size="medium"
                            />
                        </div>

                    </Fragment>
                }
            />
            <ListItemSecondaryAction className={classes.upVotes}>
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                    size="large"
                >
                    <IconButton>
                        <KeyboardArrowUpIcon />
                    </IconButton>
                    <Button disabled>Vote</Button>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </ButtonGroup>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default BookList;