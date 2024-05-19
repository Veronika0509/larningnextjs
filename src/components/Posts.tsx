import React from 'react';
import Link from "next/link";

interface Props {
  posts: any[]
}

const Posts = ({posts}: Props) => {

  return (
    <div>
      <ul className='posts'>
        {posts.map((post: any) => (
          <Link href={`/blog/${post.id}`} className='post'>
            <p>{post.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Posts;