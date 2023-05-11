import Link from "next/link";

export default function PostsEmpty() {
  return (
    <div className="w-1/2 space-y-8 py-40 text-center text-2xl">
      <p>
        We couldn't find any post by me (nauzetaduen) in{" "}
        <Link
          href={"https://dev.to/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="font-bold">https://dev.to/</span>
        </Link>
      </p>
      <p>
        This could mean that I havent written anything yet or Dev.to is broken.
      </p>
    </div>
  );
}
