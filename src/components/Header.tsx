import {Navigation} from "@/components/Navigation";
import {auth} from "@/auth";
import type {Session} from "next-auth";

const navLinks = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'}
]

export async function Header() {
  const session: Session | null = await auth()
  return (
    <header>
      <Navigation navLinks={navLinks} session={session} />
    </header>
  )
}