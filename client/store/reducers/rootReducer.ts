import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { navReducer } from "./navReducer";
import { toastReducer } from "./toastReducer";
import { codeReducer } from "./wordsReducer";
import { listReducer } from "./listReducer";
import { sugestReducer } from "./sugestReducer";


const rootReducer = combineReducers({
    nav: navReducer,
    typn: codeReducer,
    list: listReducer,
    sugst: sugestReducer,
    toast: toastReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;