import Link from 'next/link';
import AppBarLink from './appbarlink';


export default function AppBar() {
    return (
        <nav className="bg-white pt-10">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link legacyBehavior href="/">
                        <a className="text-black font-bold text-xl">Nau.</a>
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
