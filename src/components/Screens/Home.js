import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const resourceList = [
    {
        "_id": "1",
        "type": "book",
        "title": "Book Example 1",
        "imageUrl": "http://image.example.com",
        "upVotes": 30,
        "totalComments": 6,
        "topic": "React"
    },
    {
        "_id": "2",
        "type": "book",
        "title": "Book Example 2",
        "imageUrl": "http://image.example.com",
        "upVotes": 30,
        "totalComments": 6,
        "topic": "React"
    },
    {
        "_id": "3",
        "type": "book",
        "title": "Book Example 2",
        "imageUrl": "http://image.example.com",
        "upVotes": 30,
        "totalComments": 6,
        "topic": "React"
    }
];


const Home = () => {
    const classes = useStyles();

    return(
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="subtitle2" component="h6">Latest Resources</Typography>
                    <Paper className={classes.paper}>Main container</Paper>
                </Grid>
               <Sidebar />
            </Grid>
    );
};

export default Home;