import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = []
export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cartData: action.data }
            ]
        case REMOVE_TO_CART:
            const updatedCartData = state.filter(data => {
                if (data.cartData.id !== action.data.id) {
                    return data
                }
            })
            console.log(updatedCartData, "ksdjskdjskdjskdjskdkjkdksdksd")
            return [
                updatedCartData
            ]
        default:
            return state;
    }
}
