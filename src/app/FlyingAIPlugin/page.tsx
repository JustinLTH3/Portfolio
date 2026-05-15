import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className=" w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Flying AI Plugin</h1>
                <div className="h-[225px] lg:h-[450px] w-full relative items-center">
                    <Image
                        src={"/Portfolio/FYPDemo.gif"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain  border-[1px] rounded-lg"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://github.com/JustinLTH3/FlyingAIPlugin"} target="_blank"
                          className="text-cyan-200">Github</Link>
                    <p>|</p>
                    <Link href={"https://drive.google.com/file/d/1zr62Vjzfk_gQhw0G8QmyDanPgHeRJ6KI/view?usp=sharing"} target="_blank"
                          className="text-cyan-200">Demo Download</Link>
                    <p>|</p>
                    {/*<Link href={"/FlyingAIPlugin/VideoDemo"} target="_blank" className="text-cyan-200">Video Demo</Link>*/}
                    {/*<p>|</p>*/}
                    <p className="px-5">UE 5.3, 5.5</p>
                </div>
                <div className="w-full pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A plugin provides modular tools for creating AI that is capable of flying, which provide
                        pathfinding system and is integrated with behaviour tree. Nominated for Games Project of the
                        Year 2025 at University.
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
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                        <Link href={"/FASettings.png"}>
                            <Image
                                src={"/Portfolio/FASettings.png"}
                                alt={"Settings"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </Link>
                    </div>
                    <p>
                        Users can set which map should uses the system, what actor type, object type is considered in
                        collision function, and the custom pathfinding algorithm.
                    </p>
                    <h3>Pre-generation</h3>
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                        <Link href={"/FAGenTab.png"}>
                            <Image
                                src={"/Portfolio/FAGenTab.png"}
                                alt={"Generation Widget"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </Link>
                    </div>
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
                    <h3>Visual Logger</h3>
                    <p>
                        The generated path will be logged to the visual logger.
                    </p>
                    <h3>Visualize Widget</h3>
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                        <Link href={"/FAVis.png"}>
                            <Image
                                src={"/Portfolio/FAVis.png"}
                                alt={"Visualize Widget"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </Link>
                    </div>
                    <p>
                        The widget visualizes generated nodes in editor, which users can select the data to visualize
                        and log to the visual logger.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Location Query</h2>
                    <p>Produce a point that is within pathfinding bound.</p>
                </div>
                <div className="w-full pt-5">
                    <h2>Behaviour Tree Integration</h2>
                    <h3>Fly To</h3>
                    <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                        <Link href={"/FAFlyTo.png"}>
                            <Image
                                src={"/Portfolio/FAFlyTo.png"}
                                alt={"Fly To Nodes"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </Link>
                    </div>
                    <p>
                        The node will use the pathfinding system to search for a path and follow the path to the
                        destination.
                    </p>
                </div>
            </div>
        </div>
    );
}
