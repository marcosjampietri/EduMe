import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { navReducer } from "./navReducer";
import { toastReducer } from "./toastReducer";
import { wordsReducer } from "./wordsReducer";
import { listReducer } from "./listReducer";


const rootReducer = combineReducers({
    nav: navReducer,
    wrds: wordsReducer,
    list: listReducer,
    toast: toastReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;