import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Table from './Table'

describe('Table', function () {
  it('should render without error', function () {
    render(<Table />, { wrapper: MemoryRouter })
  })

  it('should contain a table header', function () {
    const { getByTestId } = render(<Table />, { wrapper: MemoryRouter })
    expect(getByTestId('table-header')).toBeInTheDocument()
  })

  it('should contain link to repositories page', function () {
    const { getByText } = render(<Table />, { wrapper: MemoryRouter })
    expect(getByText('Repositories')).toBeInTheDocument()
  })

  it('should contain link to developers page', function () {
    const { getByText } = render(<Table />, { wrapper: MemoryRouter })
    expect(getByText('Developers')).toBeInTheDocument()
  })

  it('should contain a table body', function () {
    const { getByTestId } = render(<Table />, { wrapper: MemoryRouter })
    expect(getByTestId('table-body')).toBeInTheDocument()
  })

  it('should contain a table list', function () {
    const { getByTestId } = render(<Table />, { wrapper: MemoryRouter })
    expect(getByTestId('table-list')).toBeInTheDocument()
  })

  it('should render children correctly', function () {
    const { getAllByText } = render(
      <Table>
        <>
          <li>test1</li>
          <li>test1</li>
        </>
      </Table>,
      { wrapper: MemoryRouter }
    )
    expect(getAllByText('test1').length).toBe(2)
  })

  it('should should match snapshot', function () {})
})
