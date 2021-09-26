import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import { clearFavAction } from "../store/actions/listActions";
import { helpAction } from "../store/actions/helpActions";

const Help = () => {
    const helpItems = [
        {
            name: "1",
            descr: "Opens the list of the beautiful words you selected",
            icon: "",
        },
        {
            name: "2-9",
            descr: "Inserts a group of characters you can use to build the words",
            icon: "",
        },
        {
            name: "0",
            descr: "Opens the list of words posiible to build from the combination of your super secret code",
            icon: "",
        },
        {
            name: "#",
            descr: "Trims the suggestions so that it only show words with the number of characters you inserted",
            icon: "",
        },
        {
            name: "word",
            descr: "click on the words on the suggestion list to add them to the favorites",
            icon: "",
        },
        {
            name: "😉",
            descr: "if you feel embarrassed about telling something to someone, give them a super secret code. Have fun!",
            icon: "",
        },
    ];

    const dispatch = useDispatch();

    const listFavorites = useTypedSelector((state: AppState) => state.list);

    return (
        <Margin>
            <Outline>
                <H1>HELP</H1>
                <List>
                    {helpItems.map((item, index) => (
                        <li key={index}>
                            <div>{item.name}</div>
                            <h5>{item.descr}</h5>
                        </li>
                    ))}
                </List>
                <Controls>
                    <Clear onClick={() => dispatch(helpAction())}>
                        DISMISS
                    </Clear>
                </Controls>
            </Outline>
        </Margin>
    );
};

export default Help;

const Margin = styled.div`
    margin: 2px;
    z-index: 5;
`;

const Outline = styled.div`
    width: 90vw;
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
    margin: 0px auto;
    padding: 10px;

    display: flex;
    justify-content: start;
    flex-direction: column;
    li {
        margin: 10px;
        border-bottom: 1px solid hsla(0, 0%, 81%, 0.25);

        display: grid;
        grid-template-columns: 70px 1fr;
        grid-auto-rows: 50px;
    }

    div {
        margin: 10px 20px 10px 10px;
        padding: 5px;

        border-radius: 5px;
        background-color: hsla(0, 0%, 81%, 0.7);

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-weight: 900;
    }
    h5 {
        align-self: center;
        font-size: 12px;
        font-weight: 100;
        color: hsla(0, 0%, 81%, 0.7);
    }
`;

const H1 = styled.h1`
    font-size: clamp(1em, 1.5vw, 3em);
    margin: 20px;
    color: gray;
`;

const Controls = styled.div`
    padding: 10px 30px;
    width: 100%;
    display: flex;
    justify-content: end;
`;
const Clear = styled.div`
    width: 80px;
    height: 80px;
    margin: 20px;

    pointer-events: all;
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
