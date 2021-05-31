import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import { FluidGrid } from "../../core/GlobalStyles"

import { FOOTER_COPY } from "../../helpers/const"

import Social from "../Social"

import * as S from "./styled"

const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <Grid as={FluidGrid} fluid>
        <Row middle="xs">
          <Col xs={12} sm={8}>
            <S.Disclaimer>{FOOTER_COPY}</S.Disclaimer>
          </Col>
          <Col xs={12} sm={4}>
            <Social />
          </Col>
        </Row>
      </Grid>
    </S.Wrapper>
  )
}

export default Footer
