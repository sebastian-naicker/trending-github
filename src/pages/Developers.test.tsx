import { render } from '@testing-library/react'
import Wrapper from '../../test/test-utils'
import Developers from './Developers'

describe('Developers', function () {
  it('should render without errors', function () {
    render(
      <Wrapper>
        <Developers />
      </Wrapper>
    )
  })
})
