import "@reach/slider/styles.css"

import React from "react"
import { useDropzone } from "react-dropzone"
import { SliderInput, SliderTrack, SliderRange, SliderHandle, SliderMarker } from "@reach/slider"
import { Row, Col } from "react-styled-flexboxgrid"

import {
  CONTROLLER_ROTATION_DEFAULT,
  CONTROLLER_ROTATION_MIN,
  CONTROLLER_ROTATION_MAX,
  CONTROLLER_SCALE_DEFAULT,
  CONTROLLER_SCALE_MIN,
  CONTROLLER_SCALE_MAX,
  CONTROLLER_SCALE_STEP
} from "../../helpers/const"

import { useController } from "../../helpers/hooks"

import Buttons from "./buttons"
import { IconPhoto, IconSize, IconAngle } from "../../icons"
import Button, { ButtonColor, ButtonSize } from "../../components/Button"

import * as S from "./styled"

const ControlBoard: React.FC = () => {
  const { angles, scales, active, rotate, scale, drop } = useController()
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: "image/*", onDrop: drop })

  const size = scales?.[active] ?? CONTROLLER_SCALE_DEFAULT
  const angle = angles?.[active] ?? CONTROLLER_ROTATION_DEFAULT

  return (
    <S.Wrapper>
      {!scales?.[active] ? (
        <S.UploadWrapper {...getRootProps()}>
          <Button $color={ButtonColor.Primary} $size={ButtonSize.Lg}>
            <IconPhoto />
            Pick Photo
          </Button>
          <input {...getInputProps()} />
          {isDragActive ? (
            <S.Hint>Drop the files here ...</S.Hint>
          ) : (
            <S.Hint>Drag 'n' drop some files here, or click to select files</S.Hint>
          )}
        </S.UploadWrapper>
      ) : (
        <>
          <S.Card>
            <S.Inner>
              <Row>
                <Col xs={12} sm={6}>
                  <S.Group>
                    <S.SliderInfo>
                      <h4>
                        <IconSize /> Size
                      </h4>
                      {size ? <span>{(size * 100).toFixed(0)}%</span> : null}
                    </S.SliderInfo>

                    <SliderInput
                      value={size}
                      min={CONTROLLER_SCALE_MIN}
                      max={CONTROLLER_SCALE_MAX}
                      step={CONTROLLER_SCALE_STEP}
                      onChange={scale}
                    >
                      <SliderTrack>
                        <SliderRange />
                        <SliderHandle />
                        <SliderMarker value={size} />
                      </SliderTrack>
                    </SliderInput>
                  </S.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <S.Group>
                    <S.SliderInfo>
                      <h4>
                        <IconAngle /> Angle
                      </h4>
                      {angle ? <span>{angle.toFixed(0)}°</span> : null}
                    </S.SliderInfo>

                    <SliderInput
                      value={angle}
                      min={CONTROLLER_ROTATION_MIN}
                      max={CONTROLLER_ROTATION_MAX}
                      onChange={rotate}
                    >
                      <SliderTrack>
                        <SliderRange />
                        <SliderHandle />
                        <SliderMarker value={angle} />
                      </SliderTrack>
                    </SliderInput>
                  </S.Group>
                </Col>
              </Row>
            </S.Inner>
          </S.Card>

          <Buttons />
        </>
      )}
    </S.Wrapper>
  )
}

export default ControlBoard
