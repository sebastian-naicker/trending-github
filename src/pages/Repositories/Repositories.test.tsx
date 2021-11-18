import { render } from '@testing-library/react'
import QueryWrapper from '../../../test/test-utils'
import Repositories from './Repositories'

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
    expect(queryByTestId('developers-page')).not.toBeInTheDocument()
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
