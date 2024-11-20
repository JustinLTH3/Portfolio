import Image from "next/image";
import Link from "next/link";


export default function ProjectOverview({ImagePath, Title, Description, link, Software}: {
    ImagePath: string,
    Title: string,
    Description: string,
    link: string,
    Software: string,
}) {
    return (
        <Link className="border-2 rounded-lg p-5 m-5 transition hover:scale-110 ease-in-out" href={link}>
            <div className="flex flex-col w-[400px]">
                <div className="relative h-[225px]">
                    <Image src={ImagePath} alt={ImagePath}
                           fill
                           className="object-contain"
                    />
                </div>
                <h2 className="text-xl w-full">{Title}</h2>
                <p className="w-full text-yellow-100">{Software}</p>
                <p className="text-left w-full">{Description}</p>
            </div>

        </Link>
    );
}
