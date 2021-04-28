import React, {useEffect, useState} from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
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
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    const login = ()  => {
        userService.login(credentials)
            .then((currentUser) => {
                console.log(currentUser);
                if (currentUser === 0) {
                    alert("login failed, try again")
                } else {
                    // log in successful
                    history.push("/home/1");
                }})
    };

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
                    <ForumTwoToneIcon  />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={login}
                    >
                        Log in
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" component={RouterLink} to="/register">
                                {"Need an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;