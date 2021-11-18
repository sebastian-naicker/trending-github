import { render } from '@testing-library/react'
import Error from './Error'

describe('Loading', function () {
  it('should render without error', function () {
    render(<Error error="An error occurred" />)
  })

  it('should contain an error message', function () {
    const { getByText } = render(<Error error="500" />)
    expect(getByText('An Error Occurred 500')).toBeInTheDocument()
  })
})
