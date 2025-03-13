import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen font-mono">
            <div className=" w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Developing Roots</h1>
                <div className="h-[225px] lg:h-[450px] w-full relative items-center">
                    <Image
                        src={"/Portfolio/DevelopingRootsMain.png"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain  border-[1px] rounded-lg"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://v3.globalgamejam.org/2023/games/developing-roots-9"} target="_blank"
                          className="text-cyan-200">Global Game Jam</Link>
                    <>|</>
                    <Link href={"https://github.com/JustinLTH3/Developing-Roots"} target="_blank"
                          className="text-cyan-200">Github</Link>
                    <p className="px-5">Unity</p>
                </div>
                <div className="w-full pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A game that the player helps people to find more about his parents.
                    </p>
                    <h3>What I worked on</h3>
                    <ul className="list-disc list-inside">
                        <li>Dialogue System</li>
                        <li>Character Design & Movement</li>
                    </ul>
                </div>
                <div className="w-full pt-5">
                    <h2>Dialogue System</h2>
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                        <Image
                            src={"/Portfolio/DevelopingRootsDialogue.png"}
                            alt={"Settings Menu"}
                            sizes={"100vw"}
                            fill
                            className="object-contain border-[1px] rounded-lg"
                        />
                    </div>
                    <h3>The System</h3>
                    <p>The dialogue system is a singleton that controls how dialogues are displayed on the screen. It displays
                        next line when the player presses a key, achieved by <b>Coroutine</b> functions.</p>
                    <h3>Dialogue</h3>
                    <p>Can be added easily to NPCs&apos; scripts in the editor.</p>
                </div>
                <div className="w-full pt-5">
                    <h2>Character Design & Movement</h2>
                    <h3>Movement</h3>
                    <p>Implemented using RigidBody. Cannot move when interacting with NPC.</p>
                    <h3>Animation</h3>
                    <p>Created animation controller using the sprite sheet.</p>
                </div>
            </div>
        </div>
    );
}
