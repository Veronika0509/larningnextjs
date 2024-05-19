'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import type {Session} from "next-auth";
import { signOut } from "next-auth/react"
import Image from "next/image";

interface NavLink {
  label: string,
  href: string
}

interface Props {
  navLinks: NavLink[],
  session: Session | null
}

export const Navigation = ({navLinks, session}: Props) => {
  const pathname = usePathname()

  return (
    <div>
      {navLinks.map((link: NavLink) => {
        const isActive = link.href === pathname

        return (
          <Link href={link.href} key={link.label} className={isActive ? 'activeLink': 'link'}>{link.label}</Link>
        )
      })}
      {session?.user ? (
        <div className='sign-links'>
          <Link href='/' className='link' onClick={() => signOut({callbackUrl: '/'})}>Sign Out</Link>
          <div>
            <Link href='/profile' className='link'>
              {session?.user?.image && (
                <div>
                  <Image src={session.user.image} alt='User Image' width={40} height={40} />
                  <p>{session?.user?.name}</p>
                </div>
              )}
            </Link>
          </div>
        </div>
      ) : (
        <Link href='/api/auth/signin' className='link'>Sign In</Link>
      )}
    </div>
  )
}