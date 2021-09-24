import axios from "axios";
import { actionCreator } from "../../types/states";

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