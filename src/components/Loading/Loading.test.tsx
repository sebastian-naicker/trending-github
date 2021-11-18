import { render } from '@testing-library/react'
import Loading from './Loading'

describe('Loading', function () {
  it('should render without error', function () {
    render(<Loading content="loading..." />)
  })

  it('should contain a spinner', function () {
    const { getByTestId } = render(<Loading content="test" />)
    expect(getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('should contain loading message', function () {
    const { getByText } = render(<Loading content="test" />)
    expect(getByText('test')).toBeInTheDocument()
  })
})
