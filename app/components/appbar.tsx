import Link from 'next/link';
import AppBarLink from './appbarlink';

function AppBar() {
    return (
        <nav className="bg-white pt-10">
            <div className="max-w-7xl mx-auto px-4 ">
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
                            <AppBarLink text="Contact" path="contact" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AppBar;
