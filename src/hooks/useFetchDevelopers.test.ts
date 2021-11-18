import { renderHook } from '@testing-library/react-hooks'
import QueryWrapper from '../../test/test-utils'
import useFetchDevelopers from './useFetchDevelopers'
import developersMockData from '../../server/mocks/developers.json'
import nock from 'nock'

describe('useFetchDevelopers', function () {
  it('should resolve success data correctly from api', async function () {
    const scope = nock('http://localhost:3001').get('/api/developers').reply(200, developersMockData)
    const { result, waitFor } = renderHook(() => useFetchDevelopers(), { wrapper: QueryWrapper })
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toEqual(developersMockData)
    scope.done()
  })
})
