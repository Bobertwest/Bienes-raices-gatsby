/* exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
 */

const urlSlug = require('url-slug');

exports.createPages = async({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query{
      allStrapiPaginas{
        nodes{
          Nombre
          id
        }
      }
      allStrapiPropiedades{
        nodes{
          Nombre
          id
        }
      }
    }
  `)
    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors)
    }

    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug(pagina.Nombre),
            component: require.resolve('./src/components/Paginas.jsx'),
            context: {
                id: pagina.id
            }
        })
    })

    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.Nombre),
            component: require.resolve('./src/components/Propiedades.jsx'),
            context: {
                id: propiedad.id
            }
        })
    })
}