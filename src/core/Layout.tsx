import React, { ReactNode } from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import theme from "../helpers/theme"
import { ControllerProvider } from "./Controller"
import { GlobalStyles } from "./GlobalStyles"
import { GlobalFonts } from "./GlobalFonts"

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
        <style>{GlobalFonts}</style>
      </Helmet>
      <DndProvider backend={HTML5Backend}>
        <ControllerProvider>{children}</ControllerProvider>
      </DndProvider>
    </ThemeProvider>
  )
}

export default Layout
