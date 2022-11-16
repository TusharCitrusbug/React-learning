import { configureStore, createStore } from '@reduxjs/toolkit';
import rootReducer from './services/reducers/index'
// export default configureStore({
//     reducers: rootReducer,
// })

const stores = createStore(rootReducer);
export default stores;