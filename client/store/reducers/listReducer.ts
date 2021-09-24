import {
    ListState,
    ListActionType,
} from "../../types/listTypes";

const initialState: ListState = [];

export const listReducer = (
    state: ListState = initialState,
    { type, payload }: ListActionType
): ListState => {
    switch (type) {
        case "ADD_TO_LIST":
            return state.some((word) => word === payload)
                ? [...state]
                : [...state, payload];

        case "REMOVE_FROM_LIST":
            return state.filter((word) => word !== payload);

        case "CLEAR_LIST":
            return initialState;

        default:
            return state;
    }
};