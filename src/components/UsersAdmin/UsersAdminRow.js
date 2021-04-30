import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import TableCell from "@material-ui/core/TableCell";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CheckIcon from "@material-ui/icons/Check";
import TableRow from "@material-ui/core/TableRow";


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

const UsersAdminRow = ({user, updateUserById, deleteUser}) => {
    const classes = useStyles();
    const [editing, setEditing] = useState(false);
    const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const [username, setUsername] = useState(user.username);
    const [lastName, setLastName] = useState(user.lastName);
    const [firstName, setFirstName] = useState(user.firstName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [role, setRole] = useState(user.role);


   const handleCompleted = (event) => {
       updateUserById({
           ...user,
           username,
           lastName,
           firstName,
           email,
           password,
           role,
       });
       setEditing(false);
   }
   const handleEditing = (event) => {
       setEditing(true);
   }

    return(
        <TableRow>
            {
                !editing &&
                <React.Fragment>
                    <TableCell component="th" scope="row">
                        {user.username}
                    </TableCell>
                    <TableCell align="left">{password}</TableCell>
                    <TableCell align="left">{firstName}</TableCell>
                    <TableCell align="left">{lastName}</TableCell>
                    <TableCell align="left">{email}</TableCell>
                    <TableCell align="left">{role.toLowerCase()}</TableCell>
                    <TableCell align="left">{ new Date(user.updatedAt).toLocaleString("en-US", dateOptions)}</TableCell>
                </React.Fragment>
            }
            {
                editing &&
                <React.Fragment>
                    <TableCell component="th" scope="row">
                        <TextField
                            defaultValue={username}
                            className={classes.inputText}
                            onChange={ (e) => setUsername(e.target.value)}
                            name="username"
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={password}
                            type="password"
                            className={classes.inputText}
                            onChange={ (e) => setPassword(e.target.value)}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={firstName}
                            className={classes.inputText}
                            onChange={ (e) => setFirstName(e.target.value)}

                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={lastName}
                            className={classes.inputText}
                            onChange={ (e) => setLastName(e.target.value)}
                            name="lastName"
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            defaultValue={email}
                            className={classes.inputText}
                            onChange={ (e) => setEmail(e.target.value)}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <FormControl className={classes.formControl}>
                            <Select
                                className={classes.inputText}
                                value={role}
                                onChange={ (e) => setRole(e.target.value)}
                            >
                                <MenuItem value="ADMIN">Admin</MenuItem>
                                <MenuItem value="USER">User</MenuItem>
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell align="left">{ new Date(user.updatedAt).toLocaleString("en-US", dateOptions)}</TableCell>
                </React.Fragment>
            }

            <TableCell align="center">
                <ButtonGroup size="small" disableElevation variant="contained" color="primary">
                    <IconButton onClick={ () => deleteUser(user)} aria-label="delete user">
                        <DeleteIcon />
                    </IconButton>
                    {!editing && <IconButton onClick={handleEditing} aria-label="edit user">
                                        <BorderColorIcon  />
                                  </IconButton>
                    }
                    {
                        editing && <IconButton onClick={handleCompleted} aria-label="done editing user">
                                      <CheckIcon />
                                   </IconButton>
                    }

                </ButtonGroup>
            </TableCell>
        </TableRow>
    );
};

export default UsersAdminRow;