import { useQuery } from 'react-query'

const useFetchDevelopers = () => {
  return useQuery('fetchData', () => fetch('http://localhost:3001/api/developers').then((res) => res.json()))
}

export default useFetchDevelopers
