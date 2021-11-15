import React from 'react'
import useFetchDevelopers from '../hooks/useFetchDevelopers'

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
      <div>
        <div className={styles['list-header']}></div>
        <div className={styles['list-body']}>
          <ul className={styles['list']}>
            {data.map((item: any) => {
              return (
                <li key={item.rank} className={styles['list-item']}>
                  <div>{item.rank}</div>
                  <div className={styles['list-item-user']}>
                    <span className={styles['avatar']}>
                      <img src={item.avatar} alt="" />
                    </span>
                    <div className={styles['user-info']}>
                      <h3 className={styles['user-info__name']}>{item.name}</h3>
                      <p className={styles['user-info__username']}>{item.username}</p>
                    </div>
                  </div>
                  <div className={styles['list-item-repo']}>
                    <span>Popular Repo</span>
                    <span>{item.popularRepository.repositoryName}</span>
                    <span>{item.popularRepository.description}</span>
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
