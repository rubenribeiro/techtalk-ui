import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, NavLink, useHistory,  useParams } from 'react-router-dom';
import {Grid, Paper, Typography, Box} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Sidebar from "../Sidebar";
import Divider from '@material-ui/core/Divider';
import userService from '../../services/user-service';
import userAvatar from '../../images/user.png';
import Avatar from "@material-ui/core/Avatar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    spacer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    typography: {
        textAlign: "center",
    }

}));

const Profile = () => {
    const history = useHistory();
    const { uid } = useParams();
    const classes = useStyles();
    const [userDetail, setUserDetail] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        userService.profile()
            .then((usr) => {
                if (usr && !isAuthenticated) {
                    setUserDetail(usr);
                    setIsAuthenticated(true);
                    setFavorites(usr.favorites);
                }
            }).catch((err) => {
            console.log(err);
        });

    }, [isAuthenticated]);

    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>

                <Typography variant="subtitle2" component="h6">User Details</Typography>
                <Paper className={classes.paper}>
                    <Box pt={3}>
                        <Avatar className={classes.avatar} src={userAvatar} />
                        <Typography variant="subtitle2" className={classes.typography}>{userDetail && userDetail.username}</Typography>
                        <Box py={3}>
                            <Divider light />
                        </Box>
                    </Box>
                    <Typography variant="h6">Details:</Typography>
                    <Typography><strong>Name:</strong> {userDetail && userDetail.firstName} {userDetail && userDetail.lastName}  </Typography>
                    <Typography><strong>Contact:</strong> {userDetail && userDetail.email} </Typography>
                    <br />
                    <Typography variant="h6">Additonal Details:</Typography>
                    <Typography>{userDetail && userDetail.intro} </Typography>
                    <br />
                    <Button variant="contained" color="primary">
                        Follow {userDetail && userDetail.firstName}
                    </Button>
                    <br />
                    <br />
                    <Divider light />
                    <br />
                    <br />
                    <Typography variant="h6">Favorites:</Typography>
                    <List dense>
                        {
                            favorites && favorites.map( fav => <ListItem>
                                    <ListItemText
                                        primary={fav}
                                    />
                                </ListItem>

                            )
                        }
                    </List>
                </Paper>
            </Grid>
            <Sidebar />
        </Grid>
    );
};

export default Profile;