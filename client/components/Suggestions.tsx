import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import { addFavAction } from "../store/actions/listActions";
import { clearCodeAction } from "../store/actions/wordsAction";
import { sugestOffAction } from "../store/actions/sugestActions";

import { color } from "../styles/globalSC";

const Keyboard = () => {
    const dispatch = useDispatch();

    const { wordsList, sugestOn } = useTypedSelector(
        (state: AppState) => state.sugst
    );

    const { onList, listFavorites } = useTypedSelector(
        (state: AppState) => state.list
    );

    const dismiss = useTransition(sugestOn, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <Wrap onClick={() => dispatch(sugestOffAction())}>
            {dismiss((styles, item) =>
                item ? <Close style={styles}> DISMISS</Close> : null
            )}
            <List>
                {wordsList.map((word, ind) => (
                    <Word
                        active={listFavorites.includes(word)}
                        key={ind}
                        onClick={() => {
                            dispatch(addFavAction(word));
                            dispatch(clearCodeAction());
                        }}
                    >
                        {word}
                    </Word>
                ))}
            </List>
        </Wrap>
    );
};

export default Keyboard;

const Wrap = styled.div`
    position: relative;
    background-color: ${color.dark};
`;

const Close = styled(animated.div)`
    position: absolute;
    top: 0px;
    left: 50vw;
    transform: translate3d(-50 %, -50 %, 0);
    margin: 0px auto;
    padding: 4px;
    width: 120px;

    background-color: hsla(186, 80 %, 48 %, 1);
    box-shadow: 0px 0px 20px hsla(186, 100 %, 48 %, 1);
    border: 2px inset hsla(0, 0 %, 83 %, 0.71);
    border-radius: 5px;

    display: flex;
    justify-content: center;
`;

const List = styled.ul`
    margin: 20px auto;
    padding: 20px;
    width: 85%;
    max-width: 700px;

    background-color: hsla(186, 100%, 50%, 0.04);

    box-shadow: 0px 0px 20px hsla(186, 100%, 50%, 0.31);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    h4 {
        margin: 10px;
        padding: 5px;
        font-size: clamp(1em, 2, 5vw, 3em);

        cursor: pointer;
         {
            /* color: black; */
        }
        background-color: hsla(0, 0%, 81%, 0.7);
        border-radius: 5px;
    }
`;

interface props {
    active: boolean;
}
const Word = styled.h4<props>`
    color: ${({ active }) => (active ? "hsla(175, 100%, 50%, 1)" : "black")};
`;
