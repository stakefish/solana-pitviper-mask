import styled from "styled-components"
import { rem } from "polished"

import Button from "../../components/Button"

interface ImageProps {
  angle?: number
  scale?: number
}

export const Image = styled.img<ImageProps>`
  cursor: move;
  display: block;
  user-drag: none;
  transform: ${(props) => props?.angle && props?.scale && `rotate(${props.angle}deg) scale(${props.scale})`};
`

export const Board = styled.div`
  border-radius: ${rem(16)};
  overflow: hidden;
  user-select: none;
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};

  ${Button} {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: 16px;

    svg {
      margin: 0;
      height: 33px;
    }
  }

  @media all and (min-width: 1024px) {
    height: 100%;
  }
`

interface BoxProps {
  $default?: boolean
}

export const Box = styled.div<BoxProps>`
  position: absolute;
  top: ${(props) => props.$default && "30%"};
  left: ${(props) => props.$default && "50%"};
`

export const Cover = styled.img`
  width: 100%;
  display: block;
  user-drag: none;
`
