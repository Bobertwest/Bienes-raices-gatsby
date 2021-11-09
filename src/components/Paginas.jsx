import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Imagen from "gatsby-image"
import ListadoPropiedades from "./ListadoPropiedades"

export const query = graphql`
  query ($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        Nombre
        Contenido
        Imagen {
          localFile {
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const ContenidoPagina = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const Paginas = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const {
    Nombre,
    Imagen: { localFile },
    Contenido,
  } = nodes[0]

  return (
    <Layout>
      <main className="contenedor">
        <h1>{Nombre}</h1>
        <ContenidoPagina>
          <Imagen fluid={localFile.sharp.fluid} />
          <p>{Contenido}</p>
        </ContenidoPagina>
      </main>
      {Nombre === "Propiedades" && <ListadoPropiedades />}
    </Layout>
  )
}

export default Paginas
