import React from 'react'
import styles from './Repositories.module.scss'
import { NavLink } from 'react-router-dom'
import useFetchRepositories from '../hooks/useFetchRepositories'

const Repositories: React.FC = () => {
  const { isLoading, error, data } = useFetchRepositories()

  if (isLoading) return <span>Loading...</span>

  if (error) {
    // @ts-ignore
    return <div>An error has occurred + {error.message}</div>
  }

  return (
    <div className={styles['repositories']}>
      <div className={styles['table']}>
        <div className={styles['table-header']}>
          <nav className={styles['subnav']}>
            <NavLink to="/" exact className={styles['subnav-button']} activeClassName={styles['subnav-active']}>
              Repositories
            </NavLink>
            <NavLink
              to="/developers"
              exact
              className={styles['subnav-button']}
              activeClassName={styles['subnav-active']}
            >
              Developers
            </NavLink>
          </nav>
        </div>
        <div className={styles['table-body']}>
          <ul className={styles['list']}>
            {data &&
              data.map((item: any) => {
                return (
                  <li key={item.rank} className={styles['list-item']}>
                    {JSON.stringify(item)}
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Repositories
