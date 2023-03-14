import { FC } from "react";

import Head from "next/head";

import { NavBar } from "components/NavBar";

export const MainLayout:FC = ({ children }) => {
    return(
        <div>
            <Head>
                <title>Contact - Marco Avila</title>
            </Head>
            
            <NavBar />

            <main>
                { children }
            </main>
        </div>
    );
}
