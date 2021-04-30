import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import UsersAdminRow from "./UsersAdminRow";
import {connect} from "react-redux";
import userService, {updateUserById} from "../../services/user-service";
import {Grid, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddUserRow from "./AddUserRow";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        fontSize: '8pt'
    },
    typography: {
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(4),
        margin: theme.spacing(1),
},
}));


const UsersAdmin = ({users = [], findAllUsers, updateUserById, deleteUser, addUser}) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [addRow, setAddRow] = useState(true);
    const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

    useEffect(() => {
        findAllUsers();
        if (users.length > 0) {
            setLoading(false);
        }
        setAddRow(false);
    }, []);

    return(
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Typography color="primary" className={classes.typography} align="left" variant="h5" component="h5">
                    Manage Users</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<PersonAddIcon  />}
                    onClick={() => setAddRow(true)}
                >
                    Add New User
                </Button>

            </Grid>
            <TableContainer>
                <Table className={classes.table} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell align="left">Password</TableCell>
                            <TableCell align="left">FName</TableCell>
                            <TableCell align="left">LName</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Last Modified</TableCell>
                            <TableCell align="center">Edit User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users && users.map( (user) =>
                                <UsersAdminRow
                                    key={user._id}
                                    user={user}
                                    deleteUser={deleteUser}
                                    updateUserById={updateUserById}
                                />)
                        }
                        {
                            addRow &&
                            <AddUserRow
                                deleteUser={deleteUser}
                                setAddRow={setAddRow}
                                addUser={addUser}

                            />
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};


const stateToPropsMapper = (state) => {
    return {
        users: state.userReducer.users
    }
};

const dispatchToPropsMapper = (dispatch) => {
    return {
        findAllUsers: () => {
            userService.findAllUsers()
                .then(users => {
                    dispatch({
                        type: "FIND_ALL_USERS",
                        users
                    });
                });
        },
        addUser: (user) => {
            userService.addUser(user)
                .then(newUser => {
                    dispatch({
                    type: "ADD_USER",
                    newUser
                })});
        },
        updateUserById: (user) => {
            userService.updateUserById(user._id, user)
                .then(usr => dispatch({
                    type: "UPDATE_USER_BY_ID",
                    user
                }))
        },
        deleteUser: (userToDelete) => {
            userService.deleteUser(userToDelete._id)
                .then(status => dispatch({
                    type: "DELETE_USER",
                    userToDelete: userToDelete
                }));
        },
    }
};

export default connect(stateToPropsMapper, dispatchToPropsMapper)(UsersAdmin);
