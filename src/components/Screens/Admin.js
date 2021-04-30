import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
import UsersAdmin from '../UsersAdmin';
import PaginationLink from "../PaginationLink";


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
            <Grid item xs={12}>
                <Paper className={`${classes.paper} ${classes.paperMain}`}>
                    <UsersAdmin />
                </Paper>
            </Grid>
            <Grid item xs={12} container justify="center">
                <PaginationLink />
            </Grid>
        </Grid>
    );
};

export default Admin;