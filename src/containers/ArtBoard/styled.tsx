import styled from "styled-components"
import { rem } from "polished"

import Button from "../../components/Button"

interface ImageProps {
  angle: number
  scale: number
}

export const Image = styled.img<ImageProps>`
  cursor: move;
  display: block;
  user-drag: none;
  transform: ${(props) => `rotate(${props.angle}deg) scale(${props.scale})`};
`

export const Wrapper = styled.div`
  position: relative;
  border-radius: ${rem(16)};
  overflow: hidden;

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

export const Board = styled.div`
  overflow: hidden;
  user-select: none;
  position: relative;
  width: 100%;

  @media all and (min-width: 1440px) {
    position: absolute;
    width: auto;
    left: 50%;
    top: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
  }
`

interface BoxProps {
  $default?: boolean
}

export const Box = styled.div<BoxProps>`
  position: absolute;
  z-index: 10;
  top: ${(props) => props.$default && "30%"};
  left: ${(props) => props.$default && "50%"};
`

export const Cover = styled.img`
  width: 100%;
  display: block;
  user-drag: none;
  border-radius: ${rem(16)};

  @media all and (min-width: 1440px) {
    top: 0;
    left: 0;
    right: 0;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    min-width: 100%;
  }
`
