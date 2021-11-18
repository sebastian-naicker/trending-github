import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Table.module.scss'

type Props = {
  children?: React.ReactNode
}

const Table: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['table']}>
      <div data-testid="table-header" className={styles['table-header']}>
        <nav className={styles['subnav']}>
          <NavLink to="/" exact className={styles['subnav-button']} activeClassName={styles['subnav-active']}>
            Repositories
          </NavLink>
          <NavLink to="/developers" exact className={styles['subnav-button']} activeClassName={styles['subnav-active']}>
            Developers
          </NavLink>
        </nav>
      </div>
      <div data-testid="table-body" className={styles['table-body']}>
        <ul data-testid="table-list" className={styles['list']}>
          {children}
        </ul>
      </div>
    </div>
  )
}

export default Table
