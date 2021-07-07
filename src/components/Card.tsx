import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

const Card = styled.div`
  padding: ${rem(48)};
  border-radius: ${rem(40)};
  box-shadow: 0 24px 40px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(255, 255, 255, 0.85);

  @media all and (max-width: 767px) {
    padding: 22px 27px;
  }

  @media all and (min-width: 992px) {
    height: 100%;

    > ${Row} {
      margin-left: ${rem(-24)};
      margin-right: ${rem(-24)};
      height: 100%;

      > ${Col} {
        padding-left: ${rem(24)};
        padding-right: ${rem(24)};

        &:first-child {
          height: 100%;
        }
      }
    }
  }

  @media all and (min-width: 2080px) {
    > ${Row} {
      > ${Col} {
        flex-basis: 50%;
        max-width: 50%;
      }
    }
  }
`

export default Card
