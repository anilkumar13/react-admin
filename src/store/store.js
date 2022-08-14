import { createStore,combineReducers } from 'redux';
import ThemeReducer from "../layouts/layoutsRedux/themeReducer";

const rootReducer = combineReducers({ThemeReducer})
const store = createStore(rootReducer)

export default store;