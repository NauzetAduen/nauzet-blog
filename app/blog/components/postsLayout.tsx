import { Article } from "@/app/blog/getPosts";
import Link from "next/link";

interface ArticleParam {
  posts: Article[];
}
export default function PostsLayout(param: ArticleParam) {
  return (
    <ul>
      {param.posts.map((post) => (
        <li
          key={post.id}
          className="m-4 rounded border-2 border-solid border-black p-4"
        >
          <h1 className="font-bold">{post.title}</h1>
          <Link href={post.url} rel="noopener noreferrer" target="_blank">
            <h3>Link</h3>
          </Link>
          <p className="italic">{post.description}</p>
        </li>
      ))}
    </ul>
  );
}
