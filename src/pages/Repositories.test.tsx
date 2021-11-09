import { render } from "@testing-library/react"
import Repositories from "./Repositories"

describe("Repositories", function () {
  it("should render without errors", function () {
    render(<Repositories />)
  })
})
