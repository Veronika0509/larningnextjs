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
          <li>
            <Link href={`/blog/` + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;