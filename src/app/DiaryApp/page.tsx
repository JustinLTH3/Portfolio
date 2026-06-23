import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="w-[400px] lg:w-[800px] flex flex-col items-center">
                <h1>Diary App</h1>
                <div className="h-[225px] lg:h-[450px] w-full relative items-center">
                    <Image
                        src={"/Portfolio/DiaryAppCalendar.png"}
                        alt={"Screenshot"}
                        fill
                        sizes={"100vw"}
                        className="object-contain border-[1px] rounded-lg"
                    />
                </div>
                <div className="w-full text-start flex flex-row">
                    <Link href={"https://github.com/JustinLTH3/diary-app"} target="_blank"
                          className="text-cyan-200">GitHub</Link>
                    <p className="px-5">Next.js, PostgreSQL, Auth.js</p>
                </div>
                <div className="w-full pt-5">
                    <h2 className="w-full">Description</h2>
                    <p>
                        A <b>full-stack</b> journaling app built with Next.js (App Router), PostgreSQL/Prisma, Auth.js (JWT), and Tailwind CSS 4. Features a calendar view with entry markers, debounced auto-saving diary editor, unsaved changes protection, and a comprehensive testing suite.
                    </p>
                    <h3>What I worked on</h3>
                    <ul className="list-disc list-inside">
                        <li>Authentication System</li>
                        <li>Calendar View with Entry Markers</li>
                        <li>Diary Editor with Auto-Save</li>
                        <li>Unsaved Changes Protection</li>
                        <li>Data Model & API Routes</li>
                        <li>Testing & CI Pipeline</li>
                    </ul>
                </div>
                <div className="w-full pt-5">
                    <h2>Authentication</h2>
                    <h3>Signup & Signin</h3>
                    <p>
                        Users sign up with a username and password, validated with <b>Zod</b> on both client and server. Passwords are hashed using <b>Argon2id</b>. Signin uses <b>JWT-based authentication</b>. After signing up, users are automatically signed in.
                    </p>
                    <div className="h-[225px] w-full lg:w-1/2 relative items-center">
                        <Image
                            src={"/Portfolio/DiaryAppSignin.png"}
                            alt={"Signin Page"}
                            fill
                            sizes={"100vw"}
                            className="object-contain border-[1px] rounded-lg"
                        />
                    </div>
                    <h3>Route Protection</h3>
                    <p>
                        Protected routes redirect unauthenticated visitors to the signin page. Logout clears the session and returns users to the signin page.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Calendar View</h2>
                    <p>
                        A 7-column monthly grid with <b>prev/today/next</b> navigation uses year and month query parameters, making the calendar shareable. Days with diary entries display a <b>green dot</b> marker, and today is visually highlighted. Future dates are non-interactive, while past dates and today link to the diary editor at <b>/diary/YYYY-MM-DD</b>.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Diary Editor</h2>
                    <p>
                        A full-page textarea with <b>1-second debounced</b> autosave, which displays save status. Request deduplication ignores stale responses and a best-effort final save fires on page unload. A real-time word and character counter is displayed below the editor, capping at <b>10,000 characters</b>. Invalid dates return a <b>404</b>.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Unsaved Changes Protection</h2>
                    <p>
                        The app tracks unsaved changes and prompts users before navigating away via the calendar link, logout button, or browser back button. This prevents accidental data loss.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Data Model</h2>
                    <p>
                        A <b>User</b> model stores credentials and a <b>DiaryEntry</b> model stores diary entries linked to each user. A unique constraint on user and date enables entries to be created or updated in a single operation. Entry dates are queried per month to display activity markers on the calendar.
                    </p>
                </div>
                <div className="w-full pt-5">
                    <h2>Testing & CI</h2>
                    <p>
                        <b>20 unit tests</b> with Vitest covering auth validation, password hashing, credentials, date parsing, diary helpers, API routes, and React components (auth guards, state transitions, calendar navigation, editor auto-save, unsaved guards). <b>14 E2E specs</b> with Playwright covering signup/signin, protected route redirects, calendar navigation, diary edit/save/persistence, invalid inputs, and logout.
                    </p>
                    <p className="pt-3">
                        CI runs via <b>GitHub Actions</b> with a PostgreSQL service container, ensuring database-dependent tests run in a clean environment on every push.
                    </p>
                </div>
            </div>
        </div>
    );
}
