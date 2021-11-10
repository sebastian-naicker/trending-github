import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './Layout.module.scss'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['layout']}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout