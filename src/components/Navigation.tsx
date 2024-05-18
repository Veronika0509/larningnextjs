'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

interface NavLink {
  label: string,
  href: string
}

interface Props {
  navLinks: NavLink[]
}

export const Navigation = ({navLinks}: Props) => {
  const pathname = usePathname()

  return (
    <div>
      {navLinks.map((link: NavLink) => {
        const isActive = link.href === pathname

        return (
          <Link href={link.href} key={link.label} className={isActive ? 'activeLink': 'link'}>{link.label}</Link>
        )
      })}
    </div>
  )
}