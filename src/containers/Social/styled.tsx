import styled from "styled-components"
import { rem } from "polished"

interface LinkProps {
  href?: string
  target?: string
}

export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${rem(-6)};

  a {
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media all and (max-width: 991px) {
    margin-right: 0;
    margin-bottom: 20px;
    justify-content: center;
  }
`

export const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(1)};
  padding: ${rem(6)};

  &:first-child {
    margin-left: 0 !important;
  }

  svg {
    margin: 0;
  }

  @media all and (max-width: 767px) {
    margin: 0 8px;
  }
`

export const Copy = styled.div`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(16)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};

  @media all and (max-width: 767px) {
    margin-bottom: 0;
    text-align: left;
  }
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 24px;
  }
`
