import Link from "next/link";
import AppBarLink from "./appbarlink";

export default function AppBar() {
  return (
    <nav className="bg-white pt-10">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
            <a className="text-xl font-bold text-black">Nau.</a>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <AppBarLink text="Work" path="work" />
            <AppBarLink text="Blog" path="blog" />
            <AppBarLink text="Resume" path="resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
}
