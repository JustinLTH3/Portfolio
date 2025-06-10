import Image from "next/image";
import Link from "next/link";


export default function ProjectOverview({ImagePath, Title, Description, link, Software}: {
    ImagePath: string,
    Title: string,
    Description: React.ReactNode,
    link: string,
    Software: string,
}) {
    return (
        <Link className="group m-auto border-[1px] rounded-lg p-5 my-5 lg:m-5 transition hover:scale-110 hover:border-cyan-200 ease-in-out flex flex-col max-w-[450px]"
            href={link}>
            <div className="flex flex-col w-[400px] self-center">
                <div className="relative h-[225px]">
                    <Image src={ImagePath} alt={ImagePath}
                           fill
                           className="object-contain"
                    />
                </div>
                <div className="flex flex-row ">
                    <h2 className="text-2xl w-3/4 text-left">{Title}</h2>
                    <h2 className={`text-right w-1/2 group-hover:text-cyan-200 transition`}>{'>'}</h2>
                </div>
                <p className="w-full text-yellow-100 text-left">{Software}</p>
                {Description}
            </div>

        </Link>
    );
}
