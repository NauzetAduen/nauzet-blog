import { Article } from "@/app/blog/getPosts";
import Link from "next/link";
import { CommentSvg, ExternalLinkSvg, HearthSvg } from "@/app/components/svg";
import AnimatedBgText from "@/app/components/animatedBgText";

interface ArticleParam {
  posts: Article[];
}
export default function PostsLayout(param: ArticleParam) {
  return (
    <ul className="my-4 grid grid-cols-3">
      {param.posts.map((post) => (
        <li
          key={post.id}
          className="relative m-4 rounded border-2 border-solid border-black p-4"
        >
          <AnimatedBgText text={post.title} />

          <Link
            href={post.url}
            rel="noopener noreferrer"
            target="_blank"
            className="absolute right-0 top-0"
          >
            <ExternalLinkSvg />
          </Link>
          <p className="mb-4 italic">{post.description}</p>
          <div className="absolute bottom-1 flex">
            <HearthSvg />
            <p className="ml-1 mr-2 text-sm">{post.positive_reactions_count}</p>
            <CommentSvg />
            <p className="ml-1 text-sm">{post.comments_count}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
