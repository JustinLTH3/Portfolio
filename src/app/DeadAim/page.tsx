import Image from "next/image";

export default function Page() {
    return (
        <div className="grid grid-rows-3 justify-items-center min-h-screen font-mono">
            <div className="w-full flex flex-col items-center">
                <h1 className="">Dead Aim</h1>
                <div className="h-[225px] lg:h-[450px] w-[400px] lg:w-[800px] border-2 relative items-center">
                    <Image
                        src={"/Portfolio/vercel.svg"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="max-h-[225px] lg:max-h-[450px] max-w-[400px] lg:max-w-[800px]"
                    />
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>Test</p>
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Weapon</h2>
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
}
