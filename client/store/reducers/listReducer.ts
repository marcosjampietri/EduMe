import {
    ListState,
    ListActionType,
} from "../../types/listTypes";

const initialState: ListState = {
    listFavorites: [],
    onList: false
};

export const listReducer = (
    state: ListState = initialState,
    { type, payload }: ListActionType
): ListState => {
    switch (type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                listFavorites: state.listFavorites && state.listFavorites.some((word) => word === payload)
                    ? [...state.listFavorites]
                    : [...state.listFavorites, payload],
                onList: state.listFavorites && state.listFavorites.filter((word) => word !== payload)
                    ? true : false,

            }

        case "REMOVE_FROM_LIST":
            return {
                ...state,
                listFavorites: state.listFavorites.filter((word) => word !== payload)
            };

        case "CLEAR_LIST":
            return initialState;

        default:
            return state;
    }
};