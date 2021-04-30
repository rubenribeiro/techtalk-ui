import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    inputText: {
        fontSize: '8pt !important'
    }
}));


const AddUserRow = ({addUser, deleteUser, setAddRow}) => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCompleted = (event) => {
        setAddRow(false);
    }

    const handleAddUser = (event) => {
        let newUser = {
            username,
            lastName,
            firstName,
            email,
            password
        }
        addUser(newUser);
        setAddRow(false)
    }

    const handleClear = (event) => {
        setUsername("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAddRow(false);
    }

    return(
        <TableRow>
                <React.Fragment>
                    <TableCell component="th" scope="row">
                        <TextField
                            defaultValue={username}
                            className={classes.inputText}
                            onChange={ (e) => setUsername(e.target.value)}
                            variant="outlined"
                            label="Username"
                            size="small"
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={password}
                            className={classes.inputText}
                            onChange={ (e) => setPassword(e.target.value)}
                            required
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            variant="outlined"
                            label="Password"
                            size="small"
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={firstName}
                            className={classes.inputText}
                            onChange={ (e) => setFirstName(e.target.value)}
                            variant="outlined"
                            label="First Name"
                            size="small"

                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={lastName}
                            className={classes.inputText}
                            onChange={ (e) => setLastName(e.target.value)}
                            variant="outlined"
                            label="Last Name"
                            size="small"
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={email}
                            type="email"
                            className={classes.inputText}
                            onChange={ (e) => setEmail(e.target.value)}
                            variant="outlined"
                            label="Email"
                            size="small"
                        />
                    </TableCell>
                    <TableCell align="left">
                    </TableCell>
                    <TableCell align="left"></TableCell>
                </React.Fragment>
            <TableCell align="center">
                <ButtonGroup size="small" disableElevation variant="contained" color="primary">
                    <IconButton aria-label="delete user">
                        <ClearIcon onClick={handleClear}/>
                    </IconButton>
                    <IconButton onClick={handleAddUser} aria-label="done editing user">
                            <CheckIcon />
                    </IconButton>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    );
};

export default AddUserRow;