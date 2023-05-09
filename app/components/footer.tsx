import Link from "next/link";

export default function Footer() {
  return (
    <footer className="m-8 mt-auto text-center">
      <p>Designed and developed by Nauzet Hernández &copy; 2023</p>
      <p>
        Build with <Link href="https://nextjs.org/">Next.js</Link> &{" "}
        <Link href="https://tailwindcss.com/">Tailwind</Link>. Hosted in{" "}
        <Link href="https://vercel.com/">Vercel</Link>.
      </p>
    </footer>
  );
}
