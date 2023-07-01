import Link from "next/link";
import AppBarLink from "./appbarlink";

export default function AppBar() {
  return (
    <nav className=" bg-white pt-10 ">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
            <a className="text-2xl font-bold text-black">nau.</a>
          </Link>
        </div>
        <div className="block">
          <div className="ml-10 flex items-baseline space-x-4">
            <AppBarLink text="Work" path="work" />
            <AppBarLink text="Blog" path="blog" />
          </div>
        </div>
      </div>
    </nav>
  );
}
