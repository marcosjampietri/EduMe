import type { NextPage } from "next";
import Head from "next/head";



import Keyboard from "../components/Keyboard";
import Favorite from "../components/Favorites"

const Home: NextPage = () => {
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
                <Favorite />
                <Keyboard />
            </main>
        </div>
    );
};

export default Home;
