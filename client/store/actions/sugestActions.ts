import { actionCreator } from "../../types/states";
import axios from "axios";


export const sugestionsAction = (wordsList: string[]) => ({
    type: "GET_SUGESTIONS",
    payload: wordsList,
});

export const sugestOnAction = () => ({
    type: "SEE_SUGESTIONS",

});

export const sugestOffAction = () => ({
    type: "UNSEE_SUGESTIONS",

});

