import {NextResponse} from "next/server";
import {posts} from './posts'

export interface Post {
  id: number,
  title: string,
  description: string
}

export async function GET(req: Request) {
  let currentPosts: any = posts
  const {searchParams} = new URL(req.url)
  const query = searchParams.get('q')
  if (query) {
    currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }
  return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
  const body = await req.json()
  console.log(body)
  return NextResponse.json({body})
}