import { render } from '@testing-library/react'
import QueryWrapper from '../../../test/test-utils'
import Developers from './Developers'

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

  it('should match snapshot', function () {
    const { asFragment } = render(
      <QueryWrapper>
        <Developers />
      </QueryWrapper>
    )

    expect(asFragment).toMatchSnapshot()
  })
})
