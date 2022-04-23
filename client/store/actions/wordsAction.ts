import axios from "axios";
import { actionCreator, digit } from "../../types/states";


export const typingAction = (input: object) => ({
    type: "TYPING",
    payload: input,
});

export const clearCodeAction = () => ({
    type: "CLEAR_CODE",
});

export const getWordsAction: actionCreator<any> = (input: digit) => async (
    dispatch: any,
    getState: any
) => {
    dispatch({
        type: "TYPING",
        payload: input,
    });



    const url =
        process.env["NODE_ENV"] === "development"
            ? "http://localhost:3000"
            // ? "http://localhost:5000" if using nginx without next.js server
            : "";
    // const dictdUrl = () => `${url}/api/translate`;
    const dictdUrl = () => `/api/translate`;

    const { data: wordList } = await axios.post(
        dictdUrl(),
        {
            code: input.alpha,
        }
    );



    dispatch({
        type: "GET_SUGESTIONS",
        payload: wordList,
    });
};