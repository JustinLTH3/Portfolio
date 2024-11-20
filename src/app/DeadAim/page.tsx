import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="grid grid-rows-3 justify-items-center min-h-screen font-mono">
            <div className="w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Dead Aim</h1>
                <div className="h-[225px] lg:h-[450px] w-full border-2 relative items-center">
                    <Image
                        src={"/Portfolio/DeadAimMainMenu.png"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://github.com/JustinLTH3/GAMR3510Assignment"} target="_blank"
                          className="text-cyan-100">GitHub</Link>
                    <p className="px-5">UE 5.3</p>
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A <b className="text-yellow-100">multiplayer</b> third person shooter that the player aims is to
                        be the first to kill the opponent
                        five times.
                    </p>
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Weapon</h2>
                    <table className="w-full">
                        <tbody>
                        <tr className="w-full border-2">
                            <td className="w-1/2 border-r-2 text-yellow-100 text-right">Replicated VFX & SFX</td>
                            <td className="w-1/2">Used <b className="text-cyan-100">Multicast</b> Function To Spawn
                                Sound Component and Niagara Component on both Client and Host
                            </td>
                        </tr>
                        <tr className="w-full border-2">
                            <td className="w-1/2 border-r-2 text-yellow-100 text-right">Headshot Mechanics</td>
                            <td className="w-1/2">Trace hit to the skeletal mesh to get the hit bone and check if it is
                                head.
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}
