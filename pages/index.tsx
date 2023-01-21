import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { logo } from "../src/assets";
import Welcome from "../src/components/Welcome";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>MZA Next Bolierplate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className="bg-gradient-to-br from-rose-400 via-green-200 to-emerald-100 min-h-screen flex flex-col gap-2 
                items-center justify-center"
            >
                <Welcome />
                <div className="flex flex-row gap-2 items-center mt-16">
                    <span className="text-xl font-abel font-semibold">By:</span>
                    <Image
                        src={logo}
                        alt="_vercel"
                        className="w-56 h-24 border-[3px] border-slate-800 rounded-xl p-4 shadow-lg hover:shadow-2xl"
                        width={64}
                        height={64}
                    />
                </div>
            </main>
        </>
    );
};

export default Home;
