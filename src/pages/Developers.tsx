import React from 'react'
import useFetchDevelopers from '../hooks/useFetchDevelopers'

const Developers: React.FC = () => {
  const { isLoading, error, data } = useFetchDevelopers()

  if (isLoading) return <span>Loading...</span>

  if (error) {
    // @ts-ignore
    return <div>An error has occurred + {error.message}</div>
  }

  return <div>{data}</div>
}

export default Developers
