import axios from "axios";
import { actionCreator } from "../../types/states";

export const typingAction = (input: object) => ({
    type: "TYPING",
    payload: input,
});

export const clearCodeAction = () => ({
    type: "CLEAR_CODE",
});

export const wordsAction: actionCreator<any> = () => async (
    dispatch,
    getState
) => {
    dispatch({
        type: "LOADING",
    });

    const url =
        process.env["NODE_ENV"] === "development"
            ? "http://localhost:5000"
            : "";
    const dictdUrl = () => `${url}/api/dictionary`;
    const fullDict = await axios.get(dictdUrl());

    dispatch({
        type: "GET_WORDS",
        payload: { words: fullDict.data },
    });
};

// export const getWordsAction: actionCreator<any> = (code: string) => async (
//     dispatch: any,
//     getState: any
// ) => {
// 
//     const url =
//         process.env["NODE_ENV"] === "development"
//             ? "http://localhost:5000"
//             : "";
//     const dictdUrl = () => `${url}/api/translate`;
// 
//     const { data: wordList } = await axios.post(
//         dictdUrl(),
//         {
//             code,
//         }
//     );
// 
// 
// 
//     dispatch({
//         type: "GET_WORDS",
//         payload: wordList,
//     });
// };