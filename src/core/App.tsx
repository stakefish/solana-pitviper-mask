import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import { useMediaQuery } from "react-responsive"

import { useFaceAPI } from "../helpers/hooks"

import Layout from "./Layout"

import Main from "../components/Main"
import Section from "../components/Section"
import Card from "../components/Card"
import Footer from "../containers/Footer"
import ControlBoard from "../containers/ControlBoard"
import ArtBoard from "../containers/ArtBoard"
import Info from "../containers/Info"

import { FluidGrid } from "../core/GlobalStyles"

const App: React.FC = () => {
  const { ready, error } = useFaceAPI()
  const isMobile = useMediaQuery({ maxWidth: 1023 })

  return (
    <Layout>
      {ready ? (
        <Main style={{ backgroundImage: isMobile ? "url(images/bg_mobile.png)" : "url(images/bg_web.png)" }}>
          <Section>
            <Grid as={FluidGrid} fluid>
              <Card>
                <Row middle="md">
                  {!isMobile && (
                    <Col xs={12} md={5}>
                      <ArtBoard />
                    </Col>
                  )}
                  <Col xs={12} md={7}>
                    <Info />
                    {isMobile && <ArtBoard />}
                    <ControlBoard />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>
          <Footer />
        </Main>
      ) : null}

      {error ? <span>aw, snap!</span> : null}
    </Layout>
  )
}

export default App
