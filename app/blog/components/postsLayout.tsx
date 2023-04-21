import { Article } from "@/app/blog/getPosts";
import Link from "next/link";

interface ArticleParam {
    posts: Article[];
}
export default function PostsLayout(param: ArticleParam) {

    return (
        <ul>
            {param.posts.map(post => (
                <li key={post.id} className="p-4 m-4 border-solid border-2 border-black rounded">
                    <h1 className="font-bold">{post.title}</h1>
                    <Link href={post.url} rel="noopener noreferrer" target="_blank" ><h3>Link</h3></Link>
                    <p className="italic">{post.description}</p>
                </li>
            ))}
        </ul>
    )

}