import type { NextPage } from "next";
import Head from "next/head";



import Keyboard from "../components/Keyboard";

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

            <main><Keyboard /></main>
        </div>
    );
};

export default Home;
