'use client'
import {useEffect, useState} from "react";
import {getAllPosts} from "@/app/blog/posts";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

export default function Blog() {
  const [posts, setPosts] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then(setPosts).finally(() => {
      setLoading(false)
    })
  }, []);

  return (
    <div>
      <h1>Blog Page</h1>
      {/*<PostSearch onSearch={setPosts} />*/}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  )
}