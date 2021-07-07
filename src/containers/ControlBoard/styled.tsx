import styled from "styled-components"
import { rem, rgba } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

import Button from "../../components/Button"

export const Wrapper = styled.div`
  text-align: center;
  width: ${rem(565)};
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: ${rem(30)};

  @media all and (max-width: 1023px) {
    margin-top: 0;
  }
`
export const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 1023px) {
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
  flex-direction: column;

  ${Button} {
    max-width: 100%;
    min-width: ${rem(205)};
  }

  &:hover {
    ${Button} {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media all and (min-width: 1024px) {
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

  @media all and (max-width: 1023px) {
    height: auto;
    padding: 0;
    margin-top: -27px;
  }

  @media all and (max-width: 767px) {
    margin-top: -22px;

    ${Button} {
      padding: 16px;
    }
  }

  @media all and (max-width: 480px) {
    display: block;
  }
`

export const Card = styled.div`
  position: relative;
  border-radius: ${rem(32)};
  padding: ${rem(32)};
  border-radius: 40px;
  box-shadow: 0 24px 40px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(255, 255, 255, 0.85);
  margin-top: ${rem(20)};

  [data-reach-slider-input][data-orientation="horizontal"] {
    height: 4px;
  }

  [data-reach-slider-marker][data-orientation="horizontal"] {
    width: ${rem(20)};
    height: ${rem(20)};
    background-color: transparent;
    cursor: pointer;
    margin: 0;
  }

  [data-reach-slider-track] {
    background-color: ${(props) => rgba(props.theme.colors.gray, 0.28)};
    user-select: none;

    &:active,
    &:hover {
      [data-reach-slider-range],
      [data-reach-slider-handle] {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  [data-reach-slider-handle] {
    width: 16px;
    height: 16px;
    outline: none;
    border: 0;
    box-shadow: 0 0 0 ${rem(4)} ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    transition: box-shadow ${(props) => props.theme.transition.base},
      background-color ${(props) => props.theme.transition.base};
    cursor: pointer;
    z-index: 10;

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: 0 0 0 ${rem(5)} ${(props) => props.theme.colors.white};
    }
  }

  [data-reach-slider-range] {
    background-color: ${(props) => rgba(props.theme.colors.primary, 1)};
    transition: background-color ${(props) => props.theme.transition.base};

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media all and (max-width: 767px) {
    padding: 16px;
    border-radius: 16px;
  }

  @media all and (max-width: 991px) {
    margin-top: 16px;
    margin-bottom: 20px;
  }
`

export const SliderInfo = styled.div`
  margin-bottom: ${rem(19)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fontSize.h5};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.black};
    display: flex;
    align-items: center;
  }

  svg {
    height: ${rem(16)};
  }

  span {
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  @media all and (max-width: 767px) {
    position: relative;
    z-index: 10;
    font-size: 13px;
    margin-bottom: 15px;

    span {
      width: 30px;
    }

    h4 {
      font-size: 13px;
    }
  }
`

export const Group = styled.div`
  padding-bottom: ${rem(14)};
  position: relative;

  @media all and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const Inner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Buttons = styled.div`
  margin-top: ${rem(24)};

  @media all and (min-width: 2080px) {
    > ${Row} {
      margin-left: ${rem(-24)};
      margin-right: ${rem(-24)};

      > ${Col} {
        padding-left: ${rem(24)};
        padding-right: ${rem(24)};
      }
    }
  }

  @media all and (max-width: 767px) {
    ${Button} {
      padding: 10px;

      span {
        display: none;
      }

      svg {
        height: 24px;
        margin: 0;
      }
    }
  }
`
