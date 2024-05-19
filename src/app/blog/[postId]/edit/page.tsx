import {getPostById} from "@/app/blog/posts";
import {updatePost} from "@/app/blog/actions";

interface Props {
  params: {
    postId: string
  }
}

export default async function Edit({params: {postId}}: Props) {
  const post = await getPostById(postId)

  if (!post) {
    return (
      <div>
        Post not found
      </div>
    )
  }

  return (
    <div>
      <form className='form' action={updatePost}>
        <input type="text" placeholder='Title' required name='title' defaultValue={post.title} />
        <textarea placeholder='Content' required name='body' defaultValue={post.body}/>
        <input type="hidden" name='id' value={post.id} />
        <input type="submit" value='Update post'/>
      </form>
    </div>
  )
}