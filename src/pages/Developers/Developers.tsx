import React from 'react'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import useFetchDevelopers from '../../hooks/useFetchDevelopers'
import { ReactComponent as RepoIcon } from '../../icons/repo.svg'
import { ReactComponent as PopularIcon } from '../../icons/popular.svg'

import styles from './Developers.module.scss'

const Developers: React.FC = () => {
  const { isLoading, error, data } = useFetchDevelopers()

  if (isLoading) return <Loading content="Hang on... Fetching you the most 🔥 devs!" />

  if (error) {
    // @ts-ignore
    return <Error error={error.message} />
  }

  // @ts-ignore
  return (
    <div className={styles['developers']}>
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
            {data.map((item: any) => {
              return (
                <li key={item.rank} className={styles['list-item']}>
                  <div className={styles['list-item-rank']}>{item.rank}</div>
                  <div className={styles['list-item-user']}>
                    <span>
                      <a href={item.url} className={styles['avatar']}>
                        <img src={item.avatar} alt={`Avatar of ${item.name}`} />
                      </a>
                    </span>
                    <div className={styles['user-info']}>
                      <h3 className={styles['user-info__name']}>
                        <a href={item.url}>{item.name}</a>
                      </h3>
                      <p className={styles['user-info__username']}>
                        <a href={item.url}>{item.username}</a>
                      </p>
                    </div>
                  </div>
                  {item.popularRepository.repositoryName && (
                    <div className={styles['list-item-repo']}>
                      <span className={cx(styles['repo-info'], styles['repo-title'])}>
                        <PopularIcon className="icon icon__popular" />
                        Popular Repo
                      </span>
                      <span className={cx(styles['repo-info'], styles['repo-name'])}>
                        <RepoIcon className="icon icon__repo" />
                        <a href={item.popularRepository.url} className={styles['repo-link']}>
                          {item.popularRepository.repositoryName}
                        </a>
                      </span>
                      <span className={cx(styles['repo-info'], styles['repo-description'])}>
                        {item.popularRepository.description}
                      </span>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Developers
