'use client'
import {getPostById} from "@/app/blog/posts";
import {useEffect, useState} from "react";
import {deletePost} from "@/app/blog/actions";
import Link from "next/link";

interface Props {
  params: {
    postId: string
  }
}

export default async function Post({params: {postId}}: Props) {
  const [post, setPost] = useState<any>([])

  useEffect(() => {
    getPostById(postId).then(setPost)
  }, []);

  return (
    <div className='postItem'>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <form action={deletePost.bind(null, postId)}>
          <input type="submit" value='Delete post' />
        </form>
        <Link href={`/blog/${postId}/edit`}>Edit</Link>
      </div>
    </div>
  )
}