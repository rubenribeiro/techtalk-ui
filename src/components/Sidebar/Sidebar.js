import React from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    return(
        <Grid item xs={3}>
            <Typography variant="subtitle2" component="h6">Trending List</Typography>
            <Paper className={classes.paper}>Sidebar</Paper>
        </Grid>
    );
};

export default Sidebar;