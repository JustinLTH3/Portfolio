import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="items-center min-h-screen flex flex-col">
            <div className="w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Dead Aim</h1>
                <div className="h-[225px] lg:h-[455px] w-full relative items-center">
                    <Image
                        src={"/Portfolio/DeadAimMainMenu.png"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain border-[1px] rounded-lg"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://github.com/JustinLTH3/GAMR3510Assignment"} target="_blank"
                          className="text-cyan-200">GitHub</Link>
                    <p className="px-5">UE 5.3</p>
                </div>
                <div className="w-full pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A <b>multiplayer</b> 1vs1 third person shooter that the player aims is to be the first to kill
                        the opponent five times. I worked on the weapon, game loop and character of the game.
                    </p>
                    <h3>What I worked on</h3>
                    <ul className="list-disc list-inside">
                        <li>Weapon</li>
                        <li>Game Loop</li>
                        <li>Character</li>
                    </ul>
                </div>
                <div id="Weapon" className="w-full pt-5">
                    <h3 className="w-full">Headshot Mechanics</h3>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="h-[225px] w-full lg:w-1/2 mr-2 relative items-center">
                            <Image
                                src={"/Portfolio/DeadAimHeadShot.gif"}
                                alt={"Headshot Gif"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </div>
                        <div className="h-[225px] w-full lg:w-1/2 ml-2 relative items-center">
                            <Image
                                src={"/Portfolio/DeadAimBodyShot.gif"}
                                alt={"Headshot Gif"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </div>
                    </div>
                    <p>Trace hit to the skeletal mesh to get the hit bone and check if it is
                        head.
                    </p>
                    <h2>Weapon</h2>
                    <h3>Blueprint</h3>
                    <p>The component class is intended to be the inherited from different weapon that have different
                        statistic and mesh so that making new weapon can be done easily by creating new blueprint class
                        and tweak the values.
                    </p>
                    <h3>Replicated VFX & SFX</h3>
                    <p>Used <b>Multicast RPC</b> to spawn
                        sound component and Niagara component on both Client and Host.
                    </p>
                    <h3>Fire & Reload</h3>
                    <p>Used <b>Server RPC</b> to ensure only the
                        host has authority to calculate who is hit.
                    </p>
                </div>
                <div id="Character" className="w-full pt-5">
                    <h2>Character</h2>
                    <h3>Handle Death</h3>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="h-[225px] w-full lg:w-1/2 my-2 relative items-center">
                            <Image
                                src={"/Portfolio/DeadAimDeath.gif"}
                                alt={"Death"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </div>
                    </div>
                    <p>When the player character die, a delegate in the health component is broadcast so that
                        callback functions like reset round can be called.</p>
                </div>
                <div id="Game loop" className="w-full pt-5">
                    <h2>Game loop</h2>
                    <h3>Round</h3>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="h-[225px] w-full lg:w-1/2 my-2 relative items-center">
                            <Image
                                src={"/Portfolio/DeadAimBleeding.gif"}
                                alt={"Death"}
                                sizes={"100vw"}
                                fill
                                className="object-contain border-[1px] rounded-lg"
                            />
                        </div>
                    </div>
                    <p>Every round has a timer that last for a minute, then when time runs out, the player will
                        receive
                        10 damage every 0.5 second until one player is dead. If both player die at the same time,
                        both
                        player will receive a point.</p>
                </div>
            </div>
        </div>
    )
        ;
}
