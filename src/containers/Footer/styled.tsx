import styled from "styled-components"
import { rem } from "polished"

export const Wrapper = styled.footer`
  padding: ${rem(45)} 0 ${rem(40)};
  padding: 3.3vh 0;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray};

  &:empty {
    display: none;
  }

  @media all and (max-width: 480px) {
    padding: 16px 0;
  }
`

export const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
`
