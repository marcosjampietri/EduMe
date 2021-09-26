import { actionCreator } from "../../types/states";

export const helpAction: actionCreator<any> =
    () => async (dispatch, getState) => {
        dispatch({
            type: "TOGGLE_HELP",
        });
    };

export const helpOffAction = () => ({
    type: "TOGGLE_HELP_OFF",

});