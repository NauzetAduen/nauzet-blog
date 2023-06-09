"use client";
import React, { useState, useEffect } from "react";
import PostsEmpty from "./components/postsEmpty";
import PostsError from "./components/postsError";
import PostsLayout from "./components/postsLayout";
import Loading from "./components/postsLoading";

interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  social_image: string;
  tag_list: string[];
  slug: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  page_views_count: number;
  body_html: string;
}

export type { Article };

export default function GetPosts() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const username = "nauzetaduen";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${username}`
        );

        if (!response.ok) {
          throw new Error(`status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) return <Loading />;

  if (errorMessage.length !== 0) return <PostsError message={errorMessage} />;

  if (posts.length === 0) return <PostsEmpty />;

  return <PostsLayout posts={posts} />;
}
