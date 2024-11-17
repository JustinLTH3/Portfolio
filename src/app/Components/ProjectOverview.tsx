import Image from "next/image";
import Link from "next/link";


export default function ProjectOverview({ImagePath, Title, Description, link}: {
    ImagePath: string,
    Title: string,
    Description: string,
    link: string
}) {
    return (
        <Link className="border-2 rounded-lg p-5 m-5 transition hover:scale-110 ease-in-out" href={link}>
            <div className="w-[400px] h-[225px] flex flex-col">
                <Image src={ImagePath} alt={ImagePath} width={400} height={225}
                       style={{width: "auto", height: "225px"}}/>
            </div>
            <h2 className="text-xl">{Title}</h2>
            <p className={"text-left"}>{Description}</p>
        </Link>
    );
}
