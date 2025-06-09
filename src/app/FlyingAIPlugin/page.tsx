import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen font-mono">
            <div className=" w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Flying AI Plugin</h1>
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
                    { /*TODO: Upload to Drive and replace link. */}
                    <Link href={"https://github.com/JustinLTH3/QuestionMark"} target="_blank"
                          className="text-cyan-200">Demo</Link>
                    <p className="px-5">UE 5.3+</p>
                </div>
                <div className="w-full pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A plugin provides modular tools for creating AI that is capable of flying, which provide
                        pathfinding system and is integrated with behaviour tree.
                    </p>
                    <h3>What I worked on</h3>
                    <ul className="list-disc list-inside">
                        <li>Pathfinding System</li>
                        <li>Debugging Tools</li>
                        <li>Location Query</li>
                        <li>Behaviour Tree Integration</li>
                    </ul>
                </div>
                <div className="w-full pt-5">
                    <h2>Pathfinding System</h2>
                    <h3>Custom Project Settings</h3>
                    <p></p>
                    <h3>Pre-generation</h3>
                    <p>
                        Pathfind nodes should be pre-generated with the widget. Nodes for the selected bound will be
                        generated in the users&apos; desired location. To use nodes for the bound, set the generated
                        bound data associate to the bound. The generation is fully <b>multithreaded and optimized from
                        10 mins to 10s</b>. Bounds overlapping or touching each other will be connected dynamically.
                    </p>
                    <h3>HPA* and A* Pathfinding</h3>
                    <p>
                        The system will first find a path through HPA* search and then find detailed paths of each
                        segment with A*. This is to break down the pathfinding into multiple search and that the A*
                        search can be continue in the background instead of having the whole path to be found in the
                        same frame, blocking the thread.
                    </p>
                    <h3>Prevent Stuck</h3>
                    <p>
                        The A* algorithm will consider the Collider size and offset for the path so that the risk of
                        being stuck is reduced. However the collision check is using AABB so the collider size may needs
                        to be larger than the actual size.
                    </p>
                    <h3>Custom Pathfinding Algorithm</h3>
                    <p>
                        Users can create and use their custom pathfinding algorithm by inherit the FAPathfindingAlgo
                        class, override the GeneratePath function, and set the class in the Project Settings.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Debugging Tools</h2>
                    <h3>Custom Project Settings</h3>
                    <p>

                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Location Query</h2>
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                        <Image
                            src={"/Portfolio/PunctuationSettingsMenu.png"}
                            alt={"Settings Menu"}
                            sizes={"100vw"}
                            fill
                            className="object-contain border-[1px] rounded-lg"
                        />
                    </div>
                    <h3>Save and Load</h3>
                    <p>The player can set the control and the volume. The Settings will then be saved and loaded on
                        start.</p>
                </div>
                <div className="w-full pt-5">
                    <h2>Behaviour Tree Integration</h2>
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">

                    </div>
                </div>
            </div>
        </div>
    );
}
