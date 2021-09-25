import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import { clearFavAction } from "../store/actions/listActions";
import { favAction } from "../store/actions/favActions";

const Favorites = () => {
    const dispatch = useDispatch();

    const listFavorites = useTypedSelector((state: AppState) => state.list);

    return (
        <Outline>
            <H1>FAVORITE WORDS</H1>
            <List>
                {listFavorites.map((word, ind) => (
                    <h4 key={ind}>{word}</h4>
                ))}
            </List>
            <Controls>
                <Clear onClick={() => dispatch(clearFavAction())}>CLEAR</Clear>
                <Clear onClick={() => dispatch(favAction())}>OFF</Clear>
            </Controls>
        </Outline>
    );
};

export default Favorites;

const Outline = styled.div`
    width: 100%;
    max-width: 550px;

    margin: 0px auto;

    background-image: linear-gradient(
        hsla(240, 5%, 15%, 1),
        hsla(240, 10%, 10%, 1)
    );

    border-radius: 10px;
    box-shadow: 0px 20px 35px hsla(189, 72%, 50%, 0.2),
        2px 3px 0px hsla(189, 0%, 0%, 1), -1px -1px 0px hsla(189, 0%, 80%, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

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

const H1 = styled.h1`
    margin: 20px;
    color: gray;
`;

const Controls = styled.div`
    padding: 10px 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Clear = styled.div`
    width: 80px;
    height: 80px;
    margin: 20px;

    cursor: pointer;
    border-radius: 50px;
    border: 3px solid hsla(240, 5%, 10%, 1);
    background: linear-gradient(
        145deg,
        hsla(240, 5%, 17%, 1),
        hsla(240, 6%, 5%, 1)
    );
    box-shadow: 13px 13px 10px hsla(240, 10%, 5%, 0.51),
        -8px -8px 10px hsla(240, 10%, 20%, 0.51);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: hsla(185, 100%, 50%, 1);
    text-shadow: 1px 1px 15px hsla(165, 100%, 50%, 1);

    font-size: 10px;
`;
