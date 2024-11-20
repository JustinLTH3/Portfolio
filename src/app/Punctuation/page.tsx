import Image from "next/image";

export default function Page() {
    return (
        <div className="grid grid-rows-3 justify-items-center min-h-screen font-mono">
            <div className="w-full flex flex-col items-center">
                <h1 className="">Question Mark</h1>
                <div className="h-[225px] lg:h-[450px] w-[400px] lg:w-[800px] border-2 relative items-center flex flex-col">
                    <Image
                        src={"/Portfolio/PunctuationMenu.png"}
                        alt={"Screenshot"}
                        width={289}
                        height={607}
                        className="lg:w-[210px] w-[105px]"
                    />
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>Test</p>
                </div>
                <div className="w-[400px] lg:w-[800px] pt-5">
                    <h2 className="w-full"></h2>
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
}
