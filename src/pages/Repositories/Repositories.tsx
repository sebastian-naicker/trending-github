import React from 'react'
import useFetchRepositories from '../../hooks/useFetchRepositories'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import Table from '../../components/Table/Table'
import { ReactComponent as RepoIcon } from '../../icons/repo.svg'
import { ReactComponent as StarsIcon } from '../../icons/stars.svg'
import { ReactComponent as ForkIcon } from '../../icons/fork.svg'

import styles from './Repositories.module.scss'

const Repositories: React.FC = () => {
  const { isLoading, error, data } = useFetchRepositories()

  if (isLoading) return <Loading content="Hang on... We're busy fetching you the most popular repositories! 🔥" />

  if (error) {
    // @ts-ignore
    return <Error error={error.message} />
  }

  return (
    <div data-testid="repositories-page" className={styles['repositories']}>
      <Table>
        {data.map((item: any) => {
          return (
            <li key={item.rank} className={styles['list-item']}>
              <div className={styles['repo-name']}>
                <a href={item.url} className={styles['repo-link']}>
                  <RepoIcon className="icon icon__repo" />
                  <span className={styles['repo-link-content']}>
                    <span className={styles['repo-link-username']}>{item.username} / </span>
                    {item.repositoryName}
                  </span>
                </a>
              </div>
              <p className={styles['repo-description']}>{item.description}</p>
              <div className={styles['repo-meta']}>
                <div className={styles['repo-meta']}>
                  {item.language && (
                    <span className={styles['repo-programming-language']} style={{ color: item.languageColor }}>
                      {item.language}
                    </span>
                  )}
                  <a href={`${item.url}/stargazers`} className={styles['repo-stargazers-link']}>
                    <StarsIcon className="icon icon__star" /> {item.totalStars}
                  </a>
                  <a href={`${item.url}/stargazers`} className={styles['repo-fork-link']}>
                    <ForkIcon className="icon icon__fork" /> {item.forks}
                  </a>
                  <span className={styles['repo-built-by']}>
                    Built by
                    <span className={styles['built-by-list']}>
                      {item.builtBy.map((built: any) => (
                        <a href={built.url} className={styles['built-by-avatar']}>
                          <img src={built.avatar} alt={`Avatar of ${built.username}`} />
                        </a>
                      ))}
                    </span>
                  </span>
                </div>
                <div className={styles['repo-stars-since']}>
                  <span className={styles['repo-stargazers-link']}>
                    <StarsIcon className="icon icon__star" /> {item.starsSince} stars today
                  </span>
                </div>
              </div>
            </li>
          )
        })}
      </Table>
    </div>
  )
}

export default Repositories
