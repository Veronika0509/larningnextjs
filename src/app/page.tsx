import {createPost} from "@/app/blog/actions";

export default function Home() {
  return (
    <div>
      <h1>Welcome to NextJS world</h1>
      <form className='form' action={createPost}>
        <input type="text" placeholder='Title' required name='title' />
        <textarea placeholder='Content' required name='body'/>
        <input type="submit" value='Add post'/>
      </form>
    </div>
  );
}
