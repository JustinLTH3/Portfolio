import ProjectOverview from "@/app/Components/ProjectOverview";

export default function Home() {
    return (
        <div
            className="items-center justify-items-center min-h-screen font-mono">
            <main className="flex flex-col text-center items-center sm:items-start">
                <div className="w-full flex flex-col items-center group">
                    <h1 className="w-full justify-centere">About Me</h1>
                    <p className="lg:w-1/2 w-3/4 text-center rounded-lg border-[1px] py-2 text-pink-100 group-hover:border-cyan-200">
                        I am Games Programming student at De Montfort University who is devoted to learn
                        new knowledge and skills to solve problems with reusability in mind.
                    </p>
                </div>
                <div className="group w-full flex justify-center flex-col items-center">
                    <h1 className="justify-center text-3xl pb-5">Technical Skills</h1>
                    <table
                        className="lg:w-1/2 w-3/4 table-fixed justify-center border-separate border-spacing-0 border-[1px] rounded-lg group-hover:border-cyan-200 transition duration-200 ease-in-out">
                        <tbody>
                        <tr>
                            <th className="text-right m-10 border-r-[0.5px] border-b-[1px] px-5 group-hover:border-cyan-200 transition duration-500 ease-in-out">Programming
                                Languages
                            </th>
                            <td className="text-left border-l-[0.5px] border-b-[1px] px-5 group-hover:border-cyan-200 transition duration-500 ease-in-out">C++,
                                C#, Python, JavaScript
                            </td>
                        </tr>
                        <tr>
                            <th className="text-right m-10 border-r-[0.5px] border-b-[1px] px-5 group-hover:border-cyan-200 transition duration-500 ease-in-out">Software</th>
                            <td className="border-l-[0.5px] border-b-[1px] text-left px-5 group-hover:border-cyan-200 transition duration-500 ease-in-out">Unreal
                                Engine 5, Unity, JetBrains
                                Rider
                            </td>
                        </tr>
                        <tr>
                            <th className="text-right px-5 border-r-[0.5px] group-hover:border-cyan-200 transition duration-500 ease-in-out">VCS</th>
                            <td className="border-l-[0.5px] text-left px-5 group-hover:border-cyan-200 transition duration-500 ease-in-out">Perforce,
                                GitHub
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-center flex-col items-center text-cyan-200" id="Projects">
                    <h1 className="w-full">Projects</h1>
                    <div
                        className="flex w-full justify-center justify-items-center flex-col lg:flex-row items-stretch">
                        <ProjectOverview
                            ImagePath="/Portfolio/DeadAimMainMenu.png"
                            Title={"Dead Aim"}
                            Description={
                                <p className="text-left">
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
                                <p>
                                    A <b>Mobile Game</b> that swipe or touch the screen to move the question mark to
                                    prevent being hit by the other punctuation. I worked on the Settings and Enemy
                                    Spawning.
                                </p>
                            }
                            link={"/Punctuation"}
                            Software={"Unity 2022.3"}
                        />

                    </div>
                </div>
            </main>
        </div>
    );
}
