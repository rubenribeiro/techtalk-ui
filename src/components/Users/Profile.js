import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar';
import userService from '../../services/user-service';

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

const Profile = () => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser);
            })
    }, [])
    const classes = useStyles();

    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="subtitle2" component="h6">User Profile</Typography>
                <Paper className={`${classes.paper} ${classes.paperMain}`}>
                    <Typography variant="h4" component="h4">User Profile Goes Here</Typography>
                    {JSON.stringify(currentUser)}
                    <h3>Welcome {currentUser && currentUser.email}</h3>
                </Paper>
            </Grid>
            <Sidebar />
        </Grid>
    );
};

export default Profile;