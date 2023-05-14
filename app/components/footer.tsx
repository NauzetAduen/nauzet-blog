import Link from "next/link";

export default function Footer() {
  return (
    <footer className="m-8 mt-auto pb-8 text-center leading-tight">
      <p>Designed and developed by Nauzet Hernández &copy; 2023</p>
      <p>
        Build with <ColoredLink url="https://nextjs.org/" text="Next.js" /> &{" "}
        <ColoredLink url="https://tailwindcss.com/" text="Tailwind" />. Hosted
        in <ColoredLink url="https://vercel.com/" text="Vercel" />.
      </p>
    </footer>
  );
}

interface ColoredLinkParams {
  url: string;
  text: string;
}

function ColoredLink(params: ColoredLinkParams) {
  return (
    <Link className="text-primary hover:text-secondary" href={params.url}>
      {params.text}
    </Link>
  );
}
