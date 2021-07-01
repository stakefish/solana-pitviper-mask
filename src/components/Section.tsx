import styled from "styled-components"
import { FluidGrid } from "../core/GlobalStyles"

const Section = styled.section`
  position: relative;
  width: 100%;

  @media all and (min-width: 1440px) {
    flex: 1 1 0%;

    ${FluidGrid} {
      height: 100%;
    }
  }
`

export default Section
