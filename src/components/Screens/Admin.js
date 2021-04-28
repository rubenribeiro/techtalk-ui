import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Link, useParams} from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar';
import AdminChart from '../AdminChart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 0,
        marginRight: 0,
    },
    paperMain: {
        paddingTop: 0,
    },
    searchFilter: {
        marginBottom: theme.spacing(2)
    },
    headerSpacing: {
        paddingTop: theme.spacing(2)
    }
}));



const Admin = () => {
    const classes = useStyles();
    const { title } = useParams();

    return(
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="subtitle2" component="h6">Admin Page</Typography>
                <Paper className={`${classes.paper} ${classes.paperMain}`}>
                        <Typography align="left" className={classes.headerSpacing} component="h4" variant="h4">Admin Dashboard</Typography>
                        <br />
                        <AdminChart />
                        <Typography align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        <br />
                        <Typography align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Paper>
            </Grid>
            <Sidebar />
        </Grid>
    );
};

export default Admin;