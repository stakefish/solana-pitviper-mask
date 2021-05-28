import styled from "styled-components"
import { rem } from "polished"

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

export const Board = styled.div`
  border-radius: ${rem(16)};
  overflow: hidden;
  user-select: none;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`

export const Box = styled.div`
  position: absolute;
`

export const Cover = styled.img`
  width: 100%;
  display: block;
  user-drag: none;
`
