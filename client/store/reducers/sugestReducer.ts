import { ListActionType } from "../../types/listTypes";

interface SugestState {
    sugestOn: boolean
    wordsList: string[]
}

const initialState: SugestState = {
    sugestOn: false,
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
        case "SEE_SUGESTIONS":
            return {
                ...state,
                sugestOn: true
            }
        case "UNSEE_SUGESTIONS":
            return {
                ...state,
                sugestOn: false
            }
        default:
            return state;
    }
};