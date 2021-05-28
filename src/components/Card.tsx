import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

const Card = styled.div`
  padding: ${rem(48)};
  border-radius: ${rem(40)};
  box-shadow: 0 24px 40px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;

  > ${Row} {
    height: 100%;
  }

  @media all and (min-width: 992px) {
    > ${Row} {
      margin-left: ${rem(-24)};
      margin-right: ${rem(-24)};

      > ${Col} {
        padding-left: ${rem(24)};
        padding-right: ${rem(24)};
      }
    }
  }
`

export default Card
