import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from 'react-router-dom';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Sidebar from '../Sidebar';
import UserProfiles from '../UserProfiles';
import PaginationLink from '../PaginationLink';
import userService from '../../services/user-service';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 0,
        marginRight: 0,
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const Community = ({users = [], findAllUsers}) => {
    const classes = useStyles();
    const { title } = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       findAllUsers();
       if (users.length > 0) {
           setLoading(false);
       }
       console.log("IN USE EFFECT \n")
       console.log(JSON.stringify(users));
    }, []);

    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="subtitle2" component="h6">Our Community</Typography>
                <Grid item container spacing={2}>
                    {
                        users && users.map( (user) =>
                            <Grid key={user._id} item xs={4}>
                                <UserProfiles user={user} />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
            <Sidebar />
            <Grid item xs={9} container justify="center">
                <PaginationLink />
            </Grid>
        </Grid>
    );
};

const stateToPropsMapper = (state) => {
    console.log("IN STATE")
    console.log(state.userReducer.users);
    return {
        users: state.userReducer.users
    }
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        findAllUsers: () => {
            userService.findAllUsers()
                .then(users => {
                    console.log(" IN USER SERVICE");
                    console.log(users);
                    dispatch({
                        type: "FIND_USERS",
                        users
                    });
                });
        },

    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(Community);
