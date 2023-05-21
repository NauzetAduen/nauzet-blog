import { Article } from "@/app/blog/getPosts";
import Link from "next/link";
import AnimatedBgText from "@/app/components/animatedBgText";
import externalLink from "../../assets/svg/externalLink.svg";
import heart from "../../assets/svg/heart.svg";
import comments from "../../assets/svg/comments.svg";
import Image from "next/image";

interface ArticleParam {
  posts: Article[];
}
export default function PostsLayout(param: ArticleParam) {
  return (
    <ul className="my-4 grid sm:grid-cols-3">
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
            <Image
              src={externalLink}
              alt={externalLink}
              width={24}
              height={24}
            />
          </Link>
          <p className="mb-4 italic">{post.description}</p>
          <div className="absolute bottom-1 flex">
            <Image src={heart} alt={heart} width={24} height={24} />
            <p className="ml-1 mr-2 text-sm">{post.positive_reactions_count}</p>
            <Image src={comments} alt={comments} width={24} height={24} />

            <p className="ml-1 text-sm">{post.comments_count}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
