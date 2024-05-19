"use server"
import {prisma} from "../../../lib/prisma";

export const getAllPosts = async () => {
  // const response = await fetch('/api/posts')
  // if (!response.ok) {
  //   throw new Error('Unable fetch posts data!')
  // }
  // return response.json()
  return prisma.post.findMany()
}

export const getPostById = async (id: string) => {
  // const response = await fetch(`/api/posts/${id}`)
  // return response.json()
  return prisma.post.findUnique({
    where: {
      id
    }
  })
}

// export const getPostsBySearch = async (search: string)=> {
  // const response = await fetch(`/api/posts?q=${search}`)
  // if (!response.ok) {
  //   throw new Error('Unable fetch posts data!')
  // }
  // return response.json()
// }