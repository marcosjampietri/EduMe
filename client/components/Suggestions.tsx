import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import { addFavAction } from "../store/actions/listActions";
import { clearCodeAction } from "../store/actions/wordsAction";

const Keyboard = () => {
    const dispatch = useDispatch();

    const { wordsList } = useTypedSelector((state: AppState) => state.sugst);

    return (
        <List>
            {wordsList.map((word, ind) => (
                <h4
                    key={ind}
                    onClick={() => {
                        dispatch(addFavAction(word));
                        dispatch(clearCodeAction());
                    }}
                >
                    {word}
                </h4>
            ))}
        </List>
    );
};

export default Keyboard;

const List = styled.ul`
    margin: 50px auto;
    padding: 20px;

    width: 85%;
    max-width: 700px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    h4 {
        margin: 10px;
        padding: 5px;
        font-size: clamp(1em, 2, 5vw, 3em);

        cursor: pointer;
        color: black;
        background-color: hsla(0, 0%, 81%, 0.7);
        border-radius: 5px;
    }
`;
