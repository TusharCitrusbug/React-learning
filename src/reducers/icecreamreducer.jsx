import { BUY_ICE_CREAM } from "../constants/constants";

const initialState = {
    numberOficeCreams: 10
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numberOficeCreams: state.numberOficeCreams - 1
            }
        default:
            return state;
    }
}

export default iceCreamReducer