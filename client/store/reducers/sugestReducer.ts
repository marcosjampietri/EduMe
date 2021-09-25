import {

    ListActionType,
} from "../../types/listTypes";

interface SugestState {
    wordsList: string[]
}

const initialState: SugestState = {
    wordsList: []
};

export const sugestReducer = (
    state: SugestState = initialState,
    { type, payload }: ListActionType
): SugestState => {
    switch (type) {

        case "GET_SUGESTIONS":
            return {
                ...state,
                wordsList: payload

            }

        default:
            return state;
    }
};