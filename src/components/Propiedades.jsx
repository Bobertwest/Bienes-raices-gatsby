import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import Iconos from "./Iconos"
import styled from "@emotion/styled"
import Imagen from "gatsby-image"

export const query = graphql`
  query ($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        id
        Nombre
        Precio
        Descripcion
        Habitaciones
        Wc
        Estacionamiento
        agentes {
          Nombre
          Telefono
          Email
        }
        categoria {
          Categoria
        }
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

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const Sidebar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
  .agente {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;

    p {
      margin: 0;
    }
  }
`

const Propiedades = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    Nombre,
    Precio,
    Descripcion,
    Habitaciones,
    Wc,
    Estacionamiento,
    agentes,
    Imagen: { localFile },
  } = nodes[0]

  return (
    <Layout>
      <h1>{Nombre}</h1>
      <Contenido>
        <main>
          <Imagen fluid={localFile.sharp.fluid} />
          <p>{Descripcion}</p>
        </main>
        <Sidebar>
          <p className="precio">$ {Precio}</p>
          <Iconos
            wc={Wc}
            estacionamientos={Estacionamiento}
            habitaciones={Habitaciones}
          />
          <>
            {agentes ? (
              <div className="agente">
                <h2>Vendedor:</h2>
                <p>{agentes.Nombre}</p>
                <p>Tel.: {agentes.Telefono}</p>
                <p>Email: {agentes.Email}</p>
              </div>
            ) : null}
          </>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
