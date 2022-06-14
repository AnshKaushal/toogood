import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/posts'><li>Posts</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar