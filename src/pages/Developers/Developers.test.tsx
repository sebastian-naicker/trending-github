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
})
