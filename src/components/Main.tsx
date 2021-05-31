import styled from "styled-components"
import { rem } from "polished"

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${rem(64)};
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media all and (max-width: 1023px) {
    background-size: cover;
  }

  @media all and (max-width: 767px) {
    padding-top: 20px;
  }

  @media all and (max-width: 580px) {
    position: relative;
  }

  @media all and (min-width: 581px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Main
