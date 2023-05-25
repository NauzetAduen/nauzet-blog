import GetPosts from "./getPosts";

export const metadata = {
  title: "Nauzet's Blog",
  description: "Nauzet's blog posts from dev.to",
};

export default function Blog() {
  return <GetPosts />;
}
