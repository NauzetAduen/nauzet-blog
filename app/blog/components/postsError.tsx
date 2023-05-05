import Link from "next/link";

interface MessageError {
  message: string;
}

export default function PostsError(error: MessageError) {
  return (
    <div className="space-y-16 py-40 text-center text-3xl">
      <p>Error calling the api endpoint of dev.to</p>

      {error && error.message && (
        <p>The status of the response: {error.message}</p>
      )}

      <p>
        Sorry for the inconvenience, try navigate to the rest of the portfolio
      </p>
      <p>
        If the error persist, you can contact me at{" "}
        <Link
          href={"mailto:nauzet.aduen@gmail.com"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="font-bold">my email</span>
        </Link>
      </p>
    </div>
  );
}
