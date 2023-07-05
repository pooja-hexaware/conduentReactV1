import { combineReducers } from '@reduxjs/toolkit';
import theme from "./slices/theme.slice";
import navigation from "./slices/navigation.slice";

const reducer = combineReducers({
    theme,
    navigation
});

export default reducer;
