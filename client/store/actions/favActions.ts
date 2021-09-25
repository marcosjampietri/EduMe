import { actionCreator } from "../../types/states";

export const favAction: actionCreator<any> =
    () => async (dispatch, getState) => {
        dispatch({
            type: "TOGGLE_FAV",
        });
    };

export const favOffAction = () => ({
    type: "TOGGLE_FAV_OFF",

});