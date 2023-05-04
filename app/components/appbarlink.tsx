import Link from "next/link";

interface AppBarLinkParam {
  text: string;
  path: string;
}

export default function AppBarLink(props: AppBarLinkParam) {
  const { text, path } = props;
  return (
    <Link
      href={`/${path}`}
      className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
    >
      {text}
    </Link>
  );
}
