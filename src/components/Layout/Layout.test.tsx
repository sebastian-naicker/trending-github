import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', function () {
  it('should render Layout without errors', function () {
    render(<Layout />)
  })

  it('should contain Header', function () {
    const { getByTestId } = render(<Layout />)
    expect(getByTestId('header')).toBeInTheDocument()
  })

  it('should render content', function () {
    const { getByText } = render(
      <Layout>
        <span>test content</span>
      </Layout>
    )
    expect(getByText('test content')).toBeInTheDocument()
  })
})
