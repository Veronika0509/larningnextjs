import Link from "next/link";
import {Navigation} from "@/components/Navigation";

const navLinks = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'}
]

export const Header = () => {
  return (
    <header>
      <Navigation navLinks={navLinks}/>
    </header>
  )
}