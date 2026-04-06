import type {Metadata} from "next";
import "./globals.css";
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Tsz Him Lai | Portfolio",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"scroll-smooth"}>
        <body className={`antialiased bg-black text-on-surface-variant`}>
        <div
            className="z-50 flex sticky top-0 h-12 flex-row items-center border-b-2 backdrop-brightness-0 text-on-surface-variant">
            <Link href="/" className="p-10 text-2xl font-bold ease-in-out">Tsz Him Lai</Link>
            <Link href="//#Projects" className={"ease-in-out"}>Projects</Link>
        </div>
        {children}
        <div className="h-[200px]"/>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-5 pt-4">
            <Link
                className="flex items-center gap-2 hover:scale-110 hover:border-cyan-100 border-[1px] rounded-2xl p-1 transition"
                href="//#Projects"
                rel="noopener noreferrer"
            >
                Projects
            </Link>
        </footer>
        </body>
        </html>
    );
}
