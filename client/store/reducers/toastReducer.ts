import { toastState } from "../../types/states";

const initState = {
    ToastOn: false,
    toastComponent: null,
};
export const toastReducer = (state: toastState = initState, action: any) => {
    switch (action.type) {
        case "TOGGLE_TOAST_ON":
            return {
                ...state,
                ToastOn: true,
                toastComponent: action.payload,
            };
        case "TOGGLE_TOAST_OFF":
            return {
                ...state,
                ToastOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
