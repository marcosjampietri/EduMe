import { navState } from "../../types/states";

const initState = {
    NavOn: false,
};

export const navReducer = (state: navState = initState, action: any) => {
    switch (action.type) {
        case "TOGGLE_NAV":
            return {
                ...state,
                NavOn: !state.NavOn,
            };
        case "TOGGLE_NAV_OFF":
            return {
                ...state,
                NavOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
