import styled from "styled-components"
import { rem } from "polished"
import { Row } from "react-styled-flexboxgrid"

const Card = styled.div`
  padding: ${rem(48)};
  border-radius: ${rem(40)};
  box-shadow: 0 24px 40px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;

  ${Row} {
    height: 100%;
  }
`

export default Card
