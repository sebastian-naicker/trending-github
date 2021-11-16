import React from 'react'
import cx from 'classnames'
import useFetchDevelopers from '../hooks/useFetchDevelopers'
import { ReactComponent as PopularIcon } from './popular.svg'
import { ReactComponent as RepoIcon } from './repo.svg'

import styles from './Developers.module.scss'

const Developers: React.FC = () => {
  const { isLoading, error, data } = useFetchDevelopers()

  if (isLoading) return <span>Loading...</span>

  if (error) {
    // @ts-ignore
    return <div>An error has occurred + {error.message}</div>
  }

  // @ts-ignore
  return (
    <div className={styles['developers']}>
      <div className={styles['table']}>
        <div className={styles['list-header']}></div>
        <div className={styles['list-body']}>
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
                  <div className={styles['list-item-repo']}>
                    <span className={cx(styles['repo-info'], styles['repo-title'])}>
                      <PopularIcon className={cx(styles['icon'], styles['icon__popular'])} />
                      Popular Repo
                    </span>
                    <span className={cx(styles['repo-info'], styles['repo-name'])}>
                      <RepoIcon className={cx(styles['icon'], styles['icon__repo'])} />
                      <a href={item.popularRepository.url} className={styles['repo-link']}>
                        {item.popularRepository.repositoryName}
                      </a>
                    </span>
                    <span className={cx(styles['repo-info'], styles['repo-description'])}>
                      {item.popularRepository.description}
                    </span>
                  </div>
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
