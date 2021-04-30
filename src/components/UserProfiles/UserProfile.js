import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import {Grid, Paper, Typography, Box} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Sidebar from "../Sidebar";
import Divider from '@material-ui/core/Divider';
import userService from '../../services/user-service';
import userAvatar from '../../images/user.png';
import Avatar from "@material-ui/core/Avatar";

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

const UserProfile = () => {
    const history = useHistory();
    const { uid } = useParams();
    const classes = useStyles();
    const [userDetail, setUserDetail] = useState({});
    const findUser = () => {
        if (uid && uid !== undefined) {
            userService.findUserById(uid)
                .then((userDetail) => {
                    console.log(userDetail);
                    setUserDetail(userDetail);
                });
        }
    }

    useEffect(() => {
        console.log("LOADING DETAILS \n");
         findUser();
    }, []);

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
                </Paper>
            </Grid>
            <Sidebar />
        </Grid>
    );
};

export default UserProfile;