import Link from 'next/link';

interface AppBarLinkParam {
    text: string,
    path: string
}

export default function AppBarLink(props: AppBarLinkParam) {
    const { text, path } = props;
    return (
        <Link href={`/${path}`} className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {text}
        </Link>
    );
}
