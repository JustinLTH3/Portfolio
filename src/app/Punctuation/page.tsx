import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="grid grid-rows-3 justify-items-center min-h-screen font-mono">
            <div className=" w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Punctuation</h1>
                <div className="h-[225px] lg:h-[450px] w-full border-2 relative items-center">
                    <Image
                        src={"/Portfolio/PunctuationMenu.png"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://github.com/JustinLTH3/QuestionMark"} target="_blank" className="text-cyan-100">GitHub</Link>
                    <p className="px-5">Unity</p>
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>A Mobile Game that swipe the screen to prevent being hit by the enemy.</p>
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Object Polling</h2>
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
}
