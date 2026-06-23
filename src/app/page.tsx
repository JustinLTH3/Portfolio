import ProjectOverview from "@/app/Components/ProjectOverview";

export default function Home() {
    return (
        <div
            className="items-center justify-items-center min-h-screen">
            <main className="flex flex-col text-center items-center sm:items-start">
                <div className="w-full flex md:flex-row flex-col items-center group pt-32 pb-5">
                    <div className={"md:w-[5%]"}></div>
                    <div className="w-1/2">
                        <h1
                            className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface w-full md:text-left text-center pt-0">
                            Tsz Him Lai
                        </h1>
                        <p className="text-on-surface-variant text-xl md:text-2xl w-full leading-relaxed md:text-left text-center">
                            Games programming graduate of De Montfort University who is passionate about solving complex
                            technical challenges with effective and efficient approaches.
                        </p>
                    </div>
                    <div className="w-[45%] flex flex-col items-center">
                        <div className="bg-surface-container-low p-8 rounded-xl ghost-border md:w-2/5 ">
                            <h4 className="font-headline text-xl md:text-2xl font-bold mb-8 text-on-surface-variant text-center">Technical
                                Stack</h4>
                            <div className="">
                                <div
                                    className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-3">Core
                                    Languages
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-primary font-medium">C++</span>
                                    <span className="text-outline">•</span>
                                    <span className="text-primary font-medium">C#</span>
                                    <span className="text-outline">•</span>
                                    <span className="text-primary font-medium">JavaScript</span>
                                    <span className="text-outline">•</span>
                                    <span className="text-primary font-medium">Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-1/10"}/>
                </div>
                <div className="w-full flex justify-center flex-col items-center  pt-32 pb-5" id="Projects">
                    <h1 className="w-full font-headline text-primary-fixed">Projects</h1>
                    <div
                        className="flex w-full justify-center justify-items-center flex-row items-stretch flex-wrap">
                        <ProjectOverview
                            ImagePath="/Portfolio/DiaryAppCalendar.png"
                            Title={"Diary App"}
                            Description={
                                <p className="text-left text-on-surface-variant">
                                    A <b>full-stack</b> journaling app built with Next.js, PostgreSQL, and Auth.js. Features a calendar view with entry markers, debounced autosave, and unsaved changes protection.
                                </p>
                            }
                            link={"/DiaryApp"}
                            Software={"Next.js, PostgreSQL, Auth.js"}
                        />
                    </div>
                    <div
                        className="flex w-full justify-center justify-items-center flex-row items-stretch flex-wrap">
                        <ProjectOverview
                            ImagePath="/Portfolio/DeadAimMainMenu.png"
                            Title={"Dead Aim"}
                            Description={
                                <p className="text-left text-on-surface-variant">
                                    A <b>multiplayer</b> 1vs1 third person shooter that the player aims is to be the
                                    first to kill the opponent five times. I worked on the weapon, game loop and
                                    character of the game.
                                </p>
                            }
                            link={"/DeadAim"}
                            Software={"UE 5.3"}
                        />
                        <ProjectOverview
                            ImagePath="/Portfolio/PunctuationGameplay.gif"
                            Title={"Punctuation"}
                            Description={
                                <p className="text-left text-on-surface-variant">
                                    A <b>Mobile Game</b> that swipe or touch the screen to move the question mark to
                                    prevent being hit by the other punctuation. I worked on the Settings and Enemy
                                    Spawning.
                                </p>
                            }
                            link={"/Punctuation"}
                            Software={"Unity 2022.3"}
                        />
                    </div>
                    <div
                        className="flex w-full justify-center justify-items-center flex-row items-stretch flex-wrap">

                        <ProjectOverview
                            ImagePath="/Portfolio/demoPic.gif"
                            Title={"Flying AI Plugin"}
                            Description={
                                <p className="text-left text-on-surface-variant">
                                    A plugin provides modular tools for creating AI that is capable of flying, which
                                    provide pathfinding system and is integrated with behaviour tree. Nominated for
                                    Games Project of the Year 2025 at University.
                                </p>
                            }
                            link={"/FlyingAIPlugin"}
                            Software={"UE 5.3"}
                        />
                        <ProjectOverview
                            ImagePath="/Portfolio/DevelopingRootsMain.png"
                            Title={"Developing Roots"}
                            Description={
                                <p className="text-left text-on-surface-variant">
                                    A game that the player helps people to find more about his parents.
                                </p>
                            }
                            link={"/DevelopingRoots"}
                            Software={"Unity 2022.3"}
                        />

                    </div>
                </div>
            </main>
        </div>
    );
}
