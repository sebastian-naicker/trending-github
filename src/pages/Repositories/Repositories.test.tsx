import { render } from '@testing-library/react'
import QueryWrapper from '../../../test/test-utils'
import Repositories from './Repositories'
import * as useFetchRepositories from '../../hooks/useFetchRepositories'
import repositoriesMockData from '../../../server/mocks/repositories.json'
import { MemoryRouter } from 'react-router-dom'

describe('Repositories', function () {
  it('should render without errors', function () {
    render(
      <QueryWrapper>
        <Repositories />
      </QueryWrapper>
    )
  })

  it('should render loading component while loading', function () {
    const { getByTestId, queryByTestId } = render(
      <QueryWrapper>
        <Repositories />
      </QueryWrapper>
    )

    expect(getByTestId('loading')).toBeInTheDocument()
    expect(queryByTestId('error')).not.toBeInTheDocument()
    expect(queryByTestId('repositories-page')).not.toBeInTheDocument()
  })

  it('should render error when api loading fails', function () {
    // @ts-ignore
    const useFetchRepositoriesSpy = jest.spyOn(useFetchRepositories, 'default').mockImplementation(() => ({
      isLoading: false,
      error: {
        message: 'failed to fetch',
      },
    }))

    const { getByTestId, queryByTestId } = render(
      <QueryWrapper>
        <Repositories />
      </QueryWrapper>
    )

    expect(queryByTestId('loading')).not.toBeInTheDocument()
    expect(getByTestId('error')).toBeInTheDocument()
    expect(queryByTestId('repositories-page')).not.toBeInTheDocument()

    useFetchRepositoriesSpy.mockRestore()
  })

  it('should render data when api succeeds', function () {
    // @ts-ignore
    const useFetchRepositoriesSpy = jest.spyOn(useFetchRepositories, 'default').mockImplementation(() => ({
      isLoading: false,
      error: null,
      data: repositoriesMockData,
    }))

    const { getByTestId, queryByTestId } = render(
      <QueryWrapper>
        <Repositories />
      </QueryWrapper>,
      { wrapper: MemoryRouter }
    )

    expect(queryByTestId('loading')).not.toBeInTheDocument()
    expect(queryByTestId('error')).not.toBeInTheDocument()
    expect(getByTestId('repositories-page')).toBeInTheDocument()

    useFetchRepositoriesSpy.mockRestore()
  })

  it('should match snapshot', function () {
    const { asFragment } = render(
      <QueryWrapper>
        <Repositories />
      </QueryWrapper>
    )

    expect(asFragment).toMatchSnapshot()
  })
})
