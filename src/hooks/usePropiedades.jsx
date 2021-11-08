import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
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
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    id: propiedad.id,
    nombre: propiedad.Nombre,
    precio: propiedad.Precio,
    descripcion: propiedad.Descripcion,
    habitaciones: propiedad.Habitaciones,
    wc: propiedad.Wc,
    estacionamientos: propiedad.Estacionamiento,
    agentes: propiedad.agentes,
    categorias: propiedad.categoria.Categoria,
    imagen: propiedad.Imagen.localFile,
  }))
}

export default usePropiedades
