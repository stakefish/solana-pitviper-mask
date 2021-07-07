import React, { useCallback, useEffect } from "react"
import Draggable from "react-draggable"
import { IPoint } from "face-api.js"
import { useMediaQuery } from "react-responsive"

import {
  MASK,
  MASK_WIDTH,
  MASK_HEIGHT,
  MOBILE_MASK_WIDTH,
  MOBILE_MASK_HEIGHT,
  SCALE_FACTOR,
  FACE_DEFAULT,
  CONTROLLER_SCALE_DEFAULT,
  CONTROLLER_ROTATION_DEFAULT
} from "../../helpers/const"

import { useController } from "../../helpers/hooks"
import { detectFaceLandmarks } from "../../helpers/utils"

import Upload from "../ControlBoard/upload"
import Button, { ButtonColor, ButtonSize } from "../../components/Button"
import { IconPhoto } from "../../icons"

import { Board, Image, Cover, Box, Wrapper } from "./styled"

const ArtBoard: React.FC = () => {
  const { artboardRef, faceRef, file, masks, scales, angles, coordinates, create, select, move } = useController()
  const isMobile = useMediaQuery({ maxWidth: 1023 })

  const detect = useCallback(async () => {
    if (faceRef?.current && artboardRef?.current) {
      const { rotation, position } = await detectFaceLandmarks(faceRef.current, artboardRef.current)
      create(MASK, rotation, position)
    }
  }, [file, faceRef, artboardRef])

  const width = isMobile ? MOBILE_MASK_WIDTH : MASK_WIDTH
  const height = isMobile ? MOBILE_MASK_HEIGHT : MASK_HEIGHT

  const positionOffset = {
    x: -width / SCALE_FACTOR,
    y: -height / SCALE_FACTOR
  }

  useEffect(() => {
    if (file && file !== FACE_DEFAULT) {
      detect()
    }
  }, [file, faceRef])

  return (
    <Wrapper>
      <Board ref={artboardRef}>
        {masks?.map((mask, index) => (
          <Draggable
            key={index}
            handle="img"
            position={coordinates?.[index]}
            positionOffset={positionOffset}
            onStop={(_, point) => move(point as IPoint)}
          >
            <Box key={index}>
              <Image
                width={width}
                height={height}
                src={mask}
                angle={angles[index]}
                scale={scales[index]}
                onClick={() => select(index)}
              />
            </Box>
          </Draggable>
        ))}

        {file === FACE_DEFAULT ? (
          <Draggable handle="img" positionOffset={positionOffset} onStop={(_, point) => move(point as IPoint)}>
            <Box $default>
              <Image
                width={width}
                height={height}
                src={MASK}
                scale={CONTROLLER_SCALE_DEFAULT}
                angle={CONTROLLER_ROTATION_DEFAULT}
              />
            </Box>
          </Draggable>
        ) : null}

        {file ? <Cover src={file} ref={faceRef} /> : null}
      </Board>
      {file !== FACE_DEFAULT && isMobile && (
        <Upload hideHint>
          <Button $color={ButtonColor.Transparent} $size={ButtonSize.Lg}>
            <IconPhoto />
          </Button>
        </Upload>
      )}
    </Wrapper>
  )
}

export default ArtBoard
