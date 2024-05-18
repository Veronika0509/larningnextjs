import {Metadata} from "next";
import Link from "next/link";

interface Props {
  params: {
    postId: number
  }
}

async function getPost(id: number) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  return response.json()
}

export async function generateMetadata({params: {postId}}: Props): Promise<Metadata> {
  const post: any = await getPost(postId)
  return {
    title: post.title
  }
}

export default async function Post({params: {postId}}: Props) {
  const post = await getPost(postId)
  return (
    <div className='postItem'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}