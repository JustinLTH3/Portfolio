import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-[400px] lg:w-[800px] flex flex-col items-center">
        <h1>Bookkeeping App</h1>
        <div className="h-[225px] lg:h-[450px] w-full relative items-center">
          <Image
            src={"/Portfolio/BookkeepingAppHero.png"}
            alt={"Screenshot"}
            fill
            sizes={"100vw"}
            className="object-contain border-[1px] rounded-lg"
          />
        </div>
        <div className="w-full text-start flex flex-row">
          <Link
            href={"https://github.com/JustinLTH3/bookkeeping-app"}
            target="_blank"
            className="text-cyan-200"
          >
            GitHub
          </Link>
          <p>|</p>
          <Link
            href={"https://justin-bookkeeping-app.vercel.app/"}
            target="_blank"
            className="text-cyan-200"
          >
            Site
          </Link>
          <p className="px-5">
            Next.js 16, PostgreSQL, Prisma, Auth.js, Tailwind CSS
          </p>
        </div>
        <div className="w-full pt-5">
          <h2 className="w-full">Description</h2>
          <p>
            A <b>full-stack</b> bookkeeping app built with Next.js,
            PostgreSQL/Prisma, Auth.js (Google OAuth), and Tailwind CSS.
            Features an interactive dashboard with chart visualizations, CRUD
            operations for transactions and categories with server-side
            pagination, and strict multi-tenant data isolation.
          </p>
          <h3>What I worked on</h3>
          <ul className="list-disc list-inside">
            <li>Authentication</li>
            <li>Dashboard</li>
            <li>Transactions CRUD</li>
            <li>Categories CRUD</li>
            <li>Multi-tenancy</li>
          </ul>
        </div>
        <div className="w-full pt-5">
          <h2>Authentication</h2>
          <p>
            <b>Google OAuth</b> sign-in and sign-out via Auth.js. All sensitive
            routes are protected. Unauthenticated visitors are redirected to the
            sign-in page. Upon first signup, default categories are
            automatically created for the new user.
          </p>
        </div>
        <div className="w-full pt-5">
          <h2>Dashboard</h2>
          <p>
            The landing page displays <b>summary cards</b> for total income,
            total expenses, and net balance. Interactive{" "}
            <b>pie, bar, and line charts</b> visualize spending breakdowns and
            trends over time. Users can toggle between
            <b>weekly, monthly, quarterly, yearly, and year-to-date</b> filters
            to adjust the date range.
          </p>
        </div>
        <div className="w-full pt-5">
          <h2>Transactions</h2>
          <p>
            A <b>server-side paginated</b> table lists all transactions with
            <b>date and category</b> filters. An add/edit form with{" "}
            <b>Zod validation</b> on both client and server ensures data
            integrity. Transactions include amount, date, category, and optional
            description.
          </p>
        </div>
        <div className="w-full pt-5">
          <h2>Categories</h2>
          <p>
            Users can create, update, and delete custom{" "}
            <b>income and expense categories</b>. On signup, a set of{" "}
            <b>default categories</b> is automatically seeded into the
            user&apos;s account.
          </p>
        </div>
        <div className="w-full pt-5">
          <h2>Multi-tenancy</h2>
          <p>
            All database queries are scoped to the authenticated user at the{" "}
            <b>Prisma query level</b>, ensuring strict data isolation. Each
            transaction and category is tied to the user who created it,
            preventing any cross-user data access.
          </p>
        </div>
      </div>
    </div>
  );
}
