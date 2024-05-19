import Image from "next/image";
import {auth} from "@/auth";
import { redirect } from 'next/navigation'

export default async function Profile() {
  const session = await auth()
  if (session === null) {
    redirect('/api/auth/signin')
  }
  return (
    <div>
      <h1>Profile</h1>
      {
        session?.user?.image && (
          <Image src={session?.user?.image} alt='User Image' width={50} height={50} />
        )
      }
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  )
}