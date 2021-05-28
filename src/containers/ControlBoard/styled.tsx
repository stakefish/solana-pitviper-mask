import styled from "styled-components"
import { rem } from "polished"
import Button from "../../components/Button"

export const Wrapper = styled.div`
  text-align: center;
`
export const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 0.4;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 767px) {
    display: none;
  }
`

export const UploadWrapper = styled.div`
  padding: ${rem(20)};
  height: ${rem(148)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${Button} {
    max-width: 100%;
    min-width: ${rem(205)};
  }

  @media all and (min-width: 768px) {
    input {
      display: block !important;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }
  }

  @media all and (max-width: 767px) {
    height: auto;
    padding: 0;
  }

  @media all and (max-width: 480px) {
    display: block;

    ${Button} {
      width: 100%;
    }
  }
`
