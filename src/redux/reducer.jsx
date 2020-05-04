const initialState = {
    name: 'Mohit',
    blank: 'sdasd'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.Payload
            }
        // case 'CHANGE_NAME':
        //     return {
        //         ...state,
        //         name: action.Payload
        //     }
        // case 'CHANGE_NAME':
        //     return {
        //         ...state,
        //         name: action.Payload
        //     }
        // case 'CHANGE_NAME':
        //     return {
        //         ...state,
        //         name: action.Payload
            // }
        default:
            return state;
    }
}