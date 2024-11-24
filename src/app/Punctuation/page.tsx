import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen font-mono">
            <div className=" w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Punctuation</h1>
                <div className="h-[225px] lg:h-[450px] w-full relative items-center">
                    <Image
                        src={"/Portfolio/PunctuationMenu.png"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain  border-[1px] rounded-lg"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://github.com/JustinLTH3/QuestionMark"} target="_blank"
                          className="text-cyan-200">GitHub</Link>
                    <p className="px-5">Unity</p>
                </div>
                <div className="w-full pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A <b>Mobile Game</b> that swipe or touch the screen to move the question mark to
                        prevent being hit by the other punctuation. I worked on the Settings and Enemy Spawning.
                    </p>
                    <h3>What I worked on</h3>
                    <ul className="list-disc list-inside">
                        <li>Enemy Spawning</li>
                        <li>UI</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className="w-full pt-5">
                    <h2>Enemy</h2>
                    <h3>Tracks</h3>
                    <p>Tracks is dynamically spawned and the enemy will always be in the center of each track so that
                        number of tracks can be adjusted easily in the future for further development.</p>
                    <h3>Spawner</h3>
                    <p>Implemented using <b>Object Pooling</b> for optimization.</p>
                </div>
                <div className="w-full pt-5">
                    <h2>Settings</h2>
                    <h3>Save and Load</h3>
                    <p>The player can set the control and the volume. The Settings will then be saved and loaded on start.</p>
                </div>
            </div>
        </div>
    );
}
