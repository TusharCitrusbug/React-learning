import { createStore } from '@reduxjs/toolkit'
import cakeReducer from '../reducers/cakereducer'
const store = createStore(cakeReducer)

export default store;