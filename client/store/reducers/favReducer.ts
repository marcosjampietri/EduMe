import { favState } from "../../types/states";

const initState = {
    favOn: false,
};

export const favReducer = (state: favState = initState, action: any) => {
    switch (action.type) {
        case "TOGGLE_FAV":
            return {
                ...state,
                favOn: !state.favOn,
            };
        case "TOGGLE_NAV_OFF":
            return {
                ...state,
                favOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
