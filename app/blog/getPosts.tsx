"use client"
import React, { useState, useEffect, use } from 'react';
import PostsError from '../components/blog/postsError';
import PostsEmpty from '../components/blog/postsEmpty';
import PostsLayout from '../components/blog/postsLayout';

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

export type { Article }

export default function GetPosts() {
    const [posts, setPosts] = useState<Article[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    // const username = "nauzetaduen";
    const username = "nataliedeweerd";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://dev.to/api/articles?username=${username}`);

                if (!response.ok) {
                    throw new Error(`status: ${response.status}`);
                }

                const data = await response.json();
                setPosts(data);
            } catch (error: any) {
                setErrorMessage(error.message);
            }
        };

        fetchPosts();
    }, []);

    if (errorMessage) {
        return (
            <div>
                <PostsError message={errorMessage} />
            </div>
        )
    }
    if (posts.length == 0) {
        return (
            <div>
                <PostsEmpty />
            </div>
        )
    }

    return (

        <PostsLayout posts={posts} />
    );
};
