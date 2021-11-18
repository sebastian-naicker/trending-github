import { render } from '@testing-library/react'
import Loading from './Loading'

describe('Loading', function () {
  it('should render without error', function () {
    render(<Loading content="loading..." />)
  })
})
