const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case "FIND_ALL_USERS":
            return {
                ...state,
                users: action.users,
            }
        case "ADD_USER":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.newUser,
                ]
            }
        case "UPDATE_USER_BY_ID":
            return {
                users: state.users.map( u => {
                    if (u._id === action.user._id) {
                        return action.user;
                    } else {
                        return u;
                    }
                })
            }
        case "DELETE_USER":
            return {
                users: state.users.filter(user => {
                    if(user._id === action.userToDelete._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }
        default:
            return state
    }
}

export default userReducer;