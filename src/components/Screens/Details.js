import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {Grid, Paper, Typography, Box} from "@material-ui/core";
import Sidebar from "../Sidebar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core/styles";
import bookService from "../../services/book-service";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CommentIcon from '@material-ui/icons/Comment';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import userService from '../../services/user-service'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(0),
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
    },
    bookImage: {
        width: theme.spacing(16),
        height: theme.spacing(24),
        marginRight: theme.spacing(2),
        border: `3px solid #e3e3e3 !important`,
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
    shareButton: {
        marginRight: theme.spacing(1),
    },
    returnIcon: {
        marginLeft: ' -14px !important'
    }

}));


const Details = () => {
    const history = useHistory();
    const { did } = useParams();
    const classes = useStyles();
    const [book, setBook] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser,setCurrentUser] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [manualViewUpdate, setManualViewUpdate] = useState(false);

    const findBook = () => {
        if (did && did !== undefined) {
            bookService.findBookById(did)
                .then((techBook) => {
                    setBook(techBook);
                });
        }
    }


    const handleAddToFavorites = () => {
        favorites.push(did);
        setCurrentUser({
            ...currentUser,
            favorites

        })

        userService.updateUserById(currentUser._id, currentUser);
        setManualViewUpdate(true);
     }



    useEffect(() => {
        findBook();
        userService.profile()
            .then((usr) => {
                if (usr && !isAuthenticated) {
                    setIsAuthenticated(true);
                    setFavorites(usr.favorites);
                    console.log("RUNNING USER EFFECT");
                    console.log(usr)
                    console.log("Updating current user")
                    console.log(currentUser);
                    setCurrentUser({
                        ...usr,
                        favorites: usr.favorites
                    });
                    console.log("Updating user complete")
                    console.log(currentUser);
                    console.log("END RUUNING USER EFFERCT");
                } else {
                    setCurrentUser(usr);
                }}).catch((err) => {
            console.log(err);
        });
    }, [isAuthenticated, manualViewUpdate]);


    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="subtitle2" component="h6">Book Details</Typography>
                <Paper className={classes.paper}>
                    { !book.volumeInfo &&
                        <Box pt={3} pb={1}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} align="center">
                                    <CircularProgress />
                                </Grid>
                            </Grid>
                        </Box>
                    }
                    {book.volumeInfo && <Box p={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <IconButton
                                    onClick={() => history.goBack()}
                                    aria-label="Return"
                                    color="primary"
                                    variant="outlined"
                                    className={classes.returnIcon}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2}>
                                <Avatar
                                    border={1}
                                    className={classes.bookImage}
                                    variant="square" alt={book.volumeInfo.title}
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="h4" component="h4">{book.volumeInfo.title}</Typography>
                                <Typography variant="subtitle2" component="h6">{book.volumeInfo.subtitle}</Typography>
                                <br />
                                { isAuthenticated && did && did !== undefined && currentUser && !currentUser.favorites.includes(did) &&
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={handleAddToFavorites}
                                        endIcon={<PlaylistAddCheckIcon />}
                                    >
                                        Add to Favorites
                                    </Button>

                                }

                                { isAuthenticated && did && did !== undefined && currentUser && currentUser.favorites.includes(did) &&
                                    <Alert severity="success">Resource in your favorites!</Alert>
                                }

                                {
                                    !isAuthenticated &&
                                    <Alert severity="warning">Login to add this resource to your favorites list!</Alert>
                                }


                            </Grid>
                            <Grid item xs={3} align="center">
                                <ButtonGroup
                                    orientation="vertical"
                                    color="primary"
                                    aria-label="Vote button group"
                                    variant="text"
                                    size="large"
                                >
                                    <IconButton>
                                        <KeyboardArrowUpIcon />
                                    </IconButton>
                                    <Button className={classes.voteText} disabled>VOTE</Button>
                                    <IconButton>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="h6">Description:</Typography>
                                { book.volumeInfo.description && <Typography variant="subtitle2" component="h6">
                                    {book.volumeInfo.description.replace(/(<([^>]+)>)/gi, "") + '.'}
                                </Typography>
                                }

                            </Grid>
                            <Grid item xs={12}>
                                <Box py={2}>
                                    <Divider light />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<LinkedInIcon />}
                                    className={classes.shareButton}
                                >
                                    Share
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<TwitterIcon  />}
                                    className={classes.shareButton}
                                >
                                    Tweet
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<CommentIcon />}
                                    className={classes.shareButton}
                                >
                                    12
                                </Button>
                                <Chip
                                    avatar={<Avatar>T</Avatar>}
                                    label="React"
                                    clickable
                                    color="primary"
                                    size="medium"
                                    color="primary"
                                />
                            </Grid>
                        </Grid>

                    </Box>
                    }
                </Paper>
            </Grid>
            <Sidebar />
        </Grid>
    )
}

export default Details;