import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";


import { AppState, useTypedSelector } from "../store/reducers/rootReducer";

import { clearFavAction } from "../store/actions/listActions";

const Favorites = () => {
    const dispatch = useDispatch();
    const listFavorites = useTypedSelector((state: AppState) => state.list);

    console.log(listFavorites)

    return (
        <Outline>
            <H1>FAVORITE WORDS</H1>
            <List>
                {listFavorites.map((word, ind) => (
                    <h4 key={ind} >
                        {word}
                    </h4>
                ))}
            </List>
            <Clear onClick={() => dispatch(clearFavAction())}>CLEAR</Clear>
        </Outline>
    );
};

export default Favorites;

const Outline = styled.div`
    width: 100%;
    max-width: 500px;

    margin: 10px auto;

    background-image: linear-gradient(
        hsla(200, 43%, 93%, 1),
        hsla(200, 72%, 53%, 1)
    );
    border-radius: 10px;
    box-shadow: 2px 2px 15px black;

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
    color: black;
`;

const Clear = styled.div`
    width: 70px;
    height: 70px;
    margin: 20px;
    
    cursor: cell;
    
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;
