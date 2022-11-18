import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cakereducer";
import chocolateReducer from "./chocolatereducer";
import iceCreamReducer from "./icecreamreducer";

const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer, chocolate: chocolateReducer })

export default rootReducer