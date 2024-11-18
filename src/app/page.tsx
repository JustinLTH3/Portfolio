import ProjectOverview from "@/app/Components/ProjectOverview";

export default function Home() {
    return (
        <div
            className="items-center justify-items-center min-h-screen font-mono">
            <main className="flex flex-col text-center items-center sm:items-start">
                <div className="w-full flex flex-col items-center">
                    <h1 className="w-full justify-centere">About Me</h1>
                    <p className="flex justify-center flex-col text-cyan-100">
                        I am Tsz Him Lai, a passionate Computer Games Programming student at De Montfort University who
                        is devoted to learn new knowledge and skills to develop capabilities and wider vision to solve
                        problems with suitable solutions.
                    </p>
                </div>
                <div className="w-full flex justify-center flex-col items-center text-yellow-100">
                    <h1 className="justify-center text-3xl pb-5">Technical Skills</h1>
                    <table className="table-fixed flex justify-center border-2 rounded">
                        <tbody className=" ">
                        <tr>
                            <th className="text-right m-10 border-spacing-5 border-r-2 border-b-2 px-5">Programming
                                Languages
                            </th>
                            <td className="text-left border-l-2 border-b-2 px-5">C++, C#, Python, JavaScript</td>
                        </tr>
                        <tr>
                            <th className="text-right m-10 border-r-2 border-b-2 px-5">Software</th>
                            <td className="border-l-2 border-b-2 text-left px-5">Unreal Engine 5, Unity, JetBrains
                                Rider
                            </td>
                        </tr>
                        <tr>
                            <th className="text-right px-5 border-r-2">VCS</th>
                            <td className="border-l-2 text-left px-5">Perforce, GitHub</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-center flex-col items-center text-cyan-100">
                    <h1 className="w-full">Projects</h1>
                    <div className="flex w-full justify-center">
                        <ProjectOverview
                            ImagePath="/Portfolio/vercel.svg"
                            Title={"Dead Aim"}
                            Description={"A multiplayer third person shooter that the player aims is to be the first to kill the opponent five times."}
                            link={"/Projects/DeadAim"}
                            Software={"UE 5.3"}
                        />
                        <ProjectOverview
                            ImagePath="/Portfolio/vercel.svg"
                            Title={"Question Mark"}
                            Description={"A Mobile Game that swipe the screen to prevent being hit by the enemy."}
                            link={"/Projects/QuestionMark"}
                            Software={"Unity 2022.3.4"}
                        />

                    </div>
                </div>
            </main>
        </div>
    );
}
