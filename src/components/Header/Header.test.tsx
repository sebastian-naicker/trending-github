import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', function () {
  it('should render without errors', function () {
    render(<Header />)
  })

  it('should contain a title', function () {
    const { getByText } = render(<Header />)
    expect(getByText('Trending')).toBeInTheDocument()
  })

  it('should contain a description', function () {
    const { getByText } = render(<Header />)
    expect(getByText('See what the github community is most excited about today')).toBeInTheDocument()
  })
})
