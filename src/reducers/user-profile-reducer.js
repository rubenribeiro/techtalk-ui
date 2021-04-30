const initialState = {
    userProfile: {}
}

const userProfileReducer = (state = initialState, action) => {

    switch(action.type) {
        case "FIND_USER_PROFILE":
            console.log("In user profile reducer \n");
            console.log(action.userProfile);
            return {
                ...state,
                userProfile: action.userProfile,
            }

            case "UPDATE_USER_PROFILE":
            return {
                ...state,
                userProfile: action.userProfile,
            }
        default:
            return state
    }
}

export default userProfileReducer;