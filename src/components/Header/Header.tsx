import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header data-testid="header" className={styles['header']}>
      <h1 className={styles['title']}>Trending</h1>
      <p className={styles['description']}>See what the github community is most excited about today</p>
    </header>
  )
}

export default Header
