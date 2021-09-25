import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useTransition, config, animated, useSpring } from "react-spring";
import { useDispatch } from "react-redux";

import Keyboard from "../components/Keyboard";
import Favorite from "../components/Favorites";
import Suggestions from "../components/Suggestions";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";

import { sugestOffAction } from "../store/actions/sugestActions";

const Home: NextPage = () => {
    const dispatch = useDispatch();
    const { favOn } = useTypedSelector((state: AppState) => state.fav);
    const { sugestOn } = useTypedSelector((state: AppState) => state.sugst);

    const toggleFav = useTransition(favOn, {
        from: {
            transform: "translate3d(0vw,-100vh,0) scale(1)",
            opacity: 1,
        },
        enter: {
            transform: "translate3d(0,0vh,0) scale(1)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(0,0vh,0) scale(2)",
            opacity: 0,
        },
        reverse: favOn,
        delay: 0,
        config: config.slow,
    });

    interface props {
        transform: string;
    }

    const toggleSug = useSpring<props>({
        transform: sugestOn ? "translate3d(0,-50vh,0)" : "translate3d(0,0vh,0)",
    });

    return (
        <div>
            <Head>
                <title>Super Secret Code</title>
                <meta
                    name="description"
                    content="Developed by Marcos Jampietri for EduMe"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {toggleFav((styles, item) =>
                    item ? (
                        <FavWrap style={styles}>
                            <Favorite />
                        </FavWrap>
                    ) : null
                )}
                <Keyboard />
                <SugWrap style={toggleSug}>
                    <Suggestions />
                </SugWrap>
            </main>
        </div>
    );
};

export default Home;

const FavWrap = styled(animated.div)`
    position: absolute;
    width: 100%;
`;

const SugWrap = styled(animated.div)`
    position: relative;
    top: 0px;
    backdrop-filter: blur(5px);
    transform: translate3d(0, 0vh, 0);
`;
