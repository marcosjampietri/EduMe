import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";


import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import { addFavAction, sugestionsAction } from "../store/actions/listActions";
import { clearCodeAction, typingAction } from "../store/actions/wordsAction";

const Keyboard = () => {
    const buttons = [
        {
            num: "",
            label: "1",
            alpha: "",
        },
        {
            num: "2",
            label: "2",
            alpha: "[abc]",
        },
        {
            num: "3",
            label: "3",
            alpha: "[def]",
        },
        {
            num: "4",
            label: "4",
            alpha: "[ghi]",
        },
        {
            num: "5",
            label: "5",
            alpha: "[jkl]",
        },
        {
            num: "6",
            label: "6",
            alpha: "[mno]",
        },
        {
            num: "7",
            label: "7",
            alpha: "[pqrs]",
        },
        {
            num: "8",
            label: "8",
            alpha: "[tuv]",
        },
        {
            num: "9",
            label: "9",
            alpha: "[wxyz]",
        },
        {
            num: "",
            label: "#",
            alpha: "",
        },
        {
            num: "0",
            label: "0",
            alpha: "",
        },
        {
            num: "",
            label: "Del",
            alpha: "",
        },
    ];

    const dispatch = useDispatch();

    const { code, numb } = useTypedSelector((state: AppState) => state.typn);
    const { wordsList } = useTypedSelector((state: AppState) => state.sugst);


    useEffect(() => {
        const typing = async () => {

            const url =
                process.env["NODE_ENV"] === "development"
                    ? "http://localhost:5000"
                    : "";
            const dictdUrl = () => `${url}/api/translate`;

            const { data: wordsList } = await axios.post(
                dictdUrl(),
                {
                    code,
                }
            );

            dispatch(sugestionsAction(wordsList));
        };

        typing();
    }, [code]);

    const special = (label: string) => {
        if (label === "Del") {
            dispatch(clearCodeAction())
        } else if (label === "1") {
            dispatch(clearCodeAction())
        }
    }

    let textInput: React.RefObject<HTMLInputElement> = React.createRef(); // React use ref to get input value


    return (
        <>
            <Outline>
                <H1>SUPER SECRET CODE:</H1>
                <Code
                    ref={textInput}
                    value={numb}
                    onChange={() => console.log("typing")}
                />
                <Pad>
                    {buttons.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                dispatch(typingAction(item));
                                special(item.label);
                            }}
                        >
                            <H4>{item.label}</H4>
                            <H4>{item.alpha}</H4>
                        </Button>
                    ))}
                </Pad>
            </Outline>

            <List>
                {wordsList &&
                    wordsList.map((word, ind) => (
                        <h4 key={ind} onClick={() => { dispatch(addFavAction(word)); dispatch(clearCodeAction()) }}>
                            {word}
                        </h4>
                    ))}
            </List>
        </>
    );
};

export default Keyboard;

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

const Code = styled.input`
    width: 50%;
    margin: 20px auto;
    padding: 5px 20px;
    text-align: center;

    box-shadow: inset -1px 2px 5px hsla(183, 83%, 25%, 1);
    border-radius: 5px;
    font-size: 20px;
    font-family: arial;
    border: none;
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

const Pad = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100%;
    padding: 20px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Button = styled.div`
    width: 30%;
    height: 30%;
    margin: 5px;
    flex: 0 0 30%;

    border-radius: 10px;
    background-color: hsla(0, 0%, 60%, 0.5);
    box-shadow: 1px 1px 2px black, -1px -1px 2px white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const H4 = styled.h4`
    color: black;
`;
const H1 = styled.h1`
    color: black;
`;
