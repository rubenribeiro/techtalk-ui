const initialState = {
    resources: []
}

const resourceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_RESOURCES":
            return {
                ...state,
                resources: action.resources,
            }
        default:
            return state
    }
}

export default resourceReducer;