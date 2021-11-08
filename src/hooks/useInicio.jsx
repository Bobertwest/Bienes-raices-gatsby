import { useStaticQuery, graphql } from "gatsby"

const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { Nombre: { eq: "Inicio" } }) {
        nodes {
          id
          Nombre
          Contenido
          Imagen {
            localFile {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 1500
                  duotone: {
                    highlight: "#222222"
                    shadow: "#192550"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return resultado.allStrapiPaginas.nodes.map(inicio => ({
    nombre: inicio.Nombre,
    contenido: inicio.Contenido,
    imagen: inicio.Imagen,
  }))
}

export default useInicio
