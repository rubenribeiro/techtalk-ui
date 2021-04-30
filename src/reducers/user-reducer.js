const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {

    console.log("IN REDUCER \n");
    console.log(action.users);

    switch(action.type) {
        case "FIND_USERS":
            return {
                ...state,
                users: action.users,
            }
        case "UPDATE_USER":
            return {
                users: state.users.map( u => {
                    if (u._id === action.user._id) {
                        return action.user;
                    } else {
                        return u;
                    }
                })
            }
        default:
            return state
    }
}

export default userReducer;