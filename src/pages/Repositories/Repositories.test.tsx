import { render } from '@testing-library/react'
import Wrapper from '../../../test/test-utils'
import Repositories from './Repositories'

describe('Repositories', function () {
  it('should render without errors', function () {
    render(
      <Wrapper>
        <Repositories />
      </Wrapper>
    )
  })
})
