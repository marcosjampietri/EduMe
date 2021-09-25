import { ListActionType } from "../../types/listTypes";

interface SugestState {
    wordsList: string[]
}

const initialState: SugestState = {
    wordsList: []
};

export const sugestReducer = (
    state: SugestState = initialState,
    action: ListActionType
): SugestState => {
    switch (action.type) {
        case "GET_SUGESTIONS":
            return {
                ...state,
                wordsList: action.payload
            }
        default:
            return state;
    }
};