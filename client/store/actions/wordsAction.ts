import axios from "axios";
import { actionCreator } from "../../types/states";

interface digit {
    num: string;
    label: string;
    alpha: string;
    digi: string;
}

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
            ? "http://localhost:5000"
            : "";
    const dictdUrl = () => `${url}/api/translate`;

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


// export const wordsAction: actionCreator<any> = () => async (
//     dispatch,
//     getState
// ) => {
//     dispatch({
//         type: "LOADING",
//     });
// 
//     const url =
//         process.env["NODE_ENV"] === "development"
//             ? "http://localhost:5000"
//             : "";
//     const dictdUrl = () => `${url}/api/dictionary`;
//     const fullDict = await axios.get(dictdUrl());
// 
//     dispatch({
//         type: "GET_WORDS",
//         payload: { words: fullDict.data },
//     });
// };