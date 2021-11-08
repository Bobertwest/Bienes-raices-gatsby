import React from "react"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import * as heroCSS from "../css/hero.module.css"
import Encuentra from "../components/Encuentra"
import ListadoPropiedades from "../components/ListadoPropiedades"

const ImagenBackground = styled(BackgroundImage)`
  height: 600px;
`

const IndexPage = () => {
  const inicio = useInicio()
  const {
    nombre,
    contenido,
    imagen: { localFile },
  } = inicio[0]

  return (
    <Layout>
      <ImagenBackground
        tag="section"
        fluid={localFile.sharp.fluid}
        fadeIn="soft"
      >
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </ImagenBackground>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

export default IndexPage
