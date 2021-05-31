import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"
import { useMediaQuery } from "react-responsive"

import { TWITTER_SHARING_URL } from "../../helpers/const"
import { useController } from "../../helpers/hooks"

import Button, { ButtonColor } from "../../components/Button"
import { IconSave, IconPhoto, IconTwitter } from "../../icons"

import Upload from "./upload"
import * as S from "./styled"

const Buttons: React.FC = () => {
  const { save } = useController()
  const isMobile = useMediaQuery({ maxWidth: 1023 })

  return (
    <S.Buttons>
      <Row middle="sm" between="sm">
        {!isMobile && (
          <Col xs={12} sm={4}>
            <Upload hideHint>
              <Button $color={ButtonColor.Bordered} $block>
                <IconPhoto />
                <span>Pick Photo</span>
              </Button>
            </Upload>
          </Col>
        )}

        <Col xs={12} sm={8}>
          <Row>
            <Col xs={6} sm={7}>
              <Button $color={ButtonColor.Primary} $block onClick={save}>
                <IconSave />
                <span>Download</span>
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
                <IconTwitter />
                <span>Tweet it</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </S.Buttons>
  )
}

export default Buttons
