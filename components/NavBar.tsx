import { ActiveLink } from "./ActiveLink";
import styles from './NavBar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={ styles['menu-container'] }>
        {
          menuItems.map(( { text, href }, i ) => (
            <ActiveLink key={ i } href={ href } text={ text } />      
            )
          )
        }
        {/* <ActiveLink href="/" text="Home"/>
        <ActiveLink href="/about" text="About"/>
        <ActiveLink href="/contact" text="Contact"/>
        <ActiveLink href="/pricing" text="Pricing"/> */}
    </nav>
  )
}
