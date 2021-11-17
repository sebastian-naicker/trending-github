import { useQuery } from 'react-query'

const useFetchRepositories = () => {
  return useQuery('repositories', () => fetch('http://localhost:3001/api/repositories').then((res) => res.json()))
}

export default useFetchRepositories
