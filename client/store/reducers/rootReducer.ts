import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { favReducer } from "./favReducer";
import { helpReducer } from "./helpReducer";
import { toastReducer } from "./toastReducer";
import { codeReducer } from "./wordsReducer";
import { listReducer } from "./listReducer";
import { sugestReducer } from "./sugestReducer";


const rootReducer = combineReducers({
    fav: favReducer,
    help: helpReducer,
    typn: codeReducer,
    list: listReducer,
    sugst: sugestReducer,
    toast: toastReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;