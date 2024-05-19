import {posts} from "@/app/api/posts/posts";
import {NextResponse} from "next/server";
import {Post} from "@/app/api/posts/route";

export async function GET(req: Request, {params}: {params: {id: number}}) {
  let currentPost: any
  const idToFind = Number(params.id)

  currentPost = posts.find((post: Post) => idToFind === post.id)

  return NextResponse.json(currentPost)
}