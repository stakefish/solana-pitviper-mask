import styled from "styled-components"
import { rem } from "polished"
import { Row } from "react-styled-flexboxgrid"

export const Wrapper = styled.div`
  width: ${rem(565)};
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${rem(20)};

  @media all and (min-width: 1024px) {
    height: 100%;
    margin-bottom: 0;

    ${Row} {
      height: 100%;
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media all and (max-width: 280px) {
    br {
      display: none;
    }
  }
`

export const Links = styled.div`
  padding-bottom: ${rem(10)};
  font-weight: 500;

  a {
    color: ${(props) => props.theme.colors.primary};
    padding: ${rem(10)};
    white-space: nowrap;

    & + a {
      margin-left: ${rem(12)};
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media all and (max-width: 767px) {
    padding-bottom: 0;
  }
`

export const Title = styled.h1`
  margin-bottom: ${rem(20)};

  @media all and (max-width: 767px) {
    margin-bottom: 22px;
  }
`

export const Lead = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.medium};

  p {
    font-size: ${(props) => rem(props.theme.fontSize.lead)};
    margin-bottom: ${rem(28)};
  }

  @media all and (max-width: 767px) {
    font-size: 13px;
    line-height: 1.23;
  }

  @media all and (max-width: 480px) {
    p {
      margin-bottom: 20px;
    }
  }
`
