import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import QueryWrapper from '../../../test/test-utils'
import Developers from './Developers'
import * as useFetchDevelopers from '../../hooks/useFetchDevelopers'
import developersMockData from '../../../server/mocks/developers.json'

describe('Developers', function () {
  it('should render without errors', function () {
    render(
      <QueryWrapper>
        <Developers />
      </QueryWrapper>
    )
  })

  it('should render loading component while loading', function () {
    const { getByTestId, queryByTestId } = render(
      <QueryWrapper>
        <Developers />
      </QueryWrapper>
    )

    expect(getByTestId('loading')).toBeInTheDocument()
    expect(queryByTestId('error')).not.toBeInTheDocument()
    expect(queryByTestId('developers-page')).not.toBeInTheDocument()
  })

  it('should render error when api loading fails', function () {
    // @ts-ignore
    const useFetchDevelopersSpy = jest.spyOn(useFetchDevelopers, 'default').mockImplementation(() => ({
      isLoading: false,
      error: {
        message: 'failed to fetch',
      },
    }))

    const { getByTestId, queryByTestId } = render(
      <QueryWrapper>
        <Developers />
      </QueryWrapper>
    )

    expect(queryByTestId('loading')).not.toBeInTheDocument()
    expect(getByTestId('error')).toBeInTheDocument()
    expect(queryByTestId('developers-page')).not.toBeInTheDocument()

    useFetchDevelopersSpy.mockRestore()
  })

  it('should render data when api succeeds', function () {
    // @ts-ignore
    const useFetchDevelopersSpy = jest.spyOn(useFetchDevelopers, 'default').mockImplementation(() => ({
      isLoading: false,
      error: null,
      data: developersMockData,
    }))

    const { getByTestId, queryByTestId } = render(
      <QueryWrapper>
        <Developers />
      </QueryWrapper>,
      { wrapper: MemoryRouter }
    )

    expect(queryByTestId('loading')).not.toBeInTheDocument()
    expect(queryByTestId('error')).not.toBeInTheDocument()
    expect(getByTestId('developers-page')).toBeInTheDocument()

    useFetchDevelopersSpy.mockRestore()
  })

  it('should match snapshot', function () {
    const { asFragment } = render(
      <QueryWrapper>
        <Developers />
      </QueryWrapper>
    )

    expect(asFragment).toMatchSnapshot()
  })
})
