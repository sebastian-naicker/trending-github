import { render } from '@testing-library/react'
import QueryWrapper from '../../../test/test-utils'
import Repositories from './Repositories'

describe('Repositories', function () {
  it('should render without errors', function () {
    render(
      <QueryWrapper>
        <Repositories />
      </QueryWrapper>
    )
  })
})
