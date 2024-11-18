import Image from "next/image";
import Link from "next/link";


export default function ProjectOverview({ImagePath, Title, Description, link, Software}: {
    ImagePath: string,
    Title: string,
    Description: string,
    link: string,
    Software: string
}) {
    return (
        <Link className="border-2 rounded-lg p-5 m-5 transition hover:scale-110 ease-in-out" href={link}>
            <div className="w-[400px] flex flex-col">
                <Image src={ImagePath} alt={ImagePath} width={400} height={225}
                       style={{width: "auto", height: "225px"}}
                       className="h-[225px]"/>
                <h2 className="text-xl w-full">{Title}</h2>
                <p className="w-full text-yellow-100">{Software}</p>
                <p className="text-left w-full">{Description}</p>
            </div>

        </Link>
    );
}
