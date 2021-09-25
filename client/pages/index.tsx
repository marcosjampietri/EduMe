import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useTransition, config, animated } from "react-spring";

import Keyboard from "../components/Keyboard";
import Favorite from "../components/Favorites";
import Suggestions from "../components/Suggestions";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";

const Home: NextPage = () => {
    const { favOn } = useTypedSelector((state: AppState) => state.fav);

    const toggle = useTransition(favOn, {
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
                {toggle((styles, item) =>
                    item ? (
                        <FavWrap style={styles}>
                            <Favorite />
                        </FavWrap>
                    ) : null
                )}
                <Keyboard />
                <Suggestions />
            </main>
        </div>
    );
};

export default Home;

const FavWrap = styled(animated.div)`
    position: absolute;
    width: 100%;
`;
