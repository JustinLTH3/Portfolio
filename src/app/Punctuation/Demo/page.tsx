"use client"
import {useState} from "react";

export default function Page() {

    // <iframe
    //     width="400" height="690"
    //     src={"../PunctuationWeb/index.html"}
    // />

    const [game, playGame] = useState(
        <button onClick={() =>
            playGame(
                <iframe
                    width="400" height="690"
                    src={"../PunctuationWeb/index.html"}
                />)}>
            Play Game
        </button>
    );

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="rounded-lg scale-100">
                <div className={"w-[400px] h-[690px] border-[1px] m-10 items-center flex justify-center"}>
                    {game}
                </div>
            </div>
        </div>
    );
}