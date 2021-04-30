import React, {useEffect, useState} from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import userService from '../../services/user-service';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

const Register = () => {
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',

    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    const register = (evt) => {
        evt.preventDefault();
        console.log("ENTERED REGISTER \n");
        userService.register(credentials)
            .then((user) => {
                console.log(user);
                if (user === 0) {
                    alert("Username already taken")
                } else {
                    // user successfully registered
                    history.push("/login");
                }}).catch((err) => {
                    console.log(err);
        });
    }

    useEffect(() => {
        userService.profile()
            .then((usr) => {
                if (usr && !isAuthenticated) {
                    setIsAuthenticated(true);
                    history.push("/home/1");
                }}).catch((err) => {
            console.log(err);
        });
    }, [isAuthenticated]);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ForumTwoToneIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => {setCredentials({
                                    ...credentials, firstName: e.target.value
                                })}}
                                value={credentials.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => {setCredentials({
                                    ...credentials, lastName: e.target.value
                                })}}
                                value={credentials.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={(e) => {setCredentials({
                                    ...credentials, username: e.target.value
                                })}}
                                value={credentials.username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => {setCredentials({
                                    ...credentials, email: e.target.value
                                })}}
                                value={credentials.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {setCredentials({
                                    ...credentials, password: e.target.value
                                })}}
                                value={credentials.password}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={register}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" component={RouterLink} to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Register;