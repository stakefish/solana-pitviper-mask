import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import { TWITTER_SHARING_URL } from "../../helpers/const"
import { useController } from "../../helpers/hooks"

import Button, { ButtonColor } from "../../components/Button"
import { IconShare, IconSave } from "../../icons"

import * as S from "./styled"

const Buttons = () => {
  const { save } = useController()

  return (
    <S.Buttons>
      <Row middle="sm" between="sm">
        <Col xs={12} sm={4}>
          <Button $color={ButtonColor.Bordered} $block onClick={save}>
            <IconSave />
            Pick Photo
          </Button>
        </Col>
        <Col xs={12} sm={8}>
          <Row>
            <Col xs={6} sm={7}>
              <Button $color={ButtonColor.Primary} $block onClick={save}>
                <IconSave />
                Download
              </Button>
            </Col>
            <Col xs={6} sm={5}>
              <Button
                $block
                $color={ButtonColor.Primary}
                as="a"
                target="_blank"
                rel="noreferrer"
                href={TWITTER_SHARING_URL}
              >
                <IconShare />
                Share
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </S.Buttons>
  )
}

export default Buttons