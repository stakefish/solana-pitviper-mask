import styled, { css } from "styled-components"
import { rem } from "polished"

export enum ButtonSize {
  Xs,
  Sm,
  Md,
  Lg
}

export enum ButtonColor {
  Primary,
  Bordered,
  Transparent
}

export interface ButtonProps {
  $size?: ButtonSize
  $color?: ButtonColor
  $block?: boolean
}

const Button = styled.button<ButtonProps>`
  padding: ${rem(19)} ${rem(18)};
  border-radius: ${rem(20)};
  position: relative;
  letter-spacing: 0;
  line-height: 1;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${(props) => rem(props.theme.fontSize.lead)};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: background-color ${(props) => props.theme.transition.base},
    width ${(props) => props.theme.transition.base}, width ${(props) => props.theme.transition.base};
  appearance: none;
  cursor: pointer;
  outline: none !important;
  min-width: ${rem(60)};
  font-size: ${rem(16)};
  white-space: nowrap;

  svg {
    height: ${rem(20)};
    margin: ${rem(-7)} ${rem(12)} ${rem(-7)} ${rem(-5)};
  }

  @media all and (max-width: 767px) {
    font-size: 12px;
    padding: 12px;
    min-width: 40px;
    border-radius: 12px;
  }

  ${(props) =>
    props.$color === ButtonColor.Primary &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};

      &:hover {
        background-color: #ff4747bf;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Bordered &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.gray};
      box-shadow: inset 0 0 0 ${rem(2)} ${props.theme.colors.gray};

      &:hover {
        background-color: #e5e5e5;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Transparent &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.white};

      svg {
        opacity: 0.8;
      }
    `}

  ${(props) =>
    props.$size === ButtonSize.Lg &&
    css`
      font-size: ${rem(20)};
      padding: ${rem(20)} ${rem(32)};

      svg {
        height: ${rem(30)};
        margin: ${rem(-7)} ${rem(8)} ${rem(-7)} ${rem(-15)};
      }
    `}

  ${(props) =>
    props.$size === ButtonSize.Xs &&
    css`
      padding: ${rem(8)} ${rem(16)};
      font-size: ${rem(10)};
      font-weight: ${(props) => props.theme.fontWeight.bold};

      @media all and (max-width: 767px) {
        font-size: 10px;
        padding: 9px 12px;
      }
    `}

  ${(props) =>
    props.$block &&
    css`
      width: 100%;
    `}
`

export default Button
