import React from "react"

import { useController } from "../../helpers/hooks"

import Button, { ButtonColor, ButtonSize } from "../../components/Button"
import { IconPhoto } from "../../icons"

import Upload from "./upload"
import Buttons from "./buttons"
import Controls from "./controls"

import * as S from "./styled"

const ControlBoard: React.FC = () => {
  const { scales, active } = useController()

  return (
    <S.Wrapper>
      {!scales?.[active] ? (
        <S.UploadWrapper>
          <Upload>
            <Button $color={ButtonColor.Primary} $size={ButtonSize.Lg}>
              <IconPhoto />
              Pick Photo
            </Button>
          </Upload>
        </S.UploadWrapper>
      ) : (
        <>
          <Controls />
          <Buttons />
        </>
      )}
    </S.Wrapper>
  )
}

export default ControlBoard
