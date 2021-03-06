import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import {
    sugestionsAction,
    sugestOnAction,
} from "../store/actions/sugestActions";
import {
    clearCodeAction,
    typingAction,
    getWordsAction,
} from "../store/actions/wordsAction";
import { favAction } from "../store/actions/favActions";
import { helpAction } from "../store/actions/helpActions";

const Keyboard = () => {
    const digits = [
        {
            num: "",
            label: "1",
            alpha: "",
            digi: "favs",
        },
        {
            num: "2",
            label: "2",
            alpha: "[abc]",
            digi: "a b c",
        },
        {
            num: "3",
            label: "3",
            alpha: "[def]",
            digi: "d e f",
        },
        {
            num: "4",
            label: "4",
            alpha: "[ghi]",
            digi: "g h i",
        },
        {
            num: "5",
            label: "5",
            alpha: "[jkl]",
            digi: "j k l",
        },
        {
            num: "6",
            label: "6",
            alpha: "[mno]",
            digi: "m n o",
        },
        {
            num: "7",
            label: "7",
            alpha: "[pqrs]",
            digi: "p q r s",
        },
        {
            num: "8",
            label: "8",
            alpha: "[tuv]",
            digi: "t u v",
        },
        {
            num: "9",
            label: "9",
            alpha: "[wxyz]",
            digi: "w x y z",
        },
        {
            num: "",
            label: "#",
            alpha: "$",
            digi: "enter",
        },
        {
            num: "",
            label: "0",
            alpha: "",
            digi: "suggest",
        },
        {
            num: "",
            label: "DEL",
            alpha: "",
            digi: "",
        },
    ];

    const dispatch = useDispatch();

    const { code, numb } = useTypedSelector((state: AppState) => state.typn);

    useEffect(() => {
        const typing = async () => {
            const url =
                process.env["NODE_ENV"] === "development"
                    ? "http://localhost:3000"
                    : "";
            const dictdUrl = () => `${url}/api/translate`;

            const { data: wordsList } = await axios.post(dictdUrl(), {
                code,
            });

            dispatch(sugestionsAction(wordsList));
        };

        typing();
    }, [code]);

    useEffect(() => { }, [code]);

    console.log(code);

    const specialFX = (label: string) => {
        if (label === "DEL") {
            setTimeout(() => {
                dispatch(clearCodeAction());
            }, 100);
        } else if (label === "1") {
            dispatch(favAction());
        } else if (label === "0") {
            dispatch(sugestOnAction());
        } else if (label === "#") {
            if (code.length < 1) {
                dispatch(clearCodeAction());
            }
        }
    };

    let textInput: React.RefObject<HTMLInputElement> = React.createRef(); // React use ref to get input value

    return (
        <Margin>
            <Outline>
                <Top>
                    <Credits>
                        <p>DEVELOPED BY:</p>
                        <Link href="https://www.marcosjampietri.co.uk">
                            <a> MARCOS JAMPIETRI </a>
                        </Link>
                        <p>FOR:</p>
                        <Link href="https://edume.com">
                            <a> EduMe</a>
                        </Link>
                    </Credits>
                    <ButtonX onClick={() => dispatch(helpAction())}>
                        <p> ? </p>
                    </ButtonX>
                </Top>
                <Title>SUPER SECRET CODE:</Title>
                <Code
                    ref={textInput}
                    value={numb}
                    onChange={() => console.log("typing")}
                />
                <Pad>
                    {digits.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                {
                                    /* dispatch(typingAction(item)); */
                                }
                                dispatch(getWordsAction(item));
                                specialFX(item.label);
                            }}
                        >
                            <HNum>{item.label}</HNum>
                            <HDigi>{item.digi?.toUpperCase()}</HDigi>
                        </Button>
                    ))}
                </Pad>
            </Outline>
        </Margin>
    );
};

export default Keyboard;

const Margin = styled.div`
    margin: 10px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Outline = styled.div`
    width: 100%;
    max-width: 500px;

    margin: 10px auto;

    background-image: linear-gradient(
        hsla(240, 5%, 15%, 1),
        hsla(240, 10%, 10%, 1)
    );
    border-radius: 10px;
    box-shadow: 2px 2px 15px black;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0px 10px -20px;

    font-size: clamp(1em, 3vw, 2em);

    background: -webkit-linear-gradient(
        90deg,
        hsl(190, 100%, 50%),
        hsl(165, 100%, 50%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 0px 0px 10px hsla(165, 100%, 70%, 1),
        -1px -1px 0px hsla(165, 0%, 90%, 0.51),
        1px 1px 0px hsla(165, 0%, 30%, 0.51);
`;

const Code = styled.input`
    width: 50%;

    margin: 50px auto;
    padding: 5px 20px;
    text-align: center;

    box-shadow: 0px 0px 35px hsla(175, 100%, 70%, 1);
    background-image: linear-gradient(
        hsla(170, 100%, 50%, 1),
        hsla(190, 100%, 50%, 1)
    );
    border-radius: 5px;
    font-size: 30px;

    border: 2px solid hsla(175, 80%, 50%, 1);
`;

const Pad = styled.div`
    width: 100%;
    max-width: 350px;
    height: 100%;
    padding: 0px 0px 50px;

    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Button = styled.div`
    width: 80px;
    height: 80px;
    margin: 10px;

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
`;

const ButtonX = styled(Button)`
    margin: 0px;
    transform: scale(0.5) rotate(260deg);

    p {
        transform: scale(1.5) rotate(-260deg);
        color: hsla(185, 100%, 50%, 1);
        text-shadow: 1px 1px 15px hsla(165, 100%, 50%, 1);
    }
`;

const H = styled.h4`
    color: hsla(185, 100%, 50%, 1);
    text-shadow: 1px 1px 15px hsla(165, 100%, 50%, 1);
`;
const HNum = styled(H)`
    margin: 5px;
`;

const HDigi = styled(H)`
    font-size: 10px;
`;

const Credits = styled.div`
    margin: 30px 0px 10px;
    width: 100%;
    padding: 0px 20px 20px;

    display: grid;
    justify-content: start;
    align-items: center;
    grid-template-columns: 90px 3fr;
    grid-template-rows: 1fr 1fr;
    gap: 4px;

    a {
        font-size: clamp(0.5em, 1vw, 3em);
        color: grey;
        font-weight: 900;
    }

    p {
        font-size: 8px;
        color: grey;
        font-weight: 100;
    }
`;
