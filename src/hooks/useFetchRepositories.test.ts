import { renderHook } from '@testing-library/react-hooks'
import QueryWrapper from '../../test/test-utils'
import useFetchRepositories from './useFetchRepositories'
import repositoriesMockData from '../../server/mocks/repositories.json'
import nock from 'nock'

describe('useFetchRepositories', function () {
  it('should resolve success data correctly from api', async function () {
    const scope = nock('http://localhost:3001').get('/api/repositories').reply(200, repositoriesMockData)
    const { result, waitFor } = renderHook(() => useFetchRepositories(), { wrapper: QueryWrapper })
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toEqual(repositoriesMockData)
    scope.done()
  })
})
