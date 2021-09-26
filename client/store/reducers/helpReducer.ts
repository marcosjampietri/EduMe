import { helpState } from "../../types/states";

const initState = {
    helpOn: false,
};

export const helpReducer = (state: helpState = initState, action: any) => {
    switch (action.type) {
        case "TOGGLE_HELP":
            return {
                ...state,
                helpOn: !state.helpOn,
            };
        case "TOGGLE_HELP_OFF":
            return {
                ...state,
                helpOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
